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
        updateShoppingListButton(isGameInShoppingList(game));
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
    trailerLink.href = game.links.Trailer || '#';
}

// Функція для перевірки, чи є гра в списку покупок
function isGameInShoppingList(game) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    return shoppingList.some(item => item.id === game.id);
}

// Функція для оновлення кнопки "Add to Shopping List"
function updateShoppingListButton(isGameInList) {
    const buttonText = isGameInList ? 'Remove from shopping list' : 'Add to shopping list';
    addToShoppingListButton.textContent = buttonText;

    // Додаємо клас, щоб показати текст праворуч
    underButtonText.textContent = isGameInList ? 'Removed from shopping list' : 'Added to shopping list';
    addToShoppingListButton.classList.add('show-text');

    // Видаляємо клас після 1.5 секунд, щоб текст зник
    setTimeout(() => {
        addToShoppingListButton.classList.remove('show-text');
    }, 4000);
}



// Обробник для додавання/видалення гри зі списку покупок
function handleShoppingListButtonClick(event) {
    event.stopPropagation();
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const storedGame = JSON.parse(modal.getAttribute('data-game'));

    const isGameInList = shoppingList.some(item => item.id === storedGame.id);

    if (isGameInList) {
        shoppingList = shoppingList.filter(item => item.id !== storedGame.id);
    } else {
        shoppingList.push(storedGame);
        console.log(shoppingList);
    }

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    updateShoppingListButton(!isGameInList);
}

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
