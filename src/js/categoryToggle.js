// categoryToggle.js

document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-item");
    const seeMoreButtons = document.querySelectorAll(".see-more");
    const categoriesContainer = document.querySelector(".top-games-container");
    const mainTitle = document.querySelector(".topGamesTitle");

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.textContent.trim().toUpperCase();

            // Update title to selected category
            mainTitle.innerHTML = `${selectedCategory} Games`;

            // Highlight selected category in aside
            categoryButtons.forEach((btn) => btn.classList.remove("active-category"));
            button.classList.add("active-category");

            // Show only the selected category
            const categoryElements = document.querySelectorAll(".game-category");
            categoryElements.forEach((category) => {
                category.style.display = category.getAttribute("data-category").toUpperCase() === selectedCategory ? "block" : "none";
            });
        });
    });

    seeMoreButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const categoryName = e.target.id.replace("_", " ").toUpperCase();

            // Update title to selected category
            mainTitle.innerHTML = `${categoryName} Games`;

            // Highlight selected category in aside
            categoryButtons.forEach((btn) => {
                if (btn.textContent.trim().toUpperCase() === categoryName) {
                    btn.classList.add("active-category");
                } else {
                    btn.classList.remove("active-category");
                }
            });

            // Show only the selected category
            const categoryElements = document.querySelectorAll(".game-category");
            categoryElements.forEach((category) => {
                category.style.display = category.getAttribute("data-category").toUpperCase() === categoryName ? "block" : "none";
            });
        });
    });
});
