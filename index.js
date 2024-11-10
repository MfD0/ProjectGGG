import{g as S,a as k,b as q,c as w}from"./assets/main-BsnXccMc.js";const p=document.getElementById("scrollTopButton");window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?p.classList.add("active"):p.classList.remove("active")};p.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};const L=S();function A(e){return`
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
    `}function T(e,t){const o=document.querySelector(`.game-category[data-category="${e}"]`);if(o){const n=o.querySelector(".mask"),s=t.map(a=>A(a)).join(""),i=o.querySelector(".games-category-list");i.innerHTML=s,n.style.display="none"}}const v=k(L);function b(){Object.keys(v).forEach(e=>{const t=v[e];T(e,t)})}function M(e){const t=document.createElement("div");t.className="game-category",t.setAttribute("data-category",e);const o=document.createElement("div");o.className="category-title";const n=document.createElement("div");n.className="mask",n.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=e.toUpperCase(),o.appendChild(s);const i=document.createElement("div");i.className="games";const a=document.createElement("ul");a.className="games-category-list",i.appendChild(a);const c=document.createElement("button");return c.id=e.replace(/\s+/g,"_"),c.classList.add("see-more"),c.textContent="SEE MORE",c.addEventListener("click",$),t.appendChild(o),t.appendChild(n),t.appendChild(i),t.appendChild(c),t}function $(){window.scrollTo({top:0,behavior:"smooth"})}function B(){const e=document.querySelector(".top-games-list");L.forEach(t=>{const o=M(t);e.appendChild(o)})}//! Виклик функції при завантаженні сторінки
document.addEventListener("DOMContentLoaded",()=>{B(),b()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".category-item"),t=document.querySelector(".topGamesTitle"),o=Array.from(e).find(a=>a.textContent.trim()==="All Categories"),n=document.querySelector(".top-games-list");function s(){t.textContent.trim()==="Most Popular Games"&&(e.forEach(a=>a.classList.remove("active-category")),o.classList.add("active-category"),n.classList.remove("category-active"))}function i(){t.innerHTML="Most Popular Games",n.classList.remove("category-active"),s()}o.addEventListener("click",i),e.forEach(a=>{a.addEventListener("click",()=>{const c=a.textContent.trim().toUpperCase();if(c==="ALL CATEGORIES")i();else if(t.innerHTML=`${c} Games`,e.forEach(r=>r.classList.remove("active-category")),a.classList.add("active-category"),document.querySelectorAll(".game-category").forEach(r=>{r.style.display=r.getAttribute("data-category").toUpperCase()===c?"block":"none"}),n.classList.add("category-active"),window.innerWidth<=768){const r=document.getElementsByTagName("aside")[0];r.style.display="none"}})}),document.querySelectorAll(".see-more").forEach(a=>{a.addEventListener("click",()=>{const c=a.id.replace("see-more-","").replace("_"," "),r=q(c);t.innerHTML=`${c} Games`,document.querySelectorAll(".game-category").forEach(u=>{u.style.display="none"}),n.innerHTML="",r.forEach(u=>{const C=G(u);n.appendChild(C)}),n.classList.add("category-active")})}),s()});function G(e){const t=document.createElement("li");return t.id=e.id,t.className="listener",t.setAttribute("onclick",`openModal('${e.id}')`),t.innerHTML=`
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
    `,t}window.openModal=D;const l=document.querySelector(".modal"),h=l.querySelector(".modal-body"),x=l.querySelector(".modal-close"),d=l.querySelector(".add-to-list"),N=l.querySelector(".under-btn-text");async function D(e){try{const t=await w(e);l.setAttribute("data-game",JSON.stringify(t)),O(t),l.classList.add("open"),document.body.style.overflow="hidden",E(H(t))}catch(t){console.log("Error loading game details",t)}}function O(e){const t=document.querySelector(".game-cover"),o=document.querySelector(".game-title"),n=document.querySelector(".game-author"),s=document.querySelector(".game-description"),i=document.querySelector(".marketplace-logo.steam"),a=document.querySelector(".marketplace-logo.trailer");t.src=e.image,t.alt=e.title,o.textContent=e.title,n.textContent=`by ${e.author}`,s.textContent=e.description||"No description available",i.href=e.links.steam||"#",a.href=e.links.Trailer||"#"}function H(e){return(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(o=>o.id===e.id)}function E(e){const t=e?"Remove from shopping list":"Add to shopping list";d.textContent=t,N.textContent=e?"Removed from shopping list":"Added to shopping list",d.classList.add("show-text"),setTimeout(()=>{d.classList.remove("show-text")},4e3)}function I(e){e.stopPropagation();let t=JSON.parse(localStorage.getItem("shoppingList"))||[];const o=JSON.parse(l.getAttribute("data-game")),n=t.some(s=>s.id===o.id);n?t=t.filter(s=>s.id!==o.id):(t.push(o),console.log(t)),localStorage.setItem("shoppingList",JSON.stringify(t)),E(!n)}d.addEventListener("click",I);function g(){l.classList.remove("open"),document.body.style.overflow=""}x.addEventListener("click",g);h.addEventListener("click",function(e){e.target===h&&g()});document.addEventListener("keydown",function(e){e.key==="Escape"&&g()});window.openAboutWindow=R;const m=document.querySelectorAll(".modal")[1],f=m.querySelector(".modal-body"),J=m.querySelector(".modal-close");function R(){m.classList.add("open"),document.body.style.overflow="hidden"}function y(){m.classList.remove("open"),document.body.style.overflow=""}J.addEventListener("click",y);f.addEventListener("click",function(e){e.target===f&&y()});document.addEventListener("keydown",function(e){e.key==="Escape"&&y()});
//# sourceMappingURL=index.js.map
