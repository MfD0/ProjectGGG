import game from '../database/database.json' assert { type: 'json' };


function getGameByID(id) {
  return game.find(game => game.id === id) || "Game not found";
}

function getGameByCategory(category) {
  return game.filter(game => game.tags.includes(category)) || "No Game found for this category";
}

//! Функція для отримання всіх унікальних категорій з бази даних
export function getAllCategories() {
  const categories = new Set();  // Використовуємо Set для унікальності
  game.forEach(game => game.tags.forEach(tag => categories.add(tag)));  // Додаємо всі теги
  return Array.from(categories);  // Повертаємо масив унікальних категорій
}




//! Функція для отримання масиву імен усіх ігор
function getAllGameTitles() {
  return game.map(item => item.title); // Повертає масив назв усіх ігор
}

//! Функція для вибору ігор по категоріях (по 5 ігор кожної категорії)
function getBooksByTags(game, tags) {
  // Об'єкт для зберігання результату по кожній категорії
  const booksByTags = {};

  // Проходимо по кожній категорії з переданого списку
  tags.forEach(tag => {
    // Фільтруємо книги, які мають поточний тег (tag)
    const booksForTag = game.filter(book => book.tags.includes(tag));

    // Зберігаємо не більше 5 книг для кожної категорії
    booksByTags[tag] = booksForTag.slice(0, 5);
  });

  // Повертаємо результат
  return booksByTags;
}

// Приклад використання
const data = [/* JSON дані про книги */];
const tags = ["Action", "Adventure", "RPG", "Horror"];

const result = getBooksByTags(game, tags);
console.log(result);
