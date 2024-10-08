import game from '../database/database.json' assert { type: 'json' };


function getGameByID(id, game) {
  return game.find(game => game.id === id) || "Game not found";
}

function getGameByCategory(category, game) {
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
export function getTopGamesByCategory(Allcategories) {

  const gameList = getAllGameTitles();
  
  const categories = new Set(Allcategories); // Використовуємо Set для унікальності
  const result = []; // Масив для збереження результату


  // Проходимо по кожній категорії
  categories.forEach(category => {
    const gamesInCategory = gameList.filter(game => game.tags && game.tags.includes(category)); // Фільтруємо ігри по категорії

    const topGames = gamesInCategory.slice(0, 5); // Беремо тільки перші 5 ігор
    result.push({
      category, // Назва категорії
      games: topGames // Список топ-5 ігор для категорії
    });
  });

  return result; // Повертаємо масив об'єктів {category, games}
}
