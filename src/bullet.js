"use strict";
class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 5;
        this.speed = 7;
    }
    update() {
        this.y -= this.speed;
    }
    draw(ctx) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
