import { getUsers } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const activeUserId = localStorage.getItem("activeUser");
    const blurOverlay = document.getElementById("blur-overlay");
    const redirectLoginButton = document.getElementById("redirect-login");



    if (!activeUserId) {
        // Показуємо заблюрення сторінки
        blurOverlay.classList.remove("hidden");

        redirectLoginButton.addEventListener("click", () => {
            window.location.href = "../auth.html";
        });
    
    } else {
        // Ховаємо заблюрення, якщо користувач залогінений
        blurOverlay.classList.add("hidden");
    }

    try {
        const users = await getUsers();
        const user = users.find((u) => u.id === parseInt(activeUserId));

        if (user && user.cart.length > 0) {
            renderShoppingList(user.cart);
        } else {
            document.getElementById("shoppingList").textContent = "Ваша корзина порожня.";
        }
    } catch (error) {
        console.error("Помилка завантаження корзини:", error);
    }
});

function renderShoppingList(cart) {
    const shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";
    cart.forEach((gameId) => {
        const item = document.createElement("div");
        item.textContent = `Гра ID: ${gameId}`;
        shoppingList.appendChild(item);
    });
}



