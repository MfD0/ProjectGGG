import { getAllCategories } from './js/infoFromDB.js';

// Витягаємо всі категорії з бази даних
const categories = getAllCategories();

// Знаходимо контейнер для списку категорій
const categoriesList = document.querySelector('.categories-list');

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



// Get the scrollTop button
const scrollTopButton = document.getElementById("scrollTopButton");

// Show or hide the button when scrolling
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopButton.classList.add("active");
  } else {
    scrollTopButton.classList.remove("active");
  }
};

// Scroll to the top when clicking the button
scrollTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};