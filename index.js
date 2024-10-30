import{g as y,a as p,b as v}from"./assets/main-2z2ko6NU.js";const d=document.getElementById("scrollTopButton");window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?d.classList.add("active"):d.classList.remove("active")};d.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};const g=y();function C(e){return`
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
    `}function h(e,t){const o=document.querySelector(`.game-category[data-category="${e}"]`);if(o){const c=o.querySelector(".mask"),i=t.map(a=>C(a)).join(""),n=o.querySelector(".games-category-list");n.innerHTML=i,c.style.display="none"}}const m=p(g);function E(){Object.keys(m).forEach(e=>{const t=m[e];h(e,t)})}function L(e){const t=document.createElement("div");t.className="game-category",t.setAttribute("data-category",e);const o=document.createElement("div");o.className="category-title";const c=document.createElement("div");c.className="mask",c.innerHTML='<div class="loader"></div>';const i=document.createElement("span");i.textContent=e.toUpperCase(),o.appendChild(i);const n=document.createElement("div");n.className="games";const a=document.createElement("ul");a.className="games-category-list",n.appendChild(a);const s=document.createElement("button");return s.id=e.replace(/\s+/g,"_"),s.classList.add("see-more"),s.textContent="SEE MORE",s.addEventListener("click",f),t.appendChild(o),t.appendChild(c),t.appendChild(n),t.appendChild(s),t}function f(){window.scrollTo({top:0,behavior:"smooth"})}function T(){const e=document.querySelector(".top-games-list");g.forEach(t=>{const o=L(t);e.appendChild(o)})}//! Виклик функції при завантаженні сторінки
document.addEventListener("DOMContentLoaded",()=>{T(),E()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".category-item"),t=document.querySelector(".topGamesTitle"),o=Array.from(e).find(a=>a.textContent.trim()==="All Categories"),c=document.querySelector(".top-games-list");function i(){t.textContent.trim()==="Most Popular Games"&&(e.forEach(a=>a.classList.remove("active-category")),o.classList.add("active-category"),c.classList.remove("category-active"))}function n(){t.innerHTML="Most Popular Games",c.classList.remove("category-active"),i()}o.addEventListener("click",n),e.forEach(a=>{a.addEventListener("click",()=>{const s=a.textContent.trim().toUpperCase();s==="ALL CATEGORIES"?n():(t.innerHTML=`${s} Games`,e.forEach(r=>r.classList.remove("active-category")),a.classList.add("active-category"),document.querySelectorAll(".game-category").forEach(r=>{r.style.display=r.getAttribute("data-category").toUpperCase()===s?"block":"none"}),c.classList.add("category-active"))})}),document.querySelectorAll(".see-more").forEach(a=>{a.addEventListener("click",()=>{const s=a.id.replace("see-more-","").replace("_"," "),r=v(s);t.innerHTML=`${s} Games`,document.querySelectorAll(".game-category").forEach(l=>{l.style.display="none"}),c.innerHTML="",r.forEach(l=>{const u=A(l);c.appendChild(u)}),c.classList.add("category-active")})}),i()});function A(e){const t=document.createElement("li");return t.id=e.id,t.className="listener",t.setAttribute("onclick",`openModal('${e.id}')`),t.innerHTML=`
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
    `,t}
//# sourceMappingURL=index.js.map
