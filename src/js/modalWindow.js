import { getGameByID } from './infoFromDB.js';

window.openModal = openModal;

const modal = document.querySelector('.modal');
const backdrop = modal.querySelector('.modal-body');
const closeModalButton = modal.querySelector('.modal-close');
const addToShoppingListButton = modal.querySelector('.add-to-list');
const underButtonText = modal.querySelector('.under-btn-text');

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
        } else {
            addToShoppingListButton.style.display = "none";
        }
    } catch (error) {
        console.log('Error loading game details', error);
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
        alert("Ви повинні увійти до системи, щоб додавати ігри до корзини.");
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

addToShoppingListButton.addEventListener('click', handleShoppingListButtonClick);

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
