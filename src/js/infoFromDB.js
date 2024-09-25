import game from '../database/database.json' assert { type: 'json' };


function getGameByID(id, game) {
    return game.find(game => game.id === id) || "Game not found";
}

function getGameByCategory(category, game) {
    return game.filter(game => game.tags.includes(category)) || "No Game found for this category";
}

function getAllCategories(game) {
    const categories = new Set();  // Set автоматично усуває дублікати
    game.forEach(game => game.tags.forEach(tag => categories.add(tag)));
    return Array.from(categories);
}




// Використання функцій
console.log(getGameByID("1", game));

console.log(getGameByCategory("Action", game));

console.log(getAllCategories(game));