const kitty = document.getElementById("kitty");

const positions = [
    { top: "10px", left: "10px" },
    { top: "10px", right: "10px" },
    { bottom: "10px", left: "10px" },
    { bottom: "10px", right: "10px" },
    { top: "50%", left: "5px" },
    { top: "50%", right: "5px" }
];

const randomPos = positions[Math.floor(Math.random() * positions.length)];

for (let key in randomPos) {
    kitty.style[key] = randomPos[key];
}