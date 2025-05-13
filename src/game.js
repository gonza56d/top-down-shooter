"use strict";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const player = new Player(canvas.width / 2, canvas.height / 2);
const bullets = [];
const enemies = [];
const walls = [
    new Wall(300, 150, 100, 30),
];
const keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);
document.addEventListener("click", () => {
    bullets.push(player.shoot());
});
// Spawn enemies every 2k millisecs
setInterval(() => {
    const edge = Math.floor(Math.random() * 4);
    let x, y;
    if (edge === 0) { // at the top
        x = Math.random() * canvas.width;
        y = -20;
    }
    else if (edge === 1) { // at the right
        x = canvas.width + 20;
        y = Math.random() * canvas.height;
    }
    else if (edge === 2) { // at the bottom
        x = Math.random() * canvas.width;
        y = canvas.height + 20;
    }
    else { // left
        x = -20;
        y = Math.random() * canvas.height;
    }
    enemies.push(new Enemy(x, y));
}, 2000);
function update() {
    player.update(keys);
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update();
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
    enemies.forEach(e => e.update(player));
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (isColliding(bullet, enemy)) {
                bullets.splice(i, 1);
                enemies.splice(j, 1);
                break;
            }
        }
    }
}
function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    bullets.forEach(b => b.draw(ctx));
    enemies.forEach(e => e.draw(ctx));
    walls.forEach(w => w.draw(ctx));
}
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
gameLoop();
