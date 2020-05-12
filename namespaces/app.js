var MyMath;
(function (MyMath) {
    const PI = 3.14;
    function square(x) {
        return x * x;
    }
    MyMath.square = square;
    function circleArea(radius) {
        return PI * radius * radius;
    }
    MyMath.circleArea = circleArea;
})(MyMath || (MyMath = {}));
console.log(MyMath.circleArea(10));
