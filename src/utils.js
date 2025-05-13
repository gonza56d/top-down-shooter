"use strict";
function isColliding(a, b) {
    const distance = getDistance(a, b);
    return distance < a.size + b.size;
}
function getDistance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
}
