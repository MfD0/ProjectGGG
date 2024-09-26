import game from '../database/database.json' assert { type: 'json' };


function getGameByID(id, game) {
    return game.find(game => game.id === id) || "Game not found";
}

function getGameByCategory(category, game) {
    return game.filter(game => game.tags.includes(category)) || "No Game found for this category";
}

// Функція для отримання всіх унікальних категорій з бази даних
export function getAllCategories() {
  const categories = new Set();  // Використовуємо Set для унікальності
  game.forEach(game => game.tags.forEach(tag => categories.add(tag)));  // Додаємо всі теги
  return Array.from(categories);  // Повертаємо масив унікальних категорій
}





// Використання функцій
console.log(getGameByID("1", game));

console.log(getGameByCategory("Action", game));

console.log(getAllCategories(game));