"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }
    update(keys) {
        if (keys["w"]) {
            this.y -= this.speed;
        }
        if (keys["s"]) {
            this.y += this.speed;
        }
        if (keys["a"]) {
            this.x -= this.speed;
        }
        if (keys["d"]) {
            this.x += this.speed;
        }
    }
    draw(ctx) {
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    shoot() {
        return new Bullet(this.x, this.y);
    }
}
exports.Player = Player;
