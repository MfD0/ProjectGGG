document.addEventListener("DOMContentLoaded", function () {
    const shoppingListContainer = document.querySelector("#shopping-list-container");

    // Отримання даних з Local Storage
    let games = JSON.parse(localStorage.getItem("shoppingList")) || [];

    if (games.length === 0) {
        shoppingListContainer.innerHTML = '<p>This page is empty, add some items and proceed to order.</p>';
    } else {
        games.forEach((game, index) => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");

            gameCard.innerHTML = `
                <div class="game-info">
                    <img src="${game.image}" alt="${game.title}">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <button class="remove-button" data-index="${index}">Remove</button>
                </div>
            `;

            shoppingListContainer.appendChild(gameCard);
        });
    }

    // Обробник видалення гри зі списку
    shoppingListContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-button")) {
            const index = e.target.getAttribute("data-index");
            games.splice(index, 1);
            localStorage.setItem("shoppingList", JSON.stringify(games));
            location.reload(); // Перезавантаження сторінки для оновлення списку
        }
    });
});
