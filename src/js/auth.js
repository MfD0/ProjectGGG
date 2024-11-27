document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        console.log("Кнопку 'Увійти' нажато");
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            console.log("Запит на базу даних");
            const response = await fetch('https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/database/users.js');
            
            console.log("тіло try");
            // https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/database/users.js <= шлях для GitHub Pages
            // ../database/users.json <= шлях для локального
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
