document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        console.log("Кнопку 'Увійти' нажато");
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('../database/users.json');
            const users = await response.json();

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'index.html';
            } else {
                alert('Невірний логін або пароль');
            }
        } catch (error) {
            console.error('Помилка при авторизації:', error);
        }
    });
});
