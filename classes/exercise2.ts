// Creating exercise2.js similar to exercise.js
// Exercise 1
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }


    honk() {
        console.log("Toooooooooot!");
    };

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class BaseObject {
    width: number = 0;
    length: number = 0;
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string = "s";

    get firstName() {
        return this._firstName;
    };
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    };
};

let person = new Person();

console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);