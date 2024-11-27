import { getAllCategories, getGamesByCategory } from './js/infoFromDB.js';
import GlowEffectsManager from './js/glow-effects.js';

console.log("main.js");

// Ініціалізуємо менеджер ефектів світіння
const glowManager = new GlowEffectsManager({
  glowSize: 200,
  minDistance: 300,
  effectsPerSection: 3,
  sectionHeight: 1000,
  containerSelector: 'body'
});

// Витягаємо всі категорії з бази даних
const categories = getAllCategories();

// Знаходимо контейнер для списку категорій
const categoriesList = document.querySelector('.categories-list');

// Створення заголовка
const mainTitle = document.querySelector(".topGamesTitle");
// Контейнер для списку ігор
const topGamesList = document.querySelector(".top-games-list");

// Додаємо "All Categories" у список
const allCategoriesItem = document.createElement('li');
allCategoriesItem.classList.add('category-item');
allCategoriesItem.textContent = "All Categories";
categoriesList.appendChild(allCategoriesItem);

// Додаємо обробник події для кнопки "All Categories"
allCategoriesItem.addEventListener("click", resetCategories);

// Додаємо категорії у список і обробник події для кожної
if (categories.length > 0) {
  categories.forEach(category => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('category-item');
    categoryItem.textContent = category;
    categoriesList.appendChild(categoryItem);

    // Обробник події для кожної категорії
    categoryItem.addEventListener("click", () => {
      displayCategoryGames(category);
    });
  });
} else {
  const emptyMessage = document.createElement('li');
  emptyMessage.textContent = "No categories available";
  categoriesList.appendChild(emptyMessage);
}

// Функція для відображення ігор за категорією
function displayCategoryGames(categoryName) {
  const games = getGamesByCategory(categoryName);

  // Оновлення заголовка на назву вибраної категорії
  mainTitle.innerHTML = `${categoryName} Games`;

  // Сховати всі блоки категорій
  document.querySelectorAll(".game-category").forEach((category) => {
    category.style.display = "none";
  });

  // Очищення списку ігор перед додаванням нових карток
  topGamesList.innerHTML = "";

  // Додаємо ігри у вигляді карток у список .top-games-list
  games.forEach(game => {
    const gameCard = createGameCard(game);
    topGamesList.appendChild(gameCard);
  });

  // Додаємо клас category-active для стилів карток
  topGamesList.classList.add("category-active");

  // Оновлюємо ефекти світіння після зміни контенту
  setTimeout(() => {
    glowManager.updateEffects();
  }, 100);
}

// Функція для скидання до початкового стану ("All Categories")
function resetCategories() {
  location.reload();
}

// Функція для перевірки на активність "All Categories"
function checkAndActivateAllCategories() {
  document.querySelectorAll(".category-item").forEach((btn) => btn.classList.remove("active-category"));
  allCategoriesItem.classList.add("active-category");
}

// Функція для створення HTML для картки гри
function createGameCard(game) {
  const li = document.createElement('li');
  li.id = game.id;
  li.className = 'listener';
  li.setAttribute('onclick', `openModal('${game.id}')`);

  li.innerHTML = `
        <div class="game-category-card">
            <div class="overlay-div">
                <img class="gameByCategory-img" src="${game.image}" alt="${game.title}">
                <p class="overlay-txt">quick view</p>
            </div>
            <div class="game-category-details">
                <h3 class="game-category-title">${game.title}</h3>
                <p class="game-category-author">${game.author}</p>
            </div>
        </div>
    `;
  return li;
}

// Оновлюємо ефекти світіння при завантаженні сторінки
window.addEventListener('load', () => {
  glowManager.updateEffects();
});

// Оновлюємо ефекти при зміні розміру вікна
window.addEventListener('resize', () => {
  clearTimeout(window.resizeTimer);
  window.resizeTimer = setTimeout(() => {
    glowManager.updateEffects();
  }, 250);
});



// !!shopping list part

console.log("shopping list part");
import { getGameByID } from './js/infoFromDB.js';

document.addEventListener("DOMContentLoaded", async () => {
  console.log("shoppingList.js is active");
  const activeUser = JSON.parse(localStorage.getItem("activeUser")); // Отримуємо активного користувача
  const blurOverlay = document.getElementById("blur-overlay");
  const redirectLoginButton = document.getElementById("redirect-login");

  // Якщо користувач не залогінений
  if (!activeUser) {
    blurOverlay.classList.remove("hidden");
    redirectLoginButton.addEventListener("click", () => {
      window.location.href = "./auth.html"; // Перенаправляємо на сторінку авторизації
    });
    return; // Зупиняємо виконання коду
  }

  // Якщо користувач залогінений
  blurOverlay.classList.add("hidden");

  const cartKey = `cart_${activeUser.username}`;
  const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Отримуємо кошик користувача

  const shoppingListContainer = document.getElementById("shopping-list-container");
  const emptyCartMessage = document.querySelector(".empty-cart");

  if (cart.length === 0) {
    // Якщо кошик порожній
    emptyCartMessage.classList.remove("hidden");
  } else {
    emptyCartMessage.classList.add("hidden");

    // Завантажуємо дані про ігри
    const gameDetails = await Promise.all(cart.map(id => getGameByID(id)));
    renderShoppingList(gameDetails, shoppingListContainer, cartKey);
  }
});

function renderShoppingList(games, container, cartKey) {
  container.innerHTML = ""; // Очищаємо контейнер

  games.forEach((game) => {
    const item = document.createElement("div");
    item.classList.add("shopping-list-item");

    item.innerHTML = `
            <div class="game-image-container">
                <img src="${game.image}" alt="${game.title}" class="shopping-list-image">
            </div>
            <div class="shopping-list-details">
                <h3 class="shopping-list-title">${game.title}</h3>
                <p class="shopping-list-author">by ${game.author}</p>
                <p class="shopping-list-description">${game.description || "No description available"}</p>
            </div>
            <button class="remove-game-btn" data-id="${game.id}">&times;</button>
        `;

    container.appendChild(item);
  });

  // Обробники для кнопок видалення
  container.querySelectorAll(".remove-game-btn").forEach(button => {
    button.addEventListener("click", (event) => {
      const gameId = button.dataset.id;
      removeGameFromCart(gameId, cartKey, container);
    });
  });
}

function removeGameFromCart(gameId, cartKey, container) {
  const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Отримуємо кошик
  const updatedCart = cart.filter(id => id !== gameId); // Видаляємо вибрану гру

  localStorage.setItem(cartKey, JSON.stringify(updatedCart)); // Оновлюємо localStorage

  const gameElement = container.querySelector(`.remove-game-btn[data-id="${gameId}"]`).closest(".shopping-list-item");
  if (gameElement) {
    gameElement.remove(); // Видаляємо гру з DOM
  }

  // Якщо кошик спорожнів
  if (updatedCart.length === 0) {
    document.querySelector(".empty-cart").classList.remove("hidden");
  }
}
