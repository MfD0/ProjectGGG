
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



