import { Localizable } from "./utils";

export class Bullet extends Localizable {
    constructor(x: number, y: number) {
        super(x, y, 5, 7)
    }

    update() {
        this.y -= this.speed;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
