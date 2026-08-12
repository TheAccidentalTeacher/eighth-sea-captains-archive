window.EIGHTH_SEA = {
  advantages: {
    fencing: { name: "Fencing", line: "Rule the boarding deck.", detail: "Faster attacks, stronger counters, and better odds when a captain must be beaten personally." },
    navigation: { name: "Navigation", line: "Own the wind and reefs.", detail: "Better pursuit, escape, storm judgment, fleet speed, and shoal-running." },
    gunnery: { name: "Gunnery", line: "Make every broadside count.", detail: "Faster reloads, tighter fire, and a sharper eye for what the last volley actually broke." },
    charm: { name: "Wit & Charm", line: "Win rooms before battles begin.", detail: "Stronger recruiting, bargaining, diplomacy, dancing, romance, deception, and surrender demands." },
    medicine: { name: "Medicine", line: "Keep captain and crew in the fight.", detail: "Fewer lasting wounds and deaths, faster recovery, and a longer vigorous career." }
  },
  ships: [
    { id:"pinnace", name:"Pinnace", guns:8, crew:64, cargo:20, handling:5, toughness:1, note:"Tiny reef-runner; turns inside almost anything." },
    { id:"sloop", name:"Sloop", guns:12, crew:96, cargo:40, handling:5, toughness:2, note:"Classic privateer hunter; quick, useful, and dangerous." },
    { id:"schooner", name:"Schooner", guns:14, crew:105, cargo:45, handling:5, toughness:2, note:"Original to Crownwake; exceptionally strong upwind." },
    { id:"barque", name:"Barque", guns:16, crew:128, cargo:60, handling:4, toughness:2, note:"Flexible raider with room for a serious boarding party." },
    { id:"fluyt", name:"Cargo Fluyt", guns:20, crew:160, cargo:80, handling:2, toughness:3, note:"Fat merchant prey: lightly crewed, richly laden." },
    { id:"merchantman", name:"Merchantman", guns:24, crew:198, cargo:100, handling:2, toughness:3, note:"A larger trader whose broadside still deserves respect." },
    { id:"frigate", name:"Frigate", guns:28, crew:224, cargo:120, handling:4, toughness:4, note:"Fast naval predator; no obvious weakness." },
    { id:"fast-galleon", name:"Fast Galleon", guns:28, crew:224, cargo:120, handling:3, toughness:4, note:"A great prize that can still bring its guns around." },
    { id:"galleon", name:"Spanish Galleon", guns:36, crew:288, cargo:160, handling:1, toughness:5, note:"Slow fortress, troop carrier, and treasure dream." }
  ],
  ports: [
    { id:"saint-orra", name:"Saint Orra", faction:"calderan", fort:5, garrison:220, unrest:2, wealth:"Rich", note:"Fortress capital, silver auctions, customs prisons." },
    { id:"brasshaven", name:"Brasshaven", faction:"veyr", fort:4, garrison:180, unrest:3, wealth:"Very rich", note:"Best shipyard, divided merchant councils." },
    { id:"kingswake", name:"Kingswake", faction:"marrow", fort:4, garrison:200, unrest:2, wealth:"Prosperous", note:"Naval station and privateer nest under the same guns." },
    { id:"saltmere", name:"Saltmere", faction:"ibis", fort:2, garrison:90, unrest:1, wealth:"Modest", note:"Reefs and local loyalty make it harder than it looks." },
    { id:"gallowglass", name:"Gallowglass Cay", faction:"freewake", fort:3, garrison:110, unrest:4, wealth:"Erratic", note:"Free port allergic to rulers and full of excellent thieves." },
    { id:"low-lantern", name:"Low Lantern", faction:"veyr", fort:1, garrison:84, unrest:4, wealth:"Warehouses", note:"Tidal trading town built over mud and commercial grudges." },
    { id:"blackglass", name:"Blackglass Station", faction:"chain", fort:3, garrison:130, unrest:5, wealth:"Extractive", note:"A company camp fortified against the people whose island it occupies." }
  ],
  encounters: [
    { title:"SAIL HO", text:"High stern. Three masts. She is crossing the easterly slowly, with no escort visible.", actions:["Investigate","Hold course","Alter away"] },
    { title:"SHIP IDENTIFIED", text:"Cargo fluyt — perhaps 20 guns, but only half the ports are open. She sits low with freight.", actions:["Close for colors","Hail for news","Sail away"] },
    { title:"COLORS SHOWN", text:"Calderan gold sun on oxblood. Merchant colors. No letter of reprisal protects you if you attack.", actions:["Attack","Demand surrender","Break away"] },
    { title:"BATTLE", text:"Your sloop owns the weather gauge. The fluyt turns like a courthouse. Chain shot can cripple her rig; one clean return broadside can still ruin you.", actions:["Cross her stern","Close and grapple","Disengage"] },
    { title:"BOARDING", text:"Her sails are fouled and her crew shaken. Your people go over the rail as the captains meet beside the fallen mizzen.", actions:["Press with cutlass","Measure with rapier","Offer quarter"] },
    { title:"PRIZE", text:"The captain yields. Gold, sugar, indigo, food, three volunteers, and an intact fluyt are yours. Keep her, scuttle her, or ransom her.", actions:["Keep the prize","Scuttle after stripping","Ransom and release"] }
  ]
};
