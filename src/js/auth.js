import { getUsers, addUser } from './api.js';

// Авторизація
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const users = await getUsers();
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem("activeUser", user.id);
            alert("Успішний вхід!");
            window.location.href = "index.html";
        } else {
            alert("Невірний логін або пароль.");
        }
    } catch (error) {
        console.error("Помилка авторизації:", error);
    }
});

// Реєстрація
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    try {
        await addUser({ username, password, cart: [] });
        alert("Успішна реєстрація!");
        window.location.href = "./auth.html";
    } catch (error) {
        console.error("Помилка реєстрації:", error);
    }
});
