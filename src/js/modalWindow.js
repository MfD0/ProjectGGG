import { getGameByID } from './infoFromDB.js';

window.openModal = openModal;

const modal = document.querySelector('.modal');
const backdrop = modal.querySelector('.modal-body');
const closeModalButton = modal.querySelector('.modal-close');
const addToShoppingListButton = modal.querySelector('.add-to-list');
const underButtonText = modal.querySelector('.under-btn-text');
const hideCardButton = modal.querySelector('.hide-card'); // Кнопка приховування

const HIDDEN_CARDS_KEY = 'hiddenCards';

// Завантажуємо приховані картки з localStorage
function getHiddenCards() {
    return JSON.parse(localStorage.getItem(HIDDEN_CARDS_KEY)) || [];
}

// Зберігаємо приховані картки в localStorage
function saveHiddenCards(hiddenCards) {
    localStorage.setItem(HIDDEN_CARDS_KEY, JSON.stringify(hiddenCards));
}

// Оновлюємо статус картки
function toggleHiddenStatus(gameId) {
    const hiddenCards = getHiddenCards();

    // Якщо картка вже прихована, видаляємо її зі списку
    if (hiddenCards.includes(gameId)) {
        const updatedHiddenCards = hiddenCards.filter((id) => id !== gameId);
        saveHiddenCards(updatedHiddenCards);
        return false; // Повертаємо статус "видимий"
    }

    // Інакше додаємо картку до списку прихованих
    hiddenCards.push(gameId);
    saveHiddenCards(hiddenCards);
    return true; // Повертаємо статус "прихований"
}

async function openModal(id) {
    try {
        const game = await getGameByID(id);
        modal.setAttribute('data-game', JSON.stringify(game));
        renderGameDetails(game);

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';

        const activeUser = JSON.parse(localStorage.getItem("activeUser"));

        if (activeUser) {
            const isInList = isGameInShoppingList(game);
            updateShoppingListButton(isInList);
            addToShoppingListButton.style.display = "inline-block";

            // Відображаємо кнопку тільки для адмінів
            if (activeUser.role === 'admin') {
                hideCardButton.style.display = "inline-block";
            } else {
                hideCardButton.style.display = "none";
            }
        } else {
            addToShoppingListButton.style.display = "none";
            hideCardButton.style.display = "none"; // Приховуємо кнопку для неавторизованих
        }
    } catch (error) {
        console.error('Error loading game details:', error);
    }
}

function renderGameDetails(game) {
    const gameCover = document.querySelector('.game-cover');
    const gameTitle = document.querySelector('.game-title');
    const gameAuthor = document.querySelector('.game-author');
    const gameDescription = document.querySelector('.game-description');
    const steamLink = document.querySelector('.marketplace-logo.steam');
    const trailerLink = document.querySelector('.marketplace-logo.trailer');

    gameCover.src = game.image;
    gameCover.alt = game.title;
    gameTitle.textContent = game.title;
    gameAuthor.textContent = `by ${game.author}`;
    gameDescription.textContent = game.description || "No description available";

    steamLink.href = game.links.steam || '#';
    trailerLink.href = game.links.trailer || '#';
}

function isGameInShoppingList(game) {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    const shoppingList = JSON.parse(localStorage.getItem(`cart_${activeUser.id}`)) || [];
    return shoppingList.includes(game.id);
}

function updateShoppingListButton(isGameInList) {
    addToShoppingListButton.textContent = isGameInList ? 'Remove from shopping list' : 'Add to shopping list';
    underButtonText.textContent = isGameInList ? 'Removed from shopping list' : 'Added to shopping list';
    addToShoppingListButton.classList.add('show-text');
    setTimeout(() => {
        addToShoppingListButton.classList.remove('show-text');
    }, 4000);
}

function handleShoppingListButtonClick(event) {
    event.stopPropagation();

    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (!activeUser) {
        alert("You must log in to add games to your shopping list.");
        window.location.href = 'auth.html';
        return;
    }

    const game = JSON.parse(modal.getAttribute('data-game'));
    const cartKey = `cart_${activeUser.username}`;
    const shoppingList = JSON.parse(localStorage.getItem(cartKey)) || [];
    const isGameInList = shoppingList.includes(game.id);

    if (isGameInList) {
        const updatedList = shoppingList.filter(id => id !== game.id);
        localStorage.setItem(cartKey, JSON.stringify(updatedList));
    } else {
        shoppingList.push(game.id);
        localStorage.setItem(cartKey, JSON.stringify(shoppingList));
    }

    updateShoppingListButton(!isGameInList);
}

function handleHideCardClick() {
    const game = JSON.parse(modal.getAttribute('data-game'));
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

    if (activeUser && activeUser.role === 'admin') {
        // Адміністратор змінює статус
        const isNowHidden = toggleHiddenStatus(game.id);
        alert(`The game "${game.title}" is now ${isNowHidden ? "hidden" : "visible"} for users.`);
    }
}

addToShoppingListButton.addEventListener('click', handleShoppingListButtonClick);
hideCardButton.addEventListener('click', handleHideCardClick);

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
