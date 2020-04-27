// Working wit classes and objects
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating a class
var Person2 = /** @class */ (function () {
    //constructer creates a new object username
    function Person2(name, username) {
        this.username = username;
        // private is only accessed within the class
        this.age = 21;
        this.name = name;
    }
    Person2.prototype.showAge = function () {
        return this.age;
    };
    Person2.prototype.addSalary = function (cb) {
        this.salary = cb;
        console.log(this.salary);
        return this.salary;
    };
    return Person2;
}());
//class instance
var person2 = new Person2("peter", "pinches");
console.log(person2.showAge());
person2.addSalary(200);
//inheritance
var Musembi = /** @class */ (function (_super) {
    __extends(Musembi, _super);
    // name: string = "Musembi";
    // constructor adjusted by initializing name 
    function Musembi(username) {
        // reference to Person class constructor
        return _super.call(this, "Musembi", username) || this;
    }
    Musembi.prototype.justDo = function () {
        this.salary = this.addSalary(2000) + 1000;
        return this.salary;
    };
    return Musembi;
}(Person2));
var peter = new Musembi("pinches2");
console.log(peter.showAge());
console.log(peter.justDo());
// Getter and Setters 
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = "Default";
            }
            else {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "egg";
console.log(plant.species);
plant.species = "yozah";
console.log(plant.species);
