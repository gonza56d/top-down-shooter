const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = new Player(canvas.width / 2, canvas.height / 2);
const bullets = [];
const enemies = [];

const keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);
document.addEventListener("click", () => {
    bullets.push(player.shoot());
});

function update() {
    player.update(keys);
    bullets.forEach(b => b.update());
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    bullets.forEach(b => b.draw(ctx));
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
