import { func2, func1 } from './infoFromDB';


// Функція для створення HTML для карточок ігор
function createGameCard(game, index) {
    const mobileVisible = index === 0 ? 'mobile-visible' : '';
    const tabletVisible = index < 3 ? 'tablet-visible' : '';
    const desktopVisible = index < 5 ? 'desktop-visible' : '';
    const lastChild = index === 4 ? 'lastGametemp' : '';
    return `

  <li id="${game.id}" class="listener" onclick="openModal('${game.id}')">
        <div class="game-category-card ${mobileVisible} ${tabletVisible} ${desktopVisible} ${lastChild}">
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

// Функція для завантаження книг у відповідну категорію
function loadBooks(categoryName, books) {
    const categoryElement = document.querySelector(
        `.book-category[data-category="${categoryName}"]`
    );
    if (categoryElement) {
        const loader = categoryElement.querySelector('.mask');
        const booksHTML = books
            .map((book, index) => createBookCard(book, index))
            .join('');

        const booksListElement = categoryElement.querySelector('.books-category-list');
        booksListElement.innerHTML = booksHTML;
        // Приховуємо лоадер, коли картки завантажені
        loader.style.display = 'none';
    }
}


// Функція для отримання та відображення книг по категоріям
export function fetchAndDisplayBooks() {
    fetchAllTopBooks()
        .then(categories => {
            categories.forEach(category => {
                loadBooks(category.list_name, category.books);
            });
        })
        .catch(error =>
            console.error('Помилка при завантаженні категорій книг:', error)
        );
}

// !!!!!!!!!!!!!!!!!!!!

// Функція для створення HTML контейнера категорії
function createCategoryContainer(categoryName) {
    const container = document.createElement('div');
    container.className = 'book-category';
    container.setAttribute('data-category', categoryName);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'category-title';

    const loaderDiv = document.createElement('div');
    loaderDiv.className = 'mask';
    loaderDiv.innerHTML = '<div class="loader"></div>';

    const titleSpan = document.createElement('span');
    titleSpan.textContent = categoryName.toUpperCase();
    titleDiv.appendChild(titleSpan);

    const booksDiv = document.createElement('div');
    booksDiv.className = 'books';
    const ul = document.createElement('ul');
    ul.className = 'books-category-list';
    booksDiv.appendChild(ul);

    const button = document.createElement('button');
    // Встановлюємо ID, значенням якого буде назва категорії без пробілів
    button.id = `see-more-${categoryName.replace(/\s+/g, '_').toLowerCase()}`;
    button.classList.add('see-more');
    button.textContent = 'SEE MORE';

    // Встановлення обробника події через addEventListener
    button.addEventListener('click', scrollFuc);

    container.appendChild(titleDiv);
    container.appendChild(loaderDiv);
    container.appendChild(booksDiv);
    container.appendChild(button);

    return container;
}


function scrollFuc() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Функція для отримання категорій та додавання контейнерів до DOM
export function fetchAndDisplayCategories() {
    const bestSellersList = document.querySelector('.best-sellers-list');

    fetchBooksCategory()
        .then(categories => {
            categories.forEach(category => {
                const categoryContainer = createCategoryContainer(category.list_name);
                bestSellersList.appendChild(categoryContainer);
            });
        })
        .catch(error => console.error('Error loading books:', error));
}


// Виклик функції при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayCategories();
    fetchAndDisplayBooks();
});
