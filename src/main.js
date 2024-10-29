import { getAllCategories } from './js/infoFromDB.js';

// Витягаємо всі категорії з бази даних
const categories = getAllCategories();

// Знаходимо контейнер для списку категорій
const categoriesList = document.querySelector('.categories-list');

//Додаємо all categoriеs
const categoryItem = document.createElement('li');
categoryItem.classList.add('category-item');
categoryItem.textContent = "All Categories";
categoriesList.appendChild(categoryItem);


// Додаємо категорії у список
if (categories.length > 0) {
  categories.forEach(category => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('category-item');
    categoryItem.textContent = category;
    categoriesList.appendChild(categoryItem);
  });
} else {
  const emptyMessage = document.createElement('li');
  emptyMessage.textContent = "No categories available";
  categoriesList.appendChild(emptyMessage);
}




