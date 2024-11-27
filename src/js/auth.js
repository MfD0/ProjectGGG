document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        console.log("Кнопку 'Увійти' нажато");
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // https://raw.githubusercontent.com/MfD0/ProjectGGG/main/src/database/users.json <= шлях для GitHub Pages
        // ../database/users.json <= шлях для локального
        const USERS_JSON_URL = '../database/users.json';

        try {
            console.log("Запит на базу даних");
            const response = await fetch(USERS_JSON_URL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            console.log("тіло try");
            
            const users = await response.json();

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('activeUser', JSON.stringify(user));
                window.location.href = 'index.html';
            } else {
                alert('Невірний логін або пароль');
            }
        } catch (error) {
            console.error('Помилка при авторизації:', error);
        }
    });
});