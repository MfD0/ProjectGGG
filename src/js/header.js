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

// Функція для відображення списку категорій при натисканні
// на кнопку меню ("сендвіч") на маленьких екранах 
function displayCategoriesList() {
    const aside = document.getElementsByTagName("aside")[0];
    if (aside.style.display === 'block') {
      aside.style.display = 'none';
    } else {
      aside.style.display = 'block';
    }
}

const aside = document.getElementsByTagName('aside')[0];

const hamburger = document.querySelector('.hamburger-image');
hamburger.addEventListener('click', displayCategoriesList);

// Перевірка, чи елемент 'aside' (список категорій) присутній на сторінці
// Інакше, "сендвіч" не потрібно відображати
if (aside != null) {
    // Спостереження за тим, чи відображається іконка меню ("сендвіч")
    // Якщо при розширенні екрану список категорій не відображено,
    // а іконка меню ("сендвіч") сщезла, то потрібно відобразити цей список
    const resizewatcher = new ResizeObserver(entries => {
    for (const entry of entries) {
        if (entry.contentRect.width == 0) {
        aside.style.display = 'block';
        } else {
        aside.style.display = 'none';
        }
    }
    });
    resizewatcher.observe(hamburger);
} else {
    hamburger.style.display = 'none';
}



