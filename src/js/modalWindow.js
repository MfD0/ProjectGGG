// Імпорт функцій (наприклад, якщо у вас є спеціальна бібліотека для повідомлень)
import { getGameByID } from './infoFromDB.js';

window.openModal = openModal;

const modal = document.querySelector('.modal');
const backdrop = modal.querySelector('.modal-body');
const closeModalButton = modal.querySelector('.modal-close');
const addToShoppingListButton = modal.querySelector('.add-to-list');
const underButtonText = modal.querySelector('.under-btn-text');

// Функція для відкриття модального вікна з деталями гри
async function openModal(id) {
    try {
        const game = await getGameByID(id); // Отримуємо гру за ID
        modal.setAttribute('data-game', JSON.stringify(game));
        renderGameDetails(game);

        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Блокуємо прокрутку фону

        // Перевіряємо, чи користувач залогінений
        const isLoggedIn = !!localStorage.getItem("activeUser");

        if (isLoggedIn) {
            const isInList = await isGameInShoppingList(game);
            updateShoppingListButton(isInList);
            addToShoppingListButton.style.display = "inline-block"; // Показуємо кнопку
        } else {
            addToShoppingListButton.style.display = "none"; // Ховаємо кнопку
        }
    } catch (error) {
        console.log('Error loading game details', error);
    }
}


// Функція для відображення деталей гри у модальному вікні
function renderGameDetails(game) {
    const gameCover = document.querySelector('.game-cover');
    const gameTitle = document.querySelector('.game-title');
    const gameAuthor = document.querySelector('.game-author');
    const gameDescription = document.querySelector('.game-description');
    const steamLink = document.querySelector('.marketplace-logo.steam');
    const trailerLink = document.querySelector('.marketplace-logo.trailer');

    // Встановлюємо дані в елементи HTML
    gameCover.src = game.image;
    gameCover.alt = game.title;
    gameTitle.textContent = game.title;
    gameAuthor.textContent = `by ${game.author}`;
    gameDescription.textContent = game.description || "No description available";

    // Встановлюємо посилання для Steam та трейлера
    steamLink.href = game.links.steam || '#';
    trailerLink.href = game.links.trailer || '#';
}

// Функція для перевірки, чи є гра в списку покупок у активного користувача
async function isGameInShoppingList(game) {
    const activeUserId = localStorage.getItem('activeUser');
    if (!activeUserId) {
        alert("Ви повинні увійти до системи, щоб додавати ігри до корзини.");
        window.location.href = 'auth.html';
        return false;
    }

    const response = await fetch('../database/users.json');
    const users = await response.json();
    const user = users.find(user => user.id === parseInt(activeUserId));

    if (!user) return false;
    return user.cart.includes(game.id);
}

// Функція для оновлення кнопки "Add to Shopping List"
function updateShoppingListButton(isGameInList) {
    const buttonText = isGameInList ? 'Remove from shopping list' : 'Add to shopping list';
    addToShoppingListButton.textContent = buttonText;

    // Додаємо клас, щоб показати текст праворуч
    underButtonText.textContent = isGameInList ? 'Removed from shopping list' : 'Added to shopping list';
    addToShoppingListButton.classList.add('show-text');

    // Видаляємо клас після 4 секунд, щоб текст зник
    setTimeout(() => {
        addToShoppingListButton.classList.remove('show-text');
    }, 4000);
}

// Обробник для додавання/видалення гри зі списку покупок
async function handleShoppingListButtonClick(event) {
    event.stopPropagation();

    const activeUserId = localStorage.getItem('activeUser');
    if (!activeUserId) {
        alert("Ви повинні увійти до системи, щоб додавати ігри до корзини.");
        window.location.href = 'auth.html';
        return;
    }

    const response = await fetch('../database/users.json');
    const users = await response.json();
    const userIndex = users.findIndex(user => user.id === parseInt(activeUserId));

    if (userIndex === -1) {
        alert("Помилка: Користувач не знайдений.");
        return;
    }

    const user = users[userIndex];
    const game = JSON.parse(modal.getAttribute('data-game'));
    const isGameInList = user.cart.includes(game.id);

    if (isGameInList) {
        user.cart = user.cart.filter(id => id !== game.id);
    } else {
        user.cart.push(game.id);
    }

    // Оновлюємо файл users.json
    await saveUsersToJSON(users);
    updateShoppingListButton(!isGameInList);
}

// Функція для збереження змін у users.json
async function saveUsersToJSON(users) {
    await fetch('../database/users.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(users),
    });
}

// Додаємо обробник до кнопки
addToShoppingListButton.addEventListener('click', handleShoppingListButtonClick);

// Функція для закриття модального вікна
function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Відновлюємо прокрутку фону
}

closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
        closeModal();
    }
});

// Закриваємо модальне вікно при натисканні на Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
