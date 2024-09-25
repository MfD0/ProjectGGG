import books from '../database/database.json' assert { type: 'json' };


function getBookByTitle(title, books) {
    return books.find(book => book.title.toLowerCase() === title.toLowerCase()) || "Book not found";
}

function getBooksByCategory(category, books) {
    return books.filter(book => book.tags.includes(category)) || "No books found for this category";
}

function getAllCategories(books) {
    const categories = new Set();  // Set автоматично усуває дублікати
    books.forEach(book => book.tags.forEach(tag => categories.add(tag)));
    return Array.from(categories);
}




// Використання функцій
console.log(getBookByTitle("Assassin's Creed", books));

console.log(getBooksByCategory("Action", books));

console.log(getAllCategories(books));