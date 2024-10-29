document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const homeLink = document.querySelector(".home");
    const shoppingListLink = document.querySelector(".shopping-list");

    // if (currentPath.includes("index.html")) {
    //     homeLink.classList.add("active");
    // } else if (currentPath.includes("shopping-list.html")) {
    //     shoppingListLink.classList.add("active");
    // }

    if (currentPath.includes("shopping-list.html")) {
        shoppingListLink.classList.add("active");
    }
    else {
        homeLink.classList.add("active");
    }
});