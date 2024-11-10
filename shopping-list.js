import"./assets/main-MN8b_TcQ.js";document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector("#shopping-list-container"),s=document.querySelector(".empty-cart");let e=JSON.parse(localStorage.getItem("shoppingList"))||[];e.length===0?s.style.display="block":(s.style.display="none",e.forEach((t,i)=>{const a=document.createElement("div");a.classList.add("game-card"),a.innerHTML=`
                <div class="game-info">
                    <button class="remove-button" data-index="${i}">&times;</button>
                    <img src="${t.image}" alt="${t.title}" class="game-image">
                    <div class="game-details">
                        <h3 class="game-title">${t.title}</h3>
                        <p class="game-description">${t.description}</p>
                    </div>
                </div>
            `,n.appendChild(a)})),n.addEventListener("click",function(t){if(t.target.classList.contains("remove-button")){const i=t.target.getAttribute("data-index");e.splice(i,1),localStorage.setItem("shoppingList",JSON.stringify(e)),t.target.closest(".game-card").remove(),e.length===0&&(s.style.display="block")}})});
//# sourceMappingURL=shopping-list.js.map
