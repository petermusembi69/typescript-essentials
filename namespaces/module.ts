
export const PI: number = 3.14;

export function square(x: number) {
    return x*x;
}
export function circleArea(radius: number) {
    return PI * radius * radius;
}
console.log(MyMath.circleArea(10));
    