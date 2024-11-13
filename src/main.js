import { getAllCategories, getGamesByCategory } from './js/infoFromDB.js';
console.log("main.js");
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
  const games = getGamesByCategory(categoryName); // Отримуємо ігри для вибраної категорії

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
}

// Функція для скидання до початкового стану ("All Categories")
function resetCategories() {
  location.reload()
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
