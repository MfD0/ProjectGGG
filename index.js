import"./assets/styles-DmVcBJp-.js";import{a as B,b as I,c as T,g as G}from"./assets/main-0ETqkUua.js";const v=document.getElementById("scrollTopButton");window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?v.classList.add("active"):v.classList.remove("active")};v.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};const q=B(),f=I(q);function x(e){return`
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
    `}function A(e,t){const o=document.querySelector(`.game-category[data-category="${e}"]`);if(o){const n=o.querySelector(".mask"),s=t.map(c=>x(c)).join(""),i=o.querySelector(".games-category-list");i.innerHTML=s,n.style.display="none"}}function O(){Object.keys(f).forEach(e=>{const t=f[e];A(e,t)})}function N(e){const t=document.createElement("div");t.className="game-category",t.setAttribute("data-category",e);const o=document.createElement("div");o.className="category-title";const n=document.createElement("div");n.className="mask",n.innerHTML='<div class="loader"></div>';const s=document.createElement("span");s.textContent=e.toUpperCase(),o.appendChild(s);const i=document.createElement("div");i.className="games";const c=document.createElement("ul");c.className="games-category-list",i.appendChild(c);const a=document.createElement("button");return a.id=e.replace(/\s+/g,"_"),a.classList.add("see-more"),a.textContent="SEE MORE",a.addEventListener("click",U),t.appendChild(o),t.appendChild(n),t.appendChild(i),t.appendChild(a),t}function U(e){const o=e.target.id.replace(/_/g," ");document.querySelectorAll(".category-item").forEach(a=>{a.classList.remove("active-category"),a.textContent.trim()===o.trim()&&a.classList.add("active-category")}),document.querySelectorAll(".glow-effect").forEach(a=>a.remove());const i=f[o];A(o,i),new GlowEffectsManager().updateEffects()}function D(){const e=document.querySelector(".top-games-list");q.forEach(t=>{const o=N(t);e.appendChild(o)})}document.addEventListener("DOMContentLoaded",()=>{D(),O()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".category-item"),t=document.querySelector(".topGamesTitle"),o=Array.from(e).find(c=>c.textContent.trim()==="All Categories"),n=document.querySelector(".top-games-list");function s(){t.textContent.trim()==="Most Popular Games"&&(e.forEach(c=>c.classList.remove("active-category")),o.classList.add("active-category"),n.classList.remove("category-active"))}function i(){t.innerHTML="Most Popular Games",n.classList.remove("category-active"),s()}o.addEventListener("click",i),e.forEach(c=>{c.addEventListener("click",()=>{const a=c.textContent.trim().toUpperCase();if(a==="ALL CATEGORIES")i();else if(t.innerHTML=`${a} Games`,e.forEach(l=>l.classList.remove("active-category")),c.classList.add("active-category"),document.querySelectorAll(".game-category").forEach(l=>{l.style.display=l.getAttribute("data-category").toUpperCase()===a?"block":"none"}),n.classList.add("category-active"),window.innerWidth<=768){const l=document.getElementsByTagName("aside")[0];l.style.display="none"}})}),document.querySelectorAll(".see-more").forEach(c=>{c.addEventListener("click",()=>{const a=c.id.replace("see-more-","").replace("_"," "),l=T(a);t.innerHTML=`${a} Games`,document.querySelectorAll(".game-category").forEach(p=>{p.style.display="none"}),n.innerHTML="",l.forEach(p=>{const $=J(p);n.appendChild($)}),n.classList.add("category-active")})}),s()});function J(e){const t=document.createElement("li");return t.id=e.id,t.className="listener",t.setAttribute("onclick",`openModal('${e.id}')`),t.innerHTML=`
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
    `,t}window.openModal=F;const r=document.querySelector(".modal"),S=r.querySelector(".modal-body"),H=r.querySelector(".modal-close"),d=r.querySelector(".add-to-list"),W=r.querySelector(".under-btn-text");async function F(e){try{const t=await G(e);if(r.setAttribute("data-game",JSON.stringify(t)),R(t),r.classList.add("open"),document.body.style.overflow="hidden",JSON.parse(localStorage.getItem("activeUser"))){const n=_(t);M(n),d.style.display="inline-block"}else d.style.display="none"}catch(t){console.log("Error loading game details",t)}}function R(e){const t=document.querySelector(".game-cover"),o=document.querySelector(".game-title"),n=document.querySelector(".game-author"),s=document.querySelector(".game-description"),i=document.querySelector(".marketplace-logo.steam"),c=document.querySelector(".marketplace-logo.trailer");t.src=e.image,t.alt=e.title,o.textContent=e.title,n.textContent=`by ${e.author}`,s.textContent=e.description||"No description available",i.href=e.links.steam||"#",c.href=e.links.trailer||"#"}function _(e){const t=JSON.parse(localStorage.getItem("activeUser"));return(JSON.parse(localStorage.getItem(`cart_${t.id}`))||[]).includes(e.id)}function M(e){d.textContent=e?"Remove from shopping list":"Add to shopping list",W.textContent=e?"Removed from shopping list":"Added to shopping list",d.classList.add("show-text"),setTimeout(()=>{d.classList.remove("show-text")},4e3)}function P(e){e.stopPropagation();const t=JSON.parse(localStorage.getItem("activeUser"));if(!t){alert("Ви повинні увійти до системи, щоб додавати ігри до корзини."),window.location.href="auth.html";return}const o=JSON.parse(r.getAttribute("data-game")),n=`cart_${t.username}`,s=JSON.parse(localStorage.getItem(n))||[],i=s.includes(o.id);if(i){const c=s.filter(a=>a!==o.id);localStorage.setItem(n,JSON.stringify(c))}else s.push(o.id),localStorage.setItem(n,JSON.stringify(s));M(!i)}d.addEventListener("click",P);function L(){r.classList.remove("open"),document.body.style.overflow=""}H.addEventListener("click",L);S.addEventListener("click",function(e){e.target===S&&L()});document.addEventListener("keydown",function(e){e.key==="Escape"&&L()});window.openAboutWindow=K;const m=document.querySelectorAll(".modal")[1],k=m.querySelector(".modal-body"),j=m.querySelector(".modal-close");function K(){m.classList.add("open"),document.body.style.overflow="hidden"}function h(){m.classList.remove("open"),document.body.style.overflow=""}j.addEventListener("click",h);k.addEventListener("click",function(e){e.target===k&&h()});document.addEventListener("keydown",function(e){e.key==="Escape"&&h()});window.openFeedbackWindow=Q;const u=document.querySelectorAll(".modal")[2],w=u.querySelector(".modal-body"),z=u.querySelector(".modal-close");function Q(){u.classList.add("open"),document.body.style.overflow="hidden"}function g(){u.classList.remove("open"),document.body.style.overflow=""}z.addEventListener("click",g);w.addEventListener("click",function(e){e.target===w&&g()});document.addEventListener("keydown",function(e){e.key==="Escape"&&g()});const V=document.getElementById("feedback-form");V.addEventListener("submit",function(e){e.preventDefault(),alert("Thank you for your feedback!"),g()});window.openReviewsWindow=Y;const y=document.querySelectorAll(".modal")[3],C=y.querySelector(".modal-body"),X=y.querySelector(".modal-close");function Y(){y.classList.add("open"),document.body.style.overflow="hidden"}function E(){y.classList.remove("open"),document.body.style.overflow=""}X.addEventListener("click",E);C.addEventListener("click",function(e){e.target===C&&E()});document.addEventListener("keydown",function(e){e.key==="Escape"&&E()});function Z(){const e=document.getElementById("authLink"),t=document.getElementById("authImage"),o=!!localStorage.getItem("activeUser");console.log("update login"),o?(e.textContent="LOGOUT",e.href="#",t.querySelector("img").src="./img/logout.svg",e.addEventListener("click",b)):(e.textContent="LOGIN",e.href="auth.html",t.querySelector("img").src="./img/login.svg",e.removeEventListener("click",b))}function b(e){e.preventDefault(),localStorage.removeItem("activeUser"),alert("Ви успішно вийшли з системи."),window.location.reload()}document.addEventListener("DOMContentLoaded",Z);
//# sourceMappingURL=index.js.map
