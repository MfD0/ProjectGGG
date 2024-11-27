import { getGameByID } from './infoFromDB.js';

document.addEventListener("DOMContentLoaded", async () => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const blurOverlay = document.getElementById("blur-overlay");
    const redirectLoginButton = document.getElementById("redirect-login");
    const shoppingListContainer = document.getElementById("shopping-list-container");
    const emptyCartMessage = document.querySelector(".empty-cart");

    if (!activeUser) {
        blurOverlay.classList.remove("hidden");

        redirectLoginButton.addEventListener("click", () => {
            window.location.href = "../auth.html";
        });
    } else {
        blurOverlay.classList.add("hidden");

        const cartKey = `cart_${activeUser.username}`;
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        if (cart.length === 0) {
            emptyCartMessage.classList.remove("hidden");
        } else {
            emptyCartMessage.classList.add("hidden");

            const gameDetails = await Promise.all(cart.map(id => getGameByID(id)));
            renderShoppingList(gameDetails, shoppingListContainer, cartKey);
        }
    }
});

function renderShoppingList(games, container, cartKey) {
    container.innerHTML = "";

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

    // Додаємо обробники видалення до всіх кнопок
    container.querySelectorAll(".remove-game-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const gameId = button.dataset.id;
            removeGameFromCart(gameId, cartKey, container);
        });
    });
}

function removeGameFromCart(gameId, cartKey, container) {
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const updatedCart = cart.filter(id => id !== gameId);

    localStorage.setItem(cartKey, JSON.stringify(updatedCart));

    // Видаляємо картку гри з DOM
    const gameElement = container.querySelector(`.remove-game-btn[data-id="${gameId}"]`).closest(".shopping-list-item");
    if (gameElement) {
        gameElement.remove();
    }

    // Показуємо повідомлення про порожній кошик, якщо кошик спорожнів
    if (updatedCart.length === 0) {
        document.querySelector(".empty-cart").classList.remove("hidden");
    }
}
