const API_URL = "http://projectggg.byethost17.com/api/users.php";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                cart: [], // Початкова порожня корзина
            }),
        });

        if (response.ok) {
            alert("Реєстрація успішна! Перенаправляємо на сторінку входу.");
            window.location.href = "../auth.html";
        } else {
            const errorData = await response.json();
            alert(`Помилка реєстрації: ${errorData.message || "Невідома помилка"}`);
        }
    } catch (error) {
        console.error("Помилка під час реєстрації:", error);
        alert("Не вдалося зареєструватися. Спробуйте пізніше.");
    }
});
