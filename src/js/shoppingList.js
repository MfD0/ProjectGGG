document.addEventListener("DOMContentLoaded", function () {
    const shoppingListContainer = document.querySelector("#shopping-list-container");
    const emptyCartMessage = document.querySelector(".empty-cart");

    // Отримання даних з Local Storage
    let games = JSON.parse(localStorage.getItem("shoppingList")) || [];

    if (games.length === 0) {
        emptyCartMessage.style.display = "block"; // Показує повідомлення про порожній кошик
    } else {
        emptyCartMessage.style.display = "none"; // Приховує повідомлення про порожній кошик

        games.forEach((game, index) => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");

            gameCard.innerHTML = `
                <div class="game-info">
                    <button class="remove-button" data-index="${index}">&times;</button>
                    <img src="${game.image}" alt="${game.title}" class="game-image">
                    <div class="game-details">
                        <h3 class="game-title">${game.title}</h3>
                        <p class="game-description">${game.description}</p>
                    </div>
                </div>
            `;

            shoppingListContainer.appendChild(gameCard);
        });
    }

    // Обробник видалення гри зі списку без перезавантаження сторінки
    shoppingListContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-button")) {
            const index = e.target.getAttribute("data-index");
            games.splice(index, 1);
            localStorage.setItem("shoppingList", JSON.stringify(games));
            e.target.closest(".game-card").remove(); // Видаляє елемент зі сторінки
            if (games.length === 0) {
                emptyCartMessage.style.display = "block"; // Показує повідомлення про порожній кошик
            }
        }
    });
});
