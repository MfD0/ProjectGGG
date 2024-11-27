function updateAuthUI() {
    const authLink = document.getElementById("authLink");
    const authImage = document.getElementById("authImage");
    const isLoggedIn = !!localStorage.getItem("activeUser");

      console.log("update login");

    if (isLoggedIn) {
        authLink.textContent = "LOGOUT"; // Змінюємо текст на LOGOUT
        authLink.href = "#"; // Вимикаємо перехід
        authImage.querySelector("img").src = "./img/logout.svg"; // Змінюємо іконку
        authLink.addEventListener("click", logoutUser);
    } else {
        authLink.textContent = "LOGIN"; // Змінюємо текст на LOGIN
        authLink.href = "auth.html"; // Посилання на сторінку авторизації
        authImage.querySelector("img").src = "./img/login.svg"; // Відновлюємо іконку
        authLink.removeEventListener("click", logoutUser);
    }
}

function logoutUser(event) {
    event.preventDefault();
    localStorage.removeItem("activeUser"); // Видаляємо ID користувача
    alert("Ви успішно вийшли з системи.");
    window.location.reload(); // Перезавантажуємо сторінку
}

// Виклик функції при завантаженні сторінки
document.addEventListener("DOMContentLoaded", updateAuthUI);
window.addEventListener("load", updateAuthUI);
