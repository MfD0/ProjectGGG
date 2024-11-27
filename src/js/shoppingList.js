import { getGameByID } from './infoFromDB.js';

document.addEventListener("DOMContentLoaded", async () => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser")); // Отримуємо активного користувача
    const blurOverlay = document.getElementById("blur-overlay"); // Елемент заблюрення
    const redirectLoginButton = document.getElementById("redirect-login"); // Кнопка переходу до авторизації
    const shoppingListContainer = document.getElementById("shopping-list-container"); // Контейнер списку покупок
    const emptyCartMessage = document.querySelector(".empty-cart"); // Повідомлення про порожній кошик

    if (!activeUser) {
        // Якщо користувач не залогінений, показуємо заблюрення і повідомлення
        blurOverlay.classList.remove("hidden");
        redirectLoginButton.addEventListener("click", () => {
            window.location.href = "./auth.html"; // Оновлено шлях для GitHub Pages
        });
    } else {
        // Якщо користувач залогінений, ховаємо заблюрення
        blurOverlay.classList.add("hidden");

        // Формуємо ключ для зберігання даних кошика
        const cartKey = `cart_${activeUser.username}`;
        const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Отримуємо кошик користувача

        if (cart.length === 0) {
            // Показуємо повідомлення про порожній кошик
            emptyCartMessage.classList.remove("hidden");
        } else {
            emptyCartMessage.classList.add("hidden");

            // Завантажуємо дані про ігри з бази та відображаємо їх
            const gameDetails = await Promise.all(cart.map(id => getGameByID(id)));
            renderShoppingList(gameDetails, shoppingListContainer, cartKey);
        }
    }
});

function renderShoppingList(games, container, cartKey) {
    container.innerHTML = ""; // Очищаємо контейнер перед відображенням нового списку

    games.forEach((game) => {
        const item = document.createElement("div");
        item.classList.add("shopping-list-item");

        // Вміст картки гри
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

        container.appendChild(item); // Додаємо елемент до контейнера
    });

    // Додаємо обробники видалення до кнопок
    container.querySelectorAll(".remove-game-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const gameId = button.dataset.id; // Отримуємо ID гри
            removeGameFromCart(gameId, cartKey, container); // Видаляємо гру
        });
    });
}

function removeGameFromCart(gameId, cartKey, container) {
    const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Отримуємо кошик користувача
    const updatedCart = cart.filter(id => id !== gameId); // Оновлюємо кошик, видаляючи вибрану гру

    localStorage.setItem(cartKey, JSON.stringify(updatedCart)); // Зберігаємо оновлений кошик

    // Видаляємо елемент гри з DOM
    const gameElement = container.querySelector(`.remove-game-btn[data-id="${gameId}"]`).closest(".shopping-list-item");
    if (gameElement) {
        gameElement.remove();
    }

    // Показуємо повідомлення про порожній кошик, якщо кошик спорожнів
    if (updatedCart.length === 0) {
        document.querySelector(".empty-cart").classList.remove("hidden");
    }
}
