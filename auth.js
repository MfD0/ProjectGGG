import"./assets/styles-BtAFSzR9.js";document.addEventListener("DOMContentLoaded",()=>{document.getElementById("loginForm").addEventListener("submit",async t=>{t.preventDefault();const o=document.getElementById("username").value,r=document.getElementById("password").value;try{const s=(await(await fetch("../database/isers.json")).json()).find(n=>n.username===o&&n.password===r);s?(sessionStorage.setItem("loggedInUser",JSON.stringify(s)),window.location.href="index.html"):alert("Невірний логін або пароль")}catch(e){console.error("Помилка при авторизації:",e)}})});
//# sourceMappingURL=auth.js.map
