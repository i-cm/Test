behaviors.CRASH = [
    "XX|XX|XX",
    "XX|CH|XX",
    "XX|XX|XX",
];

elements.crash = {
    color: ["#ff0000", "#000000",],
    behavior: behaviors.CRASH,
    category: "bruh",
    viscosity: 100000,
    state: "liquid",
    density: 720,
};

elements.noncrashing = {
    color: ["#ff0000", "#000000",]
    category: "bruh",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    name: "non-crashing crash",
};

elements.darkmatter = {
    color: "#000000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "special",
    density: 720,
};
