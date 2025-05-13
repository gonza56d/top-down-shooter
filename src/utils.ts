export class Localizable {
    x: number;
    y: number;
    size: number;
    speed: number;

    constructor(x: number, y: number, size: number, speed: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }
}

function isColliding(a: Localizable, b: Localizable) {
    const distance = getDistance(a, b);
    return distance < a.size + b.size;
}

function getDistance(a: Localizable, b: Localizable) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
}
