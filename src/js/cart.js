function checkAuth() {
    const activeUser = localStorage.getItem("activeUser");
    if (!activeUser) {
        alert("Ви маєте увійти до системи, щоб додавати ігри до корзини.");
        window.location.href = "auth.html";
        return false;
    }
    return true;
}
