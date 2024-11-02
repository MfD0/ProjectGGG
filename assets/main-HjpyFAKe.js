(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.querySelector(".home"),s=document.querySelector(".shopping-list");e.includes("shopping-list.html")?s.classList.add("active"):t.classList.add("active")});function u(){const e=document.getElementsByTagName("aside")[0];e.style.display==="block"?e.style.display="none":e.style.display="block"}const l=document.getElementsByTagName("aside")[0],d=document.querySelector(".hamburger-image");d.addEventListener("click",u);l!=null?new ResizeObserver(t=>{for(const s of t)s.contentRect.width==0?l.style.display="block":l.style.display="none"}).observe(d):d.style.display="none";const o=[{id:"1",title:"The Forest",author:"Valve",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/TheForest.png",tags:["Horror","Survival"],description:"The Forest is a first-person survival horror game set in a mysterious open-world environment. After a plane crash leaves you stranded on a remote, wooded island, you must gather resources, build shelters, and craft weapons to survive against a tribe of cannibalistic mutants. Explore the dark, eerie landscape as you uncover the secrets of the island and fight for your life in a hauntingly immersive experience.",links:{steam:"https://store.steampowered.com/app/242760/The_Forest/",Trailer:"https://www.youtube.com/watch?v=7mwn5U2PNvk"},discount:"0%"},{id:"2",title:"Assassin's Creed",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_1.png",tags:["Action","Adventure"],description:"Assassin's Creed is an action-adventure game set during the Third Crusade. Players control Altair, a skilled assassin fighting against the Templar Knights. With a mix of stealth, parkour, and combat, you explore historical cities, uncover secrets, and influence the course of history.",links:{steam:"https://store.steampowered.com/app/15100/Assassins_Creed_Directors_Cut_Edition/",Trailer:"https://www.youtube.com/watch?v=RjQ6ZtyXoA0"},discount:"0%"},{id:"3",title:"Assassin's Creed II",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_2.png",tags:["Action","Adventure"],description:"Assassin's Creed II continues the saga of the Assassin Brotherhood as players take on the role of Ezio Auditore da Firenze during the Italian Renaissance. Explore stunning locations like Florence and Venice while mastering new skills, weapons, and combat techniques. Unravel a gripping story of revenge, betrayal, and the ongoing conflict between Assassins and Templars.",links:{steam:"https://store.steampowered.com/app/33230/Assassins_Creed_2/",Trailer:"https://www.youtube.com/watch?v=_xkCPNECud8"},discount:"0%"},{id:"4",title:"Assassin's Creed Brotherhood",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC2_1.png",tags:["Action","Adventure"],description:"Assassin's Creed Brotherhood follows Ezio Auditore as he leads the Assassin Brotherhood in Renaissance Italy. Players engage in epic battles against the Templar order, recruit and train new assassins, and explore a richly detailed open-world Rome. With enhanced multiplayer modes and new gameplay mechanics, players experience a gripping narrative of power, betrayal, and camaraderie.",links:{steam:"https://store.steampowered.com/app/48190/Assassins_Creed_Brotherhood/",Trailer:"https://www.youtube.com/watch?v=zzNs4-kRLaE"},discount:"0%"},{id:"5",title:"Assassin's Creed Revelations",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC2_2.png",tags:["Action","Adventure"],description:"Assassin's Creed Revelations follows Ezio Auditore as he journeys to Constantinople to uncover the secrets of the Assassins. Players explore the city, master new abilities, and engage in intense combat against the Templar order. The game delves into Ezio's past and connects to the story of Altair, offering a rich narrative filled with mystery, exploration, and adventure.",links:{steam:"https://store.steampowered.com/app/201870/Assassins_Creed_Revelations/",Trailer:"https://www.youtube.com/watch?v=HMsbMK9Odoc"},discount:"0%"},{id:"6",title:"Assassin's Creed III",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_3.png",tags:["Action","Adventure"],description:"Assassin's Creed III immerses players in the American Revolution, where they control Connor, a half-Mohawk assassin fighting for freedom. Navigate the lush wilderness and bustling cities of colonial America as you engage in intense battles against the British and Templar forces. Experience a gripping story of loyalty, betrayal, and the struggle for independence while mastering new gameplay mechanics, including naval combat.",links:{steam:"https://store.steampowered.com/app/911400/Assassins_Creed_III_Remastered/",Trailer:"https://www.youtube.com/watch?v=-pUhraVG7Ow"},discount:"0%"},{id:"7",title:"Assassin's Creed IV: Black Flag",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_4.png",tags:["Action","Adventure"],description:"Assassin's Creed IV: Black Flag takes players on an epic adventure in the Golden Age of Piracy, where they assume the role of Edward Kenway, a charismatic pirate and Assassin. Sail the Caribbean Sea, explore stunning islands, and engage in naval combat while uncovering the secrets of the Assassins and Templars. Experience a dynamic open world filled with treasure, danger, and the freedom of the high seas.",links:{steam:"https://store.steampowered.com/app/242050/Assassins_Creed_IV_Black_Flag/",Trailer:"https://www.youtube.com/watch?v=OwVe4ZNeQZk"},discount:"0%"},{id:"8",title:"Assassin's Creed Rogue",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_Rogue.png",tags:["Action","Adventure"],description:"Assassin's Creed Rogue follows Shay Patrick Cormac, an Assassin turned Templar during the Seven Years' War. Players explore the North Atlantic and New York City, utilizing advanced naval mechanics and an engaging storyline that highlights the conflict between Assassins and Templars. Experience a darker narrative as you seek revenge and grapple with the consequences of your choices in a beautifully crafted open world.",links:{steam:"https://store.steampowered.com/app/311560/Assassins_Creed_Rogue/",Trailer:"https://www.youtube.com/watch?v=bjSy5kF6io0"},discount:"0%"},{id:"9",title:"Assassin's Creed Unity",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_5.png",tags:["Action","Adventure"],description:"Assassin's Creed Unity is set during the tumultuous times of the French Revolution, where players control Arno Dorian, a young man seeking redemption and revenge. Explore the beautifully recreated Paris, engage in cooperative multiplayer missions, and experience an intricate narrative of betrayal and revolution. With enhanced parkour mechanics and a deep customization system, Unity offers a fresh and immersive Assassin experience.",links:{steam:"https://store.steampowered.com/app/289650/Assassins_Creed_Unity/",Trailer:"https://www.youtube.com/watch?v=xzCEdSKMkdU"},discount:"0%"},{id:"10",title:"Assassin's Creed Syndicate",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_6.png",tags:["Action","Adventure"],description:"Assassin's Creed Syndicate transports players to Victorian London, where they control twin assassins Jacob and Evie Frye. As they fight against the oppressive Templar control over the city, players can explore iconic locations, engage in combat, and utilize new gameplay mechanics like carriage driving and rope-launching. Experience a rich narrative filled with brotherhood, social justice, and the fight for the streets of London.",links:{steam:"https://store.steampowered.com/app/368500/Assassins_Creed_Syndicate/",Trailer:"https://www.youtube.com/watch?v=WTBbwgsyxvg"},discount:"0%"},{id:"11",title:"Assassin's Creed Origins",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_7.png",tags:["Action","Adventure"],description:"Assassin's Creed Origins takes players back to ancient Egypt, where they explore the origins of the Assassin Brotherhood. As Bayek, a Medjay protector, players uncover a vast open world filled with rich history, breathtaking landscapes, and dynamic combat. Experience a deep narrative of betrayal and vengeance while navigating the struggles between powerful factions and discovering the mysteries of ancient Egypt.",links:{steam:"https://store.steampowered.com/app/582160/Assassins_Creed_Origins/",Trailer:"https://www.youtube.com/watch?v=kGq7ZCth7QY"},discount:"0%"},{id:"12",title:"Assassin's Creed Odyssey",author:"Ubisoft",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/AC_8.png",tags:["Action","Adventure"],description:"Assassin's Creed Odyssey transports players to ancient Greece during the Peloponnesian War, allowing them to choose between two mercenaries, Alexios or Kassandra. Immerse yourself in a vast open world filled with breathtaking landscapes, engaging quests, and deep RPG elements. Explore Greek mythology, forge your own destiny, and experience a gripping narrative of love, betrayal, and the fight for freedom.",links:{steam:"https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/",Trailer:"https://www.youtube.com/watch?v=s_SJZSAtLBA"},discount:"0%"},{id:"13",title:"The Witcher: Enhanced Edition Director's Cut",author:"CD Project Red",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/TheWitcher.png",tags:["RPG","Fantasy","Story-rich"],description:"The Witcher: Enhanced Edition Director's Cut is an immersive role-playing game where players assume the role of Geralt of Rivia, a monster hunter in a dark, morally complex world. With enhanced visuals, new quests, and improved mechanics, this edition brings a refined experience to the critically acclaimed RPG.",links:{steam:"https://store.steampowered.com/app/20900/The_Witcher_Enhanced_Edition_Directors_Cut/",Trailer:"https://www.youtube.com/watch?v=w2F_Ti_6E_k"},discount:"0%"},{id:"14",title:"The Witcher 2: Assassins of Kings",author:"CD Project Red",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/TheWitcher2.png",tags:["RPG","Fantasy","Story-rich"],description:"The Witcher 2: Assassins of Kings is a story-driven RPG where players control Geralt of Rivia in a politically charged, dark fantasy world. With multiple narrative paths, complex moral choices, and enhanced combat, the game offers a gripping sequel to the original Witcher, improving on every aspect of the series.",links:{steam:"https://store.steampowered.com/app/20920/The_Witcher_2_Assassins_of_Kings_Enhanced_Edition/",Trailer:"https://www.youtube.com/watch?v=HedLjjlSy3Y"},discount:"0%"},{id:"15",title:"The Witcher 3: Wild Hunt",author:"CD Projekt Red",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/TheWitcher3.png",tags:["RPG","Fantasy","Open World","Story-rich"],description:"The Witcher 3: Wild Hunt is an open-world RPG that follows Geralt of Rivia as he searches for his adopted daughter, Ciri. Set in a vast, beautifully crafted fantasy world, the game features a rich narrative, complex moral choices, and dynamic combat, establishing itself as one of the greatest RPGs of all time.",links:{steam:"https://store.steampowered.com/app/292030/_3/",trailer:"https://www.youtube.com/watch?v=1-l29HlKkXU"},discount:"0%"},{id:"16",title:"Grand Theft Auto V",author:"Rockstar Games",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/GTAV.png",tags:["Action","Open World","Adventure"],description:"Grand Theft Auto V offers an expansive open-world experience set in the sprawling city of Los Santos. Players switch between three protagonists—Michael, Franklin, and Trevor—as they engage in heists, navigate the criminal underworld, and explore a richly detailed world. With a mix of intense action, driving, and exploration, GTA V delivers a thrilling story alongside a robust online multiplayer mode.",links:{steam:"https://store.steampowered.com/agecheck/app/271590/",Trailer:"https://www.youtube.com/watch?v=QkkoHAzjnUs"},discount:"0%"},{id:"17",title:"Phasmophobia",author:"Kinetic Games",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/Phasmophobia.png",tags:["Horror","Co-op","Survival"],description:"Phasmophobia is a co-op horror game where players become ghost hunters tasked with investigating haunted locations to gather evidence of paranormal activity. Working together in teams of up to four, players use various ghost-hunting tools, communicate with spirits, and navigate eerie environments. With an emphasis on realism and immersive gameplay, Phasmophobia delivers a chilling, unpredictable experience as players encounter terrifying ghostly phenomena.",links:{steam:"https://store.steampowered.com/app/739630/Phasmophobia/",Trailer:"https://www.youtube.com/watch?v=sRa9oeo5KiY"},discount:"0%"},{id:"18",title:"Minecraft",author:"Mojang Studios",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/Minecraft.png",tags:["Sandbox","Survival","Adventure","Multiplayer","Co-op"],description:"Minecraft is a sandbox game that allows players to build and explore virtual worlds made up of blocks. Players can gather resources, craft items, and create structures, all while surviving against various creatures. With its open-ended gameplay, Minecraft encourages creativity and collaboration, making it a beloved title for players of all ages.",links:{minecraft:"https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc",trailer:"https://www.youtube.com/watch?v=MmB9b5njVbA"},discount:"0%"},{id:"19",title:"Stardew Valley",author:"ConcernedApe",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/StardewWalley.png",tags:["Simulation","Farming","RPG"],description:"Stardew Valley is a farming simulation game where players inherit a rundown farm and work to restore it to its former glory. Players can plant crops, raise animals, mine for resources, and engage with the local community. With charming pixel art and a relaxing soundtrack, Stardew Valley offers a rich and immersive experience filled with exploration and creativity.",links:{steam:"https://store.steampowered.com/app/413150/Stardew_Valley/",trailer:"https://www.youtube.com/watch?v=ot7uXNQskhs"},discount:"0%"},{id:"20",title:"Farming Simulator 17",author:"Giants Software",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/FS17.png",tags:["Simulation","Farming","Multiplayer"],description:"Farming Simulator 22 lets players experience the challenges of modern farming. Build and manage your own farm, grow crops, and raise animals using authentic machinery and tools from real-world manufacturers. With a variety of environments and seasons, players can explore a rich agricultural world and enjoy the intricacies of farm life, either solo or with friends in multiplayer mode.",links:{steam:"https://store.steampowered.com/app/447020/Farming_Simulator_17",trailer:"https://www.youtube.com/watch?v=8NLH5hgYBrs"},discount:"0%"},{id:"21",title:"Farming Simulator 19",author:"Giants Software",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/FS19.png",tags:["Simulation","Farming","Multiplayer"],description:"Farming Simulator 22 lets players experience the challenges of modern farming. Build and manage your own farm, grow crops, and raise animals using authentic machinery and tools from real-world manufacturers. With a variety of environments and seasons, players can explore a rich agricultural world and enjoy the intricacies of farm life, either solo or with friends in multiplayer mode.",links:{steam:"https://store.steampowered.com/app/787860/Farming_Simulator_19/",trailer:"https://www.youtube.com/watch?v=_JjRUHDb6kU"},discount:"0%"},{id:"22",title:"Farming Simulator 22",author:"Giants Software",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/FS22.png",tags:["Simulation","Farming","Multiplayer"],description:"Farming Simulator 22 lets players experience the challenges of modern farming. Build and manage your own farm, grow crops, and raise animals using authentic machinery and tools from real-world manufacturers. With a variety of environments and seasons, players can explore a rich agricultural world and enjoy the intricacies of farm life, either solo or with friends in multiplayer mode.",links:{steam:"https://store.steampowered.com/app/1248130/Farming_Simulator_22/",trailer:"https://www.youtube.com/watch?v=JpBzfTe_yWE"},discount:"0%"},{id:"23",title:"Farming Simulator 25",author:"Giants Software",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/FS25.png",tags:["Simulation","Farming","Multiplayer"],description:"Farming Simulator 22 lets players experience the challenges of modern farming. Build and manage your own farm, grow crops, and raise animals using authentic machinery and tools from real-world manufacturers. With a variety of environments and seasons, players can explore a rich agricultural world and enjoy the intricacies of farm life, either solo or with friends in multiplayer mode.",links:{steam:"https://store.steampowered.com/app/2300320/Farming_Simulator_25/",trailer:"https://www.youtube.com/watch?v=MxLO_PY_Mxc"},discount:"0%"},{id:"24",title:"Resident Evil 2",author:"Capcom",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/ResidentEvil2.png",tags:["Horror","Survival"],description:"Resident Evil 2 is a survival horror game that immerses players in a zombie-infested Raccoon City. Control Leon S. Kennedy and Claire Redfield as they navigate the terrifying world filled with puzzles, danger, and memorable characters. The game combines thrilling gameplay with stunning visuals and a haunting atmosphere.",links:{steam:"https://store.steampowered.com/app/883710/Resident_Evil_2/",Trailer:"https://www.youtube.com/watch?v=u3wS-Q2KBpk"},discount:"0%"},{id:"25",title:"Cyberpunk 2077",author:"CD Projekt Red",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/Cyberpunk2077.png",tags:["RPG","Open World","Sci-Fi"],description:"Cyberpunk 2077 is an open-world RPG set in the dystopian Night City. Players assume the role of V, a mercenary with a customizable character who explores the vibrant, dangerous streets of the city while pursuing a life-altering implant. With a richly detailed world, deep storytelling, and a vast array of choices, the game offers a unique blend of action and narrative.",links:{steam:"https://store.steampowered.com/app/1091500/Cyberpunk_2077/",Trailer:"https://www.youtube.com/watch?v=DvVjkqB3LH0"},discount:"0%"},{id:"26",title:"DOOM Eternal",author:"id Software",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/DOOMEternal.png",tags:["Action","Shooter"],description:"DOOM Eternal is a fast-paced first-person shooter that continues the story of the Doom Slayer in his battle against demonic forces. With intense combat mechanics, a variety of weapons, and exhilarating movement options, players experience an adrenaline-pumping adventure filled with brutal encounters and stylish kills.",links:{steam:"https://store.steampowered.com/app/782330/DOOM_Eternal/",Trailer:"https://www.youtube.com/watch?v=_UuktemkCFI"},discount:"0%"},{id:"27",title:"Project Zomboid",author:"The Indie Stone",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/ProjectZomboid.png",tags:["Survival","Open World","Zombie","Multiplayer","Co-op"],description:"Project Zomboid is an open-world survival horror game set in a post-apocalyptic world overrun by zombies. Players must scavenge for food, build shelters, and fend off zombie hordes while managing their character's health and mental state. The game features a detailed crafting system, realistic survival mechanics, and a sandbox environment for players to explore.",links:{steam:"https://store.steampowered.com/app/108600/Project_Zomboid/",Trailer:"https://www.youtube.com/watch?v=nPbsDmzZ3Oc"},discount:"0%"},{id:"28",title:"Outlast",author:"Red Barrels",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/Outlast.png",tags:["Survival","Stealth","Horror"],description:"Outlast is a first-person survival horror game where players take on the role of investigative journalist Miles Upshur, who explores the abandoned Mount Massive Asylum. Equipped only with a camcorder, players must navigate the terrifying environment, avoid dangerous inmates, and uncover the dark secrets hidden within the asylum.",links:{steam:"https://store.steampowered.com/app/238320/Outlast/",Trailer:"https://www.youtube.com/watch?v=uKA-IA4locM"},discount:"0%"},{id:"29",title:"Outlast 2",author:"Red Barrels",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/Outlast2.png",tags:["Survival","Stealth","Horror"],description:"Outlast 2 is a first-person survival horror game that takes players to the Arizona desert, where they follow the story of journalist Blake Langermann. He investigates the mysterious death of a pregnant woman and uncovers a terrifying cult. Players must use stealth and resourcefulness to survive against the nightmarish forces that threaten them.",links:{steam:"https://store.steampowered.com/app/414700/Outlast_2/",Trailer:"https://www.youtube.com/watch?v=W73XZ1WHuLQ"},discount:"0%"},{id:"30",title:"Call of Duty",author:"Infinity Ward",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/COD2003.png",tags:["Action","Shooter","War"],description:"Call of Duty is a first-person shooter set during World War II. Players experience the war from the perspective of different soldiers, participating in various battles across Europe. The game is known for its immersive single-player campaign and engaging multiplayer modes.",links:{steam:"https://store.steampowered.com/app/2620/Call_of_Duty_2003/",Trailer:"https://www.youtube.com/watch?v=ajTx5sUyXBg"},discount:"0%"},{id:"31",title:"Call of Duty 2",author:"Infinity Ward",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/COD2.png",tags:["Action","Shooter","War"],description:"Call of Duty 2 is a first-person shooter that takes place during World War II. Players assume the roles of different soldiers from various countries, experiencing key battles in North Africa, Europe, and Russia. The game features improved graphics and gameplay mechanics compared to its predecessor, as well as a strong multiplayer component.",links:{steam:"https://store.steampowered.com/app/2630/Call_of_Duty_2/",Trailer:"https://www.youtube.com/watch?v=K4eXjltawZ4"},discount:"0%"},{id:"32",title:"Call of Duty 3",author:"Treyarch",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/COD3.png",tags:["Action","Shooter","War"],description:"Call of Duty 3 is a first-person shooter set during World War II, focusing on the events of the Battle of Normandy. Players take on the role of soldiers from multiple nations, experiencing various perspectives of the conflict. The game features a robust single-player campaign and improved multiplayer modes with vehicle gameplay.",links:{xbox:"https://www.xbox.com/games/store/call-of-duty-3/C2N2L6MHMV34",Trailer:"https://www.youtube.com/watch?v=Q2EQ3gpud5o"},discount:"0%"},{id:"33",title:"Call of Duty 4: Modern Warfare",author:"Infinity Ward",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/COD4MW.png",tags:["Action","Shooter","Military","War"],description:"Call of Duty 4: Modern Warfare is a first-person shooter that revolutionized the series with its modern setting and intense narrative. Players engage in various military operations around the globe, featuring an engaging single-player campaign and a robust multiplayer mode that set a new standard for online gameplay.",links:{steam:"https://store.steampowered.com/app/7940/Call_of_Duty_4_Modern_Warfare_2007/",Trailer:"https://www.youtube.com/watch?v=LhuIjNSg7Gg"},discount:"0%"},{id:"34",title:"Call of Duty: World at War",author:"Treyarch",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/CODWAT.png",tags:["Action","Shooter","Military","War"],description:"Call of Duty: World at War is a first-person shooter that returns to the gritty battles of World War II. Players can experience the Pacific and Eastern Fronts, fighting alongside allies and against fierce enemies. The game also introduced the popular Zombies mode, providing a cooperative multiplayer experience.",links:{steam:"https://store.steampowered.com/app/10090/Call_of_Duty_World_at_War/",Trailer:"https://www.youtube.com/watch?v=ondfCsioE0E"},discount:"0%"},{id:"35",title:"Call of Duty: Modern Warfare 2",author:"Infinity Ward",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/CODMW2.png",tags:["Action","Shooter","Military","War"],description:"Call of Duty: Modern Warfare 2 is a first-person shooter that continues the story of the Modern Warfare series. Players engage in intense battles across various locations, utilizing advanced weaponry and tactics. The game features a gripping single-player campaign and robust multiplayer modes, solidifying its status as a classic in the genre.",links:{steam:"https://store.steampowered.com/app/1962660/Call_of_Duty_Modern_Warfare_II/",Trailer:"https://www.youtube.com/watch?v=ztjfwecrY8E"},discount:"0%"},{id:"34",title:"Call of Duty: Black Ops",author:"Treyarch",image:"https://raw.githubusercontent.com/MfD0/ProjectGGG/refs/heads/main/src/img/games_images/CODBO.png",tags:["Action","Shooter","Military","War"],description:"Call of Duty: Black Ops is a first-person shooter that explores covert operations during the Cold War. Players take on the role of special forces operatives, engaging in high-stakes missions across diverse locations. The game features a thrilling campaign, competitive multiplayer modes, and the introduction of the Zombies mode.",links:{steam:"https://store.steampowered.com/app/42700/Call_of_Duty_Black_Ops/",Trailer:"https://www.youtube.com/watch?v=OPTOVQFRggI"},discount:"0%"}];function G(e){return o.find(t=>t.id===e)||"Game not found"}//! Функція для отримання всіх унікальних категорій з бази даних
function g(){const e=new Set;return o.forEach(t=>t.tags.forEach(s=>e.add(s))),Array.from(e)}//! Функція для вибору ігор по категоріях (по 5 ігор кожної категорії)
function _(e){const t={};return e.forEach(s=>{const r=o.filter(a=>a.tags.includes(s));t[s]=r.slice(0,5)}),t}//! Функція для отримання всіх ігор за заданою категорією
function f(e){return o.filter(t=>t.tags.includes(e))||"No Game found for this category"}const p=g(),h=document.querySelector(".categories-list"),w=document.querySelector(".topGamesTitle"),m=document.querySelector(".top-games-list"),n=document.createElement("li");n.classList.add("category-item");n.textContent="All Categories";h.appendChild(n);n.addEventListener("click",v);if(p.length>0)p.forEach(e=>{const t=document.createElement("li");t.classList.add("category-item"),t.textContent=e,h.appendChild(t),t.addEventListener("click",()=>{y(e)})});else{const e=document.createElement("li");e.textContent="No categories available",h.appendChild(e)}function y(e){const t=f(e);w.innerHTML=`${e} Games`,document.querySelectorAll(".game-category").forEach(s=>{s.style.display="none"}),m.innerHTML="",t.forEach(s=>{const r=b(s);m.appendChild(r)}),m.classList.add("category-active")}function v(){location.reload()}function b(e){const t=document.createElement("li");return t.id=e.id,t.className="listener",t.setAttribute("onclick",`openModal('${e.id}')`),t.innerHTML=`
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
    `,t}export{_ as a,f as b,G as c,g};
//# sourceMappingURL=main-HjpyFAKe.js.map
