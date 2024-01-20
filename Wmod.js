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
