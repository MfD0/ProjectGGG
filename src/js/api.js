const API_URL = "http://projectggg.byethost17.com/api/users.php";

// Отримати всіх користувачів
export async function getUsers() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Не вдалося завантажити дані користувачів.");
    }
    return await response.json();
}

// Додати користувача
export async function addUser(user) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error("Не вдалося створити користувача.");
    }
    return await response.json();
}

// Оновити дані користувача
export async function updateUser(user) {
    const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error("Не вдалося оновити дані користувача.");
    }
    return await response.json();
}
