const leftTree = document.getElementById("solagac");
const rightTree = document.getElementById("sagagac");
const gateRight = document.getElementById("sagkapi");
const gateLeft = document.getElementById("solkapi");
const grass = document.getElementById("grass");
const background = document.getElementById("background");
const parallaxText = document.getElementById("yazi");

window.addEventListener("scroll", () => {
    var value = window.scrollY;
    parallaxText.style.marginTop = value + 100 + "px";
    rightTree.style.left = value + 2 + "px";
    leftTree.style.right = value + 2 + "px";
    gateRight.style.left = value + 400 + "px";
    gateLeft.style.right = value + 400 + "px";
})