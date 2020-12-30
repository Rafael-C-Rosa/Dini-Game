const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    dino.classList.add("jump");
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(function() {
    //Ajuste da posição Y
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //Ajuste da posição X
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //Detectar Colisão
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("PERDEU!!!")
    }




}, 10);

document.addEventListener("keydown", function(event) {
    jump();
})