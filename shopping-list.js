import"./assets/styles-DmVcBJp-.js";import{g as l}from"./assets/main-Do_Byl3y.js";document.addEventListener("DOMContentLoaded",async()=>{const i=JSON.parse(localStorage.getItem("activeUser")),t=document.getElementById("blur-overlay"),n=document.getElementById("redirect-login");if(!i){t.classList.remove("hidden"),n.addEventListener("click",()=>{window.location.href="./auth.html"});return}t.classList.add("hidden");const e=`cart_${i.username}`,s=JSON.parse(localStorage.getItem(e))||[],a=document.getElementById("shopping-list-container"),o=document.querySelector(".empty-cart");if(s.length===0)o.classList.remove("hidden");else{o.classList.add("hidden");const r=await Promise.all(s.map(c=>l(c)));d(r,a,e)}});function d(i,t,n){t.innerHTML="",i.forEach(e=>{const s=document.createElement("div");s.classList.add("shopping-list-item"),s.innerHTML=`
            <div class="game-image-container">
                <img src="${e.image}" alt="${e.title}" class="shopping-list-image">
            </div>
            <div class="shopping-list-details">
                <h3 class="shopping-list-title">${e.title}</h3>
                <p class="shopping-list-author">by ${e.author}</p>
                <p class="shopping-list-description">${e.description||"No description available"}</p>
            </div>
            <button class="remove-game-btn" data-id="${e.id}">&times;</button>
        `,t.appendChild(s)}),t.querySelectorAll(".remove-game-btn").forEach(e=>{e.addEventListener("click",s=>{const a=e.dataset.id;m(a,n,t)})})}function m(i,t,n){const s=(JSON.parse(localStorage.getItem(t))||[]).filter(o=>o!==i);localStorage.setItem(t,JSON.stringify(s));const a=n.querySelector(`.remove-game-btn[data-id="${i}"]`).closest(".shopping-list-item");a&&a.remove(),s.length===0&&document.querySelector(".empty-cart").classList.remove("hidden")}
//# sourceMappingURL=shopping-list.js.map
