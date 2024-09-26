(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const n=[{id:"1",title:"The Forest",author:"Valve",image:"src/img/games_images/TheForest.png",tags:["Horror","Survival"],description:"The Forest is a first-person survival horror game set in a mysterious open-world environment. After a plane crash leaves you stranded on a remote, wooded island, you must gather resources, build shelters, and craft weapons to survive against a tribe of cannibalistic mutants. Explore the dark, eerie landscape as you uncover the secrets of the island and fight for your life in a hauntingly immersive experience.",links:{steam:"https://store.steampowered.com/app/242760/The_Forest/",Trailer:"https://www.youtube.com/watch?v=7mwn5U2PNvk"}},{id:"2",title:"Assassin's Creed",author:"Ubisoft",image:"src/img/games_images/AC_1.png",tags:["Action","Adventure"],description:"Assassin's Creed is an action-adventure game set during the Third Crusade. Players control Altair, a skilled assassin fighting against the Templar Knights. With a mix of stealth, parkour, and combat, you explore historical cities, uncover secrets, and influence the course of history.",links:{steam:"https://store.steampowered.com/app/15100/Assassins_Creed_Directors_Cut_Edition/",Trailer:"https://www.youtube.com/watch?v=RjQ6ZtyXoA0"}},{id:"3",title:"Assassin's Creed II",author:"Ubisoft",image:"src/img/games_images/AC_2.png",tags:["Action","Adventure"],description:"Assassin's Creed II continues the saga of the Assassin Brotherhood as players take on the role of Ezio Auditore da Firenze during the Italian Renaissance. Explore stunning locations like Florence and Venice while mastering new skills, weapons, and combat techniques. Unravel a gripping story of revenge, betrayal, and the ongoing conflict between Assassins and Templars.",links:{steam:"https://store.steampowered.com/app/33230/Assassins_Creed_2/",Trailer:"https://www.youtube.com/watch?v=_xkCPNECud8"}},{id:"4",title:"Assassin's Creed Brotherhood",author:"Ubisoft",image:"src/img/games_images/AC2_1.png",tags:["Action","Adventure"],description:"Assassin's Creed Brotherhood follows Ezio Auditore as he leads the Assassin Brotherhood in Renaissance Italy. Players engage in epic battles against the Templar order, recruit and train new assassins, and explore a richly detailed open-world Rome. With enhanced multiplayer modes and new gameplay mechanics, players experience a gripping narrative of power, betrayal, and camaraderie.",links:{steam:"https://store.steampowered.com/app/48190/Assassins_Creed_Brotherhood/",Trailer:"https://www.youtube.com/watch?v=zzNs4-kRLaE"}},{id:"5",title:"Assassin's Creed Revelations",author:"Ubisoft",image:"src/img/games_images/AC2_2.png",tags:["Action","Adventure"],description:"Assassin's Creed Revelations follows Ezio Auditore as he journeys to Constantinople to uncover the secrets of the Assassins. Players explore the city, master new abilities, and engage in intense combat against the Templar order. The game delves into Ezio's past and connects to the story of Altair, offering a rich narrative filled with mystery, exploration, and adventure.",links:{steam:"https://store.steampowered.com/app/201870/Assassins_Creed_Revelations/",Trailer:"https://www.youtube.com/watch?v=HMsbMK9Odoc"}},{id:"6",title:"Assassin's Creed III",author:"Ubisoft",image:"src/img/games_images/AC_3.png",tags:["Action","Adventure"],description:"Assassin's Creed III immerses players in the American Revolution, where they control Connor, a half-Mohawk assassin fighting for freedom. Navigate the lush wilderness and bustling cities of colonial America as you engage in intense battles against the British and Templar forces. Experience a gripping story of loyalty, betrayal, and the struggle for independence while mastering new gameplay mechanics, including naval combat.",links:{steam:"https://store.steampowered.com/app/911400/Assassins_Creed_III_Remastered/",Trailer:"https://www.youtube.com/watch?v=-pUhraVG7Ow"}},{id:"7",title:"Assassin's Creed IV: Black Flag",author:"Ubisoft",image:"src/img/games_images/AC_4.png",tags:["Action","Adventure"],description:"Assassin's Creed IV: Black Flag takes players on an epic adventure in the Golden Age of Piracy, where they assume the role of Edward Kenway, a charismatic pirate and Assassin. Sail the Caribbean Sea, explore stunning islands, and engage in naval combat while uncovering the secrets of the Assassins and Templars. Experience a dynamic open world filled with treasure, danger, and the freedom of the high seas.",links:{steam:"https://store.steampowered.com/app/242050/Assassins_Creed_IV_Black_Flag/",Trailer:"https://www.youtube.com/watch?v=OwVe4ZNeQZk"}},{id:"8",title:"Assassin's Creed Rogue",author:"Ubisoft",image:"src/img/games_images/AC_Rogue.png",tags:["Action","Adventure"],description:"Assassin's Creed Rogue follows Shay Patrick Cormac, an Assassin turned Templar during the Seven Years' War. Players explore the North Atlantic and New York City, utilizing advanced naval mechanics and an engaging storyline that highlights the conflict between Assassins and Templars. Experience a darker narrative as you seek revenge and grapple with the consequences of your choices in a beautifully crafted open world.",links:{steam:"https://store.steampowered.com/app/311560/Assassins_Creed_Rogue/",Trailer:"https://www.youtube.com/watch?v=bjSy5kF6io0"}},{id:"9",title:"Assassin's Creed Unity",author:"Ubisoft",image:"src/img/games_images/AC_5.png",tags:["Action","Adventure"],description:"Assassin's Creed Unity is set during the tumultuous times of the French Revolution, where players control Arno Dorian, a young man seeking redemption and revenge. Explore the beautifully recreated Paris, engage in cooperative multiplayer missions, and experience an intricate narrative of betrayal and revolution. With enhanced parkour mechanics and a deep customization system, Unity offers a fresh and immersive Assassin experience.",links:{steam:"https://store.steampowered.com/app/289650/Assassins_Creed_Unity/",Trailer:"https://www.youtube.com/watch?v=xzCEdSKMkdU"}},{id:"10",title:"Assassin's Creed Syndicate",author:"Ubisoft",image:"src/img/games_images/AC_6.png",tags:["Action","Adventure"],description:"Assassin's Creed Syndicate transports players to Victorian London, where they control twin assassins Jacob and Evie Frye. As they fight against the oppressive Templar control over the city, players can explore iconic locations, engage in combat, and utilize new gameplay mechanics like carriage driving and rope-launching. Experience a rich narrative filled with brotherhood, social justice, and the fight for the streets of London.",links:{steam:"https://store.steampowered.com/app/368500/Assassins_Creed_Syndicate/",Trailer:"https://www.youtube.com/watch?v=WTBbwgsyxvg"}},{id:"11",title:"Assassin's Creed Origins",author:"Ubisoft",image:"src/img/games_images/AC_7.png",tags:["Action","Adventure"],description:"Assassin's Creed Origins takes players back to ancient Egypt, where they explore the origins of the Assassin Brotherhood. As Bayek, a Medjay protector, players uncover a vast open world filled with rich history, breathtaking landscapes, and dynamic combat. Experience a deep narrative of betrayal and vengeance while navigating the struggles between powerful factions and discovering the mysteries of ancient Egypt.",links:{steam:"https://store.steampowered.com/app/582160/Assassins_Creed_Origins/",Trailer:"https://www.youtube.com/watch?v=kGq7ZCth7QY"}},{id:"12",title:"Assassin's Creed Odyssey",author:"Ubisoft",image:"src/img/games_images/AC_8.png",tags:["Action","Adventure"],description:"Assassin's Creed Odyssey transports players to ancient Greece during the Peloponnesian War, allowing them to choose between two mercenaries, Alexios or Kassandra. Immerse yourself in a vast open world filled with breathtaking landscapes, engaging quests, and deep RPG elements. Explore Greek mythology, forge your own destiny, and experience a gripping narrative of love, betrayal, and the fight for freedom.",links:{steam:"https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/",Trailer:"https://www.youtube.com/watch?v=s_SJZSAtLBA"}}];function g(t,s){return s.find(i=>i.id===t)||"Game not found"}function h(t,s){return s.filter(i=>i.tags.includes(t))||"No Game found for this category"}function d(){const t=new Set;return n.forEach(s=>s.tags.forEach(i=>t.add(i))),Array.from(t)}console.log(g("1",n));console.log(h("Action",n));console.log(d());const c=d(),l=document.querySelector(".categories-list");if(c.length>0)c.forEach(t=>{const s=document.createElement("li");s.classList.add("category-item"),s.textContent=t,l.appendChild(s)});else{const t=document.createElement("li");t.textContent="No categories available",l.appendChild(t)}
//# sourceMappingURL=index.js.map