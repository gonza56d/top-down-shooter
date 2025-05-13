import { Bullet } from "./bullet";
import { Localizable } from "./utils";

export class Player extends Localizable {
    update(keys: Record<string, boolean>) {
        if (keys["w"]) { this.y -= this.speed; }
        if (keys["s"]) { this.y += this.speed; }
        if (keys["a"]) { this.x -= this.speed; }
        if (keys["d"]) { this.x += this.speed; }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    shoot() {
        return new Bullet(this.x, this.y);
    }
}
