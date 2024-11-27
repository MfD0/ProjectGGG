import"./assets/styles-DmVcBJp-.js";import{g as l}from"./assets/main-YD3E8UqL.js";document.addEventListener("DOMContentLoaded",async()=>{console.log("shoppingList.js is active");const i=JSON.parse(localStorage.getItem("activeUser")),t=document.getElementById("blur-overlay"),o=document.getElementById("redirect-login");if(!i){t.classList.remove("hidden"),o.addEventListener("click",()=>{window.location.href="./auth.html"});return}t.classList.add("hidden");const e=`cart_${i.username}`,s=JSON.parse(localStorage.getItem(e))||[],a=document.getElementById("shopping-list-container"),n=document.querySelector(".empty-cart");if(s.length===0)n.classList.remove("hidden");else{n.classList.add("hidden");const r=await Promise.all(s.map(c=>l(c)));d(r,a,e)}});function d(i,t,o){t.innerHTML="",i.forEach(e=>{const s=document.createElement("div");s.classList.add("shopping-list-item"),s.innerHTML=`
            <div class="game-image-container">
                <img src="${e.image}" alt="${e.title}" class="shopping-list-image">
            </div>
            <div class="shopping-list-details">
                <h3 class="shopping-list-title">${e.title}</h3>
                <p class="shopping-list-author">by ${e.author}</p>
                <p class="shopping-list-description">${e.description||"No description available"}</p>
            </div>
            <button class="remove-game-btn" data-id="${e.id}">&times;</button>
        `,t.appendChild(s)}),t.querySelectorAll(".remove-game-btn").forEach(e=>{e.addEventListener("click",s=>{const a=e.dataset.id;m(a,o,t)})})}function m(i,t,o){const s=(JSON.parse(localStorage.getItem(t))||[]).filter(n=>n!==i);localStorage.setItem(t,JSON.stringify(s));const a=o.querySelector(`.remove-game-btn[data-id="${i}"]`).closest(".shopping-list-item");a&&a.remove(),s.length===0&&document.querySelector(".empty-cart").classList.remove("hidden")}
//# sourceMappingURL=shopping-list.js.map
