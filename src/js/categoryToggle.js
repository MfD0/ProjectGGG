// categoryToggle.js
import { getGamesByCategory } from './infoFromDB';

document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-item");
    const mainTitle = document.querySelector(".topGamesTitle");
    const allCategoriesButton = Array.from(categoryButtons).find(btn => btn.textContent.trim() === "All Categories");
    const topGamesList = document.querySelector(".top-games-list"); // список, в який додаються картки ігор

    function checkAndActivateAllCategories() {
        if (mainTitle.textContent.trim() === "Most Popular Games") {
            categoryButtons.forEach((btn) => btn.classList.remove("active-category"));
            allCategoriesButton.classList.add("active-category");
            topGamesList.classList.remove("category-active"); // Видаляємо клас, якщо активна "All Categories"
        }
    }

    function resetCategories() {
    

        // Встановити заголовок за замовчуванням
        mainTitle.innerHTML = "Most Popular Games";

        // Видалити клас category-active, щоб стилі для карток не застосовувалися
        topGamesList.classList.remove("category-active");

        // Очистити список карток, щоб видалити всі додані ігри
        //topGamesList.innerHTML = "";

        // Активувати кнопку "All Categories" і зняти активний стиль з інших
        checkAndActivateAllCategories();
    }

    // Обробка натискання на кнопку "All Categories"
    allCategoriesButton.addEventListener("click", resetCategories);

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.textContent.trim().toUpperCase();

            if (selectedCategory === "ALL CATEGORIES") {
                resetCategories();
            } else {
                // Оновлення заголовку до вибраної категорії
                mainTitle.innerHTML = `${selectedCategory} Games`;

                // Додати активний стиль до вибраної категорії та видалити з "All Categories"
                categoryButtons.forEach((btn) => btn.classList.remove("active-category"));
                button.classList.add("active-category");

                // Показати лише вибрану категорію, а інші категорії приховати
                document.querySelectorAll(".game-category").forEach((category) => {
                    category.style.display = category.getAttribute("data-category").toUpperCase() === selectedCategory ? "block" : "none";
                });

                // Додаємо клас category-active для стилів карток
                topGamesList.classList.add("category-active");

                // Додав перевірку на те, чи ширина екрану є малою (<= 768 пікселів),
                // щоб ховати список категорій після його натиснення
                if (window.innerWidth <= 768) {
                    const aside = document.getElementsByTagName('aside')[0];
                    aside.style.display = 'none';
                }
            }
        });
    });

    // Додаємо обробник події для всіх кнопок "See More"
    document.querySelectorAll(".see-more").forEach(button => {
        button.addEventListener("click", () => {
            const categoryName = button.id.replace("see-more-", "").replace("_", " "); // Отримуємо ім'я категорії з id кнопки
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
        });
    });

    // Перевірка заголовку при завантаженні сторінки
    checkAndActivateAllCategories();
});

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
