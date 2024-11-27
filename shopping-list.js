import"./assets/styles-Czy6Rkti.js";import{g as r}from"./assets/updateLogin-1qROxN_8.js";console.log("shlst.js start");document.addEventListener("DOMContentLoaded",async()=>{console.log("shoppingList.js is active");const i=JSON.parse(localStorage.getItem("activeUser")),t=document.getElementById("blur-overlay"),n=document.getElementById("redirect-login");if(!i){t.classList.remove("hidden"),n.addEventListener("click",()=>{window.location.href="./auth.html"});return}t.classList.add("hidden");const e=`cart_${i.username}`,s=JSON.parse(localStorage.getItem(e))||[],o=document.getElementById("shopping-list-container"),a=document.querySelector(".empty-cart");if(s.length===0)a.classList.remove("hidden");else{a.classList.add("hidden");const l=await Promise.all(s.map(c=>r(c)));d(l,o,e)}});function d(i,t,n){t.innerHTML="",i.forEach(e=>{const s=document.createElement("div");s.classList.add("shopping-list-item"),s.innerHTML=`
            <div class="game-image-container">
                <img src="${e.image}" alt="${e.title}" class="shopping-list-image">
            </div>
            <div class="shopping-list-details">
                <h3 class="shopping-list-title">${e.title}</h3>
                <p class="shopping-list-author">by ${e.author}</p>
                <p class="shopping-list-description">${e.description||"No description available"}</p>
            </div>
            <button class="remove-game-btn" data-id="${e.id}">&times;</button>
        `,t.appendChild(s)}),t.querySelectorAll(".remove-game-btn").forEach(e=>{e.addEventListener("click",s=>{const o=e.dataset.id;m(o,n,t)})})}function m(i,t,n){const s=(JSON.parse(localStorage.getItem(t))||[]).filter(a=>a!==i);localStorage.setItem(t,JSON.stringify(s));const o=n.querySelector(`.remove-game-btn[data-id="${i}"]`).closest(".shopping-list-item");o&&o.remove(),s.length===0&&document.querySelector(".empty-cart").classList.remove("hidden")}console.log("shlst.js end");
//# sourceMappingURL=shopping-list.js.map
