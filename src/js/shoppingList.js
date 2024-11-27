import { getGameByID } from './infoFromDB.js';

console.log("shlst.js start");

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


console.log("shlst.js end");