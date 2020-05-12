"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = 3.14;
function square(x) {
    return x * x;
}
exports.square = square;
function circleArea(radius) {
    return exports.PI * radius * radius;
}
exports.circleArea = circleArea;
console.log(MyMath.circleArea(10));
