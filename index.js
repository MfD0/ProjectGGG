import{g as m,a as p}from"./assets/main-BnJq9LHN.js";const i=document.getElementById("scrollTopButton");window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?i.classList.add("active"):i.classList.remove("active")};i.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};const d=m();function u(e){return`
    <li id="${e.id}" class="listener" onclick="openModal('${e.id}')">
        <div class="game-category-card">
            <div class="overlay-div">
                <img class="gameByCategory-img" src="${e.image}" alt="${e.title}">
                <p class="overlay-txt">quick view</p>
            </div>
            <div class="game-category-details">
                <h3 class="game-category-title">${e.title}</h3>
                <p class="game-category-author">${e.author}</p>
            </div>
        </div>
    </li>
    `}function g(e,t){const o=document.querySelector(`.game-category[data-category="${e}"]`);if(o){const a=o.querySelector(".mask"),s=t.map(l=>u(l)).join(""),c=o.querySelector(".games-category-list");c.innerHTML=s,a.style.display="none"}}const r=p(d);function y(){Object.keys(r).forEach(e=>{const t=r[e];g(e,t)})}function v(e){console.log("createCategoryContainer");const t=document.createElement("div");t.className="game-category",t.setAttribute("data-category",e);const o=document.createElement("div");o.className="category-title";const a=document.createElement("div");a.className="mask",a.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=e.toUpperCase(),o.appendChild(s);const c=document.createElement("div");c.className="games";const l=document.createElement("ul");l.className="games-category-list",c.appendChild(l);const n=document.createElement("button");return n.id=e.replace(/\s+/g,"_"),n.classList.add("see-more"),n.textContent="SEE MORE",n.addEventListener("click",C),t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(n),t}function C(){window.scrollTo({top:0,behavior:"smooth"})}function h(){const e=document.querySelector(".top-games-list");console.log("fetchAndDisplayCategories"),d.forEach(t=>{const o=v(t);e.appendChild(o)})}//! Виклик функції при завантаженні сторінки
document.addEventListener("DOMContentLoaded",()=>{h(),y()});
//# sourceMappingURL=index.js.map
