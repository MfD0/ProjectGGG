import { getAllCategories, getBooksByTags } from './infoFromDB.js';

// Витягаємо всі категорії з бази даних
const categories = getAllCategories();

// !!!!
// Функція для створення HTML для карточки гри
function createGameCard(game) {

    return `
    <li id="${game.id}" class="listener" onclick="openModal('${game.id}')">
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
    </li>
    `;
}

// Функція для завантаження ігор у відповідну категорію
function loadGames(categoryName, games) {
    const categoryElement = document.querySelector(`.game-category[data-category="${categoryName}"]`);
    if (categoryElement) {
        const loader = categoryElement.querySelector('.mask');
        const gamesHTML = games
            .map((game) => createGameCard(game))
            .join('');

        const gamesListElement = categoryElement.querySelector('.games-category-list');
        gamesListElement.innerHTML = gamesHTML;
        // Приховуємо лоадер, коли карточки завантажені
        loader.style.display = 'none';
    }
}

// Функція для отримання та відображення ігор по категоріям
const topGames = getBooksByTags(categories);

export function fetchAndDisplayGames() {
    // Перебираємо всі категорії у topGames
    Object.keys(topGames).forEach(categoryName => {
        // Отримуємо список ігор для поточної категорії
        const games = topGames[categoryName];

        // Завантажуємо ігри у відповідний контейнер для цієї категорії
        loadGames(categoryName, games);
    });
}


// Функція для створення HTML контейнера категорії
function createCategoryContainer(categoryName) {
    console.log("createCategoryContainer");
    const container = document.createElement('div');
    container.className = 'game-category';
    container.setAttribute('data-category', categoryName);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'category-title';

    const loaderDiv = document.createElement('div');
    loaderDiv.className = 'mask';
    loaderDiv.innerHTML = '<div class="loader"></div>';

    const titleSpan = document.createElement('span');
    titleSpan.textContent = categoryName.toUpperCase();
    titleDiv.appendChild(titleSpan);

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'games';
    const ul = document.createElement('ul');
    ul.className = 'games-category-list';
    gamesDiv.appendChild(ul);

    const button = document.createElement('button');
    button.id = categoryName.replace(/\s+/g, '_');
    button.classList.add('see-more');
    button.textContent = 'SEE MORE';

    // Встановлення обробника події через addEventListener
    button.addEventListener('click', scrollFuc);

    container.appendChild(titleDiv);
    container.appendChild(loaderDiv);
    container.appendChild(gamesDiv);
    container.appendChild(button);

    return container;
}

function scrollFuc() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Функція для отримання категорій та додавання контейнерів до DOM
export function fetchAndDisplayCategories() {
    const topGamesList = document.querySelector('.top-games-list');
    console.log("fetchAndDisplayCategories");

    // Припускаємо, що змінна `categories` вже існує і містить масив категорій
    categories.forEach(category => {
        const categoryContainer = createCategoryContainer(category); // Використовуємо категорію напряму
        topGamesList.appendChild(categoryContainer);
    });
}








//! Виклик функції при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayCategories();
    fetchAndDisplayGames();
});


