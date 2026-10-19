(function(){
"use strict";
var GAMES=[
{id:"witcher3",t:"The Witcher 3: Wild Hunt",y:2015,d:"CD Projekt RED",g:"RPG",k:"singleplayer,open world,story-driven,atmospheric"},
{id:"eldenring",t:"Elden Ring",y:2022,d:"FromSoftware",g:"RPG",k:"singleplayer,multiplayer,co-op,open world,atmospheric,hard"},
{id:"hollowknight",t:"Hollow Knight",y:2017,d:"Team Cherry",g:"Platformer",k:"indie,singleplayer,atmospheric,hard"},
{id:"celeste",t:"Celeste",y:2018,d:"Maddy Makes Games",g:"Platformer",k:"indie,singleplayer,hard,pixel art"},
{id:"discoelysium",t:"Disco Elysium",y:2019,d:"ZA/UM",g:"RPG",k:"indie,singleplayer,story-driven,atmospheric"},
{id:"hades",t:"Hades",y:2020,d:"Supergiant Games",g:"Roguelike",k:"indie,singleplayer"},
{id:"rdr2",t:"Red Dead Redemption 2",y:2018,d:"Rockstar Games",g:"Action",k:"singleplayer,open world,story-driven,atmospheric"},
{id:"botw",t:"The Legend of Zelda: Breath of the Wild",y:2017,d:"Nintendo",g:"Adventure",k:"singleplayer,open world"},
{id:"portal2",t:"Portal 2",y:2011,d:"Valve",g:"Puzzle",k:"singleplayer,multiplayer,co-op,short"},
{id:"hl2",t:"Half-Life 2",y:2004,d:"Valve",g:"FPS",k:"singleplayer"},
{id:"stardew",t:"Stardew Valley",y:2016,d:"ConcernedApe",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op,relaxing,pixel art"},
{id:"undertale",t:"Undertale",y:2015,d:"Toby Fox",g:"RPG",k:"indie,singleplayer,story-driven,atmospheric,pixel art,turn-based"},
{id:"gow2018",t:"God of War",y:2018,d:"Santa Monica Studio",g:"Action",k:"singleplayer,story-driven,atmospheric"},
{id:"bloodborne",t:"Bloodborne",y:2015,d:"FromSoftware",g:"Action",k:"singleplayer,atmospheric,hard"},
{id:"darksouls",t:"Dark Souls",y:2011,d:"FromSoftware",g:"RPG",k:"singleplayer,multiplayer,co-op,atmospheric,hard"},
{id:"sekiro",t:"Sekiro: Shadows Die Twice",y:2019,d:"FromSoftware",g:"Action",k:"singleplayer,atmospheric,hard"},
{id:"minecraft",t:"Minecraft",y:2011,d:"Mojang Studios",g:"Sandbox",k:"singleplayer,multiplayer,co-op,local co-op,open world,relaxing,survival"},
{id:"terraria",t:"Terraria",y:2011,d:"Re-Logic",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,local co-op,pixel art"},
{id:"bg3",t:"Baldur's Gate 3",y:2023,d:"Larian Studios",g:"RPG",k:"singleplayer,multiplayer,co-op,story-driven,turn-based"},
{id:"cp2077",t:"Cyberpunk 2077",y:2020,d:"CD Projekt RED",g:"RPG",k:"singleplayer,open world,story-driven,atmospheric"},
{id:"outerwilds",t:"Outer Wilds",y:2019,d:"Mobius Digital",g:"Adventure",k:"indie,singleplayer,story-driven,atmospheric"},
{id:"p5",t:"Persona 5",y:2016,d:"Atlus",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"odyssey",t:"Super Mario Odyssey",y:2017,d:"Nintendo",g:"Platformer",k:"singleplayer"},
{id:"re4",t:"Resident Evil 4",y:2005,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"sh2",t:"Silent Hill 2",y:2001,d:"Konami",g:"Horror",k:"singleplayer,story-driven,atmospheric,hard"},
{id:"tlou",t:"The Last of Us",y:2013,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven"},
{id:"me2",t:"Mass Effect 2",y:2010,d:"BioWare",g:"RPG",k:"singleplayer,story-driven"},
{id:"doom2016",t:"DOOM",y:2016,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"gta5",t:"Grand Theft Auto V",y:2013,d:"Rockstar North",g:"Action",k:"singleplayer,open world"},
{id:"gtasa",t:"Grand Theft Auto: San Andreas",y:2004,d:"Rockstar North",g:"Action",k:"singleplayer,open world"},
{id:"mgs3",t:"Metal Gear Solid 3: Snake Eater",y:2004,d:"Konami",g:"Action",k:"singleplayer,story-driven"},
{id:"mgsv",t:"Metal Gear Solid V: The Phantom Pain",y:2015,d:"Kojima Productions",g:"Action",k:"singleplayer,open world,story-driven"},
{id:"deathstranding",t:"Death Stranding",y:2019,d:"Kojima Productions",g:"Action",k:"singleplayer,open world,story-driven,atmospheric"},
{id:"spiderman",t:"Marvel's Spider-Man",y:2018,d:"Insomniac Games",g:"Action",k:"singleplayer,open world,story-driven"},
{id:"arkhamcity",t:"Batman: Arkham City",y:2011,d:"Rocksteady Studios",g:"Action",k:"singleplayer,story-driven"},
{id:"ac2",t:"Assassin's Creed II",y:2009,d:"Ubisoft Montreal",g:"Action",k:"singleplayer"},
{id:"dmc5",t:"Devil May Cry 5",y:2019,d:"Capcom",g:"Action",k:"singleplayer,hard"},
{id:"nier",t:"NieR: Automata",y:2017,d:"PlatinumGames",g:"Action",k:"singleplayer,story-driven,atmospheric"},
{id:"tsushima",t:"Ghost of Tsushima",y:2020,d:"Sucker Punch",g:"Action",k:"singleplayer,open world,story-driven,atmospheric"},
{id:"horizon",t:"Horizon Zero Dawn",y:2017,d:"Guerrilla Games",g:"Action",k:"singleplayer,open world,story-driven,atmospheric"},
{id:"yakuza0",t:"Yakuza 0",y:2015,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"fortnite",t:"Fortnite",y:2017,d:"Epic Games",g:"Action",k:"multiplayer"},
{id:"farcry3",t:"Far Cry 3",y:2012,d:"Ubisoft Montreal",g:"FPS",k:"singleplayer,open world"},
{id:"cod4",t:"Call of Duty 4: Modern Warfare",y:2007,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer"},
{id:"csgo",t:"Counter-Strike: Global Offensive",y:2012,d:"Valve",g:"FPS",k:"multiplayer"},
{id:"valorant",t:"Valorant",y:2020,d:"Riot Games",g:"FPS",k:"multiplayer"},
{id:"overwatch",t:"Overwatch",y:2016,d:"Blizzard",g:"FPS",k:"multiplayer"},
{id:"apex",t:"Apex Legends",y:2019,d:"Respawn",g:"FPS",k:"multiplayer"},
{id:"bioshock",t:"BioShock",y:2007,d:"2K Boston",g:"FPS",k:"singleplayer,story-driven,atmospheric"},
{id:"stalker",t:"S.T.A.L.K.E.R.: Shadow of Chernobyl",y:2007,d:"GSC Game World",g:"FPS",k:"singleplayer,open world,atmospheric,hard"},
{id:"halo",t:"Halo: Combat Evolved",y:2001,d:"Bungie",g:"FPS",k:"singleplayer"},
{id:"titanfall2",t:"Titanfall 2",y:2016,d:"Respawn",g:"FPS",k:"singleplayer,multiplayer"},
{id:"pubg",t:"PUBG: Battlegrounds",y:2017,d:"Krafton",g:"FPS",k:"multiplayer"},
{id:"fnv",t:"Fallout: New Vegas",y:2010,d:"Obsidian",g:"RPG",k:"singleplayer,open world,story-driven"},
{id:"skyrim",t:"The Elder Scrolls V: Skyrim",y:2011,d:"Bethesda Game Studios",g:"RPG",k:"singleplayer,open world"},
{id:"dao",t:"Dragon Age: Origins",y:2009,d:"BioWare",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff7",t:"Final Fantasy VII",y:1997,d:"Square",g:"RPG",k:"singleplayer,story-driven,atmospheric,turn-based"},
{id:"ff7r",t:"Final Fantasy VII Remake",y:2020,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ffx",t:"Final Fantasy X",y:2001,d:"Square",g:"RPG",k:"singleplayer,story-driven,atmospheric,turn-based"},
{id:"p4g",t:"Persona 4 Golden",y:2012,d:"Atlus",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"pokered",t:"Pokémon Red and Blue",y:1996,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based"},
{id:"chrono",t:"Chrono Trigger",y:1995,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"kotor",t:"Star Wars: Knights of the Old Republic",y:2003,d:"BioWare",g:"RPG",k:"singleplayer,story-driven"},
{id:"wow",t:"World of Warcraft",y:2004,d:"Blizzard",g:"RPG",k:"multiplayer"},
{id:"diablo2",t:"Diablo II",y:2000,d:"Blizzard",g:"RPG",k:"singleplayer,multiplayer,co-op"},
{id:"mario64",t:"Super Mario 64",y:1996,d:"Nintendo",g:"Platformer",k:"singleplayer"},
{id:"sonic2",t:"Sonic the Hedgehog 2",y:1992,d:"Sega",g:"Platformer",k:"singleplayer,short,pixel art"},
{id:"ori",t:"Ori and the Blind Forest",y:2015,d:"Moon Studios",g:"Platformer",k:"indie,singleplayer,atmospheric"},
{id:"cuphead",t:"Cuphead",y:2017,d:"Studio MDHR",g:"Platformer",k:"indie,singleplayer,multiplayer,co-op,local co-op,hard,short"},
{id:"rayman",t:"Rayman Legends",y:2013,d:"Ubisoft Montpellier",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"shovel",t:"Shovel Knight",y:2014,d:"Yacht Club Games",g:"Platformer",k:"indie,singleplayer,pixel art"},
{id:"crash",t:"Crash Bandicoot N. Sane Trilogy",y:2017,d:"Vicarious Visions",g:"Platformer",k:"singleplayer"},
{id:"limbo",t:"Limbo",y:2010,d:"Playdead",g:"Platformer",k:"indie,singleplayer,atmospheric,short"},
{id:"inside",t:"Inside",y:2016,d:"Playdead",g:"Platformer",k:"indie,singleplayer,atmospheric,short"},
{id:"fallguys",t:"Fall Guys",y:2020,d:"Mediatonic",g:"Platformer",k:"multiplayer"},
{id:"lis",t:"Life Is Strange",y:2015,d:"Dontnod",g:"Adventure",k:"singleplayer,story-driven"},
{id:"twd",t:"The Walking Dead: Season One",y:2012,d:"Telltale Games",g:"Adventure",k:"singleplayer,story-driven"},
{id:"firewatch",t:"Firewatch",y:2016,d:"Campo Santo",g:"Adventure",k:"indie,singleplayer,story-driven,atmospheric,relaxing,short"},
{id:"edithfinch",t:"What Remains of Edith Finch",y:2017,d:"Giant Sparrow",g:"Adventure",k:"indie,singleplayer,story-driven,atmospheric,relaxing,short"},
{id:"uncharted4",t:"Uncharted 4: A Thief's End",y:2016,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven"},
{id:"tombraider",t:"Tomb Raider",y:2013,d:"Crystal Dynamics",g:"Adventure",k:"singleplayer,story-driven"},
{id:"journey",t:"Journey",y:2012,d:"thatgamecompany",g:"Adventure",k:"indie,singleplayer,story-driven,atmospheric,relaxing,short"},
{id:"oot",t:"The Legend of Zelda: Ocarina of Time",y:1998,d:"Nintendo",g:"Adventure",k:"singleplayer"},
{id:"totk",t:"The Legend of Zelda: Tears of the Kingdom",y:2023,d:"Nintendo",g:"Adventure",k:"singleplayer,open world"},
{id:"tetris",t:"Tetris",y:1984,d:"Alexey Pajitnov",g:"Puzzle",k:"singleplayer"},
{id:"witness",t:"The Witness",y:2016,d:"Thekla",g:"Puzzle",k:"indie,singleplayer,relaxing"},
{id:"baba",t:"Baba Is You",y:2019,d:"Hempuli",g:"Puzzle",k:"indie,singleplayer,pixel art"},
{id:"monument",t:"Monument Valley",y:2014,d:"ustwo games",g:"Puzzle",k:"indie,singleplayer,atmospheric,relaxing,short"},
{id:"sims4",t:"The Sims 4",y:2014,d:"Maxis",g:"Simulation",k:"singleplayer,relaxing"},
{id:"cities",t:"Cities: Skylines",y:2015,d:"Colossal Order",g:"Simulation",k:"indie,singleplayer,relaxing"},
{id:"acnh",t:"Animal Crossing: New Horizons",y:2020,d:"Nintendo",g:"Simulation",k:"singleplayer,relaxing"},
{id:"ets2",t:"Euro Truck Simulator 2",y:2012,d:"SCS Software",g:"Simulation",k:"indie,singleplayer,open world,relaxing"},
{id:"ksp",t:"Kerbal Space Program",y:2011,d:"Squad",g:"Simulation",k:"indie,singleplayer"},
{id:"isaac",t:"The Binding of Isaac: Rebirth",y:2014,d:"Nicalis",g:"Roguelike",k:"indie,singleplayer,multiplayer,co-op,local co-op,hard"},
{id:"slay",t:"Slay the Spire",y:2019,d:"Mega Crit",g:"Roguelike",k:"indie,singleplayer,turn-based"},
{id:"deadcells",t:"Dead Cells",y:2018,d:"Motion Twin",g:"Roguelike",k:"indie,singleplayer,hard,pixel art"},
{id:"ror2",t:"Risk of Rain 2",y:2019,d:"Hopoo Games",g:"Roguelike",k:"indie,singleplayer,multiplayer,co-op,hard"},
{id:"darkestdungeon",t:"Darkest Dungeon",y:2016,d:"Red Hook Studios",g:"Roguelike",k:"indie,singleplayer,atmospheric,hard,turn-based"},
{id:"re2",t:"Resident Evil 2",y:2019,d:"Capcom",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"deadspace",t:"Dead Space",y:2008,d:"Visceral Games",g:"Horror",k:"singleplayer,atmospheric"},
{id:"amnesia",t:"Amnesia: The Dark Descent",y:2010,d:"Frictional Games",g:"Horror",k:"indie,singleplayer,story-driven,atmospheric,short"},
{id:"outlast",t:"Outlast",y:2013,d:"Red Barrels",g:"Horror",k:"indie,singleplayer,atmospheric,short"},
{id:"fnaf",t:"Five Nights at Freddy's",y:2014,d:"Scott Cawthon",g:"Horror",k:"indie,singleplayer,short"},
{id:"alieniso",t:"Alien: Isolation",y:2014,d:"Creative Assembly",g:"Horror",k:"singleplayer,atmospheric"},
{id:"rust",t:"Rust",y:2018,d:"Facepunch Studios",g:"Sandbox",k:"multiplayer,open world,survival"},
{id:"subnautica",t:"Subnautica",y:2018,d:"Unknown Worlds",g:"Sandbox",k:"indie,singleplayer,open world,atmospheric,relaxing,survival"},
{id:"valheim",t:"Valheim",y:2021,d:"Iron Gate Studio",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,open world,atmospheric,survival"},
{id:"nms",t:"No Man's Sky",y:2016,d:"Hello Games",g:"Sandbox",k:"indie,singleplayer,open world,atmospheric,relaxing"},
{id:"civ6",t:"Sid Meier's Civilization VI",y:2016,d:"Firaxis",g:"Strategy",k:"singleplayer,turn-based"},
{id:"aoe2",t:"Age of Empires II",y:1999,d:"Ensemble Studios",g:"Strategy",k:"singleplayer"},
{id:"sc2",t:"StarCraft II: Wings of Liberty",y:2010,d:"Blizzard",g:"Strategy",k:"singleplayer"},
{id:"xcom2",t:"XCOM 2",y:2016,d:"Firaxis",g:"Strategy",k:"singleplayer,hard,turn-based"},
{id:"wc3",t:"Warcraft III: Reign of Chaos",y:2002,d:"Blizzard",g:"Strategy",k:"singleplayer"},
{id:"lol",t:"League of Legends",y:2009,d:"Riot Games",g:"Strategy",k:"multiplayer"},
{id:"dota2",t:"Dota 2",y:2013,d:"Valve",g:"Strategy",k:"multiplayer"},
{id:"fh5",t:"Forza Horizon 5",y:2021,d:"Playground Games",g:"Racing",k:"multiplayer,open world"},
{id:"mk8",t:"Mario Kart 8 Deluxe",y:2017,d:"Nintendo",g:"Racing",k:"multiplayer"},
{id:"nfsmw",t:"Need for Speed: Most Wanted",y:2005,d:"EA Black Box",g:"Racing",k:"multiplayer,open world"},
{id:"dirt2",t:"DiRT Rally 2.0",y:2019,d:"Codemasters",g:"Racing",k:"multiplayer,hard"},
{id:"fifa23",t:"FIFA 23",y:2022,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"rocketleague",t:"Rocket League",y:2015,d:"Psyonix",g:"Sports",k:"multiplayer"},
{id:"sf6",t:"Street Fighter 6",y:2023,d:"Capcom",g:"Fighting",k:"multiplayer"},
{id:"tekken7",t:"Tekken 7",y:2015,d:"Bandai Namco",g:"Fighting",k:"multiplayer"},
{id:"mk11",t:"Mortal Kombat 11",y:2019,d:"NetherRealm Studios",g:"Fighting",k:"multiplayer"},
{id:"smashu",t:"Super Smash Bros. Ultimate",y:2018,d:"Sora Ltd.",g:"Fighting",k:"multiplayer"},
{id:"amongus",t:"Among Us",y:2018,d:"InnerSloth",g:"Other",k:"indie,multiplayer"},
{id:"witcher2",t:"The Witcher 2: Assassins of Kings",y:2011,d:"CD Projekt RED",g:"RPG",k:"singleplayer,story-driven"},
{id:"fallout4",t:"Fallout 4",y:2015,d:"Bethesda",g:"RPG",k:"singleplayer,open world,story-driven"},
{id:"falloutnv",t:"Fallout: New Vegas",y:2010,d:"Obsidian",g:"RPG",k:"singleplayer,story-driven"},
{id:"morrowind",t:"The Elder Scrolls III: Morrowind",y:2002,d:"Bethesda",g:"RPG",k:"singleplayer,open world"},
{id:"ff14",t:"Final Fantasy XIV",y:2013,d:"Square Enix",g:"RPG",k:"multiplayer"},
{id:"persona3r",t:"Persona 3 Reload",y:2024,d:"Atlus",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"pathfinderwotr",t:"Pathfinder: Wrath of the Righteous",y:2021,d:"Owlcat Games",g:"RPG",k:"singleplayer,turn-based"},
{id:"pillars",t:"Pillars of Eternity",y:2015,d:"Obsidian",g:"RPG",k:"singleplayer,story-driven"},
{id:"xenoblade",t:"Xenoblade Chronicles 3",y:2022,d:"Monolith Soft",g:"RPG",k:"singleplayer,open world"},
{id:"lies",t:"Lies of P",y:2023,d:"Neowiz",g:"RPG",k:"singleplayer,atmospheric,hard"},
{id:"blackmyth",t:"Black Myth: Wukong",y:2024,d:"Game Science",g:"Action",k:"singleplayer,story-driven,atmospheric,hard"},
{id:"lethal",t:"Lethal Company",y:2023,d:"Zeekerss",g:"Horror",k:"indie,singleplayer,multiplayer,co-op"},
{id:"phasmo",t:"Phasmophobia",y:2020,d:"Kinetic Games",g:"Horror",k:"indie,singleplayer,multiplayer,co-op"},
{id:"re7",t:"Resident Evil 7: Biohazard",y:2017,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"re village".replace(" ",""),t:"Resident Evil Village",y:2021,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"dbd",t:"Dead by Daylight",y:2016,d:"Behaviour Interactive",g:"Horror",k:"multiplayer"},
{id:"soma",t:"SOMA",y:2015,d:"Frictional Games",g:"Horror",k:"indie,singleplayer,story-driven,atmospheric"},
{id:"cod_mw2",t:"Call of Duty: Modern Warfare 2",y:2009,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer"},
{id:"bf4",t:"Battlefield 4",y:2013,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"bf1",t:"Battlefield 1",y:2016,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"r6siege",t:"Tom Clancy’s Rainbow Six Siege",y:2015,d:"Ubisoft Montreal",g:"FPS",k:"multiplayer"},
{id:"tf2",t:"Team Fortress 2",y:2007,d:"Valve",g:"FPS",k:"multiplayer"},
{id:"l4d2",t:"Left 4 Dead 2",y:2009,d:"Valve",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"hlalyx",t:"Half-Life: Alyx",y:2020,d:"Valve",g:"FPS",k:"singleplayer"},
{id:"doometernal",t:"DOOM Eternal",y:2020,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"metro2033",t:"Metro 2033",y:2010,d:"4A Games",g:"FPS",k:"singleplayer,story-driven,atmospheric"},
{id:"cs2",t:"Counter-Strike 2",y:2023,d:"Valve",g:"FPS",k:"multiplayer"},
{id:"helldivers2",t:"Helldivers 2",y:2024,d:"Arrowhead",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"palworld",t:"Palworld",y:2024,d:"Pocketpair",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,open world,survival"},
{id:"satisfactory",t:"Satisfactory",y:2020,d:"Coffee Stain",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op"},
{id:"factorio",t:"Factorio",y:2020,d:"Wube Software",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op"},
{id:"rimworld",t:"RimWorld",y:2018,d:"Ludeon Studios",g:"Strategy",k:"indie,singleplayer,hard,survival"},
{id:"dwarf",t:"Dwarf Fortress",y:2022,d:"Bay 12 Games",g:"Simulation",k:"indie,singleplayer,hard"},
{id:"prj zomboid".replace(" ",""),t:"Project Zomboid",y:2013,d:"The Indie Stone",g:"Sandbox",k:"indie,singleplayer"},
{id:"ark",t:"ARK: Survival Evolved",y:2017,d:"Studio Wildcard",g:"Sandbox",k:"singleplayer,multiplayer,co-op,open world,survival"},
{id:"forest",t:"The Forest",y:2018,d:"Endnight Games",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,open world,atmospheric,survival"},
{id:"sotf",t:"Sons of the Forest",y:2023,d:"Endnight Games",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,open world,atmospheric,survival"},
{id:"7dtd",t:"7 Days to Die",y:2013,d:"The Fun Pimps",g:"Sandbox",k:"singleplayer,multiplayer,co-op,open world,survival"},
{id:"gtfo",t:"Don’t Starve",y:2013,d:"Klei Entertainment",g:"Sandbox",k:"indie,singleplayer,survival"},
{id:"coreKeeper".toLowerCase(),t:"Core Keeper",y:2022,d:"Pugstorm",g:"Sandbox",k:"singleplayer"},
{id:"vampsurv",t:"Vampire Survivors",y:2022,d:"poncle",g:"Roguelike",k:"indie,singleplayer,pixel art"},
{id:"balatro",t:"Balatro",y:2024,d:"LocalThunk",g:"Roguelike",k:"indie,singleplayer"},
{id:"hades2",t:"Hades II",y:2024,d:"Supergiant Games",g:"Roguelike",k:"indie,singleplayer,hard"},
{id:"enterGungeon".toLowerCase(),t:"Enter the Gungeon",y:2016,d:"Dodge Roll",g:"Roguelike",k:"indie,singleplayer,pixel art"},
{id:"risk2",t:"Risk of Rain Returns",y:2023,d:"Hopoo Games",g:"Roguelike",k:"indie,singleplayer,multiplayer,co-op,hard,pixel art"},
{id:"ftl",t:"FTL: Faster Than Light",y:2012,d:"Subset Games",g:"Roguelike",k:"indie,singleplayer,hard,pixel art"},
{id:"hollowsilk",t:"Hollow Knight: Silksong",y:2025,d:"Team Cherry",g:"Platformer",k:"indie,singleplayer,hard"},
{id:"sm",t:"Super Meat Boy",y:2010,d:"Team Meat",g:"Platformer",k:"indie,singleplayer,hard,short"},
{id:"kirbyfl",t:"Kirby and the Forgotten Land",y:2022,d:"HAL Laboratory",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op,relaxing"},
{id:"ratchet",t:"Ratchet & Clank: Rift Apart",y:2021,d:"Insomniac Games",g:"Platformer",k:"singleplayer"},
{id:"astrobot",t:"Astro Bot",y:2024,d:"Team Asobi",g:"Platformer",k:"singleplayer"},
{id:"sonicmania",t:"Sonic Mania",y:2017,d:"Christian Whitehead",g:"Platformer",k:"indie,singleplayer,multiplayer,co-op,local co-op,short,pixel art"},
{id:"mariokart",t:"Mario Kart 8 Deluxe",y:2017,d:"Nintendo",g:"Racing",k:"multiplayer"},
{id:"gt7",t:"Gran Turismo 7",y:2022,d:"Polyphony Digital",g:"Racing",k:"multiplayer"},
{id:"forza4",t:"Forza Motorsport",y:2023,d:"Turn 10 Studios",g:"Racing",k:"multiplayer"},
{id:"nfsheat",t:"Need for Speed Heat",y:2019,d:"Ghost Games",g:"Racing",k:"multiplayer,open world"},
{id:"fifa24",t:"EA Sports FC 24",y:2023,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"nba2k24",t:"NBA 2K24",y:2023,d:"Visual Concepts",g:"Sports",k:"multiplayer"},
{id:"pes",t:"eFootball Pro Evolution Soccer 2018",y:2017,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"tonyhawk",t:"Tony Hawk’s Pro Skater 1 + 2",y:2020,d:"Vicarious Visions",g:"Sports",k:"multiplayer"},
{id:"mkx",t:"Mortal Kombat X",y:2015,d:"NetherRealm Studios",g:"Fighting",k:"multiplayer"},
{id:"guiltygear",t:"Guilty Gear -Strive-",y:2021,d:"Arc System Works",g:"Fighting",k:"multiplayer"},
{id:"brawlhalla",t:"Brawlhalla",y:2017,d:"Blue Mammoth Games",g:"Fighting",k:"multiplayer"},
{id:"ageofwonders4",t:"Age of Wonders 4",y:2023,d:"Triumph Studios",g:"Strategy",k:"singleplayer,turn-based"},
{id:"totalwarwh3",t:"Total War: Warhammer III",y:2022,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"stellaris",t:"Stellaris",y:2016,d:"Paradox",g:"Strategy",k:"singleplayer"},
{id:"eu4",t:"Europa Universalis IV",y:2013,d:"Paradox",g:"Strategy",k:"singleplayer"},
{id:"hoi4",t:"Hearts of Iron IV",y:2016,d:"Paradox",g:"Strategy",k:"singleplayer"},
{id:"ck3",t:"Crusader Kings III",y:2020,d:"Paradox",g:"Strategy",k:"singleplayer"},
{id:"xcom",t:"XCOM: Enemy Unknown",y:2012,d:"Firaxis",g:"Strategy",k:"singleplayer,hard,turn-based"},
{id:"bf",t:"Into the Breach",y:2018,d:"Subset Games",g:"Strategy",k:"indie,singleplayer,hard,turn-based"},
{id:"kenshi",t:"Kenshi",y:2018,d:"Lo-Fi Games",g:"RPG",k:"indie,singleplayer,open world,atmospheric,hard,survival"},
{id:"disco2",t:"Return of the Obra Dinn",y:2018,d:"Lucas Pope",g:"Puzzle",k:"indie,singleplayer,atmospheric"},
{id:"talos",t:"The Talos Principle",y:2014,d:"Croteam",g:"Puzzle",k:"indie,singleplayer,relaxing"},
{id:"portal1",t:"Portal",y:2007,d:"Valve",g:"Puzzle",k:"singleplayer,relaxing,short"},
{id:"humanfall",t:"Human: Fall Flat",y:2016,d:"No Brakes Games",g:"Puzzle",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"itt",t:"It Takes Two",y:2021,d:"Hazelight",g:"Adventure",k:"singleplayer,multiplayer,co-op,local co-op,story-driven"},
{id:"unravel",t:"Unravel Two",y:2018,d:"Coldwood",g:"Platformer",k:"indie,singleplayer,multiplayer,co-op,local co-op,atmospheric,relaxing,short"},
{id:"gris",t:"GRIS",y:2018,d:"Nomada Studio",g:"Adventure",k:"indie,singleplayer,story-driven,atmospheric,relaxing,short"},
{id:"hellblade",t:"Hellblade: Senua’s Sacrifice",y:2017,d:"Ninja Theory",g:"Adventure",k:"singleplayer,story-driven,atmospheric,short"},
{id:"detroit",t:"Detroit: Become Human",y:2018,d:"Quantic Dream",g:"Adventure",k:"singleplayer,story-driven"},
{id:"heavyrain",t:"Heavy Rain",y:2010,d:"Quantic Dream",g:"Adventure",k:"singleplayer,story-driven"},
{id:"lifeisstrange2",t:"Life is Strange 2",y:2018,d:"Dontnod",g:"Adventure",k:"singleplayer,story-driven"},
{id:"wolfamong",t:"The Wolf Among Us",y:2013,d:"Telltale Games",g:"Adventure",k:"singleplayer,story-driven"},
{id:"mafia",t:"Mafia: Definitive Edition",y:2020,d:"Hangar 13",g:"Action",k:"singleplayer,story-driven"},
{id:"watchdogs",t:"Watch Dogs 2",y:2016,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"acvalhalla",t:"Assassin’s Creed Valhalla",y:2020,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"acblackflag",t:"Assassin’s Creed IV: Black Flag",y:2013,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"farcry6",t:"Far Cry 6",y:2021,d:"Ubisoft Toronto",g:"FPS",k:"singleplayer,open world"},
{id:"jedisurvivor",t:"Star Wars Jedi: Survivor",y:2023,d:"Respawn",g:"Action",k:"singleplayer"},
{id:"gowragnarok",t:"God of War Ragnarök",y:2022,d:"Santa Monica Studio",g:"Action",k:"singleplayer,story-driven"},
{id:"tlou2",t:"The Last of Us Part II",y:2020,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven"},
{id:"rdr1",t:"Red Dead Redemption",y:2010,d:"Rockstar San Diego",g:"Action",k:"singleplayer,open world,story-driven"},
{id:"gta4",t:"Grand Theft Auto IV",y:2008,d:"Rockstar North",g:"Action",k:"singleplayer,open world"},
{id:"gtavc",t:"Grand Theft Auto: Vice City",y:2002,d:"Rockstar North",g:"Action",k:"singleplayer,open world"},
{id:"maxpayne",t:"Max Payne 3",y:2012,d:"Rockstar Studios",g:"Action",k:"singleplayer,story-driven"},
{id:"mc",t:"Mirror’s Edge",y:2008,d:"DICE",g:"Action",k:"singleplayer"},
{id:"pokemonsv",t:"Pokémon Scarlet",y:2022,d:"Game Freak",g:"RPG",k:"singleplayer,open world"},
{id:"pokemonla",t:"Pokémon Legends: Arceus",y:2022,d:"Game Freak",g:"RPG",k:"singleplayer,open world"},
{id:"fireemblem",t:"Fire Emblem: Three Houses",y:2019,d:"Intelligent Systems",g:"Strategy",k:"singleplayer,turn-based"},
{id:"animalwell",t:"Animal Well",y:2024,d:"Billy Basso",g:"Puzzle",k:"indie,singleplayer,atmospheric,short,pixel art"},
{id:"cocoon",t:"Cocoon",y:2023,d:"Geometric Interactive",g:"Puzzle",k:"indie,singleplayer,atmospheric,relaxing,short"},
{id:"dave",t:"Dave the Diver",y:2023,d:"MINTROCKET",g:"Adventure",k:"indie,singleplayer,relaxing,pixel art"},
{id:"cult",t:"Cult of the Lamb",y:2022,d:"Massive Monster",g:"Roguelike",k:"indie,singleplayer"},
{id:"tunic",t:"Tunic",y:2022,d:"Andrew Shouldice",g:"Adventure",k:"indie,singleplayer,story-driven,atmospheric"},
{id:"hifirush",t:"Hi-Fi Rush",y:2023,d:"Tango Gameworks",g:"Action",k:"singleplayer"},
{id:"alanwake2",t:"Alan Wake 2",y:2023,d:"Remedy",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"control",t:"Control",y:2019,d:"Remedy",g:"Action",k:"singleplayer,story-driven,atmospheric"},
{id:"starfield",t:"Starfield",y:2023,d:"Bethesda",g:"RPG",k:"singleplayer,open world"},
{id:"dragonsdogma2",t:"Dragon’s Dogma 2",y:2024,d:"Capcom",g:"RPG",k:"singleplayer,open world"},
{id:"mhworld",t:"Monster Hunter: World",y:2018,d:"Capcom",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"mhwilds",t:"Monster Hunter Wilds",y:2025,d:"Capcom",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"ds3",t:"Dark Souls III",y:2016,d:"FromSoftware",g:"RPG",k:"singleplayer,multiplayer,co-op,atmospheric,hard"},
{id:"ds2",t:"Dark Souls II",y:2014,d:"FromSoftware",g:"RPG",k:"singleplayer,multiplayer,co-op,atmospheric,hard"},
{id:"armoredcore6",t:"Armored Core VI",y:2023,d:"FromSoftware",g:"Action",k:"singleplayer,hard"},
{id:"erdtree",t:"Elden Ring Nightreign",y:2025,d:"FromSoftware",g:"Action",k:"singleplayer,multiplayer,co-op,hard"},

{id:"marvelrivals",t:"Marvel Rivals",y:2024,d:"NetEase Games",g:"Action",k:"multiplayer"},
{id:"warframe",t:"Warframe",y:2013,d:"Digital Extremes",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"destiny2",t:"Destiny 2",y:2017,d:"Bungie",g:"FPS",k:"singleplayer,multiplayer,co-op"},
{id:"warthunder",t:"War Thunder",y:2013,d:"Gaijin Entertainment",g:"Action",k:"singleplayer"},
{id:"thefinals",t:"THE FINALS",y:2023,d:"Embark Studios",g:"FPS",k:"multiplayer"},
{id:"deltaforce",t:"Delta Force",y:2024,d:"Team Jade",g:"FPS",k:"multiplayer"},
{id:"naraka",t:"NARAKA: BLADEPOINT",y:2021,d:"24 Entertainment",g:"Action",k:"multiplayer"},
{id:"hogwartslegacy",t:"Hogwarts Legacy",y:2023,d:"Avalanche Software",g:"RPG",k:"singleplayer,open world,story-driven"},
{id:"clairobscur",t:"Clair Obscur: Expedition 33",y:2025,d:"Sandfall Interactive",g:"RPG",k:"indie,singleplayer,story-driven,atmospheric,turn-based"},
{id:"schedule1",t:"Schedule I",y:2025,d:"TVGS",g:"Simulation",k:"indie,singleplayer"},
{id:"repo",t:"R.E.P.O.",y:2024,d:"semiwork",g:"Horror",k:"indie,singleplayer,multiplayer,co-op"},
{id:"peak",t:"PEAK",y:2025,d:"Aggro Crab; Landfall",g:"Adventure",k:"indie,singleplayer,multiplayer,co-op,story-driven"},
{id:"arcraiders",t:"ARC Raiders",y:2025,d:"Embark Studios",g:"Action",k:"multiplayer"},
{id:"battlefield6",t:"Battlefield 6",y:2025,d:"Battlefield Studios",g:"FPS",k:"multiplayer"},
{id:"borderlands4",t:"Borderlands 4",y:2025,d:"Gearbox Software",g:"FPS",k:"singleplayer,multiplayer,co-op"},
{id:"poe2",t:"Path of Exile 2",y:2024,d:"Grinding Gear Games",g:"RPG",k:"singleplayer,multiplayer,co-op"},
{id:"dyinglight2",t:"Dying Light 2 Stay Human",y:2022,d:"Techland",g:"Action",k:"singleplayer,multiplayer,co-op,open world"},
{id:"dontstarvetogether",t:"Don’t Starve Together",y:2016,d:"Klei Entertainment",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,survival"},
{id:"fc25",t:"EA SPORTS FC 25",y:2024,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fc26",t:"EA SPORTS FC 26",y:2025,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"farmingsim25",t:"Farming Simulator 25",y:2024,d:"GIANTS Software",g:"Simulation",k:"singleplayer,open world,relaxing"},
{id:"cities2",t:"Cities: Skylines II",y:2023,d:"Colossal Order",g:"Simulation",k:"indie,singleplayer,relaxing"},
{id:"civ7",t:"Sid Meier’s Civilization VII",y:2025,d:"Firaxis Games",g:"Strategy",k:"singleplayer,turn-based"},
{id:"slay2",t:"Slay the Spire 2",y:2026,d:"Mega Crit",g:"Roguelike",k:"indie,singleplayer"},
{id:"kcd2",t:"Kingdom Come: Deliverance II",y:2025,d:"Warhorse Studios",g:"RPG",k:"singleplayer,open world,story-driven,hard"},
{id:"readynot",t:"Ready or Not",y:2023,d:"VOID Interactive",g:"FPS",k:"indie,singleplayer,multiplayer,co-op,hard"},
{id:"dayz",t:"DayZ",y:2018,d:"Bohemia Interactive",g:"Sandbox",k:"multiplayer,open world,atmospheric,hard,survival"},
{id:"garrysmod",t:"Garry’s Mod",y:2006,d:"Facepunch Studios",g:"Sandbox",k:"indie,singleplayer"},
{id:"geometrydash",t:"Geometry Dash",y:2014,d:"RobTop Games",g:"Platformer",k:"indie,multiplayer,hard"},
{id:"beamng",t:"BeamNG.drive",y:2015,d:"BeamNG",g:"Racing",k:"indie,singleplayer"},
{id:"bannerlord",t:"Mount & Blade II: Bannerlord",y:2022,d:"TaleWorlds Entertainment",g:"RPG",k:"singleplayer,open world"},
{id:"oncehuman",t:"Once Human",y:2024,d:"Starry Studio",g:"Sandbox",k:"singleplayer,multiplayer,co-op,open world,survival"},
{id:"fallout76",t:"Fallout 76",y:2018,d:"Bethesda Game Studios",g:"RPG",k:"singleplayer,multiplayer,co-op,open world,survival"},
{id:"payday2",t:"PAYDAY 2",y:2013,d:"OVERKILL Software",g:"FPS",k:"singleplayer,multiplayer,co-op"},
{id:"duneawakening",t:"Dune: Awakening",y:2025,d:"Funcom",g:"Sandbox",k:"singleplayer,multiplayer,co-op,open world,survival"},
{id:"outlasttrials",t:"The Outlast Trials",y:2024,d:"Red Barrels",g:"Horror",k:"multiplayer"},
{id:"division2",t:"Tom Clancy’s The Division 2",y:2019,d:"Massive Entertainment",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"smite2",t:"SMITE 2",y:2024,d:"Titan Forge Games",g:"Action",k:"multiplayer"},
{id:"enshrouded",t:"Enshrouded",y:2024,d:"Keen Games",g:"Sandbox",k:"indie,singleplayer,multiplayer,co-op,open world,hard,survival"},
{id:"spacemarine2",t:"Warhammer 40,000: Space Marine 2",y:2024,d:"Saber Interactive",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"efootball",t:"eFootball",y:2021,d:"KONAMI",g:"Sports",k:"multiplayer"},
{id:"acshadows",t:"Assassin’s Creed Shadows",y:2025,d:"Ubisoft",g:"Action",k:"singleplayer,open world"},
{id:"stellarblade",t:"Stellar Blade",y:2025,d:"SHIFT UP Corporation",g:"Action",k:"singleplayer,story-driven"},
{id:"splitfiction",t:"Split Fiction",y:2025,d:"Hazelight Studios",g:"Adventure",k:"singleplayer,multiplayer,co-op,local co-op,story-driven"},
{id:"indianajones",t:"Indiana Jones and the Great Circle",y:2024,d:"MachineGames",g:"Adventure",k:"singleplayer,story-driven"},
{id:"metroexodus",t:"Metro Exodus",y:2019,d:"4A Games",g:"FPS",k:"singleplayer,story-driven,atmospheric"},
{id:"re3",t:"Resident Evil 3",y:2020,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"firstdescendant",t:"The First Descendant",y:2024,d:"NEXON Games",g:"Action",k:"multiplayer"},
{id:"blackops3",t:"Call of Duty: Black Ops III",y:2015,d:"Treyarch",g:"FPS",k:"singleplayer,multiplayer"},
{id:"arksurvivalascended",t:"ARK: Survival Ascended",y:2023,d:"Studio Wildcard",g:"Sandbox",k:"singleplayer,multiplayer,co-op,open world,survival"},
{id:"fm26",t:"Football Manager 26",y:2025,d:"Sports Interactive",g:"Sports",k:"singleplayer"},
{id:"oblivionremastered",t:"The Elder Scrolls IV: Oblivion Remastered",y:2025,d:"Virtuos; Bethesda",g:"RPG",k:"singleplayer,open world"},
{id:"wutheringwaves",t:"Wuthering Waves",y:2024,d:"Kuro Games",g:"RPG",k:"singleplayer,multiplayer,co-op,open world"},
{id:"hellletloose",t:"Hell Let Loose",y:2021,d:"Black Matter",g:"FPS",k:"multiplayer"},
{id:"arma3",t:"Arma 3",y:2013,d:"Bohemia Interactive",g:"FPS",k:"singleplayer,multiplayer,hard"},
{id:"mhrise",t:"MONSTER HUNTER RISE",y:2022,d:"CAPCOM",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"huntshowdown",t:"Hunt: Showdown 1896",y:2019,d:"Crytek",g:"FPS",k:"multiplayer,hard"},
{id:"overcooked2",t:"Overcooked! 2",y:2018,d:"Team17; Ghost Town Games",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"payday3",t:"PAYDAY 3",y:2023,d:"Starbreeze Studios",g:"FPS",k:"singleplayer,multiplayer,co-op"},
{id:"forzahorizon6",t:"Forza Horizon 6",y:2026,d:"Playground Games",g:"Racing",k:"multiplayer,open world"},
{id:"wherewindsmeet",t:"Where Winds Meet",y:2025,d:"Everstone Studio",g:"RPG",k:"singleplayer,open world"},
{id:"gears5",t:"Gears 5",y:2019,d:"The Coalition",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"elderscrollsonline",t:"The Elder Scrolls Online",y:2014,d:"ZeniMax Online Studios",g:"RPG",k:"singleplayer,multiplayer,co-op,open world"},
{id:"darktide",t:"Warhammer 40,000: Darktide",y:2022,d:"Fatshark",g:"Action",k:"singleplayer,multiplayer,co-op"},
/* --- series completions --- */
{id:"tr1996",t:"Tomb Raider (1996)",y:1996,d:"Core Design",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider (1996 video game)"},
{id:"tr2",t:"Tomb Raider II",y:1997,d:"Core Design",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider II"},
{id:"tr3",t:"Tomb Raider III: Adventures of Lara Croft",y:1998,d:"Core Design",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider III"},
{id:"tr4",t:"Tomb Raider: The Last Revelation",y:1999,d:"Core Design",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider: The Last Revelation"},
{id:"tr5",t:"Tomb Raider: Chronicles",y:2000,d:"Core Design",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider: Chronicles"},
{id:"tr6",t:"Tomb Raider: The Angel of Darkness",y:2003,d:"Core Design",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider: The Angel of Darkness"},
{id:"trlegend",t:"Tomb Raider: Legend",y:2006,d:"Crystal Dynamics",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider: Legend"},
{id:"tranniv",t:"Tomb Raider: Anniversary",y:2007,d:"Crystal Dynamics",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider: Anniversary"},
{id:"trunder",t:"Tomb Raider: Underworld",y:2008,d:"Crystal Dynamics",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider: Underworld"},
{id:"trrise",t:"Rise of the Tomb Raider",y:2015,d:"Crystal Dynamics",g:"Adventure",k:"singleplayer,story-driven"},
{id:"trshadow",t:"Shadow of the Tomb Raider",y:2018,d:"Eidos-Montréal",g:"Adventure",k:"singleplayer,story-driven"},
{id:"trrem13",t:"Tomb Raider I-III Remastered",y:2024,d:"Aspyr",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider I–III Remastered"},
{id:"trrem46",t:"Tomb Raider IV-VI Remastered",y:2025,d:"Aspyr",g:"Adventure",k:"singleplayer,story-driven",w:"Tomb Raider IV–VI Remastered"},
{id:"trgol",t:"Lara Croft and the Guardian of Light",y:2010,d:"Crystal Dynamics",g:"Action",k:"singleplayer,short",w:"Lara Croft and the Guardian of Light"},
{id:"trtoo",t:"Lara Croft and the Temple of Osiris",y:2014,d:"Crystal Dynamics",g:"Action",k:"singleplayer,short",w:"Lara Croft and the Temple of Osiris"},
{id:"re1hd",t:"Resident Evil HD Remaster",y:2015,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"re0",t:"Resident Evil 0",y:2016,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"rev1",t:"Resident Evil: Revelations",y:2013,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"rev2",t:"Resident Evil: Revelations 2",y:2015,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"re5",t:"Resident Evil 5",y:2009,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"re6",t:"Resident Evil 6",y:2012,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"re4r",t:"Resident Evil 4 (Remake)",y:2023,d:"Capcom",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"rereq",t:"Resident Evil Requiem",y:2026,d:"Capcom",g:"Horror",k:"singleplayer,atmospheric"},
{id:"sh1",t:"Silent Hill",y:1999,d:"Konami",g:"Horror",k:"singleplayer,story-driven,atmospheric",w:"Silent Hill (video game)"},
{id:"sh3",t:"Silent Hill 3",y:2003,d:"Konami",g:"Horror",k:"singleplayer,story-driven,atmospheric",w:"Silent Hill 3"},
{id:"sh4",t:"Silent Hill 4: The Room",y:2004,d:"Konami",g:"Horror",k:"singleplayer,story-driven,atmospheric,short",w:"Silent Hill 4: The Room"},
{id:"shorigins",t:"Silent Hill: Origins",y:2007,d:"Climax Studios",g:"Horror",k:"singleplayer,story-driven,atmospheric",w:"Silent Hill: Origins"},
{id:"shhome",t:"Silent Hill: Homecoming",y:2008,d:"Double Helix Games",g:"Horror",k:"singleplayer,atmospheric",w:"Silent Hill: Homecoming"},
{id:"shdown",t:"Silent Hill: Downpour",y:2012,d:"Vatra Games",g:"Horror",k:"singleplayer,atmospheric",w:"Silent Hill: Downpour"},
{id:"shf",t:"Silent Hill f",y:2025,d:"NeoBards Entertainment",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"fo1",t:"Fallout",y:1997,d:"Interplay",g:"RPG",k:"singleplayer,turn-based"},
{id:"fo2",t:"Fallout 2",y:1998,d:"Black Isle Studios",g:"RPG",k:"singleplayer,turn-based"},
{id:"fo3",t:"Fallout 3",y:2008,d:"Bethesda Game Studios",g:"RPG",k:"singleplayer,open world,story-driven"},
{id:"fotactics",t:"Fallout Tactics: Brotherhood of Steel",y:2001,d:"Micro Forte",g:"Strategy",k:"singleplayer,turn-based"},
{id:"foshelter",t:"Fallout Shelter",y:2015,d:"Bethesda Game Studios",g:"Simulation",k:"singleplayer,relaxing"},
{id:"tesarena",t:"The Elder Scrolls: Arena",y:1994,d:"Bethesda Softworks",g:"RPG",k:"singleplayer",w:"The Elder Scrolls: Arena"},
{id:"tesdagger",t:"The Elder Scrolls II: Daggerfall",y:1996,d:"Bethesda Softworks",g:"RPG",k:"singleplayer",w:"The Elder Scrolls II: Daggerfall"},
{id:"tesoblivion",t:"The Elder Scrolls IV: Oblivion",y:2006,d:"Bethesda Game Studios",g:"RPG",k:"singleplayer,open world"},
{id:"witcher1",t:"The Witcher",y:2007,d:"CD Projekt RED",g:"RPG",k:"singleplayer,story-driven"},
{id:"thronebreaker",t:"Thronebreaker: The Witcher Tales",y:2018,d:"CD Projekt RED",g:"RPG",k:"singleplayer,story-driven,turn-based",w:"Thronebreaker: The Witcher Tales"},
{id:"gwent",t:"Gwent: The Witcher Card Game",y:2018,d:"CD Projekt RED",g:"Strategy",k:"multiplayer,turn-based",w:"Gwent (card game)"},
{id:"me1",t:"Mass Effect",y:2007,d:"BioWare",g:"RPG",k:"singleplayer,story-driven"},
{id:"me3",t:"Mass Effect 3",y:2012,d:"BioWare",g:"RPG",k:"singleplayer,story-driven",w:"Mass Effect 3"},
{id:"mea",t:"Mass Effect: Andromeda",y:2017,d:"BioWare",g:"RPG",k:"singleplayer,story-driven",w:"Mass Effect: Andromeda"},
{id:"mel",t:"Mass Effect Legendary Edition",y:2021,d:"BioWare",g:"RPG",k:"singleplayer,story-driven"},
{id:"da2",t:"Dragon Age II",y:2011,d:"BioWare",g:"RPG",k:"singleplayer,story-driven",w:"Dragon Age II"},
{id:"dai",t:"Dragon Age: Inquisition",y:2014,d:"BioWare",g:"RPG",k:"singleplayer,story-driven",w:"Dragon Age: Inquisition"},
{id:"dav",t:"Dragon Age: The Veilguard",y:2024,d:"BioWare",g:"RPG",k:"singleplayer,story-driven",w:"Dragon Age: The Veilguard"},
{id:"ac1",t:"Assassin's Creed",y:2007,d:"Ubisoft Montreal",g:"Action",k:"singleplayer"},
{id:"acb",t:"Assassin's Creed: Brotherhood",y:2010,d:"Ubisoft Montreal",g:"Action",k:"singleplayer"},
{id:"acr",t:"Assassin's Creed: Revelations",y:2011,d:"Ubisoft Montreal",g:"Action",k:"singleplayer"},
{id:"ac3",t:"Assassin's Creed III",y:2012,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"acrogue",t:"Assassin's Creed Rogue",y:2014,d:"Ubisoft Sofia",g:"Action",k:"singleplayer,open world"},
{id:"acunity",t:"Assassin's Creed Unity",y:2014,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"acsyn",t:"Assassin's Creed Syndicate",y:2015,d:"Ubisoft Quebec",g:"Action",k:"singleplayer,open world"},
{id:"acorigins",t:"Assassin's Creed Origins",y:2017,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"acodyssey",t:"Assassin's Creed Odyssey",y:2018,d:"Ubisoft Quebec",g:"Action",k:"singleplayer,open world"},
{id:"acmirage",t:"Assassin's Creed Mirage",y:2023,d:"Ubisoft Bordeaux",g:"Action",k:"singleplayer,open world",w:"Assassin's Creed Mirage"},
{id:"fc1",t:"Far Cry",y:2004,d:"Crytek",g:"FPS",k:"singleplayer"},
{id:"fc2",t:"Far Cry 2",y:2008,d:"Ubisoft Montreal",g:"FPS",k:"singleplayer,open world"},
{id:"fc4",t:"Far Cry 4",y:2014,d:"Ubisoft Montreal",g:"FPS",k:"singleplayer,open world"},
{id:"fc5",t:"Far Cry 5",y:2018,d:"Ubisoft Montreal",g:"FPS",k:"singleplayer,open world"},
{id:"fcprimal",t:"Far Cry Primal",y:2016,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"fcnd",t:"Far Cry New Dawn",y:2019,d:"Ubisoft Montreal",g:"FPS",k:"singleplayer,open world"},
{id:"fcbd",t:"Far Cry 3: Blood Dragon",y:2013,d:"Ubisoft Montreal",g:"FPS",k:"singleplayer,open world,short"},
{id:"cod1",t:"Call of Duty",y:2003,d:"Infinity Ward",g:"FPS",k:"singleplayer"},
{id:"cod2",t:"Call of Duty 2",y:2005,d:"Infinity Ward",g:"FPS",k:"singleplayer"},
{id:"cod3",t:"Call of Duty 3",y:2006,d:"Treyarch",g:"FPS",k:"singleplayer",w:"Call of Duty 3"},
{id:"codwaw",t:"Call of Duty: World at War",y:2008,d:"Treyarch",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codbo1",t:"Call of Duty: Black Ops",y:2010,d:"Treyarch",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codmw3",t:"Call of Duty: Modern Warfare 3",y:2011,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codbo2",t:"Call of Duty: Black Ops II",y:2012,d:"Treyarch",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codghosts",t:"Call of Duty: Ghosts",y:2013,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codaw",t:"Call of Duty: Advanced Warfare",y:2014,d:"Sledgehammer Games",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codiw",t:"Call of Duty: Infinite Warfare",y:2016,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codww2",t:"Call of Duty: WWII",y:2017,d:"Sledgehammer Games",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codbo4",t:"Call of Duty: Black Ops 4",y:2018,d:"Treyarch",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Black Ops 4"},
{id:"codmw19",t:"Call of Duty: Modern Warfare (2019)",y:2019,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Modern Warfare (2019 video game)"},
{id:"codcw",t:"Call of Duty: Black Ops Cold War",y:2020,d:"Treyarch",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Black Ops Cold War"},
{id:"codvanguard",t:"Call of Duty: Vanguard",y:2021,d:"Sledgehammer Games",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Vanguard"},
{id:"codmw22",t:"Call of Duty: Modern Warfare II",y:2022,d:"Infinity Ward",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Modern Warfare II (2022 video game)"},
{id:"codmw23",t:"Call of Duty: Modern Warfare III (2023)",y:2023,d:"Sledgehammer Games",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Modern Warfare III (2023 video game)"},
{id:"codbo6",t:"Call of Duty: Black Ops 6",y:2024,d:"Treyarch; Raven",g:"FPS",k:"singleplayer,multiplayer"},
{id:"codbo7",t:"Call of Duty: Black Ops 7",y:2025,d:"Treyarch; Raven",g:"FPS",k:"singleplayer,multiplayer",w:"Call of Duty: Black Ops 7"},
{id:"bf1942",t:"Battlefield 1942",y:2002,d:"DICE",g:"FPS",k:"multiplayer",w:"Battlefield 1942"},
{id:"bf2",t:"Battlefield 2",y:2005,d:"DICE",g:"FPS",k:"multiplayer",w:"Battlefield 2"},
{id:"bfbc2",t:"Battlefield: Bad Company 2",y:2010,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"bf3",t:"Battlefield 3",y:2011,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"bfh",t:"Battlefield Hardline",y:2015,d:"Visceral Games",g:"FPS",k:"multiplayer"},
{id:"bfv",t:"Battlefield V",y:2018,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"bf2042",t:"Battlefield 2042",y:2021,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"gta1",t:"Grand Theft Auto",y:1997,d:"DMA Design",g:"Action",k:"singleplayer"},
{id:"gta2",t:"Grand Theft Auto 2",y:1999,d:"DMA Design",g:"Action",k:"singleplayer"},
{id:"gta3",t:"Grand Theft Auto III",y:2001,d:"DMA Design",g:"Action",k:"singleplayer,open world"},
{id:"gtalcs",t:"Grand Theft Auto: Liberty City Stories",y:2005,d:"Rockstar Leeds",g:"Action",k:"singleplayer,open world",w:"Grand Theft Auto: Liberty City Stories"},
{id:"gtavcs",t:"Grand Theft Auto: Vice City Stories",y:2006,d:"Rockstar Leeds",g:"Action",k:"singleplayer,open world",w:"Grand Theft Auto: Vice City Stories"},
{id:"gtacw",t:"Grand Theft Auto: Chinatown Wars",y:2009,d:"Rockstar Leeds",g:"Action",k:"singleplayer",w:"Grand Theft Auto: Chinatown Wars"},
{id:"rdrevolver",t:"Red Dead Revolver",y:2004,d:"Rockstar San Diego",g:"Action",k:"singleplayer",w:"Red Dead Revolver"},
{id:"bully",t:"Bully: Scholarship Edition",y:2008,d:"Rockstar Vancouver",g:"Action",k:"singleplayer,open world"},
{id:"manhunt",t:"Manhunt",y:2003,d:"Rockstar North",g:"Horror",k:"singleplayer,atmospheric",w:"Manhunt (video game)"},
{id:"lanoire",t:"L.A. Noire",y:2011,d:"Team Bondi",g:"Adventure",k:"singleplayer,open world,story-driven"},
{id:"mp1",t:"Max Payne",y:2001,d:"Remedy Entertainment",g:"Action",k:"singleplayer,story-driven,short"},
{id:"mp2",t:"Max Payne 2: The Fall of Max Payne",y:2003,d:"Remedy Entertainment",g:"Action",k:"singleplayer,story-driven,short"},
{id:"alanwake",t:"Alan Wake",y:2010,d:"Remedy Entertainment",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"quantumbreak",t:"Quantum Break",y:2016,d:"Remedy Entertainment",g:"Action",k:"singleplayer,story-driven,short"},
{id:"unc1",t:"Uncharted: Drake's Fortune",y:2007,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven",w:"Uncharted: Drake's Fortune"},
{id:"unc2",t:"Uncharted 2: Among Thieves",y:2009,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven",w:"Uncharted 2: Among Thieves"},
{id:"unc3",t:"Uncharted 3: Drake's Deception",y:2011,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven",w:"Uncharted 3: Drake's Deception"},
{id:"unclost",t:"Uncharted: The Lost Legacy",y:2017,d:"Naughty Dog",g:"Adventure",k:"singleplayer,story-driven,short",w:"Uncharted: The Lost Legacy"},
{id:"jak1",t:"Jak and Daxter: The Precursor Legacy",y:2001,d:"Naughty Dog",g:"Platformer",k:"singleplayer",w:"Jak and Daxter: The Precursor Legacy"},
{id:"jak2",t:"Jak II",y:2003,d:"Naughty Dog",g:"Platformer",k:"singleplayer",w:"Jak II"},
{id:"jak3",t:"Jak 3",y:2004,d:"Naughty Dog",g:"Platformer",k:"singleplayer",w:"Jak 3"},
{id:"crash1",t:"Crash Bandicoot",y:1996,d:"Naughty Dog",g:"Platformer",k:"singleplayer",w:"Crash Bandicoot (video game)"},
{id:"crash2",t:"Crash Bandicoot 2: Cortex Strikes Back",y:1997,d:"Naughty Dog",g:"Platformer",k:"singleplayer",w:"Crash Bandicoot 2: Cortex Strikes Back"},
{id:"crash3",t:"Crash Bandicoot: Warped",y:1998,d:"Naughty Dog",g:"Platformer",k:"singleplayer",w:"Crash Bandicoot: Warped"},
{id:"crash4",t:"Crash Bandicoot 4: It's About Time",y:2020,d:"Toys for Bob",g:"Platformer",k:"singleplayer"},
{id:"ctrnf",t:"Crash Team Racing Nitro-Fueled",y:2019,d:"Beenox",g:"Racing",k:"multiplayer",w:"Crash Team Racing Nitro-Fueled"},
{id:"spyroreig",t:"Spyro Reignited Trilogy",y:2018,d:"Toys for Bob",g:"Platformer",k:"singleplayer"},
{id:"gow1",t:"God of War (2005)",y:2005,d:"Santa Monica Studio",g:"Action",k:"singleplayer",w:"God of War (2005 video game)"},
{id:"gow2",t:"God of War II",y:2007,d:"Santa Monica Studio",g:"Action",k:"singleplayer",w:"God of War II"},
{id:"gow3",t:"God of War III",y:2010,d:"Santa Monica Studio",g:"Action",k:"singleplayer",w:"God of War III"},
{id:"gowcot",t:"God of War: Chains of Olympus",y:2008,d:"Ready at Dawn",g:"Action",k:"singleplayer,short",w:"God of War: Chains of Olympus"},
{id:"gowgos",t:"God of War: Ghost of Sparta",y:2010,d:"Ready at Dawn",g:"Action",k:"singleplayer,short",w:"God of War: Ghost of Sparta"},
{id:"gowasc",t:"God of War: Ascension",y:2013,d:"Santa Monica Studio",g:"Action",k:"singleplayer",w:"God of War: Ascension"},
{id:"spidermm",t:"Marvel's Spider-Man: Miles Morales",y:2020,d:"Insomniac Games",g:"Action",k:"singleplayer,open world,story-driven"},
{id:"spider2",t:"Marvel's Spider-Man 2",y:2023,d:"Insomniac Games",g:"Action",k:"singleplayer,open world,story-driven",w:"Marvel's Spider-Man 2"},
{id:"arkhamasylum",t:"Batman: Arkham Asylum",y:2009,d:"Rocksteady Studios",g:"Action",k:"singleplayer,story-driven"},
{id:"arkhamorigins",t:"Batman: Arkham Origins",y:2013,d:"WB Games Montréal",g:"Action",k:"singleplayer"},
{id:"arkhamknight",t:"Batman: Arkham Knight",y:2015,d:"Rocksteady Studios",g:"Action",k:"singleplayer,story-driven"},
{id:"gothamknights",t:"Gotham Knights",y:2022,d:"WB Games Montréal",g:"Action",k:"singleplayer",w:"Gotham Knights (video game)"},
{id:"suicidesquad",t:"Suicide Squad: Kill the Justice League",y:2024,d:"Rocksteady Studios",g:"Action",k:"singleplayer",w:"Suicide Squad: Kill the Justice League"},
{id:"batmantt",t:"Batman: The Telltale Series",y:2016,d:"Telltale Games",g:"Adventure",k:"singleplayer,story-driven"},
{id:"hl1",t:"Half-Life",y:1998,d:"Valve",g:"FPS",k:"singleplayer"},
{id:"hlof",t:"Half-Life: Opposing Force",y:1999,d:"Gearbox Software",g:"FPS",k:"singleplayer,short"},
{id:"hlbs",t:"Half-Life: Blue Shift",y:2001,d:"Gearbox Software",g:"FPS",k:"singleplayer,short"},
{id:"hl2e1",t:"Half-Life 2: Episode One",y:2006,d:"Valve",g:"FPS",k:"singleplayer,short"},
{id:"hl2e2",t:"Half-Life 2: Episode Two",y:2007,d:"Valve",g:"FPS",k:"singleplayer,short"},
{id:"l4d1",t:"Left 4 Dead",y:2008,d:"Turtle Rock Studios",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"cs16",t:"Counter-Strike",y:2000,d:"Valve",g:"FPS",k:"multiplayer"},
{id:"css",t:"Counter-Strike: Source",y:2004,d:"Valve",g:"FPS",k:"multiplayer"},
{id:"deadlock",t:"Deadlock",y:2024,d:"Valve",g:"Action",k:"multiplayer"},
{id:"halo2",t:"Halo 2",y:2004,d:"Bungie",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op",w:"Halo 2"},
{id:"halo3",t:"Halo 3",y:2007,d:"Bungie",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op",w:"Halo 3"},
{id:"haloodst",t:"Halo 3: ODST",y:2009,d:"Bungie",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op",w:"Halo 3: ODST"},
{id:"haloreach",t:"Halo: Reach",y:2010,d:"Bungie",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op",w:"Halo: Reach"},
{id:"halo4",t:"Halo 4",y:2012,d:"343 Industries",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op",w:"Halo 4"},
{id:"halo5",t:"Halo 5: Guardians",y:2015,d:"343 Industries",g:"FPS",k:"singleplayer,multiplayer,co-op",w:"Halo 5: Guardians"},
{id:"haloinf",t:"Halo Infinite",y:2021,d:"343 Industries",g:"FPS",k:"singleplayer,multiplayer,co-op"},
{id:"doom1",t:"Doom (1993)",y:1993,d:"id Software",g:"FPS",k:"singleplayer,pixel art"},
{id:"doom2",t:"Doom II: Hell on Earth",y:1994,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"doom3",t:"Doom 3",y:2004,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"doomdark",t:"DOOM: The Dark Ages",y:2025,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"quake1",t:"Quake",y:1996,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"quake2",t:"Quake II",y:1997,d:"id Software",g:"FPS",k:"singleplayer"},
{id:"quake3",t:"Quake III Arena",y:1999,d:"id Software",g:"FPS",k:"multiplayer"},
{id:"quake4",t:"Quake 4",y:2005,d:"Raven Software",g:"FPS",k:"singleplayer"},
{id:"quakechamp",t:"Quake Champions",y:2017,d:"id Software",g:"FPS",k:"multiplayer"},
{id:"mgs1",t:"Metal Gear Solid",y:1998,d:"Konami",g:"Action",k:"singleplayer,story-driven",w:"Metal Gear Solid"},
{id:"mgs2",t:"Metal Gear Solid 2: Sons of Liberty",y:2001,d:"Konami",g:"Action",k:"singleplayer,story-driven",w:"Metal Gear Solid 2: Sons of Liberty"},
{id:"mgs4",t:"Metal Gear Solid 4: Guns of the Patriots",y:2008,d:"Kojima Productions",g:"Action",k:"singleplayer,story-driven",w:"Metal Gear Solid 4: Guns of the Patriots"},
{id:"mgspw",t:"Metal Gear Solid: Peace Walker",y:2010,d:"Kojima Productions",g:"Action",k:"singleplayer,short",w:"Metal Gear Solid: Peace Walker"},
{id:"mgsgz",t:"Metal Gear Solid V: Ground Zeroes",y:2014,d:"Kojima Productions",g:"Action",k:"singleplayer,short"},
{id:"mgr",t:"Metal Gear Rising: Revengeance",y:2013,d:"PlatinumGames",g:"Action",k:"singleplayer"},
{id:"mgsdelta",t:"Metal Gear Solid Delta: Snake Eater",y:2025,d:"Konami",g:"Action",k:"singleplayer,story-driven"},
{id:"mgsurvive",t:"Metal Gear Survive",y:2018,d:"Konami",g:"Action",k:"singleplayer,multiplayer,co-op,survival",w:"Metal Gear Survive"},
{id:"p3p",t:"Persona 3 Portable",y:2009,d:"Atlus",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"p5s",t:"Persona 5 Strikers",y:2020,d:"Omega Force",g:"Action",k:"singleplayer"},
{id:"p5t",t:"Persona 5 Tactica",y:2023,d:"Atlus",g:"Strategy",k:"singleplayer,turn-based",w:"Persona 5 Tactica"},
{id:"smt5v",t:"Shin Megami Tensei V: Vengeance",y:2024,d:"Atlus",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"ff1",t:"Final Fantasy",y:1987,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"ff2",t:"Final Fantasy II",y:1988,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"ff3",t:"Final Fantasy III",y:1990,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"ff4",t:"Final Fantasy IV",y:1991,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"ff5",t:"Final Fantasy V",y:1992,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"ff6",t:"Final Fantasy VI",y:1994,d:"Square",g:"RPG",k:"singleplayer,story-driven,pixel art,turn-based"},
{id:"ff8",t:"Final Fantasy VIII",y:1999,d:"Square",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"ff9",t:"Final Fantasy IX",y:2000,d:"Square",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"ffx2",t:"Final Fantasy X-2",y:2003,d:"Square",g:"RPG",k:"singleplayer,story-driven,turn-based",w:"Final Fantasy X-2"},
{id:"ff11",t:"Final Fantasy XI",y:2002,d:"Square",g:"RPG",k:"multiplayer",w:"Final Fantasy XI"},
{id:"ff12",t:"Final Fantasy XII: The Zodiac Age",y:2017,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff13",t:"Final Fantasy XIII",y:2009,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff132",t:"Final Fantasy XIII-2",y:2011,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff13lr",t:"Lightning Returns: Final Fantasy XIII",y:2013,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff15",t:"Final Fantasy XV",y:2016,d:"Square Enix",g:"RPG",k:"singleplayer,open world,story-driven"},
{id:"ff16",t:"Final Fantasy XVI",y:2023,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff7rebirth",t:"Final Fantasy VII Rebirth",y:2024,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"ff7cc",t:"Crisis Core: Final Fantasy VII Reunion",y:2022,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven"},
{id:"fftactics",t:"Final Fantasy Tactics",y:1997,d:"Square",g:"Strategy",k:"singleplayer,turn-based",w:"Final Fantasy Tactics"},
{id:"kh1",t:"Kingdom Hearts",y:2002,d:"Square",g:"RPG",k:"singleplayer,story-driven",w:"Kingdom Hearts (video game)"},
{id:"khcom",t:"Kingdom Hearts: Chain of Memories",y:2004,d:"Jupiter",g:"RPG",k:"singleplayer,turn-based",w:"Kingdom Hearts: Chain of Memories"},
{id:"kh2",t:"Kingdom Hearts II",y:2005,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven,turn-based",w:"Kingdom Hearts II"},
{id:"khbbs",t:"Kingdom Hearts: Birth by Sleep",y:2010,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven",w:"Kingdom Hearts Birth by Sleep"},
{id:"kh3",t:"Kingdom Hearts III",y:2019,d:"Square Enix",g:"RPG",k:"singleplayer,story-driven",w:"Kingdom Hearts III"},
{id:"loz1",t:"The Legend of Zelda",y:1986,d:"Nintendo",g:"Adventure",k:"singleplayer,short,pixel art",w:"The Legend of Zelda (video game)"},
{id:"zelda2",t:"Zelda II: The Adventure of Link",y:1987,d:"Nintendo",g:"Adventure",k:"singleplayer,short,pixel art",w:"Zelda II: The Adventure of Link"},
{id:"alttp",t:"The Legend of Zelda: A Link to the Past",y:1991,d:"Nintendo",g:"Adventure",k:"singleplayer,pixel art",w:"The Legend of Zelda: A Link to the Past"},
{id:"zlinks",t:"The Legend of Zelda: Link's Awakening",y:1993,d:"Nintendo",g:"Adventure",k:"singleplayer,pixel art",w:"The Legend of Zelda: Link's Awakening"},
{id:"zmm",t:"The Legend of Zelda: Majora's Mask",y:2000,d:"Nintendo",g:"Adventure",k:"singleplayer",w:"The Legend of Zelda: Majora's Mask"},
{id:"zww",t:"The Legend of Zelda: The Wind Waker",y:2002,d:"Nintendo",g:"Adventure",k:"singleplayer",w:"The Legend of Zelda: The Wind Waker"},
{id:"zminish",t:"The Legend of Zelda: The Minish Cap",y:2004,d:"Capcom",g:"Adventure",k:"singleplayer,story-driven",w:"The Legend of Zelda: The Minish Cap"},
{id:"ztp",t:"The Legend of Zelda: Twilight Princess",y:2006,d:"Nintendo",g:"Adventure",k:"singleplayer",w:"The Legend of Zelda: Twilight Princess"},
{id:"zss",t:"The Legend of Zelda: Skyward Sword",y:2011,d:"Nintendo",g:"Adventure",k:"singleplayer",w:"The Legend of Zelda: Skyward Sword"},
{id:"zalbw",t:"The Legend of Zelda: A Link Between Worlds",y:2013,d:"Nintendo",g:"Adventure",k:"singleplayer",w:"The Legend of Zelda: A Link Between Worlds"},
{id:"zeow",t:"The Legend of Zelda: Echoes of Wisdom",y:2024,d:"Nintendo",g:"Adventure",k:"singleplayer",w:"The Legend of Zelda: Echoes of Wisdom"},
{id:"smb1",t:"Super Mario Bros.",y:1985,d:"Nintendo",g:"Platformer",k:"singleplayer,short,pixel art",w:"Super Mario Bros."},
{id:"smb3",t:"Super Mario Bros. 3",y:1988,d:"Nintendo",g:"Platformer",k:"singleplayer,short,pixel art",w:"Super Mario Bros. 3"},
{id:"smw",t:"Super Mario World",y:1990,d:"Nintendo",g:"Platformer",k:"singleplayer,short,pixel art",w:"Super Mario World"},
{id:"smsun",t:"Super Mario Sunshine",y:2002,d:"Nintendo",g:"Platformer",k:"singleplayer",w:"Super Mario Sunshine"},
{id:"smg1",t:"Super Mario Galaxy",y:2007,d:"Nintendo",g:"Platformer",k:"singleplayer",w:"Super Mario Galaxy"},
{id:"smg2",t:"Super Mario Galaxy 2",y:2010,d:"Nintendo",g:"Platformer",k:"singleplayer",w:"Super Mario Galaxy 2"},
{id:"sm3dw",t:"Super Mario 3D World + Bowser's Fury",y:2021,d:"Nintendo",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op",w:"Super Mario 3D World"},
{id:"smwonder",t:"Super Mario Bros. Wonder",y:2023,d:"Nintendo",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op",w:"Super Mario Bros. Wonder"},
{id:"mk64",t:"Mario Kart 64",y:1996,d:"Nintendo",g:"Racing",k:"multiplayer",w:"Mario Kart 64"},
{id:"mkworld",t:"Mario Kart World",y:2025,d:"Nintendo",g:"Racing",k:"multiplayer",w:"Mario Kart World"},
{id:"papermariottyd",t:"Paper Mario: The Thousand-Year Door",y:2004,d:"Intelligent Systems",g:"RPG",k:"singleplayer,turn-based",w:"Paper Mario: The Thousand-Year Door"},
{id:"luigi3",t:"Luigi's Mansion 3",y:2019,d:"Next Level Games",g:"Adventure",k:"singleplayer,multiplayer,co-op,local co-op,story-driven",w:"Luigi's Mansion 3"},
{id:"dkctf",t:"Donkey Kong Country: Tropical Freeze",y:2014,d:"Retro Studios",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op",w:"Donkey Kong Country: Tropical Freeze"},
{id:"mariorabbids",t:"Mario + Rabbids Kingdom Battle",y:2017,d:"Ubisoft Milan",g:"Strategy",k:"singleplayer,turn-based",w:"Mario + Rabbids Kingdom Battle"},
{id:"splatoon2",t:"Splatoon 2",y:2017,d:"Nintendo",g:"Action",k:"multiplayer",w:"Splatoon 2"},
{id:"splatoon3",t:"Splatoon 3",y:2022,d:"Nintendo",g:"Action",k:"multiplayer",w:"Splatoon 3"},
{id:"acnl",t:"Animal Crossing: New Leaf",y:2012,d:"Nintendo",g:"Simulation",k:"singleplayer,relaxing",w:"Animal Crossing: New Leaf"},
{id:"metroid1",t:"Metroid",y:1986,d:"Nintendo",g:"Platformer",k:"singleplayer,short,pixel art",w:"Metroid (video game)"},
{id:"supermetroid",t:"Super Metroid",y:1994,d:"Nintendo",g:"Platformer",k:"singleplayer,hard,short,pixel art",w:"Super Metroid"},
{id:"metroidprime",t:"Metroid Prime",y:2002,d:"Retro Studios",g:"Adventure",k:"singleplayer,story-driven",w:"Metroid Prime"},
{id:"metroiddread",t:"Metroid Dread",y:2021,d:"MercurySteam",g:"Platformer",k:"singleplayer,hard",w:"Metroid Dread"},
{id:"metroidprime4",t:"Metroid Prime 4: Beyond",y:2025,d:"Retro Studios",g:"Adventure",k:"singleplayer,story-driven",w:"Metroid Prime 4: Beyond"},
{id:"smash64",t:"Super Smash Bros.",y:1999,d:"HAL Laboratory",g:"Fighting",k:"multiplayer",w:"Super Smash Bros. (video game)"},
{id:"smashmelee",t:"Super Smash Bros. Melee",y:2001,d:"HAL Laboratory",g:"Fighting",k:"multiplayer",w:"Super Smash Bros. Melee"},
{id:"smashbrawl",t:"Super Smash Bros. Brawl",y:2008,d:"Sora Ltd.",g:"Fighting",k:"multiplayer",w:"Super Smash Bros. Brawl"},
{id:"smashwiiu",t:"Super Smash Bros. for Nintendo 3DS and Wii U",y:2014,d:"Sora Ltd.",g:"Fighting",k:"multiplayer",w:"Super Smash Bros. for Nintendo 3DS and Wii U"},
{id:"xenoblade1",t:"Xenoblade Chronicles",y:2010,d:"Monolith Soft",g:"RPG",k:"singleplayer,open world",w:"Xenoblade Chronicles"},
{id:"xenoblade2",t:"Xenoblade Chronicles 2",y:2017,d:"Monolith Soft",g:"RPG",k:"singleplayer,open world",w:"Xenoblade Chronicles 2"},
{id:"feawakening",t:"Fire Emblem: Awakening",y:2012,d:"Intelligent Systems",g:"Strategy",k:"singleplayer,turn-based",w:"Fire Emblem Awakening"},
{id:"feengage",t:"Fire Emblem Engage",y:2023,d:"Intelligent Systems",g:"Strategy",k:"singleplayer,turn-based",w:"Fire Emblem Engage"},
{id:"pokeyellow",t:"Pokémon Yellow",y:1998,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon Yellow"},
{id:"pokegs",t:"Pokémon Gold and Silver",y:1999,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon Gold and Silver"},
{id:"pokerse",t:"Pokémon Ruby and Sapphire",y:2002,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon Ruby and Sapphire"},
{id:"pokefrlg",t:"Pokémon FireRed and LeafGreen",y:2004,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon FireRed and LeafGreen"},
{id:"pokeem",t:"Pokémon Emerald",y:2004,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon Emerald"},
{id:"pokedp",t:"Pokémon Diamond and Pearl",y:2006,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon Diamond and Pearl"},
{id:"pokehgss",t:"Pokémon HeartGold and SoulSilver",y:2009,d:"Game Freak",g:"RPG",k:"singleplayer,hard,pixel art,turn-based",w:"Pokémon HeartGold and SoulSilver"},
{id:"pokebw",t:"Pokémon Black and White",y:2010,d:"Game Freak",g:"RPG",k:"singleplayer,pixel art,turn-based",w:"Pokémon Black and White"},
{id:"pokexy",t:"Pokémon X and Y",y:2013,d:"Game Freak",g:"RPG",k:"singleplayer,turn-based",w:"Pokémon X and Y"},
{id:"pokesm",t:"Pokémon Sun and Moon",y:2016,d:"Game Freak",g:"RPG",k:"singleplayer,turn-based",w:"Pokémon Sun and Moon"},
{id:"pokeswsh",t:"Pokémon Sword and Shield",y:2019,d:"Game Freak",g:"RPG",k:"singleplayer,turn-based",w:"Pokémon Sword and Shield"},
{id:"pokebdsp",t:"Pokémon Brilliant Diamond and Shining Pearl",y:2021,d:"ILCA",g:"RPG",k:"singleplayer,turn-based",w:"Pokémon Brilliant Diamond and Shining Pearl"},
{id:"pokelza",t:"Pokémon Legends: Z-A",y:2025,d:"Game Freak",g:"RPG",k:"singleplayer",w:"Pokémon Legends: Z-A"},
{id:"demonssouls",t:"Demon's Souls",y:2009,d:"FromSoftware",g:"RPG",k:"singleplayer,atmospheric,hard",w:"Demon's Souls"},
{id:"nioh1",t:"Nioh",y:2017,d:"Team Ninja",g:"Action",k:"singleplayer,hard",w:"Nioh (video game)"},
{id:"nioh2",t:"Nioh 2",y:2020,d:"Team Ninja",g:"Action",k:"singleplayer,hard",w:"Nioh 2"},
{id:"dmc1",t:"Devil May Cry",y:2001,d:"Capcom",g:"Action",k:"singleplayer",w:"Devil May Cry (video game)"},
{id:"dmc2",t:"Devil May Cry 2",y:2003,d:"Capcom",g:"Action",k:"singleplayer",w:"Devil May Cry 2"},
{id:"dmc3",t:"Devil May Cry 3: Dante's Awakening",y:2005,d:"Capcom",g:"Action",k:"singleplayer"},
{id:"dmc4",t:"Devil May Cry 4",y:2008,d:"Capcom",g:"Action",k:"singleplayer"},
{id:"dmcreboot",t:"DmC: Devil May Cry",y:2013,d:"Ninja Theory",g:"Action",k:"singleplayer"},
{id:"sf2",t:"Street Fighter II",y:1991,d:"Capcom",g:"Fighting",k:"multiplayer,pixel art",w:"Street Fighter II"},
{id:"sf3",t:"Street Fighter III: 3rd Strike",y:1999,d:"Capcom",g:"Fighting",k:"multiplayer",w:"Street Fighter III: 3rd Strike"},
{id:"sf4",t:"Street Fighter IV",y:2008,d:"Capcom",g:"Fighting",k:"multiplayer"},
{id:"sf5",t:"Street Fighter V",y:2016,d:"Capcom",g:"Fighting",k:"multiplayer"},
{id:"mk1992",t:"Mortal Kombat (1992)",y:1992,d:"Midway",g:"Fighting",k:"multiplayer,pixel art",w:"Mortal Kombat (1992 video game)"},
{id:"mk2",t:"Mortal Kombat II",y:1993,d:"Midway",g:"Fighting",k:"multiplayer,pixel art",w:"Mortal Kombat II"},
{id:"mk3",t:"Mortal Kombat 3",y:1995,d:"Midway",g:"Fighting",k:"multiplayer,pixel art",w:"Mortal Kombat 3"},
{id:"mk9",t:"Mortal Kombat (2011)",y:2011,d:"NetherRealm Studios",g:"Fighting",k:"multiplayer"},
{id:"mkdoom",t:"Mortal Kombat 1",y:2023,d:"NetherRealm Studios",g:"Fighting",k:"multiplayer"},
{id:"tekken3",t:"Tekken 3",y:1997,d:"Namco",g:"Fighting",k:"multiplayer",w:"Tekken 3"},
{id:"tekken8",t:"Tekken 8",y:2024,d:"Bandai Namco",g:"Fighting",k:"multiplayer"},
{id:"ykiwami",t:"Yakuza Kiwami",y:2016,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"ykiwami2",t:"Yakuza Kiwami 2",y:2017,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"y3",t:"Yakuza 3 Remastered",y:2009,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"y4",t:"Yakuza 4 Remastered",y:2010,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"y5",t:"Yakuza 5 Remastered",y:2012,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"y6",t:"Yakuza 6: The Song of Life",y:2016,d:"Sega",g:"Action",k:"singleplayer,story-driven"},
{id:"ylad",t:"Yakuza: Like a Dragon",y:2020,d:"Ryu Ga Gotoku Studio",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"lad8",t:"Like a Dragon: Infinite Wealth",y:2024,d:"Ryu Ga Gotoku Studio",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"ladgaiden",t:"Like a Dragon Gaiden: The Man Who Erased His Name",y:2023,d:"Ryu Ga Gotoku Studio",g:"Action",k:"singleplayer,story-driven"},
{id:"judgment",t:"Judgment",y:2018,d:"Ryu Ga Gotoku Studio",g:"Action",k:"singleplayer,story-driven",w:"Judgment (video game)"},
{id:"lostjudgment",t:"Lost Judgment",y:2021,d:"Ryu Ga Gotoku Studio",g:"Action",k:"singleplayer,story-driven",w:"Lost Judgment"},
{id:"sonic1",t:"Sonic the Hedgehog",y:1991,d:"Sega",g:"Platformer",k:"singleplayer,short,pixel art",w:"Sonic the Hedgehog (1991 video game)"},
{id:"sonic3k",t:"Sonic the Hedgehog 3 & Knuckles",y:1994,d:"Sega",g:"Platformer",k:"singleplayer,short,pixel art",w:"Sonic & Knuckles"},
{id:"soniccd",t:"Sonic CD",y:1993,d:"Sega",g:"Platformer",k:"singleplayer,short,pixel art"},
{id:"sonicadv2",t:"Sonic Adventure 2",y:2001,d:"Sonic Team",g:"Platformer",k:"singleplayer"},
{id:"sonicgen",t:"Sonic Generations",y:2011,d:"Sonic Team",g:"Platformer",k:"singleplayer"},
{id:"sonicforces",t:"Sonic Forces",y:2017,d:"Sonic Team",g:"Platformer",k:"singleplayer"},
{id:"sonicfront",t:"Sonic Frontiers",y:2022,d:"Sonic Team",g:"Platformer",k:"singleplayer,open world"},
{id:"sonicshadow",t:"Sonic X Shadow Generations",y:2024,d:"Sonic Team",g:"Platformer",k:"singleplayer"},
{id:"ratchet1",t:"Ratchet & Clank (2002)",y:2002,d:"Insomniac Games",g:"Platformer",k:"singleplayer",w:"Ratchet & Clank (2002 video game)"},
{id:"ratchet2",t:"Ratchet & Clank: Going Commando",y:2003,d:"Insomniac Games",g:"Platformer",k:"singleplayer",w:"Ratchet & Clank: Going Commando"},
{id:"ratchet2016",t:"Ratchet & Clank (2016)",y:2016,d:"Insomniac Games",g:"Platformer",k:"singleplayer",w:"Ratchet & Clank (2016 video game)"},
{id:"ratchetcit",t:"Ratchet & Clank: A Crack in Time",y:2009,d:"Insomniac Games",g:"Platformer",k:"singleplayer",w:"Ratchet & Clank Future: A Crack in Time"},
{id:"horizonfw",t:"Horizon Forbidden West",y:2022,d:"Guerrilla Games",g:"Action",k:"singleplayer,open world,story-driven"},
{id:"ghostyotei",t:"Ghost of Yōtei",y:2025,d:"Sucker Punch",g:"Action",k:"singleplayer,open world,story-driven,atmospheric",w:"Ghost of Yōtei"},
{id:"daysgone",t:"Days Gone",y:2019,d:"Bend Studio",g:"Action",k:"singleplayer,open world,story-driven,survival"},
{id:"returnal",t:"Returnal",y:2021,d:"Housemarque",g:"Roguelike",k:"singleplayer,hard"},
{id:"untildawn",t:"Until Dawn",y:2015,d:"Supermassive Games",g:"Horror",k:"singleplayer,story-driven,atmospheric",w:"Until Dawn"},
{id:"beyond2souls",t:"Beyond: Two Souls",y:2013,d:"Quantic Dream",g:"Adventure",k:"singleplayer,story-driven,hard"},
{id:"sotc",t:"Shadow of the Colossus",y:2005,d:"Team Ico",g:"Adventure",k:"singleplayer,story-driven,atmospheric,short",w:"Shadow of the Colossus"},
{id:"ico",t:"Ico",y:2001,d:"Team Ico",g:"Adventure",k:"singleplayer,story-driven,atmospheric,short",w:"Ico"},
{id:"lastguardian",t:"The Last Guardian",y:2016,d:"genDESIGN",g:"Adventure",k:"singleplayer,story-driven,atmospheric",w:"The Last Guardian"},
{id:"gt1",t:"Gran Turismo",y:1997,d:"Polyphony Digital",g:"Racing",k:"singleplayer",w:"Gran Turismo (video game)"},
{id:"gt4",t:"Gran Turismo 4",y:2004,d:"Polyphony Digital",g:"Racing",k:"singleplayer",w:"Gran Turismo 4"},
{id:"gtsport",t:"Gran Turismo Sport",y:2017,d:"Polyphony Digital",g:"Racing",k:"multiplayer",w:"Gran Turismo Sport"},
{id:"killzone2",t:"Killzone 2",y:2009,d:"Guerrilla Games",g:"FPS",k:"singleplayer",w:"Killzone 2"},
{id:"lbp",t:"LittleBigPlanet",y:2008,d:"Media Molecule",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op,relaxing",w:"LittleBigPlanet (video game)"},
{id:"resistance1",t:"Resistance: Fall of Man",y:2006,d:"Insomniac Games",g:"FPS",k:"singleplayer",w:"Resistance: Fall of Man"},
{id:"sunsetoverdrive",t:"Sunset Overdrive",y:2014,d:"Insomniac Games",g:"Action",k:"singleplayer,open world",w:"Sunset Overdrive"},
{id:"hitman1",t:"Hitman: Codename 47",y:2000,d:"IO Interactive",g:"Action",k:"singleplayer",w:"Hitman: Codename 47"},
{id:"hitman2sa",t:"Hitman 2: Silent Assassin",y:2002,d:"IO Interactive",g:"Action",k:"singleplayer",w:"Hitman 2: Silent Assassin"},
{id:"hitmanbm",t:"Hitman: Blood Money",y:2006,d:"IO Interactive",g:"Action",k:"singleplayer"},
{id:"hitmanabs",t:"Hitman: Absolution",y:2012,d:"IO Interactive",g:"Action",k:"singleplayer"},
{id:"hitman2016",t:"Hitman (2016)",y:2016,d:"IO Interactive",g:"Action",k:"singleplayer"},
{id:"hitman2018",t:"Hitman 2",y:2018,d:"IO Interactive",g:"Action",k:"singleplayer"},
{id:"hitman3",t:"Hitman 3",y:2021,d:"IO Interactive",g:"Action",k:"singleplayer,story-driven"},
{id:"dx1",t:"Deus Ex",y:2000,d:"Ion Storm",g:"RPG",k:"singleplayer,story-driven"},
{id:"dx2",t:"Deus Ex: Invisible War",y:2003,d:"Ion Storm",g:"RPG",k:"singleplayer"},
{id:"dxhr",t:"Deus Ex: Human Revolution",y:2011,d:"Eidos-Montréal",g:"RPG",k:"singleplayer,story-driven"},
{id:"dxmd",t:"Deus Ex: Mankind Divided",y:2016,d:"Eidos-Montréal",g:"RPG",k:"singleplayer,story-driven"},
{id:"dishonored1",t:"Dishonored",y:2012,d:"Arkane Studios",g:"Action",k:"singleplayer,story-driven,atmospheric"},
{id:"dishonored2",t:"Dishonored 2",y:2016,d:"Arkane Studios",g:"Action",k:"singleplayer,story-driven,atmospheric"},
{id:"dishonoredoutsider",t:"Dishonored: Death of the Outsider",y:2017,d:"Arkane Studios",g:"Action",k:"singleplayer"},
{id:"prey2017",t:"Prey (2017)",y:2017,d:"Arkane Studios",g:"FPS",k:"singleplayer,story-driven,atmospheric"},
{id:"deathloop",t:"Deathloop",y:2021,d:"Arkane Studios",g:"FPS",k:"singleplayer,story-driven,atmospheric"},
{id:"wolf3d",t:"Return to Castle Wolfenstein",y:2001,d:"Gray Matter",g:"FPS",k:"singleplayer"},
{id:"wolfneworder",t:"Wolfenstein: The New Order",y:2014,d:"MachineGames",g:"FPS",k:"singleplayer,story-driven"},
{id:"wolfoldblood",t:"Wolfenstein: The Old Blood",y:2015,d:"MachineGames",g:"FPS",k:"singleplayer,story-driven,short"},
{id:"wolfnewcolossus",t:"Wolfenstein II: The New Colossus",y:2017,d:"MachineGames",g:"FPS",k:"singleplayer,story-driven"},
{id:"wolfyoungblood",t:"Wolfenstein: Youngblood",y:2019,d:"MachineGames",g:"FPS",k:"singleplayer",w:"Wolfenstein: Youngblood"},
{id:"bioshock2",t:"BioShock 2",y:2010,d:"2K Marin",g:"FPS",k:"singleplayer,story-driven"},
{id:"bioshockinf",t:"BioShock Infinite",y:2013,d:"Irrational Games",g:"FPS",k:"singleplayer,story-driven"},
{id:"bl1",t:"Borderlands",y:2009,d:"Gearbox Software",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"bl2",t:"Borderlands 2",y:2012,d:"Gearbox Software",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"blps",t:"Borderlands: The Pre-Sequel",y:2014,d:"2K Australia",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"bl3",t:"Borderlands 3",y:2019,d:"Gearbox Software",g:"FPS",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"tinytina",t:"Tiny Tina's Wonderlands",y:2022,d:"Gearbox Software",g:"RPG",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"gow1gears",t:"Gears of War",y:2006,d:"Epic Games",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op",w:"Gears of War (video game)"},
{id:"gears2",t:"Gears of War 2",y:2008,d:"Epic Games",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op",w:"Gears of War 2"},
{id:"gears3",t:"Gears of War 3",y:2011,d:"Epic Games",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op",w:"Gears of War 3"},
{id:"gearsjudgment",t:"Gears of War: Judgment",y:2013,d:"People Can Fly",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op",w:"Gears of War: Judgment"},
{id:"gears4",t:"Gears of War 4",y:2016,d:"The Coalition",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op",w:"Gears of War 4"},
{id:"gearstactics",t:"Gears Tactics",y:2020,d:"The Coalition",g:"Strategy",k:"singleplayer,turn-based",w:"Gears Tactics"},
{id:"diablo1",t:"Diablo",y:1997,d:"Blizzard North",g:"RPG",k:"singleplayer,multiplayer,co-op",w:"Diablo (video game)"},
{id:"diablo3",t:"Diablo III",y:2012,d:"Blizzard",g:"RPG",k:"singleplayer,multiplayer,co-op",w:"Diablo III"},
{id:"diablo4",t:"Diablo IV",y:2023,d:"Blizzard",g:"RPG",k:"singleplayer,multiplayer,co-op",w:"Diablo IV"},
{id:"diablo2r",t:"Diablo II: Resurrected",y:2021,d:"Blizzard",g:"RPG",k:"singleplayer,multiplayer,co-op",w:"Diablo II: Resurrected"},
{id:"sc1",t:"StarCraft",y:1998,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"StarCraft (video game)"},
{id:"scbw",t:"StarCraft: Brood War",y:1998,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"StarCraft: Brood War"},
{id:"sc2hots",t:"StarCraft II: Heart of the Swarm",y:2013,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"StarCraft II: Heart of the Swarm"},
{id:"sc2lotv",t:"StarCraft II: Legacy of the Void",y:2015,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"StarCraft II: Legacy of the Void"},
{id:"wc1",t:"Warcraft: Orcs & Humans",y:1994,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"Warcraft: Orcs & Humans"},
{id:"wc2",t:"Warcraft II: Tides of Darkness",y:1995,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"Warcraft II: Tides of Darkness"},
{id:"wc3r",t:"Warcraft III: Reforged",y:2020,d:"Blizzard",g:"Strategy",k:"singleplayer",w:"Warcraft III: Reforged"},
{id:"hearthstone",t:"Hearthstone",y:2014,d:"Blizzard",g:"Strategy",k:"multiplayer,turn-based",w:"Hearthstone"},
{id:"hots",t:"Heroes of the Storm",y:2015,d:"Blizzard",g:"Strategy",k:"multiplayer",w:"Heroes of the Storm"},
{id:"civ1",t:"Civilization",y:1991,d:"MicroProse",g:"Strategy",k:"singleplayer,turn-based",w:"Civilization (video game)"},
{id:"civ2",t:"Civilization II",y:1996,d:"MicroProse",g:"Strategy",k:"singleplayer,turn-based",w:"Civilization II"},
{id:"civ3",t:"Sid Meier's Civilization III",y:2001,d:"Firaxis",g:"Strategy",k:"singleplayer,turn-based"},
{id:"civ4",t:"Sid Meier's Civilization IV",y:2005,d:"Firaxis",g:"Strategy",k:"singleplayer,turn-based"},
{id:"civ5",t:"Sid Meier's Civilization V",y:2010,d:"Firaxis",g:"Strategy",k:"singleplayer,turn-based"},
{id:"civbe",t:"Sid Meier's Civilization: Beyond Earth",y:2014,d:"Firaxis",g:"Strategy",k:"singleplayer,turn-based"},
{id:"aoe1",t:"Age of Empires",y:1997,d:"Ensemble Studios",g:"Strategy",k:"singleplayer",w:"Age of Empires"},
{id:"aoe3",t:"Age of Empires III: Definitive Edition",y:2020,d:"Tantalus Media",g:"Strategy",k:"singleplayer"},
{id:"aoe4",t:"Age of Empires IV",y:2021,d:"Relic Entertainment",g:"Strategy",k:"singleplayer"},
{id:"aomretold",t:"Age of Mythology: Retold",y:2024,d:"World's Edge",g:"Strategy",k:"singleplayer"},
{id:"aoede",t:"Age of Empires: Definitive Edition",y:2018,d:"Forgotten Empires",g:"Strategy",k:"singleplayer"},
{id:"twwh1",t:"Total War: Warhammer",y:2016,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"twwh2",t:"Total War: Warhammer II",y:2017,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"twrome2",t:"Total War: Rome II",y:2013,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"twshogun2",t:"Total War: Shogun 2",y:2011,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"tw3k",t:"Total War: Three Kingdoms",y:2019,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"twmedieval2",t:"Total War: Medieval II",y:2006,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"twempire",t:"Empire: Total War",y:2009,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"twpharaoh",t:"Total War: Pharaoh",y:2023,d:"Creative Assembly",g:"Strategy",k:"singleplayer"},
{id:"eu5",t:"Europa Universalis V",y:2025,d:"Paradox Tinto",g:"Strategy",k:"singleplayer"},
{id:"ck2",t:"Crusader Kings II",y:2012,d:"Paradox Development Studio",g:"Strategy",k:"singleplayer"},
{id:"victoria3",t:"Victoria 3",y:2022,d:"Paradox Development Studio",g:"Strategy",k:"singleplayer"},
{id:"sims1",t:"The Sims",y:2000,d:"Maxis",g:"Simulation",k:"singleplayer,relaxing",w:"The Sims (video game)"},
{id:"sims2",t:"The Sims 2",y:2004,d:"Maxis",g:"Simulation",k:"singleplayer,relaxing",w:"The Sims 2"},
{id:"sims3",t:"The Sims 3",y:2009,d:"Maxis",g:"Simulation",k:"singleplayer,relaxing"},
{id:"spore",t:"Spore",y:2008,d:"Maxis",g:"Simulation",k:"singleplayer,relaxing",w:"Spore (2008 video game)"},
{id:"pop1",t:"Prince of Persia: The Sands of Time",y:2003,d:"Ubisoft Montreal",g:"Action",k:"singleplayer",w:"Prince of Persia: The Sands of Time"},
{id:"pop2",t:"Prince of Persia: Warrior Within",y:2004,d:"Ubisoft Montreal",g:"Action",k:"singleplayer",w:"Prince of Persia: Warrior Within"},
{id:"pop3",t:"Prince of Persia: The Two Thrones",y:2005,d:"Ubisoft Montreal",g:"Action",k:"singleplayer",w:"Prince of Persia: The Two Thrones"},
{id:"popcrown",t:"Prince of Persia: The Lost Crown",y:2024,d:"Ubisoft Montpellier",g:"Platformer",k:"singleplayer",w:"Prince of Persia: The Lost Crown"},
{id:"sc_splinter1",t:"Tom Clancy's Splinter Cell",y:2002,d:"Ubisoft Montreal",g:"Action",k:"singleplayer",w:"Tom Clancy's Splinter Cell"},
{id:"sc_chaos",t:"Tom Clancy's Splinter Cell: Chaos Theory",y:2005,d:"Ubisoft Montreal",g:"Action",k:"singleplayer",w:"Tom Clancy's Splinter Cell: Chaos Theory"},
{id:"sc_blacklist",t:"Tom Clancy's Splinter Cell: Blacklist",y:2013,d:"Ubisoft Toronto",g:"Action",k:"singleplayer",w:"Tom Clancy's Splinter Cell: Blacklist"},
{id:"ds2g",t:"Dead Space 2",y:2011,d:"Visceral Games",g:"Horror",k:"singleplayer,atmospheric"},
{id:"ds3g",t:"Dead Space 3",y:2013,d:"Visceral Games",g:"Horror",k:"singleplayer,atmospheric"},
{id:"metrolastlight",t:"Metro: Last Light",y:2013,d:"4A Games",g:"FPS",k:"singleplayer,story-driven,atmospheric"},
{id:"stalkercs",t:"S.T.A.L.K.E.R.: Clear Sky",y:2008,d:"GSC Game World",g:"FPS",k:"singleplayer,open world,atmospheric,hard"},
{id:"stalkercop",t:"S.T.A.L.K.E.R.: Call of Pripyat",y:2009,d:"GSC Game World",g:"FPS",k:"singleplayer,open world,atmospheric,hard"},
{id:"stalker2",t:"S.T.A.L.K.E.R. 2: Heart of Chornobyl",y:2024,d:"GSC Game World",g:"FPS",k:"singleplayer,open world,story-driven,atmospheric,hard"},
{id:"dyinglight1",t:"Dying Light",y:2015,d:"Techland",g:"Action",k:"singleplayer,multiplayer,co-op,open world"},
{id:"deadisland1",t:"Dead Island",y:2011,d:"Techland",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"deadislandriptide",t:"Dead Island: Riptide",y:2013,d:"Techland",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"deadisland2",t:"Dead Island 2",y:2023,d:"Dambuster Studios",g:"Action",k:"singleplayer,multiplayer,co-op"},
{id:"saints2",t:"Saints Row 2",y:2008,d:"Volition",g:"Action",k:"singleplayer,open world"},
{id:"saints3",t:"Saints Row: The Third",y:2011,d:"Volition",g:"Action",k:"singleplayer,open world"},
{id:"saints4",t:"Saints Row IV",y:2013,d:"Volition",g:"Action",k:"singleplayer,open world"},
{id:"justcause2",t:"Just Cause 2",y:2010,d:"Avalanche Studios",g:"Action",k:"singleplayer,open world"},
{id:"justcause3",t:"Just Cause 3",y:2015,d:"Avalanche Studios",g:"Action",k:"singleplayer,open world"},
{id:"justcause4",t:"Just Cause 4",y:2018,d:"Avalanche Studios",g:"Action",k:"singleplayer,open world"},
{id:"mafia1",t:"Mafia: The City of Lost Heaven",y:2002,d:"Illusion Softworks",g:"Action",k:"singleplayer,story-driven"},
{id:"mafia2",t:"Mafia II: Definitive Edition",y:2020,d:"Hangar 13",g:"Action",k:"singleplayer,story-driven"},
{id:"mafiaoldcountry",t:"Mafia: The Old Country",y:2025,d:"Hangar 13",g:"Action",k:"singleplayer,story-driven"},
{id:"watchdogs1",t:"Watch Dogs",y:2014,d:"Ubisoft Montreal",g:"Action",k:"singleplayer,open world"},
{id:"bg1",t:"Baldur's Gate: Enhanced Edition",y:1998,d:"BioWare",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"bg2",t:"Baldur's Gate II: Enhanced Edition",y:2000,d:"BioWare",g:"RPG",k:"singleplayer,story-driven,turn-based"},
{id:"nwn",t:"Neverwinter Nights: Enhanced Edition",y:2002,d:"BioWare",g:"RPG",k:"singleplayer,multiplayer,co-op,story-driven"},
{id:"planescape",t:"Planescape: Torment: Enhanced Edition",y:1999,d:"Black Isle Studios",g:"RPG",k:"singleplayer,turn-based"},
{id:"dos1",t:"Divinity: Original Sin",y:2014,d:"Larian Studios",g:"RPG",k:"singleplayer,multiplayer,co-op,story-driven,turn-based"},
{id:"dos2",t:"Divinity: Original Sin II",y:2017,d:"Larian Studios",g:"RPG",k:"singleplayer,multiplayer,co-op,story-driven,turn-based"},
{id:"poe2deadfire",t:"Pillars of Eternity II: Deadfire",y:2018,d:"Obsidian",g:"RPG",k:"singleplayer,story-driven"},
{id:"nierrepl",t:"NieR Replicant ver.1.22474487139...",y:2021,d:"Toylogic",g:"Action",k:"singleplayer,story-driven,atmospheric"},
{id:"dragonsdogma1",t:"Dragon's Dogma: Dark Arisen",y:2013,d:"Capcom",g:"RPG",k:"singleplayer,open world"},
{id:"okami",t:"Okami HD",y:2006,d:"Clover Studio",g:"Adventure",k:"singleplayer,story-driven"},
{id:"megaman11",t:"Mega Man 11",y:2018,d:"Capcom",g:"Platformer",k:"singleplayer,hard,short,pixel art"},
{id:"poe1",t:"Path of Exile",y:2013,d:"Grinding Gear Games",g:"RPG",k:"singleplayer,multiplayer,co-op"},
{id:"torchlight2",t:"Torchlight II",y:2012,d:"Runic Games",g:"RPG",k:"singleplayer,multiplayer,co-op"},
{id:"mountblade1",t:"Mount & Blade: Warband",y:2010,d:"TaleWorlds Entertainment",g:"RPG",k:"singleplayer,open world"},
{id:"crysis1",t:"Crysis",y:2007,d:"Crytek",g:"FPS",k:"singleplayer"},
{id:"crysiswarhead",t:"Crysis Warhead",y:2008,d:"Crytek",g:"FPS",k:"singleplayer"},
{id:"crysis2",t:"Crysis 2",y:2011,d:"Crytek",g:"FPS",k:"singleplayer"},
{id:"titanfall1",t:"Titanfall",y:2014,d:"Respawn",g:"FPS",k:"singleplayer",w:"Titanfall (video game)"},
{id:"destiny1",t:"Destiny",y:2014,d:"Bungie",g:"FPS",k:"singleplayer,multiplayer,co-op",w:"Destiny (video game)"},
{id:"kotor2",t:"Star Wars: Knights of the Old Republic II - The Sith Lords",y:2004,d:"Obsidian",g:"RPG",k:"singleplayer,story-driven"},
{id:"jedifallen",t:"Star Wars Jedi: Fallen Order",y:2019,d:"Respawn",g:"Action",k:"singleplayer"},
{id:"swbf2",t:"Star Wars Battlefront II",y:2017,d:"DICE",g:"FPS",k:"multiplayer"},
{id:"swsquadrons",t:"Star Wars: Squadrons",y:2020,d:"Motive Studio",g:"Action",k:"multiplayer"},
{id:"legoswsaga",t:"LEGO Star Wars: The Skywalker Saga",y:2022,d:"TT Games",g:"Adventure",k:"singleplayer,multiplayer,co-op,local co-op,story-driven"},
{id:"lisbtstorm",t:"Life is Strange: Before the Storm",y:2017,d:"Deck Nine",g:"Adventure",k:"singleplayer,story-driven"},
{id:"listruecolors",t:"Life is Strange: True Colors",y:2021,d:"Deck Nine",g:"Adventure",k:"singleplayer,story-driven"},
{id:"lisdoubleexposure",t:"Life is Strange: Double Exposure",y:2024,d:"Deck Nine",g:"Adventure",k:"singleplayer,story-driven",w:"Life Is Strange: Double Exposure"},
{id:"twd2",t:"The Walking Dead: Season Two",y:2013,d:"Telltale Games",g:"Adventure",k:"singleplayer,story-driven"},
{id:"twdnewfrontier",t:"The Walking Dead: A New Frontier",y:2016,d:"Telltale Games",g:"Adventure",k:"singleplayer,story-driven",w:"The Walking Dead: A New Frontier"},
{id:"talesborderlands",t:"Tales from the Borderlands",y:2014,d:"Telltale Games",g:"Adventure",k:"singleplayer,story-driven"},
{id:"systemshock1",t:"System Shock",y:1994,d:"Looking Glass Studios",g:"Horror",k:"singleplayer,atmospheric",w:"System Shock (video game)"},
{id:"systemshock2",t:"System Shock 2",y:1999,d:"Looking Glass Studios",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"systemshockrem",t:"System Shock (2023)",y:2023,d:"Nightdive Studios",g:"Horror",k:"singleplayer,story-driven,atmospheric"},
{id:"fh4",t:"Forza Horizon 4",y:2018,d:"Playground Games",g:"Racing",k:"multiplayer,open world"},
{id:"fable1",t:"Fable",y:2004,d:"Lionhead Studios",g:"RPG",k:"singleplayer",w:"Fable (2004 video game)"},
{id:"fable2",t:"Fable II",y:2008,d:"Lionhead Studios",g:"RPG",k:"singleplayer",w:"Fable II"},
{id:"fable3",t:"Fable III",y:2010,d:"Lionhead Studios",g:"RPG",k:"singleplayer",w:"Fable III"},
{id:"banjo",t:"Banjo-Kazooie",y:1998,d:"Rare",g:"Platformer",k:"singleplayer",w:"Banjo-Kazooie"},
{id:"seathieves",t:"Sea of Thieves",y:2018,d:"Rare",g:"Adventure",k:"singleplayer,multiplayer,co-op,open world"},
{id:"grounded",t:"Grounded",y:2022,d:"Obsidian",g:"Sandbox",k:"singleplayer,multiplayer,co-op,survival"},
{id:"oriwisps",t:"Ori and the Will of the Wisps",y:2020,d:"Moon Studios",g:"Platformer",k:"indie,singleplayer,atmospheric"},
{id:"psychonauts1",t:"Psychonauts",y:2005,d:"Double Fine",g:"Platformer",k:"singleplayer,story-driven"},
{id:"psychonauts2",t:"Psychonauts 2",y:2021,d:"Double Fine",g:"Platformer",k:"singleplayer,story-driven"},
{id:"minecraftdungeons",t:"Minecraft Dungeons",y:2020,d:"Mojang Studios",g:"Action",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"minecraftlegends",t:"Minecraft Legends",y:2023,d:"Mojang Studios",g:"Strategy",k:"singleplayer",w:"Minecraft Legends"},
{id:"spyro1",t:"Spyro the Dragon",y:1998,d:"Insomniac Games",g:"Platformer",k:"singleplayer",w:"Spyro the Dragon"},
/* --- PES, FIFA and party / co-op additions --- */
{id:"pes3",t:"Pro Evolution Soccer 3",y:2003,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes4",t:"Pro Evolution Soccer 4",y:2004,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes5",t:"Pro Evolution Soccer 5",y:2005,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes6",t:"Pro Evolution Soccer 6",y:2006,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2008",t:"Pro Evolution Soccer 2008",y:2007,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2009",t:"Pro Evolution Soccer 2009",y:2008,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2010",t:"Pro Evolution Soccer 2010",y:2009,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2011",t:"Pro Evolution Soccer 2011",y:2010,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2012",t:"Pro Evolution Soccer 2012",y:2011,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2013",t:"Pro Evolution Soccer 2013",y:2012,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2014",t:"Pro Evolution Soccer 2014",y:2013,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2015",t:"Pro Evolution Soccer 2015",y:2014,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2016",t:"Pro Evolution Soccer 2016",y:2015,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2017",t:"Pro Evolution Soccer 2017",y:2016,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2019",t:"Pro Evolution Soccer 2019",y:2018,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2020",t:"eFootball PES 2020",y:2019,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"pes2021",t:"eFootball PES 2021",y:2020,d:"Konami",g:"Sports",k:"multiplayer"},
{id:"fifa98",t:"FIFA: Road to World Cup 98",y:1997,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa99",t:"FIFA 99",y:1998,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa2000",t:"FIFA 2000",y:1999,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa2001",t:"FIFA 2001",y:2000,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa2002",t:"FIFA 2002",y:2001,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa2003",t:"FIFA Football 2003",y:2002,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa2004",t:"FIFA Football 2004",y:2003,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa2005",t:"FIFA Football 2005",y:2004,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa06",t:"FIFA 06",y:2005,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa07",t:"FIFA 07",y:2006,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa08",t:"FIFA 08",y:2007,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa09",t:"FIFA 09",y:2008,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa10",t:"FIFA 10",y:2009,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa11",t:"FIFA 11",y:2010,d:"EA Canada",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa12",t:"FIFA 12",y:2011,d:"EA Vancouver",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa13",t:"FIFA 13",y:2012,d:"EA Vancouver",g:"Sports",k:"singleplayer,multiplayer"},
{id:"fifa14",t:"FIFA 14",y:2013,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa15",t:"FIFA 15",y:2014,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa16",t:"FIFA 16",y:2015,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa17",t:"FIFA 17",y:2016,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa18",t:"FIFA 18",y:2017,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa19",t:"FIFA 19",y:2018,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa20",t:"FIFA 20",y:2019,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa21",t:"FIFA 21",y:2020,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"fifa22",t:"FIFA 22",y:2021,d:"EA Vancouver",g:"Sports",k:"multiplayer"},
{id:"awayout",t:"A Way Out",y:2018,d:"Hazelight Studios",g:"Adventure",k:"multiplayer,co-op,local co-op,story-driven"},
{id:"machineparty",t:"Machine Party",y:2026,d:"Mike Klubnika; GDeavid",g:"Other",k:"indie,multiplayer,co-op"},
{id:"shiftatmidnight",t:"Shift at Midnight",y:2026,d:"Bun Muen",g:"Horror",k:"indie,multiplayer,co-op"},
{id:"partypanic",t:"Party Panic",y:2017,d:"Everglow Interactive",g:"Other",k:"indie,multiplayer,local co-op"},
{id:"heaveho",t:"Heave Ho",y:2018,d:"Le Cartel Studio",g:"Platformer",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"movingout",t:"Moving Out",y:2020,d:"SMG Studio",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"movingout2",t:"Moving Out 2",y:2023,d:"SMG Studio",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"gangbeasts",t:"Gang Beasts",y:2017,d:"Boneloaf",g:"Fighting",k:"indie,multiplayer,local co-op"},
{id:"chickenhorse",t:"Ultimate Chicken Horse",y:2016,d:"Clever Endeavour Games",g:"Platformer",k:"indie,multiplayer,local co-op"},
{id:"pummelparty",t:"Pummel Party",y:2018,d:"Rebuilt Games",g:"Other",k:"indie,multiplayer,local co-op"},
{id:"golfwfriends",t:"Golf With Your Friends",y:2020,d:"Blacklight Interactive",g:"Sports",k:"indie,multiplayer"},
{id:"overcooked1",t:"Overcooked!",y:2016,d:"Ghost Town Games",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"castlecrashers",t:"Castle Crashers",y:2008,d:"The Behemoth",g:"Action",k:"indie,singleplayer,multiplayer,co-op,local co-op,pixel art"},
{id:"sackboy",t:"Sackboy: A Big Adventure",y:2020,d:"Sumo Digital",g:"Platformer",k:"singleplayer,multiplayer,co-op,local co-op"},
{id:"lovers",t:"Lovers in a Dangerous Spacetime",y:2015,d:"Asteroid Base",g:"Action",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"keeptalking",t:"Keep Talking and Nobody Explodes",y:2015,d:"Steel Crate Games",g:"Puzzle",k:"indie,multiplayer,co-op"},
{id:"unrailed",t:"Unrailed!",y:2021,d:"Indoor Astronaut",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"picopark",t:"PICO PARK",y:2021,d:"TECOPARK",g:"Platformer",k:"indie,multiplayer,co-op,local co-op"},
{id:"plateup",t:"PlateUp!",y:2022,d:"It's Happening",g:"Simulation",k:"indie,singleplayer,multiplayer,co-op,local co-op"},
{id:"stickfight",t:"Stick Fight: The Game",y:2017,d:"Landfall",g:"Fighting",k:"indie,multiplayer,local co-op"},
{id:"tabs",t:"Totally Accurate Battle Simulator",y:2021,d:"Landfall",g:"Strategy",k:"indie,singleplayer,multiplayer"},
{id:"contentwarning",t:"Content Warning",y:2024,d:"Landfall; Skog; Wilnyl; Zorro",g:"Horror",k:"indie,multiplayer,co-op"},
{id:"buckshot",t:"Buckshot Roulette",y:2024,d:"Mike Klubnika",g:"Horror",k:"indie,singleplayer,multiplayer,atmospheric"},
{id:"chainedtogether",t:"Chained Together",y:2024,d:"Anegar Games",g:"Platformer",k:"indie,singleplayer,multiplayer,co-op,hard"},
 ];
/* Steam App IDs: use Steam's own library artwork where the game has a Steam listing. */
var STEAM_APP_IDS={
  witcher3:292030, eldenring:1245620, hollowknight:367520, celeste:504230,
  discoelysium:632470, hades:1145360, rdr2:1174180, portal2:620, hl2:220,
  monument:1927720, falloutnv:22380, tetris:1003590, sonic2:1794960,
  stardew:413150, undertale:391540, gow2018:1593500, darksouls:570940,
  sekiro:814380, terraria:105600, bg3:1086940, cp2077:1091500, outerwilds:753640,
  p5:1687950, re4:254700, sh2:2124490, tlou:1888930, me2:24980, doom2016:379720,
  gta5:271590, gtasa:12120, mgs3:2131650, mgsv:287700, deathstranding:1190460,
  spiderman:1817070, arkhamcity:200260, ac2:33230, dmc5:601150, nier:524220,
  tsushima:2215430, horizon:1151640, yakuza0:638970, farcry3:220240, cod4:7940,
  csgo:730, overwatch:2357570, apex:1172470, bioshock:7670, stalker:4500,
  halo:976730, titanfall2:1237970, pubg:578080, fnv:22380, skyrim:489830,
  dao:17450, ff7:39140, ff7r:1462040, ffx:359870, p4g:1113000, chrono:613830,
  kotor:32370, ori:261570, cuphead:268910, rayman:242550, shovel:250760,
  crash:731490, limbo:48000, inside:304430, fallguys:1097150, lis:319630,
  twd:207610, firewatch:383870, edithfinch:501300, uncharted4:1659420,
  tombraider:203160, journey:638230, witness:210970, baba:736260, sims4:1222670,
  cities:255710, ets2:227300, ksp:220200, isaac:250900, slay:646570,
  deadcells:588650, ror2:632360, darkestdungeon:262060, re2:883710,
  deadspace:1693980, amnesia:57300, outlast:238320, fnaf:319510, alieniso:214490,
  rust:252490, subnautica:264710, valheim:892970, nms:275850, civ6:289070,
  aoe2:813780, xcom2:268500, dota2:570, fh5:1551360, dirt2:690790,
  fifa23:1811260, rocketleague:252950, sf6:1364780, tekken7:389730,
  mk11:976310, amongus:945360, witcher2:20920, fallout4:377160,
  morrowind:22320, ff14:39210, persona3r:2161700, pathfinderwotr:1184370,
  pillars:291650, lies:1627720, blackmyth:2358720, lethal:1966720,
  phasmo:739630, re7:418370, revillage:1196590, dbd:381210, soma:282140,
  cod_mw2:10180, bf4:1238860, bf1:1238840, r6siege:359550, tf2:440,
  l4d2:550, hlalyx:546560, doometernal:782330, metro2033:43110, cs2:730,
  helldivers2:553850, palworld:1623730, satisfactory:526870, factorio:427520,
  rimworld:294100, dwarf:975370, prjzomboid:108600, ark:346110, forest:242760,
  sotf:1326470, '7dtd':251570, gtfo:219740, corekeeper:1621690,
  vampsurv:1794680, balatro:2379780, hades2:1145350, entergungeon:311690,
  risk2:1337520, ftl:212680, hollowsilk:1030300, sm:40800, ratchet:1895880,
  sonicmania:584400, forza4:2440510, nfsheat:1222680, fifa24:2195250,
  nba2k24:2338770, pes:592580, tonyhawk:2395210, mkx:307780,
  guiltygear:1384160, brawlhalla:291550, ageofwonders4:1669000,
  totalwarwh3:1142710, stellaris:281990, eu4:236850, hoi4:394360,
  ck3:1158310, xcom:200510, bf:590380, kenshi:233860, disco2:653530,
  talos:257510, portal1:400, humanfall:477160, itt:1426210, unravel:1225570,
  gris:683320, hellblade:414340, detroit:1222140, heavyrain:960910,
  lifeisstrange2:532210, wolfamong:250320, mafia:1030840, watchdogs:447040,
  acvalhalla:2208920, acblackflag:242050, farcry6:2369390, jedisurvivor:1774580,
  gowragnarok:2322010, tlou2:2531310, rdr1:2668510, gta4:12210, gtavc:12110,
  maxpayne:204100, mc:17410, animalwell:813230, cocoon:1497440, dave:1868140,
  cult:1313140, tunic:553420, hifirush:1817230, control:870780, starfield:1716740,
  dragonsdogma2:2054970, mhworld:582010, mhwilds:2246340, ds3:374320,
  ds2:236430, armoredcore6:1888160, erdtree:2622380,
  marvelrivals:2767030,
  warframe:230410,
  destiny2:1085660,
  warthunder:236390,
  thefinals:2073850,
  deltaforce:2507950,
  naraka:1203220,
  hogwartslegacy:990080,
  clairobscur:1903340,
  schedule1:3164500,
  repo:3241660,
  peak:3527290,
  arcraiders:1808500,
  battlefield6:2807960,
  borderlands4:1285190,
  poe2:2694490,
  dyinglight2:534380,
  dontstarvetogether:322330,
  fc25:2669320,
  fc26:3405690,
  farmingsim25:2300320,
  cities2:949230,
  civ7:1295660,
  slay2:2868840,
  kcd2:1771300,
  readynot:1144200,
  dayz:221100,
  garrysmod:4000,
  geometrydash:322170,
  beamng:284160,
  bannerlord:261550,
  oncehuman:2139460,
  fallout76:1151340,
  payday2:218620,
  duneawakening:1172710,
  outlasttrials:1304930,
  division2:2221490,
  smite2:2437170,
  enshrouded:1203620,
  spacemarine2:2183900,
  efootball:1665460,
  acshadows:3159330,
  stellarblade:3489700,
  splitfiction:2001120,
  indianajones:2677660,
  metroexodus:412020,
  re3:952060,
  firstdescendant:2074920,
  blackops3:311210,
  arksurvivalascended:2399830,
  fm26:3551340,
  oblivionremastered:2623190,
  wutheringwaves:3513350,
  hellletloose:686810,
  arma3:107410,
  mhrise:1446780,
  huntshowdown:594650,
  overcooked2:728880,
  payday3:1272080,
  forzahorizon6:2483190,
  wherewindsmeet:3564740,
  gears5:1097840,
  elderscrollsonline:306130,
  darktide:1361210,
  "trrise":391220,
  "trshadow":750920,
  "re1hd":304240,
  "re0":339340,
  "rev1":222480,
  "rev2":287290,
  "re5":21690,
  "re6":221040,
  "re4r":2050650,
  "fo1":38400,
  "fo2":38410,
  "fo3":22370,
  "fotactics":38420,
  "foshelter":588430,
  "tesoblivion":22330,
  "witcher1":20900,
  "me1":17460,
  "mel":1328670,
  "ac1":15100,
  "acb":48190,
  "acr":201870,
  "ac3":208480,
  "acrogue":312670,
  "acunity":289650,
  "acsyn":368500,
  "acorigins":582160,
  "acodyssey":812140,
  "fc1":13520,
  "fc2":19900,
  "fc4":298110,
  "fc5":552520,
  "fcprimal":371660,
  "fcnd":939960,
  "fcbd":233270,
  "cod1":2620,
  "cod2":2630,
  "codwaw":10090,
  "codbo1":42700,
  "codmw3":115300,
  "codbo2":202970,
  "codghosts":209160,
  "codaw":209650,
  "codiw":292730,
  "codww2":476600,
  "codbo6":2933620,
  "bfbc2":24960,
  "bf3":1238820,
  "bfh":1238880,
  "bfv":1238810,
  "bf2042":1517290,
  "gta1":12170,
  "gta2":12180,
  "gta3":12100,
  "bully":12200,
  "lanoire":110800,
  "mp1":12140,
  "mp2":12150,
  "alanwake":108710,
  "quantumbreak":474960,
  "crash4":1378990,
  "spyroreig":996580,
  "spidermm":1817190,
  "arkhamasylum":35140,
  "arkhamorigins":209000,
  "arkhamknight":208650,
  "batmantt":498240,
  "hl1":70,
  "hlof":50,
  "hlbs":130,
  "hl2e1":380,
  "hl2e2":420,
  "l4d1":500,
  "cs16":10,
  "css":240,
  "deadlock":1422450,
  "haloinf":1240440,
  "doom1":2280,
  "doom2":2300,
  "doom3":9050,
  "doomdark":3017860,
  "quake1":2310,
  "quake2":2320,
  "quake3":2200,
  "quake4":2210,
  "quakechamp":611500,
  "mgsgz":311340,
  "mgr":235460,
  "mgsdelta":2417610,
  "p3p":1809700,
  "p5s":1382330,
  "smt5v":1875830,
  "ff1":1173770,
  "ff2":1173780,
  "ff3":1173790,
  "ff4":1173800,
  "ff5":1173810,
  "ff6":1173820,
  "ff8":39150,
  "ff9":377840,
  "ff12":595520,
  "ff13":292120,
  "ff132":292140,
  "ff13lr":345350,
  "ff15":637650,
  "ff16":2515020,
  "ff7rebirth":2909400,
  "ff7cc":1608070,
  "dmc3":6550,
  "dmc4":45700,
  "dmcreboot":220440,
  "sf4":45760,
  "sf5":310950,
  "mk9":47870,
  "mkdoom":1971870,
  "tekken8":1778820,
  "ykiwami":417290,
  "ykiwami2":927380,
  "y3":1088710,
  "y4":1105500,
  "y5":1105510,
  "y6":1388590,
  "ylad":1235140,
  "lad8":2072450,
  "ladgaiden":2375550,
  "soniccd":200940,
  "sonicadv2":213610,
  "sonicgen":71340,
  "sonicforces":637100,
  "sonicfront":1237320,
  "sonicshadow":2513280,
  "horizonfw":2420110,
  "daysgone":1259420,
  "returnal":1649240,
  "beyond2souls":960990,
  "hitmanbm":6860,
  "hitmanabs":203140,
  "hitman2016":236870,
  "hitman2018":863550,
  "hitman3":1659040,
  "dx1":6910,
  "dx2":6920,
  "dxhr":238010,
  "dxmd":337000,
  "dishonored1":205100,
  "dishonored2":403640,
  "dishonoredoutsider":614570,
  "prey2017":480490,
  "deathloop":1252330,
  "wolf3d":9010,
  "wolfneworder":201810,
  "wolfoldblood":350080,
  "wolfnewcolossus":612880,
  "bioshock2":8850,
  "bioshockinf":8870,
  "bl1":8980,
  "bl2":49520,
  "blps":261640,
  "bl3":397540,
  "tinytina":1286680,
  "civ3":3910,
  "civ4":3900,
  "civ5":8930,
  "civbe":65980,
  "aoe3":933110,
  "aoe4":1466860,
  "aomretold":1934680,
  "aoede":1017900,
  "twwh1":364360,
  "twwh2":594570,
  "twrome2":214950,
  "twshogun2":34330,
  "tw3k":779340,
  "twmedieval2":4700,
  "twempire":10500,
  "twpharaoh":1937780,
  "eu5":3450310,
  "ck2":203770,
  "victoria3":529340,
  "sims3":47890,
  "ds2g":47780,
  "ds3g":1105430,
  "metrolastlight":43160,
  "stalkercs":20510,
  "stalkercop":41700,
  "stalker2":1643320,
  "dyinglight1":239140,
  "deadisland1":91310,
  "deadislandriptide":216250,
  "deadisland2":934700,
  "saints2":9480,
  "saints3":55230,
  "saints4":206420,
  "justcause2":8190,
  "justcause3":225540,
  "justcause4":517630,
  "mafia1":40990,
  "mafia2":1030830,
  "mafiaoldcountry":1941540,
  "watchdogs1":243470,
  "bg1":228280,
  "bg2":257350,
  "nwn":704450,
  "planescape":466300,
  "dos1":230230,
  "dos2":435150,
  "poe2deadfire":560130,
  "nierrepl":1113560,
  "dragonsdogma1":367500,
  "okami":587620,
  "megaman11":742300,
  "poe1":238960,
  "torchlight2":200710,
  "mountblade1":48700,
  "crysis1":17300,
  "crysiswarhead":17330,
  "crysis2":108800,
  "kotor2":208580,
  "jedifallen":1172380,
  "swbf2":1237950,
  "swsquadrons":1222730,
  "legoswsaga":920210,
  "lisbtstorm":554620,
  "listruecolors":936790,
  "twd2":261030,
  "talesborderlands":330830,
  "systemshock2":238210,
  "systemshockrem":482400,
  "fh4":1293830,
  "seathieves":1172620,
  "grounded":962130,
  "oriwisps":1057090,
  "psychonauts1":3830,
  "psychonauts2":607080,
  "minecraftdungeons":1672970,
  "rereq":3764200,
  "shf":2947440,
"awayout":1222700,
"partypanic":506500,
"gangbeasts":285900,
"stickfight":674940,
"contentwarning":2881650,
"buckshot":2835570,
"overcooked1":448510,
"castlecrashers":204360,
"keeptalking":341800,
"golfwfriends":431240,
"pummelparty":880940,
"picopark":1509960,
"chickenhorse":386940
};
var GENRES=["RPG","Action","Adventure","Platformer","Puzzle","FPS","Simulation","Roguelike","Horror","Sandbox","Strategy","Racing","Sports","Fighting","Other"];
var STATUS=[["done","Finished"],["playing","Playing"],["dropped","Dropped"],["wish","Want to play"]];
var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];

var state={logs:{},custom:[],public:false,following:[],lists:[],favs:[],username:"",email:"",salt:"",hash:"",profile:{}};
var subj=null; /* when set, profile renderers show this member (read-only) instead of me */
var ui={gid:"",lo:"me",lid:"",tab:"kesf",genre:"",sort:"year",profileSort:"year",bf:{tag:"",decade:"",plat:"",hide:false,open:""},pf:{tag:"",status:"",rmin:0,rmax:0,pend:false,norate:false,decade:"",genre:"",plat:"",hide:false,open:""},searchType:"games",q:"",homeQ:"",homeGenre:"",profile:null,psq:"",hits:null,globalHits:null};
var editing=null; // {game, isNew, pendingCustom}
var chain=Promise.resolve();
var db=null, userApi=null, myId=null;            /* db/userApi are set only while a Supabase session is active */
var people=null, profs={}, loaded=false;
var follows=[];                                  /* rows of the follows table: {a:followerId, b:followingId} */
var peopleAt=0, cmAt=0, lastPub="";
var signedIn=false;

/* ---------- helpers ---------- */
function $(s,r){return (r||document).querySelector(s)}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function gameTags(g){return g&&g.k?g.k.split(","):[]}
function allGames(){return GAMES.concat(state.custom)}
function gameById(id){var a=allGames();for(var i=0;i<a.length;i++)if(a[i].id===id)return a[i];return null}
function todayStr(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function toast(msg){var t=document.createElement("div");t.className="toast";t.setAttribute("role","status");t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.remove()},2200)}
function stars(v){var o="";for(var i=0;i<5;i++){var f=Math.max(0,Math.min(1,(v-2*i)/2))*100;o+='<i style="--f:'+f+'%">★</i>'}return '<span class="stars" aria-hidden="true">'+o+'</span>'}
function ratingText(v){return v?(v/2).toString()+" / 5":"Not rated"}
function statusLabel(k){for(var i=0;i<STATUS.length;i++)if(STATUS[i][0]===k)return STATUS[i][1];return k}

/* Steam artwork loader. Static App IDs cover common titles; the Store search is a fallback for other games. */
var STEAM_CACHE_KEY="gameboxd_steam_art_cache_v3";
var WIKI_CACHE_KEY="gameboxd_wiki_art_cache_v2";
var steamLookupCache=(function(){try{return JSON.parse(localStorage.getItem(STEAM_CACHE_KEY)||"{}")}catch(e){return {}}})();
var wikiLookupCache=(function(){try{return JSON.parse(localStorage.getItem(WIKI_CACHE_KEY)||"{}")}catch(e){return {}}})();
var steamLookupAttempted={};
var steamLookupQueue=[];
var steamLookupBusy=false;
var wikiLookupAttempted={};
var wikiLookupQueue=[];
var wikiLookupBusy=false;
var steamArtObserver=null;
var artCoversByTitle={};
function rememberArtCover(key,coverEl){
  if(!key||!coverEl)return;
  var list=artCoversByTitle[key]||(artCoversByTitle[key]=[]);
  if(list.indexOf(coverEl)<0)list.push(coverEl);
}
function forEachArtCover(key,fn){
  (artCoversByTitle[key]||[]).slice().forEach(function(el){if(document.contains(el))fn(el)});
}
function insertSteamImageForTitle(key,appId,tiny){
  forEachArtCover(key,function(el){insertSteamImage(el,appId,tiny)});
}
function insertExternalImageForTitle(key,url,title){
  forEachArtCover(key,function(el){insertExternalImage(el,url,title)});
}

function steamArtSources(appId,tiny){
  var base="https://cdn.cloudflare.steamstatic.com/steam/apps/"+appId+"/";
  var sources=[
    base+"library_600x900.jpg",
    "https://steamcdn-a.akamaihd.net/steam/apps/"+appId+"/library_600x900.jpg",
    base+"library_600x900_2x.jpg",
    base+"header.jpg",
    base+"capsule_616x353.jpg"
  ];
  if(tiny&&sources.indexOf(tiny)<0)sources.push(tiny);
  return sources;
}
function bindSteamImage(img){
  if(img.dataset.errorBound)return;
  img.dataset.errorBound="1";
  img.dataset.steamStep="0";
  img.onerror=function(){
    var id=img.dataset.steamApp;
    if(!id){img.remove();return}
    var list=steamArtSources(id,img.dataset.steamTiny||"");
    var next=Number(img.dataset.steamStep||0)+1;
    if(next<list.length){img.dataset.steamStep=String(next);img.src=list[next]}
    else{
      var card=img.closest(".cover");
      img.remove();
      if(card&&card.dataset.gameTitle){
        card.dataset.steamSearch="1";
        if(!card.dataset.steamLooked){card.dataset.steamLooked="1";queueSteamLookup(card)}
      }
    }
  };
}
function insertSteamImage(coverEl,appId,tiny){
  if(!coverEl||!document.contains(coverEl))return;
  if(coverEl.querySelector(".steam-art"))return;
  var img=document.createElement("img");
  img.className="steam-art";img.alt="";img.loading="lazy";
  img.dataset.steamApp=String(appId);
  if(tiny)img.dataset.steamTiny=tiny;
  bindSteamImage(img);
  img.src=steamArtSources(appId,tiny)[0];
  var caption=coverEl.querySelector(".ct");
  if(caption)coverEl.insertBefore(img,caption);else coverEl.appendChild(img);
}
function insertExternalImage(coverEl,url,title){
  if(!coverEl||!document.contains(coverEl)||!url||coverEl.querySelector(".steam-art"))return;
  var img=document.createElement("img");
  img.className="steam-art";img.alt=(title||coverEl.dataset.gameTitle||"Game")+" cover art";img.loading="lazy";
  img.referrerPolicy="no-referrer";
  img.onerror=function(){img.remove()};
  img.src=url;
  var caption=coverEl.querySelector(".ct");
  if(caption)coverEl.insertBefore(img,caption);else coverEl.appendChild(img);
}
function saveWikiLookupCache(){try{localStorage.setItem(WIKI_CACHE_KEY,JSON.stringify(wikiLookupCache))}catch(e){}}
var WIKI_TITLES={
  botw:"The Legend of Zelda: Breath of the Wild",bloodborne:"Bloodborne",odyssey:"Super Mario Odyssey",
  fortnite:"Fortnite",valorant:"Valorant",pokered:"Pokémon Red and Blue",wow:"World of Warcraft",diablo2:"Diablo II",
  mario64:"Super Mario 64",oot:"The Legend of Zelda: Ocarina of Time",totk:"The Legend of Zelda: Tears of the Kingdom",
  acnh:"Animal Crossing: New Horizons",sc2:"StarCraft II: Wings of Liberty",wc3:"Warcraft III: Reign of Chaos",
  lol:"League of Legends",mk8:"Mario Kart 8 Deluxe",mariokart:"Mario Kart 8 Deluxe",nfsmw:"Need for Speed: Most Wanted (2005 video game)",
  smashu:"Super Smash Bros. Ultimate",xenoblade:"Xenoblade Chronicles 3",kirbyfl:"Kirby and the Forgotten Land",
  astrobot:"Astro Bot (video game)",gt7:"Gran Turismo 7",pokemonsv:"Pokémon Scarlet and Violet",pokemonla:"Pokémon Legends: Arceus",
  fireemblem:"Fire Emblem: Three Houses",alanwake2:"Alan Wake 2"
};
function wikiTitleFor(el){var id=el&&el.dataset?el.dataset.gameId:"",g=id?gameById(id):null;return (g&&g.w)||WIKI_TITLES[id]||""}
function queueWikiLookup(coverEl,title){
  title=title||coverEl&&coverEl.dataset.gameTitle||"";
  if(!coverEl||!document.contains(coverEl))return;
  var key=normalizeSteamTitle(title);
  if(!key)return;
  rememberArtCover(key,coverEl);
  var cached=wikiLookupCache[key];
  if(cached){if(cached.url)insertExternalImageForTitle(key,cached.url,title);else steamAfterWiki(coverEl,title,key);return}
  if(wikiLookupAttempted[key])return;
  wikiLookupAttempted[key]=true;
  wikiLookupQueue.push({cover:coverEl,title:title,key:key,wt:wikiTitleFor(coverEl)});
  processWikiLookupQueue();
}
var WIKI_API="https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=512&format=json&origin=*";
function wikiGet(url){return fetch(url,{mode:"cors",credentials:"omit"}).then(function(r){if(!r.ok)throw new Error("wiki");return r.json()})}
function wikiPageList(d){var p=d&&d.query&&d.query.pages?d.query.pages:{};return Object.keys(p).map(function(k){return p[k]})}
function wikiByTitle(t){
  return wikiGet(WIKI_API+"&redirects=1&titles="+encodeURIComponent(t)).then(function(d){
    var p=wikiPageList(d).filter(function(x){return x&&x.thumbnail&&x.thumbnail.source})[0];
    return p?p.thumbnail.source:"";
  });
}
function wikiBySearch(title,suffix,min){
  return wikiGet(WIKI_API+"&generator=search&gsrsearch="+encodeURIComponent(title+suffix)+"&gsrnamespace=0&gsrlimit=8").then(function(d){
    var best=null,bs=0;
    wikiPageList(d).forEach(function(p){
      if(!p||!p.thumbnail||!p.thumbnail.source||!p.title)return;
      var sc=steamTitleScore(title,p.title.replace(/\s*\(.*?\)\s*$/,""));
      if(sc>bs){bs=sc;best=p}
    });
    return best&&bs>=min?best.thumbnail.source:"";
  });
}
/* Wikipedia had no image: try the Steam store search once as a second source */
/* Last fallback: RAWG (via the Supabase Edge Function "rawg") when Steam and Wikipedia have no artwork */
var RAWG_ART_KEY="gameboxd_rawg_art_cache_v1";
var rawgArtCache=(function(){try{return JSON.parse(localStorage.getItem(RAWG_ART_KEY)||"{}")}catch(e){return {}}})();
var rawgArtAttempted={},rawgArtQueue=[],rawgArtBusy=false;
function saveRawgArtCache(){try{localStorage.setItem(RAWG_ART_KEY,JSON.stringify(rawgArtCache))}catch(e){}}
function rawgArtUrl(d){
  if(!d||!d.found)return "";
  var u=rawgHttps(d.banner)||rawgHttps(d.banner2);
  if(!u&&Array.isArray(d.shots))u=d.shots.map(rawgHttps).filter(Boolean)[0]||"";
  return u||"";
}
function queueRawgLookup(coverEl,title,key){
  if(!coverEl||!document.contains(coverEl))return;
  title=title||coverEl.dataset.gameTitle||"";key=key||normalizeSteamTitle(title);
  if(!key)return;
  rememberArtCover(key,coverEl);
  var c=rawgArtCache[key];
  if(c){if(c.url)insertExternalImageForTitle(key,c.url,title);return}
  var gid=coverEl.dataset.gameId,cd=gid?rawgCacheGet(gid):null,cu=rawgArtUrl(cd);
  if(cu){rawgArtCache[key]={url:cu};saveRawgArtCache();insertExternalImageForTitle(key,cu,title);return}
  if(!sb||!sb.functions||rawgArtAttempted[key])return;
  rawgArtAttempted[key]=true;
  rawgArtQueue.push({title:title,key:key,gid:gid});
  processRawgArtQueue();
}
/* RAWG is tried FIRST for games without a Steam App ID (Wikipedia often returns logos). next() continues the old chain if RAWG has nothing. */
function rawgFirst(el,title,key,next){
  var c=rawgArtCache[key];
  if(c&&c.url){insertExternalImageForTitle(key,c.url,title);return}
  if(c){next();return}
  var gid=el.dataset.gameId,cu=gid?rawgArtUrl(rawgCacheGet(gid)):"";
  if(cu){rawgArtCache[key]={url:cu};saveRawgArtCache();insertExternalImageForTitle(key,cu,title);return}
  if(!sb||!sb.functions){next();return}
  if(rawgArtAttempted[key])return;
  rawgArtAttempted[key]=true;
  rawgArtQueue.push({title:title,key:key,gid:gid,next:next});
  processRawgArtQueue();
}
function processRawgArtQueue(){
  if(rawgArtBusy||!rawgArtQueue.length)return;
  rawgArtBusy=true;
  var job=rawgArtQueue.shift();
  sb.functions.invoke("rawg",{body:{title:job.title}}).then(function(r){
    var d=r&&!r.error?r.data:null,u=rawgArtUrl(d);
    if(u){rawgArtCache[job.key]={url:u};saveRawgArtCache();insertExternalImageForTitle(job.key,u,job.title);if(job.gid&&d)rawgCachePut(job.gid,d)}
    else{if(d&&d.found===false){rawgArtCache[job.key]={notFound:true};saveRawgArtCache()}if(job.next)job.next()}
  }).catch(function(){if(job.next)job.next()})
  .then(function(){rawgArtBusy=false;setTimeout(processRawgArtQueue,300)});
}
function steamAfterWiki(el,title,key){
  var c=steamLookupCache[key];
  if(c){if(c.id)insertSteamImageForTitle(key,c.id,c.tiny||"");else queueRawgLookup(el,title,key);return}
  if(steamLookupAttempted[key])return;
  steamLookupAttempted[key]=true;
  steamLookupQueue.push({cover:el,title:title,key:key});processSteamLookupQueue();
}
function processWikiLookupQueue(){
  if(wikiLookupBusy||!wikiLookupQueue.length)return;
  wikiLookupBusy=true;
  var job=wikiLookupQueue.shift(),p=Promise.resolve("");
  if(job.wt)p=wikiByTitle(job.wt).catch(function(){return ""});
  p.then(function(u){return u||wikiBySearch(job.title," video game",.5).catch(function(){return ""})})
   .then(function(u){return u||wikiBySearch(job.title,"",.7).catch(function(){return ""})})
   .then(function(u){
     if(u){wikiLookupCache[job.key]={url:u};saveWikiLookupCache();insertExternalImageForTitle(job.key,u,job.title)}
     else{wikiLookupCache[job.key]={notFound:true};saveWikiLookupCache();steamAfterWiki(job.cover,job.title,job.key)}
   })
   .then(function(){wikiLookupBusy=false;setTimeout(processWikiLookupQueue,150)},function(){wikiLookupBusy=false;setTimeout(processWikiLookupQueue,150)});
}
function normalizeSteamTitle(title){
  return String(title||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/&/g," and ").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ");
}
function steamTitleScore(query,name){
  var a=normalizeSteamTitle(query),b=normalizeSteamTitle(name);
  if(!a||!b)return 0;
  if(a===b)return 1;
  var strip=/\b(the|a|an|of|and|edition|definitive|remastered|remaster|hd|enhanced|complete|deluxe|directors|cut|version|original|game|year|collection)\b/g;
  var aa=a.replace(strip," ").replace(/\s+/g," ").trim();
  var bb=b.replace(strip," ").replace(/\s+/g," ").trim();
  if(aa&&aa===bb)return .98;
  if(aa.length>5&&(bb.indexOf(aa)>=0||aa.indexOf(bb)>=0))return .9;
  var at=aa.split(" ").filter(Boolean),bt=bb.split(" ").filter(Boolean);
  if(at.length===1||bt.length===1)return 0;
  var common=at.filter(function(w){return bt.indexOf(w)>=0}).length;
  return common/Math.max(at.length,bt.length);
}
function selectSteamResult(title,data){
  var items=data&&Array.isArray(data.items)?data.items:[],best=null,bestScore=0;
  items.forEach(function(item){
    if(!item||item.type!=="app"||!item.id||!item.name)return;
    var score=steamTitleScore(title,item.name);
    if(score>bestScore){bestScore=score;best=item}
  });
  return best&&bestScore>=.78?best:null;
}
function saveSteamLookupCache(){try{localStorage.setItem(STEAM_CACHE_KEY,JSON.stringify(steamLookupCache))}catch(e){}}
function queueSteamLookup(coverEl){
  if(!coverEl||!document.contains(coverEl))return;
  var title=coverEl.dataset.gameTitle||"",key=normalizeSteamTitle(title);
  if(!key)return;
  rememberArtCover(key,coverEl);
  if(!coverEl.dataset.rawgTried){coverEl.dataset.rawgTried="1";rawgFirst(coverEl,title,key,function(){queueSteamLookup(coverEl)});return}
  if(coverEl.dataset.wiki==="1"){queueWikiLookup(coverEl,title);return}
  var cached=steamLookupCache[key];
  if(cached){
    if(cached.id)insertSteamImageForTitle(key,cached.id,cached.tiny||"");
    else queueWikiLookup(coverEl,title);
    return;
  }
  var wikiCached=wikiLookupCache[key];
  if(wikiCached){if(wikiCached.url)insertExternalImageForTitle(key,wikiCached.url,title);else steamAfterWiki(coverEl,title,key);return}
  if(steamLookupAttempted[key])return;
  steamLookupAttempted[key]=true;
  steamLookupQueue.push({cover:coverEl,title:title,key:key});
  processSteamLookupQueue();
}
function processSteamLookupQueue(){
  if(steamLookupBusy||!steamLookupQueue.length)return;
  steamLookupBusy=true;
  var job=steamLookupQueue.shift();
  var url="https://store.steampowered.com/api/storesearch/?term="+encodeURIComponent(job.title)+"&l=english&cc=US";
  fetch(url,{mode:"cors",credentials:"omit"}).then(function(response){if(!response.ok)throw new Error("Steam search unavailable");return response.json()}).then(function(data){
    var match=selectSteamResult(job.title,data);
    if(match){steamLookupCache[job.key]={id:String(match.id),tiny:typeof match.tiny_image==="string"?match.tiny_image:""};saveSteamLookupCache();insertSteamImageForTitle(job.key,match.id,match.tiny_image||"")}
    else{steamLookupCache[job.key]={notFound:true};saveSteamLookupCache();queueWikiLookup(job.cover,job.title)}
  }).catch(function(){steamLookupCache[job.key]={notFound:true};saveSteamLookupCache();queueWikiLookup(job.cover,job.title)})
  .finally(function(){steamLookupBusy=false;setTimeout(processSteamLookupQueue,250)});
}
function setupSteamArt(root){
  if(!root)return;
  root.querySelectorAll(".steam-art").forEach(bindSteamImage);
  if(typeof IntersectionObserver!=="undefined"){
    if(!steamArtObserver)steamArtObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){steamArtObserver.unobserve(entry.target);queueSteamLookup(entry.target)}})},{rootMargin:"260px 0px"});
    root.querySelectorAll('.cover[data-steam-search="1"]').forEach(function(el){if(!el.dataset.steamLooked){el.dataset.steamLooked="1";steamArtObserver.observe(el)}});
  }else{
    root.querySelectorAll('.cover[data-steam-search="1"]').forEach(function(el){if(!el.dataset.steamLooked){el.dataset.steamLooked="1";queueSteamLookup(el)}});
  }
}

/* Generated placeholder art remains underneath as a fallback when Steam has no artwork. */
var COVER_ART={minecraft:'<rect width="200" height="300" fill="#6db3f2"/><rect y="170" width="200" height="130" fill="#bfe3ff" opacity=".35"/><polygon points="100,72 172,112 100,152 28,112" fill="#62b83e"/><polygon points="28,112 100,152 100,172 28,132" fill="#4a8f2c"/><polygon points="172,112 100,152 100,172 172,132" fill="#3d7a24"/><polygon points="28,132 100,172 100,232 28,192" fill="#8a5a33"/><polygon points="172,132 100,172 100,232 172,192" fill="#6b4425"/><g fill="#4f9a30" opacity=".8"><rect x="88" y="100" width="12" height="8"/><rect x="118" y="116" width="12" height="8"/><rect x="62" y="116" width="10" height="8"/><rect x="100" y="128" width="12" height="8"/></g><g fill="#5b3a1f" opacity=".7"><rect x="44" y="160" width="12" height="10"/><rect x="70" y="190" width="12" height="10"/><rect x="128" y="190" width="12" height="10"/><rect x="150" y="162" width="12" height="10"/></g>'};
var GLYPH={RPG:"⚔️",Action:"💥",Adventure:"🧭",Platformer:"🏃",Puzzle:"🧩",FPS:"🎯",Simulation:"🛠️",Roguelike:"🎲",Horror:"👻",Sandbox:"⛏️",Strategy:"♟️",Racing:"🏎️",Sports:"⚽",Fighting:"🥊",Other:"🎮"};
function cover(g,small){
  var h=hash(g.t), h1=h%360, h2=(h1+50+((h>>8)%90))%360, shape=(h>>4)%4, id="c"+h;
  var art="";
  if(shape===0)art='<circle cx="140" cy="95" r="70" fill="hsl('+h2+' 85% 62%)" opacity=".9"/><circle cx="60" cy="210" r="46" fill="hsl('+h1+' 70% 22%)" opacity=".55"/>';
  else if(shape===1)art='<polygon points="0,60 200,0 200,120 0,190" fill="hsl('+h2+' 80% 58%)" opacity=".85"/><polygon points="0,190 200,120 200,160 0,250" fill="hsl('+h1+' 70% 20%)" opacity=".5"/>';
  else if(shape===2)art='<g fill="none" stroke="hsl('+h2+' 85% 66%)" stroke-width="10" opacity=".85"><circle cx="100" cy="115" r="30"/><circle cx="100" cy="115" r="60"/><circle cx="100" cy="115" r="90"/></g>';
  else art='<g fill="hsl('+h2+' 85% 62%)" opacity=".85"><rect x="-20" y="30" width="260" height="22" transform="rotate(-18 100 100)"/><rect x="-20" y="80" width="260" height="22" transform="rotate(-18 100 100)"/><rect x="-20" y="130" width="260" height="22" transform="rotate(-18 100 100)"/></g>';
  var appId=STEAM_APP_IDS[g.id],wt=g.w||WIKI_TITLES[g.id]||"",searchAttr=' data-game-id="'+esc(g.id)+'" data-game-title="'+esc(g.t)+'"'+(appId?"":' data-steam-search="1"'+(wt?' data-wiki="1"':""));
  var image=appId?'<img class="steam-art" data-steam-app="'+appId+'" alt="" loading="lazy" src="'+steamArtSources(appId,"")[0]+'">':"";
  var mc=METACRITIC_SCORES[g.id],glyph='<text x="100" y="150" text-anchor="middle" font-size="54" opacity=".92">'+(GLYPH[g.g]||"🎮")+'</text>';
  return '<div class="cover'+(small?" sm":"")+'"'+searchAttr+'><svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl('+h1+' 60% 30%)"/><stop offset="1" stop-color="hsl('+h1+' 55% 12%)"/></linearGradient></defs><rect width="200" height="300" fill="url(#'+id+')"/>'+(COVER_ART[g.id]||art+glyph)+'</svg>'+image+(mc!=null?'<span class="mc-score" title="Metacritic critic score">MC '+mc+'</span>':"")+'<div class="ct">'+esc(g.t)+'</div></div>'; 
}

/* ---------- storage: private db doc when signed in, browser storage otherwise ---------- */
function normalize(d){
  var s={logs:{},custom:[],public:false,following:[],lists:[],favs:[],username:"",email:"",salt:"",hash:"",profile:{}};
  if(d&&typeof d==="object"){
    if(Array.isArray(d.favs))s.favs=d.favs.filter(function(x){return typeof x==="string"}).slice(0,4);
    if(d.logs&&typeof d.logs==="object")s.logs=d.logs;
    if(Array.isArray(d.custom))s.custom=d.custom;
    if(Array.isArray(d.following))s.following=d.following.filter(function(x){return typeof x==="string"});
    if(Array.isArray(d.lists))s.lists=d.lists.filter(function(l){return l&&l.id}).slice(0,50).map(function(l){return {id:String(l.id).slice(0,30),name:String(l.name||"").slice(0,60),desc:String(l.desc||"").slice(0,300),pub:!!l.pub,games:(Array.isArray(l.games)?l.games:[]).filter(function(x){return typeof x==="string"}).slice(0,200)}});
    s.public=!!d.public;
    s.username=typeof d.username==="string"?d.username.slice(0,20):"";
    ["email","salt","hash"].forEach(function(k){if(typeof d[k]==="string")s[k]=d[k].slice(0,200)});
    if(d.profile&&typeof d.profile==="object")["name","loc","web","bio"].forEach(function(k){if(typeof d.profile[k]==="string")s.profile[k]=d.profile[k].slice(0,300)});
    if(d.profile&&typeof d.profile.avatar==="string"&&okAv(d.profile.avatar))s.profile.avatar=d.profile.avatar;
  }
  return s;
}
/* ---------- Supabase backend ----------
   auth.users   : username + password (username is turned into an internal e-mail)
   user_data    : PRIVATE full copy of your state (owner-only RLS)      -> user_data.data
   profiles     : PUBLIC copy (username/avatar always; games, reviews, lists only when shared) -> profiles.data
   follows      : who follows whom                                      -> follows rows
   comments     : comments on reviews                                   -> comments rows               */
var CFG=window.GBX_CONFIG||{}, sb=null, sbError="";
var T={userData:"user_data",profiles:"profiles",follows:"follows",comments:"comments"};
/* column names – change here only if your tables use different names */
var C={userData:{id:"user_id",data:"data"},profiles:{id:"id",data:"data"},
  follows:{follower:"follower_id",following:"followee_id"},
  comments:{id:"id",owner:"to_id",game:"game_id",author:"by_id",text:"body",ts:"created_at"}};
function jwtRole(k){try{var p=k.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(atob(p)).role}catch(e){return ""}}
(function(){
  try{
    var u=String(CFG.url||"").trim().replace(/\/+$/,""), k=String(CFG.key||"").trim();
    if(!/^https:\/\/[a-z0-9.-]+$/i.test(u)||!k||/PASTE_/.test(u+k)){sbError="Supabase isn’t configured yet: add the Project URL and publishable key at the top of index.html.";return}
    if(/^sb_secret_/.test(k)||jwtRole(k)==="service_role"){sbError="A secret/service_role key was found in index.html. Remove it and use the publishable key.";return}
    if(!window.supabase||!window.supabase.createClient){sbError="The Supabase library couldn’t be loaded. Check your connection and reload.";return}
    sb=window.supabase.createClient(u,k,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false,storageKey:"gameboxd-auth"}});
  }catch(e){sb=null;sbError="Couldn’t start Supabase.";try{console.error("[Gameboxd]",e)}catch(x){}}
})();
function logErr(where,e){try{console.error("[Gameboxd] "+where,e)}catch(x){}}
function errTxt(e){var c=e&&(e.code||e.message);return c?String(c).slice(0,60):"error"}
function asObj(v){if(typeof v==="string"){try{v=JSON.parse(v)}catch(e){return null}}return v&&typeof v==="object"?v:null}
function emailFor(name){return String(name).toLowerCase()+"@"+String(CFG.emailDomain||"gameboxd.app")}
function peopleStale(ms){return Date.now()-peopleAt>(ms||60000)}
function cmStale(){return Date.now()-cmAt>60000}

/* your private copy: no passwords, and "following" lives in the follows table */
function privateDoc(){
  var d=JSON.parse(JSON.stringify(state));
  delete d.following;delete d.email;delete d.salt;delete d.hash;
  return d;
}
/* the public copy: username + avatar always; finished/played games only when you chose to share (no examples, no wishlist) */
function publicDoc(){
  var pr=state.profile||{}, out={username:state.username||"",public:!!state.public,profile:{}}, av=okAv(pr.avatar);
  if(!state.public){if(av)out.profile.avatar=av;return out}
  var logs={}, used={}, favs=myFavs().map(function(g){return g.id});
  Object.keys(state.logs).forEach(function(k){var l=state.logs[k];if(!l.sample&&l.status!=="wish"){logs[k]=l;used[k]=1}});
  var pl=myLists().filter(function(l){return l.pub});
  pl.forEach(function(l){l.games.forEach(function(k){used[k]=1})});
  favs.forEach(function(k){used[k]=1});
  out.logs=logs;out.custom=state.custom.filter(function(c){return used[c.id]});out.favs=favs;out.lists=pl;out.profile=pr;
  return JSON.parse(JSON.stringify(out));
}
function writeDoc(key,doc){
  var row={};row[C[key].id]=myId;row[C[key].data]=doc;
  return sb.from(T[key]).upsert(row,{onConflict:C[key].id}).then(function(r){if(r&&r.error)throw r.error;return r});
}
function syncPublic(){
  if(!sb||!myId)return;
  var doc=publicDoc(), str=JSON.stringify(doc);
  if(str===lastPub)return;
  chain=chain.then(function(){return writeDoc("profiles",doc)}).then(function(){lastPub=str}).catch(function(e){logErr("profile sync",e);toast("Profile couldn’t be updated ("+errTxt(e)+")")});
}
function save(){
  if(!sb||!myId)return;
  var doc=privateDoc();
  chain=chain.then(function(){return writeDoc("userData",doc)}).catch(function(e){logErr("save",e);toast("Couldn’t save ("+errTxt(e)+"). Try again.")});
  syncPublic();
}
async function persistNow(){
  var pd=publicDoc();
  await writeDoc("userData",privateDoc());
  await writeDoc("profiles",pd);
  lastPub=JSON.stringify(pd);
}
async function loadMyFollows(){
  var F=C.follows, q=await sb.from(T.follows).select(F.following).eq(F.follower,myId).limit(5000);
  if(q.error)throw q.error;
  state.following=(q.data||[]).map(function(r){return r[F.following]}).filter(function(x){return typeof x==="string"});
}
/* loads (or creates) the signed-in user's state. Returns true when this account had no data yet. */
async function bootUser(user,opts){
  opts=opts||{};
  var md=user.user_metadata||{};
  var uname=String(typeof md.username==="string"&&md.username?md.username:String(user.email||"").split("@")[0]).replace(/[^A-Za-z0-9_]/g,"").slice(0,20);
  var r=await sb.from(T.userData).select(C.userData.data).eq(C.userData.id,user.id).maybeSingle();
  if(r.error)throw r.error;
  var fresh=!r.data, raw=r.data?asObj(r.data[C.userData.data]):null;
  myId=user.id;
  state=normalize(raw||{});state.following=[];
  if(!state.username)state.username=uname;
  if(fresh){
    state.public=!!CFG.defaultPublic;
    if(opts.legacy){var L=normalize(opts.legacy);state.logs=L.logs;state.custom=L.custom;state.lists=L.lists;state.favs=L.favs;state.profile=L.profile;state.public=L.public||state.public}
  }
  db=sb;userApi=makeUserApi();signedIn=true;loaded=true;
  people=null;cm=null;peopleAt=0;cmAt=0;profs={};follows=[];lastPub="";ui.hits=null;ui.globalHits=null;
  try{await loadMyFollows()}catch(e){logErr("follows",e)}
  if(!opts.isNew){if(fresh)save();else syncPublic()}
  return fresh;
}
function resetSession(){
  myId=null;db=null;userApi=null;signedIn=false;loaded=true;
  state=normalize({});people=null;cm=null;peopleAt=0;cmAt=0;profs={};follows=[];lastPub="";
  ui.hits=null;ui.globalHits=null;ui.profile=null;
}
async function doLogout(){
  try{await chain}catch(e){}
  try{if(sb)await sb.auth.signOut({scope:"local"})}catch(e){logErr("sign out",e)}
  resetSession();ui.auth="login";render();window.scrollTo(0,0);toast("You’ve signed out");
}
async function initStore(){
  try{
    if(sb){
      var gs=await sb.auth.getSession(), sess=gs&&gs.data&&gs.data.session;
      if(sess&&sess.user){
        try{await bootUser(sess.user)}catch(e){logErr("restore session",e);resetSession();toast("Couldn’t load your account ("+errTxt(e)+")")}
      }
      sb.auth.onAuthStateChange(function(ev){if(ev==="SIGNED_OUT"&&myId){resetSession();ui.auth="login";render()}});
    }
  }catch(e){logErr("init",e)}
  loaded=true;render();
}
/* what we accept from OTHER members' public docs: everything is re-validated before it reaches the page */
function cleanCustom(a){
  if(!Array.isArray(a))return [];
  return a.slice(0,500).filter(function(c){return c&&typeof c.id==="string"&&typeof c.t==="string"&&/^[A-Za-z0-9_-]{1,40}$/.test(c.id)&&!(c.id in COVER_ART)&&!(c.id in STEAM_APP_IDS)}).map(function(c){
    var y=parseInt(c.y,10);
    return {id:c.id,t:c.t.slice(0,80),y:(y>=1950&&y<=2100)?y:"",d:typeof c.d==="string"?c.d.slice(0,60):"",g:GENRES.indexOf(c.g)>=0?c.g:"Other",custom:true};
  });
}
function cleanPublic(d){
  d=asObj(d)||{};
  var n=normalize(d), logs={}, src=(d.logs&&typeof d.logs==="object")?d.logs:{};
  Object.keys(src).slice(0,3000).forEach(function(k){var l=src[k];if(l&&typeof l==="object"&&k.length<=60)logs[k]=cleanLog(l)});
  return {logs:logs,custom:cleanCustom(d.custom),favs:n.favs,lists:n.lists,profile:n.profile,public:d.public===true,
    username:/^[A-Za-z0-9_]{1,20}$/.test(n.username)?n.username:""};
}
function makeUserApi(){
  return {
    search:async function(q){
      if(people===null||peopleStale(10000))await loadPeople();
      var s=String(q||"").trim().toLowerCase();
      var list=(people||[]).filter(function(p){
        if(!p.data||!p.data.public||p.id===myId)return false;
        return !s||personName(p.id).toLowerCase().indexOf(s)>=0||String((p.data.profile||{}).name||"").toLowerCase().indexOf(s)>=0;
      });
      list.sort(function(a,b){return followersOf(b.id)-followersOf(a.id)||personName(a.id).localeCompare(personName(b.id))});
      return list.slice(0,30).map(function(p){return {id:p.id,name:personName(p.id)}});
    },
    profiles:async function(){return {}}
  };
}

/* ---------- views ---------- */
function logged(){return Object.keys(state.logs).map(function(id){var g=gameById(id);return g?{g:g,l:state.logs[id]}:null}).filter(Boolean)}
function diaryEntries(){return logged().filter(function(e){return e.l.status!=="wish"})}
function wishEntries(){return logged().filter(function(e){return e.l.status==="wish"})}

function gameCard(g,lg,ro){
  var l=ro?lg:(lg||state.logs[g.id]), b="";
  if(l){
    if(l.status==="wish")b='<span class="badge wish">Wishlist</span>';
    else if(l.rating||l.liked)b='<span class="badge">'+(l.rating?'<span class="s">★</span>'+(l.rating/2).toString():"")+(l.liked?'<span class="h">♥</span>':"")+'</span>';
    else b='<span class="badge">'+esc(statusLabel(l.status))+'</span>';
  }
  var tag=ro?"div":"button", attr=' data-open="'+esc(g.id)+'"';
  return '<'+tag+' class="game"'+attr+'>'+cover(g).replace('</div></div>','</div>'+b+'</div>')+'<span class="meta"><span class="t">'+esc(g.t)+'</span><span class="y">'+(g.y||"")+(g.y&&g.d?" · ":"")+esc(g.d||"")+'</span></span></'+tag+'>';
}

function viewDiscover(){
  var tagIdx=ui.bf.tag?communityTagIndex():null;
  var q=ui.q.trim().toLowerCase();
  var list=allGames().filter(function(g){
    if(ui.genre&&g.g!==ui.genre)return false;
    if(ui.bf.decade&&String(Math.floor((g.y||0)/10)*10)!==ui.bf.decade)return false;
    if(ui.bf.plat==="Steam"){if(!STEAM_APP_IDS[g.id])return false}
    else if(ui.bf.plat){var lg=state.logs[g.id];if(!lg||lg.platform!==ui.bf.plat)return false}
    if(ui.bf.dev&&g.d!==ui.bf.dev)return false;
    if(ui.bf.tag&&!(tagIdx&&tagIdx[ui.bf.tag]&&tagIdx[ui.bf.tag][g.id]))return false;
    if(ui.bf.stat){var ls=state.logs[g.id];if((ls?ls.status:"none")!==ui.bf.stat)return false}
    if(q&&(g.t+" "+(g.d||"")).toLowerCase().indexOf(q)<0)return false;
    return true;
  });
  sortGameList(list,ui.sort);
  var out='<div class="intro"><div><h1>Log every game you play.</h1><p>Keep the games you’ve finished, dropped or want to play in one place. Rate them and write reviews.</p></div><span class="label">'+allGames().length+' games in the catalog</span></div>';
  out+=bfBar();
  if(ui.sort==="metascore-high"||ui.sort==="metascore-low")out+='<p class="foot">Sorted by Metacritic critics’ Metascore (0–100). Scores can differ by platform; games without an available Metascore appear after scored games.</p>';
  if(list.length)out+='<div class="grid'+(ui.bf.hide?' nobadge':'')+'">'+list.map(function(g){return gameCard(g)}).join("")+'</div>';
  else out+='<div class="empty"><h3>'+(q?"“"+esc(ui.q.trim())+"” not found":"No games in this genre")+'</h3><p>You can add a game that isn’t in the catalog.</p>'+(q?'<div class="actions"><button class="btn" data-addcustom="1">Add “'+esc(ui.q.trim())+'”</button></div>':"")+'</div>';
  if(list.length&&q)out+='<p class="foot">Can’t find it? <button class="chip" data-addcustom="1">Add “'+esc(ui.q.trim())+'”</button></p>';
  return out;
}

function viewDiary(){
  var es=diaryEntries();
  if(!es.length&&subj)return '<div class="intro"><div><h1>Diary</h1></div></div>'+emptyDiary();
  if(!es.length){
    return '<div class="intro"><div><h1>Diary</h1></div></div><div class="empty"><h3>Your diary is empty</h3><p>Pick a game from Discover and add a status, rating and review. Want a preview first? Load some sample entries.</p><div class="actions"><button class="btn" data-go="kesf">Pick a game</button><button class="btn ghost" data-sample="1">Load sample entries</button></div></div>';
  }
  es.sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")});
  var out='<div class="intro"><div><h1>Diary</h1><p>'+es.length+' entries, sorted by date.</p></div>'+(!subj&&es.some(function(e){return e.l.sample})?'<button class="btn ghost" data-clearsample="1">Remove samples</button>':"")+'</div>';
  return out+diaryRows(es,!!subj);
}

function diaryRows(es,ro){
  var curM="", PENCIL='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
  var DOTS='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';
  var REV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 11h16M4 16h10"/></svg>';
  var out='<div class="dtable"><div class="dhead-row" role="row"><span>Month</span><span class="c">Day</span><span>Game</span><span class="c">Released</span><span class="c">Rating</span><span class="c">Like</span><span class="c">Review</span><span class="c">Edit</span></div>';
  es=es.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")});
  es.forEach(function(e){
    var d=(e.l.date||"").split("-"), key=d[0]&&d[1]?d[0]+"-"+d[1]:"none";
    var badge="";
    if(key!==curM){curM=key;badge=d[1]?'<div class="cal"><b>'+MONTHS[parseInt(d[1],10)-1].slice(0,3)+'</b><span>'+d[0]+'</span></div>':'<div class="cal"><b>–</b><span>No date</span></div>'}
    var sub=[e.l.sample?"sample":statusLabel(e.l.status),e.l.platform||""].filter(Boolean).map(esc).join(" · ");
    out+='<div class="drow'+(ro?" ro":"")+'" role="row"'+(ro?"":' data-open="'+esc(e.g.id)+'"')+'>'
      +'<div class="dm">'+badge+'</div>'
      +'<div class="dd">'+(d[2]?parseInt(d[2],10):"–")+'</div>'
      +'<div class="dg">'+cover(e.g,true)+'<span class="dt"><b>'+esc(e.g.t)+'</b><small>'+sub+'</small></span></div>'
      +'<div class="dy">'+(e.g.y||"")+'</div>'
      +'<div class="dr c">'+(e.l.rating?stars(e.l.rating):"")+'</div>'
      +'<div class="dl c">'+(e.l.liked?'<span class="heart" aria-label="Liked">♥</span>':'<span class="noheart" aria-hidden="true">♥</span>')+'</div>'
      +'<div class="dv c">'+(e.l.review?'<span title="Has review">'+REV+'</span>':"")+'</div>'
      +'<div class="de">'+(ro?"":'<button class="dbtn" type="button" data-edit="'+esc(e.g.id)+'" aria-label="Edit">'+PENCIL+'</button><button class="dbtn" type="button" data-open="'+esc(e.g.id)+'" aria-label="Open">'+DOTS+'</button>')+'</div>'
      +'</div>';
  });
  return out+'</div>';
}

/* ---------- people ---------- */
function entriesOf(data){
  var custom=(data&&Array.isArray(data.custom))?data.custom:[], logs=(data&&data.logs&&typeof data.logs==="object")?data.logs:{};
  return Object.keys(logs).map(function(id){
    var g=null;for(var i=0;i<GAMES.length;i++)if(GAMES[i].id===id)g=GAMES[i];
    if(!g)for(var j=0;j<custom.length;j++)if(custom[j].id===id)g=custom[j];
    return g?{g:g,l:logs[id]}:null;
  }).filter(Boolean);
}
function avg(es){var r=es.filter(function(e){return e.l.rating>0});return r.length?r.reduce(function(s,e){return s+e.l.rating},0)/r.length/2:0}
function topOf(es,n){return es.filter(function(e){return e.l.rating>0}).sort(function(a,b){return b.l.rating-a.l.rating||(b.l.liked?1:0)-(a.l.liked?1:0)}).slice(0,n)}
function entriesFavs(data,ids){
  var custom=(data&&Array.isArray(data.custom))?data.custom:[];
  return ids.map(function(id){
    for(var i=0;i<GAMES.length;i++)if(GAMES[i].id===id)return GAMES[i];
    for(var j=0;j<custom.length;j++)if(custom[j].id===id)return custom[j];
    return null;
  }).filter(Boolean).slice(0,4);
}
function personName(id){if(id===myId&&state.username)return state.username;var f=findPerson(id);if(f&&f.data&&f.data.username)return f.data.username;var p=profs[id];return (p&&p.name)||(id===myId?"You":"Gameboxd member")}
function okAv(a){
  if(typeof a!=="string")return "";
  if(a.length<150000&&/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(a))return a;
  var base=String(CFG.url||"").trim().replace(/\/+$/,"")+"/storage/v1/object/public/avatars/";
  return a.length<400&&a.indexOf(base)===0&&/^[A-Za-z0-9\/._~:@+=?&%-]+$/.test(a.slice(base.length))?a:"";
}
/* upload the avatar to Supabase Storage (bucket "avatars", one file per user); returns the public URL, or the original data URL if upload isn't possible */
async function uploadAvatar(dataUrl){
  if(!sb||!myId||!/^data:image\/jpeg;base64,/.test(dataUrl))return dataUrl;
  try{
    var bin=atob(dataUrl.split(",")[1]),arr=new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++)arr[i]=bin.charCodeAt(i);
    var path=myId+"/avatar.jpg";
    var r=await sb.storage.from("avatars").upload(path,new Blob([arr],{type:"image/jpeg"}),{upsert:true,contentType:"image/jpeg",cacheControl:"3600"});
    if(r.error)throw r.error;
    var u=sb.storage.from("avatars").getPublicUrl(path).data.publicUrl+"?v="+Date.now();
    return okAv(u)?u:dataUrl;
  }catch(e){logErr("avatar upload",e);return dataUrl}
}
function avSrc(id){var a="";if(id===myId||id==="me")a=okAv((state.profile||{}).avatar);if(!a){var f=findPerson(id);if(f&&f.data&&f.data.profile)a=okAv(f.data.profile.avatar)}if(!a){var p=profs[id];a=(p&&p.avatarUrl)||""}return a}
function avatar(id,cls){var u=avSrc(id);return u?'<img'+(cls?' class="'+cls+'"':"")+' src="'+esc(u)+'" alt="" decoding="async"'+(cls==="av"?"":' loading="lazy"')+'>':""}
/* profile header avatar: falls back to a silhouette when there is no photo */
function avatarHead(id){return avatar(id,"av")||'<span class="av av-ph" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="4.2" fill="currentColor"/><path d="M3.5 22c.8-5 4.2-7.5 8.5-7.5s7.7 2.5 8.5 7.5z" fill="currentColor"/></svg></span>'}
function followersOf(id){return followersList(id).length}
async function loadPeople(){
  try{await ready}catch(e){}
  try{await chain}catch(e){}
  if(!db){people=[];render();return}
  try{
    var P=C.profiles, F=C.follows;
    var pr=await sb.from(T.profiles).select(P.id+","+P.data).limit(1000);
    if(pr.error)throw pr.error;
    var fr=await sb.from(T.follows).select(F.follower+","+F.following).limit(10000);
    if(fr.error)throw fr.error;
    people=(pr.data||[]).filter(function(r){return typeof r[P.id]==="string"}).map(function(r){return {id:r[P.id],data:cleanPublic(r[P.data])}});
    follows=(fr.data||[]).map(function(r){return {a:r[F.follower],b:r[F.following]}}).filter(function(f){return typeof f.a==="string"&&typeof f.b==="string"});
    state.following=follows.filter(function(f){return f.a===myId}).map(function(f){return f.b});
    peopleAt=Date.now();
  }catch(e){logErr("load members",e);people=[];peopleAt=Date.now();toast("Couldn’t load members ("+errTxt(e)+")")}
  render();
}
function followingList(){return Array.isArray(state.following)?state.following:[]}
function setFollowLocal(id,on){
  var fl=followingList().filter(function(x){return x!==id});if(on)fl.push(id);state.following=fl;
  follows=follows.filter(function(f){return !(f.a===myId&&f.b===id)});if(on)follows.push({a:myId,b:id});
}
async function followRemote(id,on){
  var F=C.follows, r;
  if(on){var row={};row[F.follower]=myId;row[F.following]=id;r=await sb.from(T.follows).insert(row);if(r.error&&String(r.error.code)!=="23505")throw r.error}
  else{r=await sb.from(T.follows).delete().eq(F.follower,myId).eq(F.following,id);if(r.error)throw r.error}
}
function isFollowing(id){return followingList().indexOf(id)>=0}
function followBtn(id){var on=isFollowing(id);return '<button class="chip" data-follow="'+esc(id)+'" aria-pressed="'+on+'">'+(on?"Following":"Follow")+'</button>'}
function findPerson(id){var r=null;(people||[]).forEach(function(x){if(x.id===id)r=x});return r}
function hitsHtml(){
  if(ui.hits==null)return "";
  var head='<p class="label" style="margin:14px 0 8px">'+(ui.psq.trim()?"Search results":"Suggested")+'</p>';
  if(!ui.hits.length)return head+'<p style="color:var(--mute);margin:0">No one found. Search only shows members who share their profile.</p>';
  return head+ui.hits.map(function(h){return '<div class="hit"><button class="who pmain" data-profile="'+esc(h.id)+'" style="flex-direction:row;align-items:center;gap:12px">'+avatar(h.id)+'<b>'+esc(h.name||"Gameboxd member")+'</b></button>'+followBtn(h.id)+'</div>'}).join("");
}
function paintHits(){var el=$("#presults");if(el)el.innerHTML=hitsHtml()}
async function runSearch(){
  var q=ui.psq.trim();
  if(!userApi)return;
  try{var hs=await userApi.search(q);ui.hits=(hs||[]).filter(function(h){return h.id!==myId});ui.hits.forEach(function(h){profs[h.id]=h})}
  catch(e){ui.hits=[]}
  paintHits();
}
function memberCards(ids){
  if(!ids.length)return "";
  return '<div class="people">'+ids.map(function(id){
    var p=findPerson(id),es=p?entriesOf(p.data).filter(function(e){return e.l.status!=="wish"}):[],a=avg(es),top=topOf(es,4);
    var sub=es.length?es.length+" games"+(a?" · avg "+a.toFixed(1):""):"Hasn’t shared a profile yet";
    return '<div class="person"><button class="pmain" data-profile="'+esc(id)+'"><span class="who">'+avatar(id)+'<span style="min-width:0"><b>'+esc(personName(id))+'</b><span class="label">'+esc(sub)+'</span></span></span>'+(top.length?'<span class="mini">'+top.map(function(e){return cover(e.g,true)}).join("")+"</span>":"")+'</button>'+followBtn(id)+'</div>';
  }).join('')+'</div>';
}
function viewPeople(){
  var out='<div class="intro"><div><h1>Members</h1><p>Find players, follow their profiles and see who follows you back.</p></div></div>';
  if(!db)return out+'<div class="empty"><h3>Following isn’t available in this view</h3><p>Sign in to the shared Gameboxd page to search members and manage followers.</p></div>';
  var followers=followersList(myId),fl=followingList();
  out+='<div class="pcard"><div><b>'+(state.public?"Your profile is public":"Your profile is private")+' · '+followers.length+' followers</b><p>'+(state.public?"Your public profile lets other players discover your shared games, reviews and lists.":"Share your profile so other players can discover you and follow your activity.")+'</p></div><button class="btn'+(state.public?" ghost":"")+'" data-togglepublic="1">'+(state.public?"Hide profile":"Share my profile")+'</button></div>';
  out+='<div class="field" style="margin-bottom:6px"><label class="label" for="psearch">Find people</label><input id="psearch" type="search" autocomplete="off" placeholder="Type a username…" value="'+esc(ui.psq)+'"></div><div id="presults" aria-live="polite">'+hitsHtml()+'</div>';
  out+='<div class="sec" id="sec-following" style="margin-top:28px"><h2>Following</h2><span class="label">'+fl.length+'</span></div>';
  if(people===null)out+='<p class="label">Loading following…</p>';
  else if(!fl.length)out+='<div class="empty"><h3>You’re not following anyone yet</h3><p>Search for a username above and press Follow. You can also choose Users in the main search bar.</p></div>';
  else out+=memberCards(fl.filter(function(id){return id!==myId}));
  out+='<div class="sec" id="sec-followers" style="margin-top:30px"><h2>Followers</h2><span class="label">'+followers.length+'</span></div>';
  if(people===null)out+='<p class="label">Loading followers…</p>';
  else if(!followers.length)out+='<div class="empty"><h3>No followers yet</h3><p>When other Gameboxd members follow your profile, they’ll appear here.</p></div>';
  else out+=memberCards(followers);
  return out;
}
function followersList(id){
  if(!id)return [];
  var seen={},out=[];
  follows.forEach(function(f){if(f.b===id&&f.a!==id&&!seen[f.a]){seen[f.a]=1;out.push(f.a)}});
  return out;
}
function followingOf(id){
  if(id===myId)return followingList();
  var seen={},out=[];
  follows.forEach(function(f){if(f.a===id&&f.b!==id&&!seen[f.b]){seen[f.b]=1;out.push(f.b)}});
  return out;
}
function viewUserSearch(){
  var q=ui.q.trim(),out='<div class="intro"><div><h1>Search users</h1><p>Find Gameboxd members by username and follow their profiles.</p></div></div>';
  if(!db||!userApi)return out+'<div class="empty"><h3>User search needs the shared Gameboxd page</h3><p>Open the connected shared version of Gameboxd to search for other players. Game search works without this connection.</p></div>';
  if(!q)out+='<p class="home-subtitle">Type a username in the search bar above to find members.</p>';
  else out+='<p class="home-subtitle">Results for “'+esc(q)+'”</p>';
  if(ui.globalHits===null)return out+'<p class="label">Searching members…</p>';
  if(!ui.globalHits.length)return out+'<div class="empty"><h3>No users found</h3><p>Try another username, or make sure the member has a shared profile.</p></div>';
  return out+'<div class="people">'+ui.globalHits.map(function(h){return '<div class="person"><button class="pmain" data-profile="'+esc(h.id)+'"><span class="who">'+avatar(h.id)+'<b>'+esc(h.name||personName(h.id)||"Gameboxd member")+'</b></span></button>'+followBtn(h.id)+'</div>'}).join('')+'</div>';
}
var globalUserSearchTimer=null;
async function runGlobalUserSearch(){
  var q=ui.q.trim();
  if(ui.searchType!=="users")return;
  if(!db||!userApi){ui.globalHits=[];render();return}
  try{
    var hs=await userApi.search(q);
    if(ui.searchType!=="users"||ui.q.trim()!==q)return;
    ui.globalHits=(hs||[]).filter(function(h){return h&&h.id!==myId});
    ui.globalHits.forEach(function(h){profs[h.id]=h});
  }catch(e){if(ui.searchType==="users"&&ui.q.trim()===q)ui.globalHits=[]}
  if(ui.searchType==="users"&&ui.q.trim()===q)render();
}
function myFavs(){return (state.favs||[]).map(gameById).filter(Boolean).slice(0,4)}
function fmtDate(s){var d=(s||"").split("-");return d[2]?parseInt(d[2],10)+" "+MONTHS[parseInt(d[1],10)-1]:""}
var VERB={done:"Finished",playing:"Playing",dropped:"Dropped"};
function activityHtml(es,limit){
  es=es.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")}).slice(0,limit||8);
  return es.map(function(e){
    return '<button class="row" data-open="'+esc(e.g.id)+'">'+cover(e.g,true)+'<span class="main"><span class="tt"><span>'+(VERB[e.l.status]||"").toUpperCase()+'</span><b>'+esc(e.g.t)+'</b></span><span>'+(e.l.rating?stars(e.l.rating):"")+(e.l.liked?' <span class="heart" aria-label="Liked">♥</span>':"")+'</span>'+(e.l.review?'<span class="rv">'+esc(e.l.review)+'</span>':"")+'</span><span class="side"><span class="label">'+esc(fmtDate(e.l.date))+'</span>'+(e.l.sample?'<span class="st sample">sample</span>':"")+'</span></button>';
  }).join("");
}
function favSlots(){
  var fs=myFavs(), out='<div class="favgrid">';
  if(subj){if(!fs.length)return '<p class="label" style="margin:0 0 28px">No favorite games picked yet.</p>';return out+fs.map(function(g){return '<div class="slotw">'+gameCard(g)+'</div>'}).join("")+'</div>'}
  fs.forEach(function(g){out+='<div class="slotw">'+gameCard(g)+'<button class="x" data-unfav="'+esc(g.id)+'" aria-label="Remove “'+esc(g.t)+'” from favorites">×</button></div>'});
  for(var i=fs.length;i<4;i++)out+='<button class="game" data-pick="1" aria-label="Pick a favorite"><div class="cover emptyslot" aria-hidden="true">+</div><span class="meta"><span class="t" style="color:var(--mute);font-weight:500">Pick a favorite</span></span></button>';
  return out+'</div>';
}
function emptyDiary(){if(subj)return '<div class="empty"><h3>No entries yet</h3><p>'+esc(personName(subj.id))+' hasn’t shared any games yet.</p></div>';return '<div class="empty"><h3>No entries yet</h3><p>Pick a game and add a status, rating and review. You can also load sample entries to see how it looks.</p><div class="actions"><button class="btn" data-log="1">+ Log</button><button class="btn ghost" data-sample="1">Load sample entries</button></div></div>'}
function reviewsHtml(rs){
  rs=rs.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")});
  return rs.map(function(e){return revBlock(subj?subj.id:myId,e,!subj)}).join("");
}
function profileSortToolbar(){
  return '<div class="tools profile-tools"><span class="label">Sort by</span><select class="sort" id="profile-sort" aria-label="Sort profile games">'+sortOptions(ui.profileSort,true)+'</select></div>';
}
function sortProfileEntries(es){
  return es.slice().sort(sortCmp(ui.profileSort));
}
function gridOf(es,title){
  es=sortProfileEntries(es);
  return '<div class="sec"><h2>'+title+'</h2><span class="label">'+es.length+'</span></div>'+profileSortToolbar()+'<div class="grid">'+es.map(function(e){return gameCard(e.g)}).join('')+'</div>';
}
function topReviews(es,n){
  var rs=es.filter(function(e){return e.l.review});
  function score(e){return cmOf(subj?subj.id:myId,e.g.id).length*10+(e.l.liked?5:0)+(e.l.rating||0)/10}
  return rs.slice().sort(function(a,b){return score(b)-score(a)||(b.l.date||"").localeCompare(a.l.date||"")}).slice(0,n);
}
function followingStrip(){
  var ids=subj?followingOf(subj.id):followingList();
  var out='<div class="sec"><h2>Following</h2><span class="label">'+ids.length+'</span></div>';
  if(!ids.length&&subj)return out+'<p class="foot" style="margin:0 0 28px">Not following anyone yet.</p>';
  if(!ids.length)return out+'<p class="foot" style="margin:0 0 28px">You’re not following anyone yet. <a class="chip" href="#insanlar" data-tab="insanlar">Find people</a></p>';
  return out+'<div class="fstrip">'+ids.map(function(id){
    var u=avSrc(id),nm=personName(id);
    return '<button type="button" class="fitem" data-profile="'+esc(id)+'" title="'+esc(nm)+'" aria-label="'+esc(nm)+'"><span class="fav-av">'+(u?'<img src="'+esc(u)+'" alt="">':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="4.2" fill="currentColor"/><path d="M3.5 22c.8-5 4.2-7.5 8.5-7.5s7.7 2.5 8.5 7.5z" fill="currentColor"/></svg>')+'</span><span class="fname">'+esc(nm)+'</span></button>';
  }).join('')+'</div>';
}
function tl(t){return subj?'href="#profil" data-ptab="'+t+'"':'href="#'+t+'" data-tab="'+t+'"'}
function sideMe(es){
  var DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var dt=function(s){var d=(s||"").split("-");return d[2]?new Date(+d[0],+d[1]-1,+d[2]):null};
  var byDate=es.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")});
  var out='';
  /* wishlist */
  var wl=wishEntries();
  if(!subj)out+='<section class="sb"><div class="sec"><h2>Wishlist</h2><a class="chip" '+tl("istek")+'>'+wl.length+'</a></div>';
  if(!subj)out+=wl.length?'<div class="sb-wish">'+wl.slice(0,6).map(function(e){return '<button type="button" class="sb-w" data-open="'+esc(e.g.id)+'" title="'+esc(e.g.t)+'" aria-label="'+esc(e.g.t)+'">'+cover(e.g,true)+'</button>'}).join("")+'</div>':'<p class="label">Nothing on your wishlist yet.</p>';
  if(!subj)out+='</section>';
  /* diary */
  out+='<section class="sb"><div class="sec"><h2>Diary</h2><a class="chip" '+tl("gundelik")+'>'+es.length+'</a></div>';
  if(byDate.length){
    var lastM="";
    out+='<div class="sb-diary">'+byDate.slice(0,8).map(function(e){
      var d=dt(e.l.date),m=d?d.getFullYear()+"-"+d.getMonth():"",head="";
      if(m!==lastM){lastM=m;head='<div class="sb-month"><span class="sb-cal" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><b>'+(d?MONTHS[d.getMonth()].slice(0,3).toUpperCase():"")+'</b></span></div>'}
      return head+'<button type="button" class="sb-d" data-open="'+esc(e.g.id)+'"><span class="sb-day">'+(d?d.getDate():"–")+'</span><span class="sb-t">'+esc(e.g.t)+'</span></button>';
    }).join("")+'</div>';
  }else out+='<p class="label">No diary entries yet.</p>';
  out+='</section>';
  /* ratings */
  var rated=es.filter(function(e){return e.l.rating>0}),hist=[0,0,0,0,0,0,0,0,0,0];
  rated.forEach(function(e){hist[e.l.rating-1]++});
  var hmax=Math.max.apply(null,hist.concat([1])),av=avg(es);
  out+='<section class="sb"><div class="sec"><h2>Ratings</h2><span class="label">'+rated.length+'</span></div>';
  out+=rated.length?'<div class="sb-rate"><span class="sb-star" aria-hidden="true">★</span><div class="sb-bars" role="img" aria-label="Rating distribution, average '+av.toFixed(1)+' out of 5">'+hist.map(function(n,i){return '<span title="'+((i+1)/2)+'★: '+n+'" style="height:'+(n?Math.max(6,Math.round(n/hmax*100)):3)+'%"></span>'}).join("")+'</div><span class="sb-star five" aria-hidden="true">★★★★★</span></div><p class="label sb-avg">Average <b>'+av.toFixed(1)+'</b> / 5</p>':'<p class="label">'+(subj?'No ratings yet.':'Rate a game to see the distribution.')+'</p>';
  out+='</section>';
  /* recent lists */
  var ls=myLists();
  if(ls.length){
    out+='<section class="sb"><div class="sec"><h2>Recent lists</h2><a class="chip" '+tl("lists")+'>'+ls.length+'</a></div>';
    out+=ls.slice(-2).reverse().map(function(l){
      var gs=gamesOfList(l);
      return '<button type="button" class="sb-list" data-viewlist="'+(subj?esc(subj.id):'me')+'|'+esc(l.id)+'"><span class="sb-stack">'+(gs.length?gs.slice(0,5).map(function(g,i){return '<span style="left:'+(i*22)+'px;z-index:'+(9-i)+'">'+cover(g,true)+'</span>'}).join(""):'<span class="sb-empty"></span>')+'</span><b>'+esc(l.name)+'</b><span class="label">'+gs.length+' games</span></button>';
    }).join("");
    out+='</section>';
  }
  /* activity */
  out+='<section class="sb"><div class="sec"><h2>Activity</h2>'+(es.length>5?'<a class="chip" '+tl("fealiyyet")+'>All</a>':'')+'</div>';
  out+=byDate.length?'<ul class="sb-act">'+byDate.slice(0,5).map(function(e){
    var d=dt(e.l.date),vb=({done:"finished",playing:"played",dropped:"dropped",wish:"added"})[e.l.status]||"logged";
    var ds=d?" on "+DAYS[d.getDay()]+", "+MONTHS[d.getMonth()].slice(0,3)+" "+d.getDate()+", "+d.getFullYear():"";
    return '<li><button type="button" data-open="'+esc(e.g.id)+'">'+(subj?esc(personName(subj.id)):'You')+' '+vb+(e.l.rating?" and rated":"")+' <b>'+esc(e.g.t)+'</b>'+(e.l.rating?' '+stars(e.l.rating):'')+'<span class="label">'+esc(ds.replace(/^ on /,""))+'</span></button></li>';
  }).join("")+'</ul>':'<p class="label">No activity yet.</p>';
  out+='</section>';
  return out;
}
function viewMe(){
  var es=diaryEntries();
  var out='<div class="sec"><h2>Favorite games</h2><span class="label">Up to 4</span></div>'+favSlots();
  out+='<div class="sec"><h2>Recent activity</h2>'+(es.length>4?'<a class="chip" '+tl("fealiyyet")+'>All</a>':"")+'</div>';
  out+=es.length?'<div class="favgrid actgrid">'+es.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")}).slice(0,4).map(function(e){return '<div class="actw">'+gameCard(e.g)+'<span class="act"><b>'+esc(VERB[e.l.status]||statusLabel(e.l.status))+'</b> · '+esc(fmtDate(e.l.date))+'</span></div>'}).join("")+'</div>':emptyDiary();
  var rv=es.filter(function(e){return e.l.review}),top=topReviews(es,2);
  var rec=rv.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")}).slice(0,2);
  if(rec.length)out+='<div class="sec"><h2>Recent reviews</h2>'+(rv.length>2?'<a class="chip" '+tl("reyler")+'>More</a>':'<span class="label">'+rv.length+'</span>')+'</div>'+rec.map(function(e){return revBlock(subj?subj.id:myId,e,!subj)}).join("");
  if(top.length){
    out+='<div class="sec"><h2>Popular reviews</h2>'+(rv.length>2?'<a class="chip" '+tl("reyler")+'>More</a>':'<span class="label">'+rv.length+'</span>')+'</div>'+top.map(function(e){return revBlock(subj?subj.id:myId,e,!subj)}).join("");
  }
  out+=followingStrip();
  return '<div class="megrid"><div class="memain">'+out+'</div><aside class="meside" aria-label="Profile summary">'+sideMe(es)+'</aside></div>';
}
var PTABS=[["profilim","Profile"],["fealiyyet","Activity"],["oyunlarim","Games"],["gundelik","Diary"],["reyler","Reviews"],["istek","Wishlist"],["lists","Lists"],["beyenilen","Likes"],["statistika","Stats"]];
var STAB={finished:"done",playing:"playing",dropped:"dropped",wanttoplay:"wish"};
function isProfileTab(t){if(STAB[t])return true;for(var i=0;i<PTABS.length;i++)if(PTABS[i][0]===t)return true;return false}
function tabBody(tab){
  var es=diaryEntries();
  if(tab==="profilim")return viewMe();
  if(tab==="gundelik")return viewDiary();
  if(tab==="istek")return viewWish();
  if(tab==="lists")return viewLists();
  if(tab==="statistika")return viewStats();
  if(tab==="fealiyyet")return es.length?'<div class="sec"><h2>Recent</h2><span class="label">last '+Math.min(es.length,30)+' entries</span></div>'+activityHtml(es,30):emptyDiary();
  if(tab==="oyunlarim")return logged().length?viewGames():emptyDiary();
  if(STAB[tab]){ui.pf.status=STAB[tab];return viewGames()}
  if(tab==="finished")return viewStatus("done");
  if(tab==="playing")return viewStatus("playing");
  if(tab==="dropped")return viewStatus("dropped");
  if(tab==="wanttoplay")return viewStatus("wish");
  if(tab==="reyler"){var rs=es.filter(function(e){return e.l.review});return rs.length?'<div class="sec"><h2>Reviews</h2><span class="label">'+rs.length+'</span></div>'+reviewsHtml(rs):(subj?'<div class="empty"><h3>No reviews yet</h3></div>':'<div class="empty"><h3>No reviews yet</h3><p>Open a game and write a review. It will show up here.</p></div>')}
  if(tab==="beyenilen"){var ls=es.filter(function(e){return e.l.liked});return ls.length?gridOf(ls,"Likes"):(subj?'<div class="empty"><h3>No liked games yet</h3></div>':'<div class="empty"><h3>No liked games yet</h3><p>Open a game and press “Like”. It will show up here.</p></div>')}
  return "";
}
function viewStatus(status){
  var es=logged().filter(function(e){return e.l.status===status;});
  var title=statusLabel(status);
  var copy=status==="done"?"Games you have finished.":status==="playing"?"Games you are currently playing.":status==="dropped"?"Games you stopped playing.":"Games saved for a future playthrough.";
  var out='<div class="intro"><div><h1>'+esc(title)+'</h1><p>'+esc(copy)+'</p></div><span class="label">'+es.length+' games</span></div>'+profileSortToolbar();
  if(!es.length)return out+'<div class="empty"><h3>No games here yet</h3><p>Open a game and choose “'+esc(title)+'” as its status.</p><div class="actions"><button class="btn" data-go="kesf">Browse games</button></div></div>';
  es=sortProfileEntries(es);
  return out+'<div class="grid">'+es.map(function(e){return gameCard(e.g)}).join('')+'</div>';
}


/* ---------- Browse games: filter bar ---------- */
function bfMenu(key){
  var h='',cur=key==="genre"?ui.genre:ui.bf[key];
  function item(val,label){return '<button type="button" class="pf-item'+(String(cur)===String(val)?' sel':'')+'" data-bfset="'+key+'" data-val="'+esc(val)+'">'+esc(label)+'</button>'}
  if(key==="decade"){var ds={};allGames().forEach(function(g){if(g.y)ds[Math.floor(g.y/10)*10]=1});h=item("","Any decade");Object.keys(ds).sort(function(a,b){return b-a}).forEach(function(d){h+=item(d,d+"s")})}
  else if(key==="genre"){var gs={};allGames().forEach(function(g){gs[g.g]=1});h=item("","Any genre");GENRES.filter(function(x){return gs[x]}).forEach(function(x){h+=item(x,x)})}
  else if(key==="stat"){h=item("","Any status");Object.keys(STATLBL).forEach(function(k){h+=item(k,STATLBL[k])})}
  else if(key==="dev"){var dv={};allGames().forEach(function(g){if(g.d)dv[g.d]=1});h=item("","Any developer");Object.keys(dv).sort().forEach(function(x){h+=item(x,x)})}
  else if(key==="tag"){var ti=communityTagIndex(),tk=Object.keys(ti).sort(function(a,b){return Object.keys(ti[b]).length-Object.keys(ti[a]).length||a.localeCompare(b)});h=item("","Any tag");if(!tk.length)h+='<div class="pf-hint">No tags available.</div>';tk.forEach(function(t){h+=item(t,t+" ("+Object.keys(ti[t]).length+")")})}
  else{var ps={Steam:1};Object.keys(state.logs).forEach(function(id){var pl=state.logs[id].platform;if(pl)ps[pl]=1});h=item("","Any service");Object.keys(ps).sort().forEach(function(x){h+=item(x,x)})}
  return '<div class="pf-menu" role="menu">'+h+'</div>';
}
var STATLBL={none:"Not logged",done:"Finished",playing:"Playing",dropped:"Dropped",wish:"Want to play"};
function bfBtn(key,label){
  var open=ui.bf.open===key,v=key==="genre"?ui.genre:ui.bf[key],txt=v?(key==="decade"?v+"s":key==="stat"?(STATLBL[v]||v):v):label;
  return '<div class="pf-wrap"><button type="button" class="pf-btn'+(v?' active':'')+'" data-bfmenu="'+key+'" aria-expanded="'+open+'" aria-haspopup="true">'+esc(txt)+'<svg viewBox="0 0 10 6" width="9" height="6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'+(open?bfMenu(key):'')+'</div>';
}
function bfBar(){
  return '<div class="pf-bar">'+bfBtn("decade","Decade")+bfBtn("genre","Genre")+bfBtn("plat","Service")+bfBtn("stat","My status")+bfBtn("dev","Developer")+bfBtn("tag","Tag")+
   '<label class="pf-sort"><span>Sort by</span><select class="sort" id="sort" aria-label="Sort">'+sortOptions(ui.sort,false)+'</select></label>'+
   '<button type="button" class="pf-eye'+(ui.bf.hide?' off':'')+'" data-bfeye="1" aria-pressed="'+ui.bf.hide+'" aria-label="Show or hide ratings and status on covers" title="Show/hide ratings on covers"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/>'+(ui.bf.hide?'<path d="M3 3l18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>':'')+'</svg></button></div>';
}
document.addEventListener("click",function(e){
  var b=ui.bf,t;
  if(t=e.target.closest("[data-bfmenu]")){b.open=b.open===t.dataset.bfmenu?"":t.dataset.bfmenu;render();return}
  if(t=e.target.closest("[data-bfset]")){if(t.dataset.bfset==="genre")ui.genre=t.dataset.val;else b[t.dataset.bfset]=t.dataset.val;b.open="";render();return}
  if(t=e.target.closest("[data-bfeye]")){b.hide=!b.hide;render();return}
  if(b.open&&!e.target.closest(".pf-wrap")){b.open="";render()}
});
/* ---------- Games tab: Letterboxd-style filter bar ---------- */
var PF_STATUS=[["","Any status"],["done","Finished"],["playing","Playing"],["dropped","Dropped"],["wish","Want to play"]];
function pfEntries(){
  var f=ui.pf;
  return logged().filter(function(e){
    var l=e.l,g=e.g;
    if(f.status?l.status!==f.status:l.status==="wish")return false;
    if(f.norate&&l.rating)return false;
    if(f.rmin&&!(l.rating>=f.rmin&&l.rating<=f.rmax))return false;
    if(f.decade&&String(Math.floor((g.y||0)/10)*10)!==f.decade)return false;
    if(f.genre&&g.g!==f.genre)return false;
    if(f.plat&&l.platform!==f.plat)return false;
    if(f.tag&&gameTags(g).indexOf(f.tag)<0)return false;
    return true;
  });
}
function pfStars(){
  var f=ui.pf,h='<div class="pf-stars" role="group" aria-label="Rating range">';
  for(var i=1;i<=5;i++){var lo=f.rmin&&2*i-1>=f.rmin&&2*i-1<=f.rmax, hi=f.rmin&&2*i>=f.rmin&&2*i<=f.rmax;h+='<button type="button" class="pf-star" style="--f:'+(hi?100:lo?50:0)+'%" data-pfstar="'+i+'" aria-label="'+i+' star (click left half for half a star)">★</button>';}
  return h+'</div>';
}
function pfMenu(key){
  var f=ui.pf,all=logged(),h='',i;
  function item(field,val,label){return '<button type="button" class="pf-item'+(String(f[field])===String(val)?' sel':'')+'" data-pfset="'+field+'" data-val="'+esc(val)+'">'+esc(label)+'</button>'}
  if(key==="status")PF_STATUS.forEach(function(s){h+=item("status",s[0],s[1])});
  else if(key==="rating"){
    h+='<button type="button" class="pf-item'+(!f.rmin&&!f.norate?' sel':'')+'" data-pfrate="any">Any rating</button>';
    h+='<button type="button" class="pf-item'+(f.norate?' sel':'')+'" data-pfrate="none">No rating</button>';
    h+='<div class="pf-sep"></div><div class="label pf-cap">Rating (or range)</div>'+pfStars()+'<div class="pf-hint">'+(f.pend?'Now click a second star':'Click a star (left half = ½), then another to define a range')+'</div>';
  }
  else if(key==="decade"){
    var ds={};all.forEach(function(e){if(e.g.y)ds[Math.floor(e.g.y/10)*10]=1});
    h+=item("decade","","Any decade");Object.keys(ds).sort(function(a,b){return b-a}).forEach(function(d){h+=item("decade",d,d+"s")});
  }
  else if(key==="genre"){
    var gs={};all.forEach(function(e){gs[e.g.g]=1});
    h+=item("genre","","Any genre");GENRES.filter(function(x){return gs[x]}).forEach(function(x){h+=item("genre",x,x)});
  }
  else if(key==="tag"){
    var mt=myTagCounts(),mk=Object.keys(mt).sort(function(a,b){return mt[b]-mt[a]||a.localeCompare(b)});
    h+=item("tag","","Any tag");if(!mk.length)h+='<div class="pf-hint">No tags in your games yet.</div>';
    mk.forEach(function(t){h+=item("tag",t,t+" ("+mt[t]+")")});
  }
  else if(key==="plat"){
    var ps={};all.forEach(function(e){if(e.l.platform)ps[e.l.platform]=1});
    h+=item("plat","","Any service");Object.keys(ps).sort().forEach(function(p){h+=item("plat",p,p)});
  }
  return '<div class="pf-menu" role="menu">'+h+'</div>';
}
function pfBtn(key,label){
  var f=ui.pf,open=f.open===key,active=false,txt=label;
  if(key==="status"&&f.status){active=true;txt=statusLabel(f.status)}
  if(key==="rating"){if(f.norate){active=true;txt="No rating"}else if(f.rmin){active=true;txt=f.rmin===f.rmax?f.rmin/2+"★":f.rmin/2+"–"+f.rmax/2+"★"}}
  if(key==="decade"&&f.decade){active=true;txt=f.decade+"s"}
  if(key==="genre"&&f.genre){active=true;txt=f.genre}
  if(key==="plat"&&f.plat){active=true;txt=f.plat}
  if(key==="tag"&&f.tag){active=true;txt=f.tag}
  return '<div class="pf-wrap"><button type="button" class="pf-btn'+(active?' active':'')+'" data-pfmenu="'+key+'" aria-expanded="'+open+'" aria-haspopup="true">'+esc(txt)+'<svg viewBox="0 0 10 6" width="9" height="6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'+(open?pfMenu(key):'')+'</div>';
}
function pfBar(){
  return '<div class="pf-bar">'+pfBtn("status","Status")+pfBtn("rating","Rating")+pfBtn("decade","Decade")+pfBtn("genre","Genre")+pfBtn("plat","Service")+pfBtn("tag","Tag")+
   '<label class="pf-sort"><span>Sort by</span><select id="profile-sort" aria-label="Sort games">'+sortOptions(ui.profileSort,true)+'</select></label>'+
   '<button type="button" class="pf-eye'+(ui.pf.hide?' off':'')+'" data-pfeye="1" aria-pressed="'+ui.pf.hide+'" aria-label="Show or hide ratings and status on covers" title="Show/hide ratings on covers"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/>'+(ui.pf.hide?'<path d="M3 3l18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>':'')+'</svg></button></div>';
}
function viewGames(){
  var es=sortProfileEntries(pfEntries()),f=ui.pf;
  var title=f.status?statusLabel(f.status):"Games";
  var out='<div class="intro"><div><h1>'+esc(title)+'</h1></div><span class="label">'+es.length+' games</span></div>'+pfBar();
  if(!es.length)return out+'<div class="empty"><h3>No games match these filters</h3><p>Try changing or clearing a filter.</p><div class="actions"><button class="btn" data-pfclear="1">Clear filters</button></div></div>';
  return out+'<div class="grid'+(f.hide?' nobadge':'')+'">'+es.map(function(e){return gameCard(e.g)}).join('')+'</div>';
}
document.addEventListener("click",function(e){
  if(e.target.closest("[data-focussearch]")){var qi=$("#q");if(qi){qi.focus();window.scrollTo(0,0)}return}
  var f=ui.pf,t;
  if(t=e.target.closest("[data-pfmenu]")){f.open=f.open===t.dataset.pfmenu?"":t.dataset.pfmenu;render();return}
  if(t=e.target.closest("[data-pfset]")){f[t.dataset.pfset]=t.dataset.val;f.open="";render();return}
  if(t=e.target.closest("[data-pfrate]")){f.rmin=f.rmax=0;f.pend=false;f.norate=t.dataset.pfrate==="none";f.open="";render();return}
  if(t=e.target.closest("[data-pfstar]")){
    var r0=t.getBoundingClientRect(), n=+t.dataset.pfstar*2-((e.clientX-r0.left)<r0.width/2?1:0);f.norate=false;
    if(!f.pend){f.rmin=f.rmax=n;f.pend=true}
    else{var a=f.rmin;f.rmin=Math.min(a,n);f.rmax=Math.max(a,n);f.pend=false;f.open=""}
    render();return;
  }
  if(t=e.target.closest("[data-pfeye]")){f.hide=!f.hide;render();return}
  if(t=e.target.closest("[data-pfclear]")){f.status="";f.rmin=f.rmax=0;f.pend=false;f.norate=false;f.decade=f.genre=f.plat="";f.tag="";f.open="";render();return}
  if(f.open&&!e.target.closest(".pf-wrap")){f.open="";render()}
});
function shell(tab){
  var es=diaryEntries(), yr=String(new Date().getFullYear());
  var thisYear=es.filter(function(e){return (e.l.date||"").indexOf(yr)===0}).length;
  var nm=state.username||(profs[myId]&&profs[myId].name)||"Profilim";
  var PS=function(go,n,l){return '<button type="button" class="ps" data-pstat="'+go+'"><b>'+n+'</b><span>'+l+'</span></button>'};
  var stats=PS("oyunlarim",es.length,"Games")+PS("gundelik",thisYear,"This year")+PS("lists",myLists().length,"Lists")+PS("insanlar:sec-following",followingList().length,"Following")+PS("insanlar:sec-followers",(myId&&people?followersOf(myId):0),"Followers");
  var out='<div class="ph">'+avatarHead(myId||"me")+'<div class="pinfo"><div class="pname"><h1>'+esc(nm)+'</h1><button class="btn ghost" data-editprofile="1">Edit profile</button></div>'+profMeta(state.profile)+'</div><div class="pstats">'+stats+'</div></div>';
  out+='<nav class="subnav" aria-label="Profile sections"><div class="subnav-in">'+PTABS.map(function(t){return '<a href="#'+t[0]+'" data-tab="'+t[0]+'"'+(t[0]===(STAB[tab]?"oyunlarim":tab)?' aria-current="page"':"")+'>'+t[1]+'</a>'}).join("")+'</div><button type="button" class="subnav-s" data-focussearch="1" aria-label="Search"><svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button></nav>';
  return out+'<div class="shellbody">'+tabBody(tab)+'</div>';
}
/* favourite picker */
var pick=$("#pick");
var pickMode="fav";
function paintPick(){
  var raw=$("#pk-q").value.trim(), q=raw.toLowerCase(), have={};
  if(pickMode==="fav")state.favs.forEach(function(id){have[id]=1});else if(pickMode==="list"){var cl=curList();if(cl)cl.games.forEach(function(id){have[id]=1})}
  var list=allGames().filter(function(g){return !have[g.id]&&(!q||(g.t+" "+(g.d||"")).toLowerCase().indexOf(q)>=0)});
  list.sort(function(a,b){var la=state.logs[a.id]&&state.logs[a.id].status!=="wish"?0:1, lb=state.logs[b.id]&&state.logs[b.id].status!=="wish"?0:1;return la-lb||a.t.localeCompare(b.t)});
  var attr=pickMode==="fav"?"data-addfav":pickMode==="list"?"data-addtolist":"data-pickgame";
  var html=list.slice(0,40).map(function(g){return '<button type="button" class="row" '+attr+'="'+esc(g.id)+'">'+cover(g,true)+'<span class="main"><span class="tt"><b>'+esc(g.t)+'</b><span>'+(g.y||"")+'</span></span></span></button>'}).join("");
  if(pickMode==="log"&&raw)html+='<button type="button" class="row" data-pickcustom="1"><span class="main"><span class="tt"><b>+ Add “'+esc(raw)+'”</b></span></span></button>';
  $("#pk-list").innerHTML=html||'<p style="padding:14px;margin:0;color:var(--mute)">No games found.</p>';
}
function openPick(mode){pickMode=mode||"fav";$("#pk-title").textContent=pickMode==="log"?"Log a game":pickMode==="list"?"Add games to list":"Pick a favorite";$("#pk-q").value="";paintPick();if(pick.showModal)pick.showModal();else pick.setAttribute("open","")}
function closePick(){if(pick.close)pick.close();else pick.removeAttribute("open")}
$("#pk-q").addEventListener("input",paintPick);
$("#pk-close").addEventListener("click",closePick);
pick.addEventListener("click",function(e){if(e.target===pick)closePick()});
function viewProfile(){
  var p=findPerson(ui.profile);
  var back='<button class="back" data-go="insanlar">← Members</button>';
  var fb=ui.profile&&ui.profile!==myId?followBtn(ui.profile):"";
  if(!p||!p.data.public)return back+'<div class="ph">'+avatarHead(ui.profile)+'<h1>'+esc(personName(ui.profile))+'</h1><span class="fb">'+fb+'</span></div><div class="empty"><h3>Profile not shared</h3><p>This person hasn’t shared their profile yet. Follow them and you’ll see it here once they do.</p></div>';
  if(ui.pviewFor!==p.id){ui.pviewFor=p.id;ui.pview="";ui.ptab="profilim";ui.pf={tag:"",status:"",rmin:0,rmax:0,pend:false,norate:false,decade:"",genre:"",plat:"",hide:false,open:""}}
  var tab=ui.ptab||"profilim", d=p.data;
  var sv={logs:state.logs,custom:state.custom,favs:state.favs,lists:state.lists,profile:state.profile};
  /* render the member with the very same profile screens as mine: temporarily point them at this member's shared data */
  state.logs=(d.logs&&typeof d.logs==="object")?d.logs:{};
  state.custom=Array.isArray(d.custom)?d.custom:[];
  state.favs=Array.isArray(d.favs)?d.favs:[];
  state.lists=Array.isArray(d.lists)?d.lists:[];
  state.profile=(d.profile&&typeof d.profile==="object")?d.profile:{};
  subj=p;
  var out;
  try{
    var es=diaryEntries(), yr=String(new Date().getFullYear());
    var thisYear=es.filter(function(e){return (e.l.date||"").indexOf(yr)===0}).length;
    var PS=function(go,n,l,on){return '<button type="button" class="ps" data-pstat="'+go+'"'+(on!==undefined?' aria-pressed="'+on+'"':'')+'><b>'+n+'</b><span>'+l+'</span></button>'};
    var stats=PS("ptab:oyunlarim",es.length,"Games")+PS("ptab:gundelik",thisYear,"This year")+PS("ptab:lists",myLists().length,"Lists")+PS("pview:following",followingOf(p.id).length,"Following",ui.pview==="following")+PS("pview:followers",followersOf(p.id),"Followers",ui.pview==="followers");
    out=back+'<div class="ph">'+avatarHead(p.id)+'<div class="pinfo"><div class="pname"><h1>'+esc(personName(p.id))+'</h1><span class="fb">'+fb+'</span></div>'+profMeta(state.profile)+'</div><div class="pstats">'+stats+'</div></div>';
    if(ui.pview){
      var pl=ui.pview==="following"?followingOf(p.id):followersList(p.id);
      out+='<div class="sec" id="sec-pview"><h2>'+(ui.pview==="following"?"Following":"Followers")+'</h2><span class="label">'+pl.length+'</span></div>'+(people===null?'<p class="label">Loading…</p>':pl.length?memberCards(pl):'<div class="empty"><h3>'+(ui.pview==="following"?"Not following anyone yet":"No followers yet")+'</h3></div>');
    }
    var tabs=PTABS.filter(function(t){return t[0]!=="istek"});
    out+='<nav class="subnav" aria-label="Profile sections"><div class="subnav-in">'+tabs.map(function(t){return '<a href="#profil" data-ptab="'+t[0]+'"'+(t[0]===tab?' aria-current="page"':"")+'>'+t[1]+'</a>'}).join("")+'</div></nav>';
    out+='<div class="shellbody">'+tabBody(tab==="istek"?"profilim":tab)+'</div>';
  }finally{
    state.logs=sv.logs;state.custom=sv.custom;state.favs=sv.favs;state.lists=sv.lists;state.profile=sv.profile;subj=null;
  }
  return out;
}

function viewWish(){
  var es=wishEntries();
  var out='<div class="intro"><div><h1>Wishlist</h1><p>Games you want to play.</p></div></div>';
  if(!es.length)return out+'<div class="empty"><h3>Your list is empty</h3><p>Open a game and set its status to “Want to play”. It will show up here.</p><div class="actions"><button class="btn" data-go="kesf">Pick a game</button></div></div>';
  return out+'<div class="grid">'+es.map(function(e){return gameCard(e.g)}).join("")+'</div>';
}

function viewStats(){
  var es=diaryEntries();
  if(!es.length)return '<div class="intro"><div><h1>Stats</h1></div></div><div class="empty"><h3>No stats yet</h3><p>Log a few games and your rating distribution and favorite genres will appear here.</p><div class="actions"><button class="btn" data-go="kesf">Pick a game</button></div></div>';
  var rated=es.filter(function(e){return e.l.rating>0});
  var avg=rated.length?rated.reduce(function(s,e){return s+e.l.rating},0)/rated.length/2:0;
  var done=es.filter(function(e){return e.l.status==="done"}).length;
  var liked=es.filter(function(e){return e.l.liked}).length;
  var hist=[];for(var i=0;i<10;i++)hist.push(0);
  rated.forEach(function(e){hist[e.l.rating-1]++});
  var hmax=Math.max.apply(null,hist.concat([1]));
  var hh=hist.map(function(n,i){return '<div><em>'+(n||"")+'</em><span class="bar2'+(n?"":" zero")+'" style="height:'+(n?Math.max(4,n/hmax*88):2)+'px"></span><small>'+((i+1)/2).toString()+'</small></div>'}).join("");
  var gc={};es.forEach(function(e){gc[e.g.g]=(gc[e.g.g]||0)+1});
  var gl=Object.keys(gc).sort(function(a,b){return gc[b]-gc[a]}).slice(0,6), gmax=gc[gl[0]]||1;
  var gh=gl.map(function(k){return '<div class="hbar"><span class="nm" style="text-align:left;font:inherit;color:inherit">'+esc(k)+'</span><span class="track"><span class="fill" style="display:block;width:'+(gc[k]/gmax*100)+'%"></span></span><span>'+gc[k]+'</span></div>'}).join("");
  var favs=es.filter(function(e){return e.l.rating>0}).sort(function(a,b){return b.l.rating-a.l.rating||(b.l.liked?1:0)-(a.l.liked?1:0)}).slice(0,4);
  var out='<div class="intro"><div><h1>Stats</h1><p>'+(subj?'Based only on the games '+esc(personName(subj.id))+' shared.':'Based only on the games you’ve logged.')+'</p></div></div>';
  out+='<div class="tiles"><div class="tile"><b>'+es.length+'</b><span class="label">Logged</span></div><div class="tile"><b>'+done+'</b><span class="label">Finished</span></div><div class="tile"><b>'+(rated.length?avg.toFixed(1):"–")+'</b><span class="label">Avg. rating</span></div><div class="tile"><b>'+liked+'</b><span class="label">Liked</span></div><div class="tile"><b>'+Math.round(es.reduce(function(a,e){return a+(e.l.hours||0)},0))+'</b><span class="label">Hours played</span></div></div>';
  out+='<div class="panels"><div class="panel"><h3>Rating distribution</h3><div class="hist" role="img" aria-label="Rating distribution histogram">'+hh+'</div></div><div class="panel"><h3>Most played genres</h3>'+gh+'</div></div>';
  if(favs.length)out+='<h3 style="margin-bottom:12px;font-size:1.1rem">Top rated</h3><div class="favs">'+favs.map(function(e){return gameCard(e.g)}).join("")+'</div>';
  var yr=String(new Date().getFullYear());
  function top(m,n){var k=Object.keys(m).sort(function(a,b){return m[b]-m[a]}).slice(0,n),o={};k.forEach(function(x){o[x]=m[x]});return o}
  function hb(m,fmt){var k=Object.keys(m),mx=Math.max.apply(null,k.map(function(x){return m[x]}).concat([1]));return k.map(function(x){return '<div class="hbar"><span class="nm" style="text-align:left;font:inherit;color:inherit">'+esc(x)+'</span><span class="track"><span class="fill" style="display:block;width:'+(m[x]/mx*100)+'%"></span></span><span>'+(fmt?fmt(m[x]):m[x])+'</span></div>'}).join("")||'<p class="foot">No data yet</p>'}
  var ym={},pm={},hm={},gs={},gn={};
  es.forEach(function(e){var y=(e.l.date||"").slice(0,4);if(y)ym[y]=(ym[y]||0)+1;var p=e.l.platform||"Other";pm[p]=(pm[p]||0)+1;if(e.l.hours>0)hm[e.g.t]=e.l.hours;if(e.l.rating>0){gs[e.g.g]=(gs[e.g.g]||0)+e.l.rating;gn[e.g.g]=(gn[e.g.g]||0)+1}});
  var ga={};Object.keys(gs).forEach(function(k){ga[k]=gs[k]/gn[k]/2});
  var ye=es.filter(function(e){return (e.l.date||"").slice(0,4)===yr}),yd=ye.filter(function(e){return e.l.status==="done"}).length,yh=ye.reduce(function(a,e){return a+(e.l.hours||0)},0),yr_=ye.filter(function(e){return e.l.rating>0}),yb=yr_.slice().sort(function(a,b){return b.l.rating-a.l.rating})[0];
  out+='<h3 style="margin:28px 0 12px;font-size:1.1rem">'+(subj?'Their ':'Your ')+yr+' in games</h3><div class="tiles"><div class="tile"><b>'+ye.length+'</b><span class="label">Logged</span></div><div class="tile"><b>'+yd+'</b><span class="label">Finished</span></div><div class="tile"><b>'+Math.round(yh)+'</b><span class="label">Hours</span></div><div class="tile"><b>'+(yr_.length?(yr_.reduce(function(a,e){return a+e.l.rating},0)/yr_.length/2).toFixed(1):"–")+'</b><span class="label">Avg. rating</span></div></div>'+(yb?'<p class="foot">Top game of '+yr+': <b>'+esc(yb.g.t)+'</b> ('+ratingText(yb.l.rating)+')</p>':'');
  out+='<div class="panels" style="margin-top:20px"><div class="panel"><h3>Games logged per year</h3>'+hb(ym)+'</div><div class="panel"><h3>By platform</h3>'+hb(top(pm,6))+'</div></div>';
  out+='<div class="panels"><div class="panel"><h3>Most hours played</h3>'+hb(top(hm,5),function(v){return v+" h"})+'</div><div class="panel"><h3>Avg. rating by genre</h3>'+hb(top(ga,6),function(v){return v.toFixed(1)+" / 5"})+'</div></div>';
  return out;
}

/* ---------- accounts ---------- */
async function sha(t){var b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,"0")}).join("")}
function authFoot(){return sb?"":'<p class="foot" style="margin:0"><span class="err" role="alert">'+esc(sbError)+'</span></p>'}
function viewSignup(){
  return '<div class="signup"><h1>Create account</h1><p>Choose the username people will know you by on Gameboxd. Each name belongs to one person. The password lets you sign back in later.</p><form id="signup" novalidate><div class="field"><label class="label" for="su-name">Username</label><input id="su-name" type="text" maxlength="20" autocomplete="username" autocapitalize="off" spellcheck="false" placeholder="Murad34" required><span class="hint">3–20 characters: letters, numbers and _</span></div><div class="field"><label class="label" for="su-pw">Password</label><input id="su-pw" type="password" autocomplete="new-password" placeholder="At least 6 characters" required></div><span class="err" id="su-err" role="alert"></span><button class="btn" id="su-btn" type="submit">Create account</button></form><p>Already have an account? <button class="linkbtn" data-auth="login">Sign in</button></p>'+authFoot()+'</div>';
}
function viewLogin(has){
  return '<div class="signup"><h1>Sign in</h1><p>'+(has?"You’ve signed out. Enter your username and password to continue.":"Sign in with the username and password you chose when you created your account.")+'</p><form id="login" novalidate><div class="field"><label class="label" for="li-user">Username</label><input id="li-user" type="text" maxlength="20" autocomplete="username" autocapitalize="off" spellcheck="false" required></div><div class="field"><label class="label" for="li-pw">Password</label><input id="li-pw" type="password" autocomplete="current-password" required></div><span class="err" id="li-err" role="alert"></span><button class="btn" id="li-btn" type="submit">Sign in</button></form>'+(has?"":'<p>Don’t have an account? <button class="linkbtn" data-auth="signup">Create account</button></p>')+authFoot()+'</div>';
}
function goHome(){ui.tab="ana";if(location.hash!=="#ana")location.hash="#ana";else enter()}
function authMsg(e,kind){
  var m=((e&&e.code)||"")+" "+((e&&e.message)||""); m=m.toLowerCase();
  if(/invalid login|invalid_credentials|invalid credentials/.test(m))return "Wrong username or password.";
  if(/email not confirmed|email_not_confirmed/.test(m))return "This account needs e-mail confirmation. Turn off “Confirm email” in Supabase Auth settings.";
  if(/already|registered|exists/.test(m))return "That name is already taken. Choose another.";
  if(/email_address_invalid|email address.*invalid/.test(m))return "Sign-up was refused: Supabase rejected the internal e-mail domain. Change “emailDomain” at the top of index.html.";
  if(/rate limit|too many|over_request|over_email/.test(m))return "Too many attempts. Wait a minute and try again.";
  if(/weak_password|weak password/.test(m))return "That password is too weak. Try a longer one.";
  if(/failed to fetch|networkerror|network request/.test(m))return "Can’t reach the server. Check your connection and try again.";
  return (kind==="signup"?"Couldn’t create the account":"Couldn’t sign in")+" ("+errTxt(e)+").";
}
/* old browser-only data (localStorage "gameboxd") is moved into the new account once, if it belongs to the same username */
function readLegacy(name){
  try{
    var raw=localStorage.getItem("gameboxd");if(!raw)return null;
    var d=JSON.parse(raw);if(!d||typeof d!=="object")return null;
    var u=typeof d.username==="string"?d.username:"";
    if(u&&u.toLowerCase()!==name.toLowerCase())return null;
    if(!d.logs&&!d.lists&&!d.favs)return null;
    return d;
  }catch(e){return null}
}
function archiveLegacy(){try{var raw=localStorage.getItem("gameboxd");if(raw){localStorage.setItem("gameboxd_imported_backup",raw);localStorage.removeItem("gameboxd")}}catch(e){}}
async function doSignup(){
  var err=$("#su-err"), btn=$("#su-btn"), name=$("#su-name").value.trim(), pw=$("#su-pw").value, created=false;
  err.textContent="";
  if(!sb){err.textContent=sbError;return}
  if(!/^[A-Za-z0-9_]{3,20}$/.test(name)){err.textContent="Name must be 3–20 characters: letters, numbers and _ only.";return}
  if(pw.length<6){err.textContent="Password must be at least 6 characters.";return}
  btn.disabled=true;
  try{
    var r=await sb.auth.signUp({email:emailFor(name),password:pw,options:{data:{username:name}}});
    if(r.error){err.textContent=authMsg(r.error,"signup");btn.disabled=false;return}
    var u=r.data&&r.data.user;
    if(!u||(Array.isArray(u.identities)&&!u.identities.length)){err.textContent="That name is already taken. Choose another.";btn.disabled=false;return}
    if(!r.data.session){err.textContent="Supabase is asking for e-mail confirmation. Turn off “Confirm email” (Authentication → Sign In / Providers → Email).";btn.disabled=false;return}
    created=true;
    var legacy=readLegacy(name);
    await bootUser(u,{isNew:true,legacy:legacy});
    state.username=name;
    await persistNow();
    if(legacy)archiveLegacy();
    toast(legacy?"Account created. Your saved games were imported.":"Account created. Welcome, "+name);
    goHome();
  }catch(e){
    logErr("sign up",e);
    if(created){try{await sb.auth.signOut({scope:"local"})}catch(x){}resetSession();ui.auth="login";render();
      var er2=$("#li-err");if(er2)er2.textContent="Your account was created, but saving your profile failed ("+errTxt(e)+"). Try signing in.";return}
    err.textContent=authMsg(e,"signup");btn.disabled=false;
  }
}
async function doLogin(){
  var err=$("#li-err"), btn=$("#li-btn"), un=$("#li-user").value.trim(), pw=$("#li-pw").value;
  err.textContent="";
  if(!sb){err.textContent=sbError;return}
  if(!un||!pw){err.textContent="Enter your username and password.";return}
  if(!/^[A-Za-z0-9_]{3,20}$/.test(un)){err.textContent="Wrong username or password.";return}
  btn.disabled=true;
  try{
    var r=await sb.auth.signInWithPassword({email:emailFor(un),password:pw});
    if(r.error){err.textContent=authMsg(r.error,"login");btn.disabled=false;return}
    try{await bootUser(r.data.user)}catch(e){try{await sb.auth.signOut({scope:"local"})}catch(x){}resetSession();throw e}
    toast("Welcome, "+state.username);goHome();
  }catch(e){logErr("sign in",e);err.textContent=authMsg(e,"login");btn.disabled=false}
}

/* ---------- edit profile ---------- */
function profMeta(pr){
  pr=pr||{};var o="", w=String(pr.web||""), m=[];
  if(pr.name)o+='<span class="label">'+esc(pr.name)+'</span>';
  if(pr.bio)o+='<p class="pbio">'+esc(pr.bio)+'</p>';
  if(pr.loc)m.push('<span class="pm"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 2a6.5 6.5 0 0 0-6.5 6.5c0 4.8 6.5 13.5 6.5 13.5s6.5-8.700 6.500-13.500A6.500 6.500 0 0 0 12 2zm0 9a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z" fill="currentColor"/></svg>'+esc(pr.loc)+'</span>');
  if(/^https?:\/\//i.test(w))m.push('<a href="'+esc(w)+'" target="_blank" rel="noopener nofollow"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M5 3l14 7-6 2-2 6z" fill="currentColor"/></svg> '+esc(w.replace(/^https?:\/\//i,"").replace(/\/$/,""))+'</a>');
  if(m.length)o+='<div class="pmeta">'+m.join("")+'</div>';
  return o;
}
var epd=$("#epd");
function openEdit(){
  var pr=state.profile||{};
  $("#e-user").value=state.username;$("#e-name").value=pr.name||"";$("#e-loc").value=pr.loc||"";$("#e-web").value=pr.web||"";$("#e-bio").value=pr.bio||"";
  $("#e-pw").value="";$("#e-pwf").hidden=true;
  $("#e-pub").checked=!!state.public;$("#e-pubw").hidden=!db;$("#e-err").textContent="";
  pendAv=undefined;$("#e-file").value="";showAvPrev(okAv(pr.avatar));
  if(epd.showModal)epd.showModal();else epd.setAttribute("open","");
}
function closeEdit(){if(epd.close)epd.close();else epd.removeAttribute("open")}
var pendAv;
function showAvPrev(a){var im=$("#e-avp");im.hidden=!a;if(a)im.src=a;$("#e-avdel").hidden=!a}
$("#e-file").addEventListener("change",function(e){
  var f=e.target.files[0];if(!f)return;
  var fr=new FileReader();
  fr.onload=function(){var img=new Image();
    img.onload=function(){var n=Math.min(img.width,img.height),c=document.createElement("canvas");var S=Math.min(640,n);c.width=c.height=S;var cx=c.getContext("2d");cx.imageSmoothingQuality="high";cx.drawImage(img,(img.width-n)/2,(img.height-n)/2,n,n,0,0,S,S);var q=0.88;pendAv=c.toDataURL("image/jpeg",q);while(pendAv.length>140000&&q>0.4){q-=0.08;pendAv=c.toDataURL("image/jpeg",q)}showAvPrev(pendAv);$("#e-err").textContent=""};
    img.onerror=function(){$("#e-err").textContent="Couldn’t read that image. Pick another."};
    img.src=fr.result};
  fr.readAsDataURL(f);
});
$("#e-avdel").addEventListener("click",function(){pendAv="";$("#e-file").value="";showAvPrev("")});
$("#e-cancel").addEventListener("click",closeEdit);
epd.addEventListener("click",function(e){if(e.target===epd)closeEdit()});
$("#eform").addEventListener("submit",async function(e){
  e.preventDefault();
  var er=$("#e-err");er.textContent="";
  var pr={name:$("#e-name").value.trim(),loc:$("#e-loc").value.trim(),web:$("#e-web").value.trim(),bio:$("#e-bio").value.trim()};
  if(pr.web&&!/^https?:\/\//i.test(pr.web))pr.web="https://"+pr.web;
  var av=pendAv===undefined?okAv((state.profile||{}).avatar):pendAv;
  if(av&&av.indexOf("data:")===0){var sbtn=$("#eform button[type=submit]");if(sbtn)sbtn.disabled=true;av=await uploadAvatar(av);if(sbtn)sbtn.disabled=false}
  if(av)pr.avatar=av;
  state.profile=pr;
  var pub=db?$("#e-pub").checked:state.public, ch=pub!==state.public;
  state.public=pub;save();closeEdit();
  if(ch){people=null;render();loadPeople()}else render();
  toast("Profile updated");
});

/* ---------- home ---------- */
function favAv(id){var u=avSrc(id);return u?'<img src="'+esc(u)+'" alt="">':esc(personName(id).charAt(0).toUpperCase())}
function homeEmpty(h,t,btn){return '<div class="empty"><h3>'+h+'</h3><p>'+t+'</p>'+(btn||"")+'</div>'}
/* Curated catalog popularity order. This is a browsing order, not a live Steam player-count ranking. */
var POPULAR_GAME_IDS=[
  "minecraft","gta5","rdr2","witcher3","eldenring","cp2077","bg3","cs2","dota2","lol",
  "valorant","fortnite","apex","pubg","stardew","terraria","hollowknight","hades","portal2","hl2",
  "gow2018","skyrim","fnv","fallout4","re4","re2","sh2","tlou","gowragnarok","tsushima",
  "spiderman","sekiro","darksouls","ds3","bloodborne","lies","blackmyth","mhworld","helldivers2","warframe",
  "destiny2","thefinals","marvelrivals","tf2","l4d2","titanfall2","doometernal","bioshock","outerwilds","discoelysium",
  "me2","p5","ff7r","itt","splitfiction","unravel","cuphead","celeste","ori","undertale",
  "geometrydash","balatro","slay","deadcells","vampsurv","ror2","isaac","ftl","phasmo","dbd",
  "lethal","repo","schedule1","rust","dayz","prjzomboid","forest","sotf","subnautica","palworld",
  "valheim","nms","ark","garrysmod","beamng","fh5","ets2","nfsheat","rocketleague","fifa24",
  "efootball","sf6","tekken7","mk11","civ6","aoe2","rimworld","dwarf","cities","amongus"
];
var RECOMMENDATION_SEEDS=["outerwilds","discoelysium","hades","hollowknight","celeste","portal2","bg3","witcher3","rdr2","eldenring","stardew","balatro","hades2","dave","tunic","firewatch"];
/* Metacritic critic Metascores (0-100), entered as a curated static snapshot from public listings.
   Platform-specific scores can differ; the PC score is used where checked and the main listing score otherwise.
   Scores may change; titles without a score here are intentionally left unscored, not treated as 0. */
var METACRITIC_SCORES={
  minecraft:93,gta5:96,gta4:90,rdr2:93,rdr1:84,witcher3:93,eldenring:94,cp2077:86,bg3:96,cs2:82,dota2:90,
  fortnite:78,apex:89,pubg:86,stardew:89,terraria:83,hollowknight:87,hades:93,portal2:95,hl2:96,
  gow2018:93,gowragnarok:94,skyrim:94,fnv:84,fallout4:84,fallout76:52,re4:96,re2:91,sh2:89,tlou:95,tlou2:93,me2:94,p5:93,
  odyssey:97,gtasa:93,mgs3:91,mgsv:91,deathstranding:86,spiderman:87,arkhamcity:91,ac2:86,dmc5:89,
  nier:88,tsushima:87,horizon:84,yakuza0:85,farcry3:88,farcry6:74,cod4:92,overwatch:91,bioshock:96,stalker:82,control:82,alanwake2:89,
  halo:83,titanfall2:86,dao:91,ff7:89,ff7r:87,ffx:92,p4g:87,chrono:92,kotor:93,wow:93,
  diablo2:88,mario64:94,sonic2:83,ori:88,cuphead:88,rayman:91,shovel:85,crash:80,limbo:88,inside:83,
  lis:83,twd:92,firewatch:81,edithfinch:88,uncharted4:93,tombraider:86,journey:92,oot:99,totk:96,
  witness:87,baba:84,monument:89,sims4:70,cities:85,acnh:90,ets2:79,ksp:88,isaac:84,slay:89,celeste:92,bloodborne:92,darksouls:89,ds3:89,outerwilds:85,discoelysium:91,sekiro:90,botw:97,
  deadcells:89,ror2:85,darkestdungeon:84,deadspace:89,amnesia:85,outlast:80,fnaf:78,alieniso:81,
  rust:69,subnautica:87,nms:71,civ6:88,aoe2:84,sc2:93,xcom2:88,wc3:92,fh5:92,nfsmw:83,dirt2:84,doom2016:85,tf2:92,l4d2:89,soma:84,tunic:85,astrobot:94,acblackflag:84,cocoon:88,hifirush:87,kcd2:88,division2:84,
  fifa23:77,rocketleague:86,sf6:92,tekken7:82,mk11:82,amongus:85,witcher2:88,ff14:86,persona3r:87,
  blackmyth:81,helldivers2:82,satisfactory:90,factorio:90,rimworld:87,dwarf:93,ark:70,forest:83,sotf:69,
  "7dtd":67,vampsurv:86,hades2:94,ftl:84,sm:87,sonicmania:86,gt7:87,forza4:84,nfsheat:72,
  fifa24:72,nba2k24:67,pes:77,tonyhawk:85,ageofwonders4:83,totalwarwh3:86,stellaris:78,eu4:87,hoi4:83,
  ck3:91,xcom:89,portal1:90,humanfall:70,itt:88,unravel:82,gris:83,hellblade:81,detroit:78,heavyrain:87,
  lifeisstrange2:77,wolfamong:80,mafia:78,watchdogs:77,acvalhalla:82,splitfiction:90,indianajones:86,
  metroexodus:82,re3:79,blackops3:81,oblivionremastered:82,wutheringwaves:71,arma3:74,
  mhrise:86,huntshowdown:81,overcooked2:81,payday3:62,gears5:82,elderscrollsonline:71,darktide:74,
  marvelrivals:74,clairobscur:91,stellarblade:81,dragonsdogma2:86,starfield:83,dyinglight2:76,readynot:79,
  acshadows:81,armoredcore6:86,dayz:75
};
function popularGames(){return POPULAR_GAME_IDS.map(gameById).filter(Boolean)}
function popularRank(g){var i=POPULAR_GAME_IDS.indexOf(g.id);return i<0?100000+i:i}
var SORT_GROUPS=[
  ['Name',[['az','A–Z'],['za','Z–A']],0],
  ['Popularity',[['popularity','Most popular first']],0],
  ['Shuffle',[['shuffle','Random order']],0],
  ['When added',[['added-new','Newest first'],['added-old','Earliest first']],1],
  ['Release date',[['year','Newest first'],['old','Earliest first']],0],
  ['Metacritic score',[['metascore-high','Highest first'],['metascore-low','Lowest first']],0],
  ['Your rating',[['rating-high','Highest first'],['rating-low','Lowest first']],0],
  ['Game length',[['hours-short','Shortest first'],['hours-long','Longest first']],1]
];
function sortOptions(cur,personal){
  function opt(o,txt){return '<option value="'+o[0]+'"'+(cur===o[0]?' selected':'')+'>'+txt+'</option>'}
  return SORT_GROUPS.filter(function(g){return personal||!g[2]}).map(function(g){
    if(g[1].length===1)return opt(g[1][0],g[0]);
    return '<optgroup label="'+g[0]+'">'+g[1].map(function(o){return opt(o,o[1])}).join('')+'</optgroup>';
  }).join('');
}
function shuffleKey(id){var t=String(ui.shuffleSeed||"")+id,h=2166136261;for(var i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function sortCmp(sort){
  function tie(a,b){return popularRank(a.g)-popularRank(b.g)||a.g.t.localeCompare(b.g.t)}
  function num(get,desc){return function(a,b){var x=get(a),y=get(b),hx=x!=null,hy=y!=null;if(hx!==hy)return hx?-1:1;if(hx&&x!==y)return desc?y-x:x-y;return tie(a,b)}}
  switch(sort){
    case "popularity":return function(a,b){return popularRank(a.g)-popularRank(b.g)||a.g.t.localeCompare(b.g.t)};
    case "az":return function(a,b){return a.g.t.localeCompare(b.g.t)};
    case "za":return function(a,b){return b.g.t.localeCompare(a.g.t)};
    case "shuffle":return function(a,b){return shuffleKey(a.g.id)-shuffleKey(b.g.id)};
    case "old":return function(a,b){return (a.g.y||0)-(b.g.y||0)||a.g.t.localeCompare(b.g.t)};
    case "metascore-high":case "metascore-low":return num(function(x){var v=METACRITIC_SCORES[x.g.id];return v==null?null:v},sort==="metascore-high");
    case "rating-high":case "rating-low":return num(function(x){return x.l&&x.l.rating>0?x.l.rating:null},sort==="rating-high");
    case "hours-short":case "hours-long":return num(function(x){return x.l&&x.l.hours>0?x.l.hours:null},sort==="hours-long");
    case "added-new":case "added-old":return num(function(x){var d=x.l&&x.l.date?parseInt(String(x.l.date).replace(/-/g,""),10):NaN;return isNaN(d)?null:d},sort==="added-new");
  }
  return function(a,b){return (b.g.y||0)-(a.g.y||0)||a.g.t.localeCompare(b.g.t)};
}
function sortGameList(list,sort){
  var w=list.map(function(g){return {g:g,l:state.logs[g.id]}}).sort(sortCmp(sort));
  for(var i=0;i<w.length;i++)list[i]=w[i].g;
  return list;
}
function recommendationResults(limit){
  var genreScore={},genreCount={},favoriteGenres=[],hasSignal=false,seedRank={};
  RECOMMENDATION_SEEDS.forEach(function(id,i){seedRank[id]=RECOMMENDATION_SEEDS.length-i});
  function addGenre(game,weight){
    if(!game||!game.g||!weight)return;
    genreScore[game.g]=(genreScore[game.g]||0)+weight;
    genreCount[game.g]=(genreCount[game.g]||0)+1;
    hasSignal=true;
  }
  Object.keys(state.logs||{}).forEach(function(id){
    var log=state.logs[id],game=gameById(id);
    if(!log||!game||log.sample)return;
    var weight=0,rating=Number(log.rating)||0;
    if(rating>0)weight+=(rating-5)/5*1.35; // high ratings lift a genre, low ratings lower it
    if(log.liked)weight+=.85;
    if(log.status==="done")weight+=.25;
    else if(log.status==="playing")weight+=.35;
    else if(log.status==="dropped")weight-=.8;
    else if(log.status==="wish")weight+=.45;
    addGenre(game,weight);
  });
  (state.favs||[]).forEach(function(id){addGenre(gameById(id),2.4)});
  var genrePreference={};
  Object.keys(genreScore).forEach(function(g){
    genrePreference[g]=genreScore[g]/Math.max(1,Math.sqrt(genreCount[g]||1));
  });
  favoriteGenres=Object.keys(genrePreference).filter(function(g){return genrePreference[g]>0}).sort(function(a,b){return genrePreference[b]-genrePreference[a]});
  var genreRank={};favoriteGenres.forEach(function(g,i){genreRank[g]=i});
  var candidates=allGames().filter(function(g){return !state.logs[g.id]});
  if(!candidates.length)candidates=allGames().slice();
  candidates.sort(function(a,b){
    var pa=genrePreference[a.g]||0,pb=genrePreference[b.g]||0;
    if(hasSignal&&pa!==pb)return pb-pa;
    var sa=seedRank[a.id]||0,sb=seedRank[b.id]||0;
    var ma=METACRITIC_SCORES[a.id]||0,mb=METACRITIC_SCORES[b.id]||0;
    var ra=(hasSignal?pa*12:sa*1.2)+(ma*.035)+(100-popularRank(a))*.008;
    var rb=(hasSignal?pb*12:sb*1.2)+(mb*.035)+(100-popularRank(b))*.008;
    return rb-ra||popularRank(a)-popularRank(b)||(b.y||0)-(a.y||0)||a.t.localeCompare(b.t);
  });
  return candidates.slice(0,limit||4).map(function(g){
    var reason;
    if(favoriteGenres.length&&genrePreference[g.g]>0)reason="Matched to your "+g.g+" interests from ratings, likes and play status";
    else if((state.favs||[]).some(function(id){var fg=gameById(id);return fg&&fg.g===g.g}))reason="Matches a genre of one of your favorite games";
    else if(METACRITIC_SCORES[g.id]>=90)reason="Highly rated by critics on Metacritic";
    else if(hasSignal)reason="A related pick to expand your game library";
    else reason="Popular starter pick based on critic scores and catalog popularity";
    return {game:g,reason:reason};
  });
}
function gameCardWithReason(g,reason){
  return gameCard(g).replace('</span></button>','<span class="game-reason">'+esc(reason)+'</span></span></button>');
}
function homeFilterHTML(){
  var q=(ui.homeQ||"").trim().toLowerCase(),genre=ui.homeGenre||"";
  if(!q&&!genre)return '<div class="home-filter-empty">Search by game name, developer, or choose a genre to filter the catalog.</div>';
  var matches=allGames().filter(function(g){
    if(genre&&g.g!==genre)return false;
    return !q||(g.t+" "+(g.d||"")+" "+(g.g||"")).toLowerCase().indexOf(q)>=0;
  });
  matches.sort(function(a,b){return (b.y||0)-(a.y||0)||a.t.localeCompare(b.t)});
  var total=matches.length;
  var limited=matches.slice(0,12);
  if(!total)return '<div class="home-filter-empty">No games match these filters. Try another title or genre.</div>';
  var out='<div class="home-filter-note">'+total+' game'+(total===1?'':'s')+' found'+(total>12?' · showing first 12':'')+'</div><div class="grid">'+limited.map(function(g){return gameCard(g)}).join('')+'</div>';
  if(total>12||q)out+='<p class="foot"><button class="chip" type="button" data-home-all="1">View all matching games in Games</button></p>';
  return out;
}
function renderHomeFilterResults(){
  var box=$("#home-filter-results");
  if(!box)return;
  box.innerHTML=homeFilterHTML();
  setupSteamArt(box);
}
function viewPopularGames(){
  var games=popularGames().slice(0,100);
  var out='<div class="intro"><div><h1>Popular games</h1><p>100 well-known games in a curated popularity order.</p></div><span class="label">'+games.length+' games</span></div>';
  return out+'<div class="grid">'+games.map(function(g){return gameCard(g)}).join('')+'</div>';
}
function viewRecommendedGames(){
  var recs=recommendationResults(50);
  var hasSignal=Object.keys(state.logs||{}).some(function(id){var l=state.logs[id];return l&&l.status!=="wish"&&((l.rating||0)>0||l.liked)});
  var genres={};Object.keys(state.logs||{}).forEach(function(id){var l=state.logs[id],g=gameById(id);if(!l||!g||l.status==="wish"||(!(l.rating>0)&&!l.liked))return;genres[g.g]=(genres[g.g]||0)+(l.rating||0)+(l.liked?3:0)});
  var topGenres=Object.keys(genres).sort(function(a,b){return genres[b]-genres[a]}).slice(0,4);
  var blurb=hasSignal?(topGenres.length?'Based on your activity, your strongest genres are '+topGenres.join(', ')+'.':'Based on the games you have liked and rated.'):'These are starter recommendations. Rate or like games to personalize the list by your top four genres.';
  return '<div class="intro"><div><h1>Recommended for you · Top 50</h1><p>'+esc(blurb)+'</p></div><span class="label">'+recs.length+' games</span></div><div class="grid">'+recs.map(function(x){return gameCardWithReason(x.game,x.reason)}).join('')+'</div>';
}
function viewHome(){
  var out='<p class="welcome">Welcome back, <a href="#profilim" data-tab="profilim">'+esc(state.username)+'</a>. Discover popular games and recommendations picked for you.</p>';
  var popular=popularGames().slice(0,12);
  out+='<section class="home-section"><div class="sec"><h2>Popular games</h2><a class="chip" href="#popular" data-tab="popular">View all 100</a></div><p class="home-subtitle">A curated selection of widely known games. Open the full list to browse 100 titles.</p><div class="grid">'+popular.map(function(g){return gameCard(g)}).join('')+'</div></section>';
  var recs=recommendationResults(4);
  out+='<section class="home-section"><div class="sec"><h2>Recommended for you · Top 4</h2><a class="chip" href="#recommendations" data-tab="recommendations">See all 50</a></div><p class="home-subtitle">'+(Object.keys(state.logs||{}).some(function(id){return state.logs[id]&&state.logs[id].status!=="wish"&&((state.logs[id].rating||0)>0||state.logs[id].liked)})?'Recommendations analyze your ratings, likes, favorites and Finished/Playing/Dropped/Want to play statuses to identify your preferred genres.':'Rate, like and save games to personalize your list; for now these starter picks use critic scores and popularity.')+'</p><div class="grid">'+recs.map(function(x){return gameCardWithReason(x.game,x.reason)}).join('')+'</div></section>';
  var genreOptions='<option value="">All genres</option>'+GENRES.map(function(g){return '<option value="'+esc(g)+'"'+(ui.homeGenre===g?' selected':'')+'>'+esc(g)+'</option>'}).join('');
  out+='<section class="home-section"><div class="sec"><h2>Find a game</h2><span class="label">Search & filter</span></div><div class="home-searchbar"><input id="home-filter-q" type="search" value="'+esc(ui.homeQ||'')+'" placeholder="Search by game, developer or genre…" aria-label="Search games on homepage" autocomplete="off"><select id="home-filter-genre" aria-label="Filter by genre">'+genreOptions+'</select></div><div id="home-filter-results">'+homeFilterHTML()+'</div></section>';
  var fl=followingList();
  if(!db)return out+homeEmpty("Shared friend activity is not connected","You can still browse popular games, get recommendations, and search the catalog here.",'<div class="actions"><button class="btn" data-go="kesf">Browse all games</button></div>');
  if(!fl.length)return out+homeEmpty("You’re not following anyone yet","Find a friend and follow them. Their game activity will appear here.",'<div class="actions"><button class="btn" data-go="insanlar">Find friends</button></div>');
  if(people===null)return out+'<p class="label">Loading friends’ activity…</p>';
  var fr=[];
  fl.forEach(function(id){var p=findPerson(id);if(!p)return;entriesOf(p.data).forEach(function(e){if(e.l.status!=="wish")fr.push({id:id,g:e.g,l:e.l})})});
  if(!fr.length)return out+homeEmpty("Your friends haven’t posted yet","When people you follow share game activity, it will appear here.",'<div class="actions"><button class="btn" data-go="insanlar">Browse members</button></div>');
  var recent=fr.slice().sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")}).slice(0,6);
  var cnt={};
  fr.forEach(function(e){var c=cnt[e.g.id]||(cnt[e.g.id]={g:e.g,n:0,s:0,r:0});c.n++;if(e.l.rating){c.s+=e.l.rating;c.r++}});
  var pop=Object.keys(cnt).map(function(k){return cnt[k]}).sort(function(a,b){return b.n-a.n||b.r-a.r||a.g.t.localeCompare(b.g.t)}).slice(0,6);
  out+='<section class="home-section"><div class="sec"><h2>New from friends</h2><a class="chip" href="#insanlar" data-tab="insanlar">Members</a></div><div class="grid">'+recent.map(function(e){
    return '<button class="game fc" data-open="'+esc(e.g.id)+'">'+cover(e.g).replace('</div></div>','</div><span class="fav">'+favAv(e.id)+'</span></div>')+'<span class="meta"><span class="fn">'+esc(personName(e.id))+'</span>'+(e.l.rating?stars(e.l.rating):'<span class="y">'+esc(statusLabel(e.l.status))+'</span>')+'</span></button>';
  }).join('')+'</div></section>';
  out+='<section class="home-section"><div class="sec"><h2>Popular with friends</h2></div><div class="grid">'+pop.map(function(c){
    return '<button class="game" data-open="'+esc(c.g.id)+'">'+cover(c.g).replace('</div></div>','</div><span class="badge">'+c.n+' friends</span></div>')+'<span class="meta"><span class="t">'+esc(c.g.t)+'</span>'+(c.r?stars(c.s/c.r):'')+'</span></button>';
  }).join('')+'</div></section>';
  return out;
}
/* ---------- RAWG: banner, description, screenshots (via Supabase Edge Function "rawg") ---------- */
var RAWG_TTL=30*24*3600*1000, rawgMem={};
function rawgCacheGet(id){
  if(rawgMem[id])return rawgMem[id];
  try{var s=localStorage.getItem("gbx-rawg:"+id);if(!s)return null;var o=JSON.parse(s);if(o&&o.t&&Date.now()-o.t<RAWG_TTL){rawgMem[id]=o.d;return o.d}}catch(e){}
  return null;
}
function rawgCachePut(id,d){rawgMem[id]=d;try{localStorage.setItem("gbx-rawg:"+id,JSON.stringify({t:Date.now(),d:d}))}catch(e){}}
function rawgHttps(u){return typeof u==="string"&&/^https:\/\/media\.rawg\.io\//.test(u)?u:""}
function rawgHtml(d){
  if(!d||!d.found)return "";
  var ban=rawgHttps(d.banner)||rawgHttps(d.banner2), h="";
  if(ban)h+='<img class="rawg-banner" src="'+esc(ban)+'" alt="" loading="lazy">';
  var desc=String(d.description||"").trim();
  if(desc){
    var short=desc.length>600?desc.slice(0,600).replace(/\s+\S*$/,"")+"...":desc;
    h+='<div class="rawg-desc"><h3>About</h3><p>'+esc(short).replace(/\n+/g,"</p><p>")+'</p>';
    if(short!==desc)h+='<details><summary>Read more</summary><p>'+esc(desc).replace(/\n+/g,"</p><p>")+'</p></details>';
    h+='</div>';
  }
  var shots=(d.shots||[]).map(rawgHttps).filter(Boolean).slice(0,6);
  if(shots.length)h+='<div class="rawg-shots">'+shots.map(function(u){return '<img src="'+esc(u)+'" alt="" loading="lazy">'}).join("")+'</div>';
  var url=/^https:\/\/rawg\.io\//.test(d.url||"")?d.url:"https://rawg.io";
  h+='<p class="foot rawg-credit">Game data and images from <a href="'+esc(url)+'" target="_blank" rel="noopener">RAWG</a></p>';
  return h;
}
async function setupRawg(){
  var box=document.getElementById("rawg-box");if(!box)return;
  var gid=box.dataset.gid, g=gameById(gid);if(!g)return;
  var c=rawgCacheGet(gid);
  if(c){box.innerHTML=rawgHtml(c);return}
  if(!sb||!sb.functions)return;
  try{
    var r=await sb.functions.invoke("rawg",{body:{title:g.t}});
    if(r.error||!r.data)return;
    rawgCachePut(gid,r.data);
    var b2=document.getElementById("rawg-box");
    if(b2&&b2.dataset.gid===gid)b2.innerHTML=rawgHtml(r.data);
  }catch(e){try{console.error("[Gameboxd] rawg",e)}catch(x){}}
}

function render(){
  var tab=ui.tab, v=$("#view");
  document.body.classList.toggle("nosign",!loaded||!state.username||!signedIn);
  if(!loaded){v.innerHTML='<p class="label">Loading…</p>';return}
  if(!state.username){v.innerHTML=ui.auth==="login"?viewLogin(false):viewSignup();return}
  if(!signedIn){v.innerHTML=viewLogin(true);return}
  v.innerHTML=isProfileTab(tab)?shell(tab):tab==="game"?viewGame():tab==="activity"?viewActivity():tab==="list"?viewList():tab==="insanlar"?viewPeople():tab==="usersearch"?viewUserSearch():tab==="profil"?viewProfile():tab==="ana"?viewHome():tab==="popular"?viewPopularGames():tab==="recommendations"?viewRecommendedGames():viewDiscover();
  var topTab=tab==="profil"?"insanlar":tab==="game"?"kesf":tab;
  document.querySelectorAll("a[data-tab]").forEach(function(a){
    if(a.closest(".subnav"))return;
    if(a.dataset.tab===topTab)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  $("#u-name").textContent=state.username||(profs[myId]&&profs[myId].name)||"Profilim";
  $("#u-av").innerHTML=avatar(myId||"me","uav");
  var sh=$("#m-share");sh.hidden=!db;sh.textContent=state.public?"Hide profile":"Share profile";
  setupSteamArt(v);
  if(tab==="game")setupRawg();
}


/* ---------- comments, lists, activity ---------- */
var cm=null;
function fromCommentRow(r){
  var K=C.comments;
  return {id:String(r[K.id]),to:r[K.owner],game:r[K.game],by:r[K.author],text:String(r[K.text]==null?"":r[K.text]).slice(0,400),ts:Date.parse(r[K.ts])||Date.now()};
}
async function loadComments(){
  try{await ready}catch(e){}
  if(!db){cm=[];render();return}
  try{
    var q=await sb.from(T.comments).select("*").limit(2000);
    if(q.error)throw q.error;
    cm=(q.data||[]).map(fromCommentRow).filter(function(c){return typeof c.to==="string"&&typeof c.by==="string"&&typeof c.game==="string"}).sort(function(a,b){return a.ts-b.ts});
    cmAt=Date.now();
  }catch(e){logErr("load comments",e);cm=[]}
  render();
}
function cmOf(owner,gid){return (cm||[]).filter(function(c){return c.to===owner&&c.game===gid}).sort(function(a,b){return a.ts-b.ts})}
function fmtTs(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})}
function threadHtml(owner,gid){
  if(!db||!myId||!owner)return "";
  var h=cmOf(owner,gid).map(function(c){
    var can=c.by===myId||c.to===myId;
    return '<div class="cmt">'+avatar(c.by)+'<span><b>'+esc(personName(c.by))+'</b> '+esc(c.text)+' <span class="label">'+esc(fmtTs(c.ts))+'</span></span>'+(can?'<button class="linkbtn x2" data-delcm="'+esc(c.id)+'">Delete</button>':"")+'</div>';
  }).join("");
  return '<div class="thread">'+h+'<form class="cform" data-to="'+esc(owner)+'" data-game="'+esc(gid)+'"><input maxlength="400" placeholder="Add a comment…" aria-label="Add a comment" required><button class="btn ghost" type="submit">Post</button></form></div>';
}
function revBlock(owner,e,mine){
  return '<div class="row rev">'+cover(e.g,true)+'<span class="main"><span class="tt"><b>'+esc(e.g.t)+'</b><span>'+(e.g.y||"")+'</span>'+(mine?'<button class="linkbtn" data-edit="'+esc(e.g.id)+'">Edit</button>':"")+'</span><span>'+(e.l.rating?stars(e.l.rating):"")+(e.l.liked?' <span class="heart">♥</span>':"")+(e.l.hours?' <span class="label">'+e.l.hours+' h</span>':"")+(e.l.start?' <span class="label">from '+esc(fmtDate(e.l.start))+'</span>':"")+'</span><span class="rv'+(e.l.spoiler?' spo" title="Spoiler: click to reveal':'')+'">'+esc(e.l.review)+'</span>'+threadHtml(owner,e.g.id)+'</span><span class="side"><span class="label">'+esc(fmtDate(e.l.date))+'</span></span></div>';
}
async function postComment(f){
  var inp=f.querySelector("input"), t=inp.value.trim();
  if(!t||!db||!myId)return;
  var K=C.comments, row={};
  row[K.owner]=f.dataset.to;row[K.game]=f.dataset.game;row[K.author]=myId;row[K.text]=t.slice(0,400);
  inp.disabled=true;
  try{
    var r=await sb.from(T.comments).insert(row).select();
    if(r.error)throw r.error;
    var rec=r.data&&r.data[0];
    if(rec){(cm=cm||[]).push(fromCommentRow(rec));render()}else await loadComments();
  }catch(e){logErr("post comment",e);inp.disabled=false;toast("Couldn’t post your comment ("+errTxt(e)+")")}
}
async function deleteComment(cid){
  try{
    var r=await sb.from(T.comments).delete().eq(C.comments.id,cid).select();
    if(r.error)throw r.error;
    if(!r.data||!r.data.length){toast("You can’t delete this comment.");return}
    cm=(cm||[]).filter(function(c){return c.id!==cid});render();
  }catch(e){logErr("delete comment",e);toast("Couldn’t delete the comment ("+errTxt(e)+")")}
}
function myLists(){return Array.isArray(state.lists)?state.lists:[]}
function curList(){var r=null;myLists().forEach(function(x){if(x.id===ui.lid)r=x});return r}
function gamesOfList(l,data){
  var c=(data&&Array.isArray(data.custom))?data.custom:state.custom;
  return (l.games||[]).map(function(id){for(var i=0;i<GAMES.length;i++)if(GAMES[i].id===id)return GAMES[i];for(var j=0;j<c.length;j++)if(c[j].id===id)return c[j];return null}).filter(Boolean);
}
function listCard(own,l,data){
  var gs=gamesOfList(l,data);
  return '<button class="person" data-viewlist="'+esc(own)+'|'+esc(l.id)+'"><span class="who"><span style="min-width:0"><b>'+esc(l.name)+'</b><span class="label">'+gs.length+' games'+(own==="me"?(l.pub?" · public":" · private"):"")+'</span></span></span>'+(gs.length?'<span class="mini">'+gs.slice(0,4).map(function(g){return cover(g,true)}).join("")+'</span>':"")+'</button>';
}
function viewLists(){
  var ls=myLists();
  if(subj){var so='<div class="intro"><div><h1>Lists</h1></div></div>';return ls.length?so+'<div class="people">'+ls.map(function(l){return listCard(subj.id,l)}).join("")+'</div>':so+'<div class="empty"><h3>No public lists</h3></div>'}
  var out='<div class="intro"><div><h1>Lists</h1><p>Group games into your own lists: favorites, hidden gems, co-op nights.</p></div><button class="btn" data-newlist="1">+ New list</button></div>';
  if(!ls.length)return out+'<div class="empty"><h3>No lists yet</h3><p>Create a list and add games to it. Public lists appear on your profile.</p><div class="actions"><button class="btn" data-newlist="1">+ New list</button></div></div>';
  return out+'<div class="people">'+ls.map(function(l){return listCard("me",l)}).join("")+'</div>';
}
function viewList(){
  var me=ui.lo==="me", p=me?null:findPerson(ui.lo), src=me?myLists():(p&&p.data&&Array.isArray(p.data.lists)?p.data.lists:[]), l=null;
  src.forEach(function(x){if(x.id===ui.lid)l=x});
  var back='<button class="back" data-go="'+(me?"lists":"insanlar")+'">← '+(me?"Lists":"Members")+'</button>';
  if(!l)return back+'<div class="empty"><h3>List not found</h3><p>It may have been deleted or made private.</p></div>';
  var gs=gamesOfList(l,me?null:p.data);
  var out=back+'<div class="intro"><div><h1>'+esc(l.name)+'</h1><p>'+(me?"":"A list by "+esc(personName(ui.lo))+". ")+esc(l.desc||"")+'</p></div>'+(me?'<div class="actions"><button class="btn" data-addtolistopen="1">+ Add games</button><button class="btn ghost" data-editlist="'+esc(l.id)+'">Edit</button></div>':"")+'</div>';
  if(!gs.length)return out+'<div class="empty"><h3>This list is empty</h3>'+(me?'<p>Add some games to get started.</p>':"")+'</div>';
  return out+'<div class="grid">'+gs.map(function(g){
    return me?'<div class="slotw">'+gameCard(g)+'<button class="x" data-rmgame="'+esc(g.id)+'" aria-label="Remove “'+esc(g.t)+'” from list">×</button></div>':gameCard(g,(p.data.logs&&p.data.logs[g.id])||null,true);
  }).join("")+'</div>';
}
function viewActivity(){
  var out='<div class="intro"><div><h1>Activity</h1><p>Comments on your reviews and what the people you follow have been playing.</p></div></div>';
  if(!db)return out+homeEmpty("Activity needs the shared page","Open the page signed in to see comments and follow friends.");
  if(people===null||cm===null)return out+'<p class="label">Loading…</p>';
  var mine=cm.filter(function(c){return c.to===myId&&c.by!==myId}).sort(function(a,b){return b.ts-a.ts}).slice(0,20);
  out+='<div class="sec"><h2>Comments on your reviews</h2><span class="label">'+mine.length+'</span></div>';
  out+=mine.length?mine.map(function(c){var g=gameById(c.game);return '<div class="row ro">'+avatar(c.by)+'<span class="main"><span class="tt"><b>'+esc(personName(c.by))+'</b><span>COMMENTED ON YOUR REVIEW OF</span><b>'+esc(g?g.t:"a game")+'</b></span><span class="rv" style="display:block">'+esc(c.text)+'</span></span><span class="side"><span class="label">'+esc(fmtTs(c.ts))+'</span><a class="chip" href="#reyler" data-tab="reyler">Reply</a></span></div>'}).join(""):'<p style="color:var(--mute);margin:0">No comments yet. When someone comments on one of your reviews, it shows up here.</p>';
  var fr=[];
  followingList().forEach(function(id){var p=findPerson(id);if(!p)return;entriesOf(p.data).forEach(function(e){if(e.l.status!=="wish")fr.push({id:id,g:e.g,l:e.l})})});
  fr.sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")});fr=fr.slice(0,25);
  out+='<div class="sec" style="margin-top:30px"><h2>From people you follow</h2><a class="chip" href="#insanlar" data-tab="insanlar">Members</a></div>';
  out+=fr.length?fr.map(function(e){return '<button class="row" data-profile="'+esc(e.id)+'">'+avatar(e.id)+cover(e.g,true)+'<span class="main"><span class="tt"><b>'+esc(personName(e.id))+'</b><span>'+(VERB[e.l.status]||"").toUpperCase()+'</span><b>'+esc(e.g.t)+'</b></span><span>'+(e.l.rating?stars(e.l.rating):"")+(e.l.liked?' <span class="heart">♥</span>':"")+'</span>'+(e.l.review?'<span class="rv">'+esc(e.l.review)+'</span>':"")+'</span><span class="side"><span class="label">'+esc(fmtDate(e.l.date))+'</span></span></button>'}).join(""):'<p style="color:var(--mute);margin:0">Nothing here yet. Follow people from the Members page to see their activity.</p>';
  return out;
}
var ld=$("#ld"), ldId=null;
function openLD(id){
  var l=null;myLists().forEach(function(x){if(x.id===id)l=x});ldId=l?l.id:null;
  $("#ld-title").textContent=l?"Edit list":"New list";
  $("#ld-name").value=l?l.name:"";$("#ld-desc").value=l?l.desc||"":"";$("#ld-pub").checked=l?!!l.pub:false;
  $("#ld-pubw").hidden=!db;$("#ld-del").hidden=!l;
  if(ld.showModal)ld.showModal();else ld.setAttribute("open","");
}
function closeLD(){if(ld.close)ld.close();else ld.removeAttribute("open")}
$("#ld-cancel").addEventListener("click",closeLD);
ld.addEventListener("click",function(e){if(e.target===ld)closeLD()});
$("#lform").addEventListener("submit",function(e){
  e.preventDefault();
  var name=$("#ld-name").value.trim();if(!name)return;
  var l=null;myLists().forEach(function(x){if(x.id===ldId)l=x});
  var isNew=!l;
  if(isNew){l={id:"l"+Date.now().toString(36),games:[]};state.lists=myLists().concat([l])}
  l.name=name;l.desc=$("#ld-desc").value.trim();l.pub=db?$("#ld-pub").checked:false;
  save();closeLD();
  if(isNew){ui.lo="me";ui.lid=l.id;ui.tab="list";window.scrollTo(0,0)}
  render();toast("List saved");
});
$("#ld-del").addEventListener("click",function(){
  state.lists=myLists().filter(function(x){return x.id!==ldId});save();closeLD();
  ui.tab="lists";if(location.hash!=="#lists")location.hash="#lists";else render();
  toast("List deleted");
});

/* ---------- editor dialog ---------- */
var dlg=$("#dlg"), rateEl=$("#d-rate"), rateVal=0, likeVal=false;
function setRate(v){
  rateVal=Math.max(0,Math.min(10,v));
  rateEl.innerHTML=stars(rateVal);
  rateEl.setAttribute("aria-valuenow",rateVal);
  rateEl.setAttribute("aria-valuetext",ratingText(rateVal));
}
function setLike(v){likeVal=v;$("#d-like").setAttribute("aria-pressed",v?"true":"false")}
function openEditor(game,isNew){
  var l=state.logs[game.id]||null;
  editing={game:game,isNew:!!isNew};
  $("#d-cover").innerHTML=cover(game);
  $("#d-title").textContent=game.t;
  $("#d-meta").textContent=[game.y,game.d,game.g].filter(Boolean).join(" · ");
  var cu=$("#d-custom");cu.hidden=!game.custom;
  if(game.custom){
    $("#c-year").value=game.y||"";$("#c-dev").value=game.d||"";
    $("#c-genre").innerHTML=GENRES.map(function(x){return '<option'+(x===game.g?" selected":"")+'>'+esc(x)+'</option>'}).join("");
  }
  var cur=l?l.status:"done";
  $("#d-status").innerHTML=STATUS.map(function(s){return '<label><input type="radio" name="status" value="'+s[0]+'"'+(s[0]===cur?" checked":"")+'><span>'+s[1]+'</span></label>'}).join("");
  setRate(l?l.rating||0:0);setLike(l?!!l.liked:false);
  $("#d-date").value=l&&l.date?l.date:todayStr();
  $("#d-plat").value=l&&l.platform?l.platform:"PC";
  $("#d-review").value=l?l.review||"":"";$("#d-hours").value=l&&l.hours?l.hours:"";$("#d-start").value=l&&l.start?l.start:"";$("#d-spoiler").checked=!!(l&&l.spoiler);
  $("#d-del").hidden=!l;
  editTags=gameTags(game);paintTags();
  if(typeof dlg.showModal==="function")dlg.showModal();else dlg.setAttribute("open","");
}
function closeEditor(){if(dlg.close)dlg.close();else dlg.removeAttribute("open");editing=null}
function onRatePointer(e){
  var r=rateEl.getBoundingClientRect(), inner=rateEl.firstElementChild?rateEl.firstElementChild.getBoundingClientRect():r;
  var x=(e.clientX-inner.left)/inner.width;
  var v=Math.max(1,Math.min(10,Math.ceil(x*10)));
  setRate(v===rateVal?0:v);
}
rateEl.addEventListener("click",onRatePointer);
rateEl.addEventListener("keydown",function(e){
  if(e.key==="ArrowRight"||e.key==="ArrowUp"){e.preventDefault();setRate(rateVal+1)}
  else if(e.key==="ArrowLeft"||e.key==="ArrowDown"){e.preventDefault();setRate(rateVal-1)}
  else if(e.key==="Home"){e.preventDefault();setRate(0)}
  else if(e.key==="End"){e.preventDefault();setRate(10)}
});
$("#d-like").addEventListener("click",function(){setLike(!likeVal)});
$("#d-cancel").addEventListener("click",closeEditor);
dlg.addEventListener("click",function(e){if(e.target===dlg)closeEditor()});
$("#form").addEventListener("submit",function(e){
  e.preventDefault();
  if(!editing)return;
  var g=editing.game;
  if(g.custom){
    g.y=parseInt($("#c-year").value,10)||"";g.d=$("#c-dev").value.trim();g.g=$("#c-genre").value;
    var found=false;for(var i=0;i<state.custom.length;i++)if(state.custom[i].id===g.id){state.custom[i]=g;found=true}
    if(!found)state.custom.push(g);
  }
  var st=document.querySelector('input[name="status"]:checked');
  state.logs[g.id]={status:st?st.value:"done",rating:rateVal,liked:likeVal,date:$("#d-date").value||todayStr(),platform:$("#d-plat").value,review:$("#d-review").value.trim(),hours:Math.max(0,Math.min(99999,parseFloat($("#d-hours").value)||0)),start:$("#d-start").value||"",spoiler:$("#d-spoiler").checked };
  save();closeEditor();render();toast("“"+g.t+"” saved");
});
$("#d-del").addEventListener("click",function(){
  if(!editing)return;
  var g=editing.game;delete state.logs[g.id];
  if(g.custom)state.custom=state.custom.filter(function(c){return c.id!==g.id});
  save();closeEditor();render();toast("Entry deleted");
});

/* ---------- tags (fixed per game: stored in each game's k field, users can't edit them) ---------- */
var editTags=[];
function cleanTags(a){return Array.isArray(a)?a.filter(function(x){return typeof x==="string"&&x}).map(function(x){return x.slice(0,24)}).slice(0,12):[]}
function myTagCounts(){var m={};Object.keys(state.logs).forEach(function(id){var g=gameById(id);if(!g)return;gameTags(g).forEach(function(t){m[t]=(m[t]||0)+1})});return m}
function communityTagIndex(){var idx={};allGames().forEach(function(g){gameTags(g).forEach(function(t){(idx[t]||(idx[t]={}))[g.id]=true})});return idx}
function paintTags(){
  $("#d-tags").innerHTML=editTags.length?editTags.map(function(t){return '<span class="tagchip ro">'+esc(t)+'</span>'}).join(""):'<span class="foot" style="margin:0">No tags for this game.</span>';
}

/* ---------- game detail page ---------- */
function safeRating(l){var r=Math.round(Number(l&&l.rating)||0);return r<0?0:r>10?10:r}
function cleanLog(l){
  var st=["done","playing","dropped","wish"].indexOf(l&&l.status)>=0?l.status:"done";
  function str(v,n){return typeof v==="string"?v.slice(0,n):""}
  return {status:st,rating:safeRating(l),liked:!!(l&&l.liked),date:str(l&&l.date,10),platform:str(l&&l.platform,30),review:str(l&&l.review,2000),hours:Math.max(0,Math.min(99999,Number(l&&l.hours)||0)),start:str(l&&l.start,10),spoiler:!!(l&&l.spoiler),tags:cleanTags(l&&l.tags)};
}
/* every member who has logged this game: you, plus members who share their profile */
function gameUsers(gid){
  var rows=[],l=state.logs[gid];
  if(l&&l.status!=="wish"&&!l.sample)rows.push({id:myId||"me",me:true,l:cleanLog(l)});
  (people||[]).forEach(function(p){
    if(p.id===myId||!p.data||!p.data.logs||typeof p.data.logs!=="object")return;
    var x=p.data.logs[gid];
    if(x&&typeof x==="object"&&x.status!=="wish")rows.push({id:p.id,me:false,l:cleanLog(x)});
  });
  return rows;
}
function playerRow(g,r){
  var l=r.l,nm=r.me?"You":personName(r.id);
  var inner=avatar(r.me?(myId||"me"):r.id)+'<span class="main"><span class="tt"><b>'+esc(nm)+'</b><span class="st '+esc(l.status)+'">'+esc(statusLabel(l.status))+'</span></span><span>'+(l.rating?stars(l.rating):"")+(l.liked?' <span class="heart" aria-label="Liked">♥</span>':"")+(l.hours>0?' <span class="label">'+l.hours+' h</span>':"")+'</span>'+(l.tags.length?'<span class="tagbox" style="margin-top:4px">'+l.tags.map(function(t){return '<span class="tagchip ro">'+esc(t)+'</span>'}).join("")+'</span>':"")+'</span><span class="side"><span class="label">'+esc(l.platform)+'</span><span class="label">'+esc(fmtDate(l.date))+'</span></span>';
  return r.me?'<button class="row" data-edit="'+esc(g.id)+'">'+inner+'</button>':'<button class="row" data-profile="'+esc(r.id)+'">'+inner+'</button>';
}
function viewGame(){
  var g=gameById(ui.gid),back='<button class="back" data-back="1">← Back</button>';
  if(!g)return back+'<div class="empty"><h3>Game not found</h3><p>This game isn’t in the catalog.</p><div class="actions"><button class="btn" data-go="kesf">Browse games</button></div></div>';
  var rows=gameUsers(g.id),rated=rows.filter(function(r){return r.l.rating>0});
  var sum=rated.reduce(function(a,r){return a+r.l.rating},0),av=rated.length?sum/rated.length/2:0;
  var hist=[];for(var i=0;i<10;i++)hist.push(0);
  rated.forEach(function(r){hist[r.l.rating-1]++});
  var hmax=Math.max.apply(null,hist.concat([1]));
  var hh=hist.map(function(n,i){return '<div><em>'+(n||"")+'</em><span class="bar2'+(n?"":" zero")+'" style="height:'+(n?Math.max(4,n/hmax*88):2)+'px"></span><small>'+((i+1)/2).toString()+'</small></div>'}).join("");
  var liked=rows.filter(function(r){return r.l.liked}).length;
  var sc={done:0,playing:0,dropped:0};rows.forEach(function(r){if(sc[r.l.status]!=null)sc[r.l.status]++});
  var smax=Math.max(sc.done,sc.playing,sc.dropped,1);
  var tl=gameTags(g);
  var mine=state.logs[g.id],mc=METACRITIC_SCORES[g.id];
  var out=back+'<div class="gd-head"><div class="gd-cover">'+cover(g)+'</div><div class="gd-info"><h1>'+esc(g.t)+'</h1><p class="gd-meta">'+esc([g.y,g.d,g.g].filter(Boolean).join(" · "))+(mc!=null?' · Metacritic '+mc:"")+'</p>';
  out+='<div class="gd-big">'+(rated.length?'<b>'+av.toFixed(1)+'</b>'+stars(av*2)+'<span class="label">'+rated.length+' rating'+(rated.length===1?"":"s")+'</span>':'<span class="label">No ratings yet</span>')+'</div>';
  out+='<div class="gd-actions"><button class="btn" data-edit="'+esc(g.id)+'">'+(mine?"Edit my log":"+ Log this game")+'</button>'+(mine?'<span class="st '+esc(mine.status)+'">'+esc(statusLabel(mine.status))+'</span>'+(mine.rating?stars(mine.rating):"")+(mine.liked?' <span class="heart" aria-label="Liked">♥</span>':""):"")+'</div>';
    out+='</div></div>';
  out+='<div id="rawg-box" data-gid="'+esc(g.id)+'"></div>';
  out+='<div class="tiles"><div class="tile"><b>'+(rated.length?av.toFixed(1):"–")+'</b><span class="label">Avg. rating</span></div><div class="tile"><b>'+rated.length+'</b><span class="label">Ratings</span></div><div class="tile"><b>'+rows.length+'</b><span class="label">Played by</span></div><div class="tile"><b>'+liked+'</b><span class="label">Likes</span></div></div>';
  function sbar(nm,n){return '<div class="hbar"><span class="nm" style="text-align:left;font:inherit;color:inherit">'+nm+'</span><span class="track"><span class="fill" style="display:block;width:'+(n/smax*100)+'%"></span></span><span>'+n+'</span></div>'}
  out+='<div class="panels"><div class="panel"><h3>Rating distribution</h3><div class="hist" role="img" aria-label="Rating distribution histogram">'+hh+'</div></div><div class="panel"><h3>Status</h3>'+sbar("Finished",sc.done)+sbar("Playing",sc.playing)+sbar("Dropped",sc.dropped)+'</div><div class="panel"><h3>Tags</h3>'+(tl.length?'<div class="tagcloud">'+tl.map(function(t){return '<button class="chip" data-tagfilter="'+esc(t)+'" title="Show games with this tag">'+esc(t)+'</button>'}).join("")+'</div>':'<p class="foot" style="margin:0">No tags for this game.</p>')+'</div></div>';
  if(!db)out+='<p class="foot">Community stats need the shared Gameboxd page. Right now only your own log is counted.</p>';
  else if(people===null)out+='<p class="label">Loading community stats…</p>';
  else out+='<p class="foot">Stats come from you and members who share their profile'+(state.public?"":" (your profile is private, so others don’t see your log)")+'.</p>';
  out+='<div class="sec" style="margin-top:26px"><h2>Who played this game</h2><span class="label">'+rows.length+'</span></div>';
  if(rows.length){
    var sorted=rows.slice().sort(function(a,b){return (b.me?1:0)-(a.me?1:0)||(b.l.date||"").localeCompare(a.l.date||"")});
    out+=sorted.slice(0,50).map(function(r){return playerRow(g,r)}).join("");
    if(sorted.length>50)out+='<p class="foot">…and '+(sorted.length-50)+' more.</p>';
  }else out+='<p style="color:var(--mute);margin:0">Nobody has logged this game yet.</p>';
  var rv=rows.filter(function(r){return r.l.review}).sort(function(a,b){return (b.l.date||"").localeCompare(a.l.date||"")}).slice(0,12);
  if(rv.length)out+='<div class="sec" style="margin-top:30px"><h2>Reviews</h2><span class="label">'+rv.length+'</span></div>'+rv.map(function(r){return revBlock(r.me?(myId||"me"):r.id,{g:g,l:r.l},r.me)}).join("");
  return out;
}

/* ---------- user menu ---------- */
var ubtn=$("#ubtn"), umenu=$("#umenu");
function closeMenu(){umenu.hidden=true;ubtn.setAttribute("aria-expanded","false")}
ubtn.addEventListener("click",function(e){e.stopPropagation();var open=umenu.hidden;umenu.hidden=!open;ubtn.setAttribute("aria-expanded",open?"true":"false")});
document.addEventListener("click",function(e){if(!e.target.closest(".umenu"))closeMenu()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!umenu.hidden){closeMenu();ubtn.focus()}});

/* ---------- events ---------- */
function scrollSect(){var id=ui.sect;ui.sect="";if(!id)return;setTimeout(function(){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"})},60)}
document.addEventListener("click",function(e){
  var pt=e.target.closest("[data-ptab]");
  if(pt){e.preventDefault();ui.ptab=pt.dataset.ptab;render();return}
  var b=e.target.closest("[data-pstat]");if(!b)return;
  e.preventDefault();
  var v=b.dataset.pstat,a=v.split(":");
  if(a[0]==="ptab"){ui.ptab=a[1];render();window.scrollTo(0,0);return}
  if(a[0]==="pview"){ui.pview=ui.pview===a[1]?"":a[1];render();if(ui.pview){ui.sect="sec-pview";scrollSect()}return}
  if(a[0]==="sec-pdiary"){ui.sect="sec-pdiary";scrollSect();return}
  ui.sect=a[1]||"";
  if(location.hash==="#"+a[0]){ui.tab=a[0];enter();if(!ui.sect)window.scrollTo(0,0);else scrollSect()}
  else location.hash="#"+a[0];
});
document.addEventListener("click",function(e){
  if(e.target.closest("#umenu"))closeMenu();
  var nav=e.target.closest("a[data-tab]");
  if(nav){if(location.hash==="#"+nav.dataset.tab){e.preventDefault();ui.tab=nav.dataset.tab;enter()}return}
  var t=e.target.closest("[data-home-all],[data-log],[data-pickgame],[data-pickcustom],[data-open],[data-genre],[data-go],[data-sample],[data-clearsample],[data-addcustom],[data-profile],[data-togglepublic],[data-follow],[data-pick],[data-addfav],[data-unfav],[data-logout],[data-editprofile],[data-auth],[data-delcm],[data-newlist],[data-editlist],[data-viewlist],[data-addtolistopen],[data-addtolist],[data-rmgame],[data-edit],[data-tagfilter],[data-back]");
  if(!t)return;
  if(t.dataset.edit){var eg=gameById(t.dataset.edit);if(eg)openEditor(eg,!state.logs[eg.id])}
  else if(t.dataset.back){if(history.length>1)history.back();else location.hash="#kesf"}
  else if(t.dataset.tagfilter){ui.bf.tag=t.dataset.tagfilter;ui.bf.open="";ui.genre="";ui.q="";$("#q").value="";ui.tab="kesf";if(location.hash==="#kesf")enter();else location.hash="#kesf"}
  else if(t.dataset.homeAll){ui.q=ui.homeQ||"";ui.genre=ui.homeGenre||"";ui.tab="kesf";if(location.hash==="#kesf")render();else location.hash="#kesf"}
  else if(t.dataset.log){openPick("log")}
  else if(t.dataset.logout){doLogout()}
  else if(t.dataset.editprofile){openEdit()}
  else if(t.dataset.auth){ui.auth=t.dataset.auth;render()}
  else if(t.dataset.pickgame){var pg=gameById(t.dataset.pickgame);closePick();if(pg)openEditor(pg,!state.logs[pg.id])}
  else if(t.dataset.pickcustom){
    var ptitle=$("#pk-q").value.trim();closePick();
    if(ptitle)openEditor({id:"c"+Date.now().toString(36),t:ptitle,y:"",d:"",g:"Other",custom:true},true);
  }
  else if(t.dataset.newlist){openLD(null)}
  else if(t.dataset.editlist){openLD(t.dataset.editlist)}
  else if(t.dataset.viewlist){var vl=t.dataset.viewlist.split("|");ui.lo=vl[0];ui.lid=vl[1];ui.tab="list";render();window.scrollTo(0,0);if(vl[0]!=="me"&&people===null)loadPeople()}
  else if(t.dataset.addtolistopen){openPick("list")}
  else if(t.dataset.addtolist){var L1=curList();if(L1&&L1.games.indexOf(t.dataset.addtolist)<0)L1.games.push(t.dataset.addtolist);save();paintPick();render()}
  else if(t.dataset.rmgame){var L2=curList();if(L2)L2.games=L2.games.filter(function(x){return x!==t.dataset.rmgame});save();render()}
  else if(t.dataset.delcm){deleteComment(t.dataset.delcm)}
  else if(t.dataset.pick){openPick("fav")}
  else if(t.dataset.addfav){
    if(state.favs.length<4&&state.favs.indexOf(t.dataset.addfav)<0)state.favs.push(t.dataset.addfav);
    save();closePick();render();
  }
  else if(t.dataset.unfav){state.favs=state.favs.filter(function(x){return x!==t.dataset.unfav});save();render()}
  else if(t.dataset.follow){
    var fid=t.dataset.follow;
    if(!db||!myId||fid===myId)return;
    var fon=!isFollowing(fid);
    setFollowLocal(fid,fon);render();
    chain=chain.then(function(){return followRemote(fid,fon)}).catch(function(e){logErr("follow",e);setFollowLocal(fid,!fon);render();toast("Couldn’t update follow ("+errTxt(e)+")")});
  }
  else if(t.dataset.profile){ui.profile=t.dataset.profile;ui.tab="profil";render();window.scrollTo(0,0)}
  else if(t.dataset.togglepublic){
    state.public=!state.public;save();
    people=null;render();loadPeople();
    toast(state.public?"Your profile is now public":"Your profile is now private");
  }
  else if(t.dataset.open){var og=gameById(t.dataset.open);if(og)location.hash="#game/"+encodeURIComponent(og.id)}
  else if(t.hasAttribute("data-genre")){ui.genre=t.dataset.genre;render()}
  else if(t.dataset.go){
    if(location.hash==="#"+t.dataset.go){ui.tab=t.dataset.go;enter()}
    else location.hash="#"+t.dataset.go;
  }
  else if(t.dataset.sample){
    var S=[["hades","done",9,1,"2026-10-12","PC","Every death means new dialogue. Replaying never gets boring."],["celeste","done",10,1,"2026-10-03","Nintendo Switch","Hard, but never unfair."],["eldenring","dropped",6,0,"2026-09-21","PC","The world is magnificent, but I got stuck on one boss."],["stardew","playing",8,0,"2026-10-16","PC","Still in year two. Fishing is so calming."],["botw","done",9,1,"2026-09-08","Nintendo Switch","There’s something behind every hill."],["portal2","wish",0,0,"2026-10-18","PC",""]];
    S.forEach(function(s){if(!state.logs[s[0]])state.logs[s[0]]={status:s[1],rating:s[2],liked:!!s[3],date:s[4],platform:s[5],review:s[6],sample:true}});
    save();render();
  }
  else if(t.dataset.clearsample){
    Object.keys(state.logs).forEach(function(k){if(state.logs[k].sample)delete state.logs[k]});
    save();render();toast("Sample entries removed");
  }
  else if(t.dataset.addcustom){
    var title=ui.q.trim();if(!title)return;
    openEditor({id:"c"+Date.now().toString(36),t:title,y:"",d:"",g:"Other",custom:true},true);
  }
});
document.addEventListener("submit",function(e){if(e.target.id==="signup"){e.preventDefault();doSignup()}else if(e.target.id==="login"){e.preventDefault();doLogin()}else if(e.target.classList&&e.target.classList.contains("cform")){e.preventDefault();postComment(e.target)}});
var psTimer=null;
document.addEventListener("input",function(e){
  if(e.target.id==="home-filter-q"){
    ui.homeQ=e.target.value;
    renderHomeFilterResults();
    return;
  }
  if(e.target.id!=="psearch")return;
  ui.psq=e.target.value;clearTimeout(psTimer);psTimer=setTimeout(runSearch,250);
});
document.addEventListener("focusin",function(e){if(e.target.id==="psearch"&&ui.hits==null)runSearch()});
document.addEventListener("change",function(e){
  if(e.target.id==="home-filter-genre"){
    ui.homeGenre=e.target.value;
    renderHomeFilterResults();
    return;
  }
  if(e.target.id==="sort"){ui.sort=e.target.value;if(ui.sort==="shuffle")ui.shuffleSeed=Date.now();render()}
  if(e.target.id==="profile-sort"){ui.profileSort=e.target.value;if(ui.profileSort==="shuffle")ui.shuffleSeed=Date.now();render()}
  if(e.target.id==="search-type"){
    ui.searchType=e.target.value;ui.q="";ui.globalHits=null;$("#q").value="";
    $("#q").placeholder=ui.searchType==="users"?"Search usernames…":"Search games…";
    $("#q").setAttribute("aria-label",ui.searchType==="users"?"Search users":"Search games");
    if(ui.searchType==="users"){
      ui.tab="usersearch";if(location.hash!=="#usersearch")location.hash="#usersearch";else render();
      clearTimeout(globalUserSearchTimer);globalUserSearchTimer=setTimeout(runGlobalUserSearch,100);
    }else{
      ui.tab="kesf";if(location.hash!=="#kesf")location.hash="#kesf";else render();
    }
  }
});
$("#q").addEventListener("input",function(e){
  ui.q=e.target.value;
  if(ui.searchType==="users"){
    ui.tab="usersearch";ui.globalHits=null;
    if(location.hash!=="#usersearch")location.hash="#usersearch";else render();
    clearTimeout(globalUserSearchTimer);globalUserSearchTimer=setTimeout(runGlobalUserSearch,250);
    return;
  }
  if(ui.tab!=="kesf"){
    if(location.hash!=="#kesf")location.hash="#kesf";else{ui.tab="kesf";render()}
    return;
  }
  render();
  /* keep typing focus: search box lives outside the re-rendered view */
});
function enter(){
  render();
  if(ui.tab==="activity"||ui.tab==="reyler"||ui.tab==="profilim"||ui.tab==="profil"||ui.tab==="list"||ui.tab==="game"){if(ui.tab==="activity")cm=null;if(cm===null||cmStale())loadComments()}
  if(ui.tab==="insanlar"||ui.tab==="ana"||ui.tab==="activity"||((isProfileTab(ui.tab)||ui.tab==="kesf"||ui.tab==="game")&&(people===null||peopleStale())))loadPeople();
  if(ui.tab==="usersearch"&&ui.searchType==="users"){clearTimeout(globalUserSearchTimer);globalUserSearchTimer=setTimeout(runGlobalUserSearch,100)}
}
function onHash(){
  var h=location.hash.replace("#","");
  if(h.indexOf("game/")===0){try{ui.gid=decodeURIComponent(h.slice(5))}catch(e){ui.gid=h.slice(5)}ui.tab="game";enter();window.scrollTo(0,0);return}
  ui.tab=(h==="ana"||h==="activity"||h==="insanlar"||h==="kesf"||h==="popular"||h==="recommendations"||h==="usersearch"||isProfileTab(h))?h:"ana";
  if(h==="usersearch"){
    ui.searchType="users";$("#search-type").value="users";
    $("#q").placeholder="Search usernames…";$("#q").setAttribute("aria-label","Search users");
  }
  enter();
  window.scrollTo(0,0);
  scrollSect();
}
var imp=$("#imp");
$("#m-import").addEventListener("click",function(){imp.showModal()});
$("#imp-x").addEventListener("click",function(){imp.close()});
$("#imp-file").addEventListener("change",function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){$("#imp-text").value=String(r.result).slice(0,200000)};r.readAsText(f)});
$("#imp-go").addEventListener("click",function(){
  var nm=function(t){return t.toLowerCase().replace(/[^a-z0-9]/g,"")},idx={};
  allGames().forEach(function(g){idx[nm(g.t)]=g});
  var lines=$("#imp-text").value.split(/\r?\n/).slice(0,500),add=0,skip=0;
  lines.forEach(function(ln,i){
    ln=ln.trim();if(!ln)return;var h=0,t=ln,m;
    if(ln.indexOf("\t")>0||ln.indexOf(";")>0){var p=ln.split(/[\t;]/);t=p[0];h=parseFloat(p[1])||0}
    else if(m=ln.match(/^(.*\S)\s*,\s*(\d+(?:\.\d+)?)$/)){t=m[1];h=parseFloat(m[2])}
    t=t.replace(/^["']|["']$/g,"").trim().slice(0,80);
    if(!t||(i===0&&/^(title|name|game)$/i.test(t)))return;
    var g=idx[nm(t)];
    if(!g){g={id:"imp_"+hash(nm(t)).toString(36),t:t,y:"",d:"",g:"Other",custom:true};state.custom.push(g);idx[nm(t)]=g}
    if(state.logs[g.id]){skip++;return}
    state.logs[g.id]={status:$("#imp-st").value,rating:0,liked:false,date:todayStr(),platform:$("#imp-plat").value,review:"",hours:Math.min(99999,h),start:"",spoiler:false};add++;
  });
  if(add)save();imp.close();render();toast("Imported "+add+(skip?", skipped "+skip+" already logged":""));
});
window.addEventListener("hashchange",onHash);

document.addEventListener("click",function(e){
  var im=e.target.closest&&e.target.closest(".ph img.av");
  if(im&&im.src){var d=$("#avd");$("#avd-img").src=im.src;if(d.showModal)d.showModal();else d.setAttribute("open","");return}
  if(e.target.closest&&e.target.closest("#avd")){var d2=$("#avd");if(d2.close)d2.close();else d2.removeAttribute("open")}
});
var ready=initStore();
onHash();
})();
