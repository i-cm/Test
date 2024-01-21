behaviors.CRASH = [
    "XX|XX|XX",
    "XX|CH|XX",
    "XX|XX|XX",
];

behaviors.OUTLINER = [
    "XX|CL|XX",
    "CL|DL|CL",
    "XX|CL|XX",
];



elements.crash = {
    color: ["#ff0000", "#000000",],
    behavior: behaviors.CRASH,
    category: "bruh",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    tick: function() {
        delete elements
    }
};

elements.darkmatter = {
    color: "#000000",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 100000,
    state: "special",
    density: 720,
};

elements.lightmatter = {
    color: "#ffffff",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 100000,
    state: "special",
    density: 720,
};

elements.outliner = {
    color: "#00AADD",
    behavior: behaviors.OUTLINER,
    category: "special",
    viscosity: 100000,
    state: "special",
    density: 720,
};

elements.energium = {
    name: "Solid Energium",
    color: "#ffff00",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 15,
    temp: -273,
    tempHigh: 0,
    stateHigh: "molten_energium",
    
};
elements.molten_energium = {
    name:"Energium",
    color:"#ffff88",
    behavior: behaviors.LIQUID,
    category: "energy",
    state: "liquid",
    density: 10,
    temp: 0,
    tempHigh: 1000,
    stateHigh: "energium_gas",
    tempLow: -1,
    stateLow: "energium",
    
};

elements.energium_gas = {
    name:"Energium Gas",
    color:"#ffffbb",
    behavior: behaviors.GAS,
    category: "states",
    state: "gas",
    density: 5,
    temp: 1000,
    tempLow: 999,
    stateLow: "molten_energium",
    tempHigh: 1000000,
    stateHigh: "pure_energium",
};

elements.pure_energium = {
    name:"Pure Energium",
    color:"#ffffff",
    behavior: behaviors.LIQUID,
    category: "states",
    state: "gas",
    density: 5,
    temp: 1000000,
    
};

elements.godlyheat = {
    color: ["#ff0000", "#ffff00", "#ff0000", "#ffff00", "#ff0000", "#ffff00"],
    tool: function(pixel) {
        pixel.temp *= 1.01
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.godlycool = {
    color: ["#0000ff", "#00ffff", "#0000ff", "#00ffff", "#0000ff", "#00ffff"],
    tool: function(pixel) {
        pixel.temp /= 1.01
		pixelTempCheck(pixel)
    },
    category: "tools",
};
