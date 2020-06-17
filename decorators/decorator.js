var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function track(constructor) {
    console.log(constructor);
}
let DisTrack = class DisTrack {
    constructor() { }
};
DisTrack = __decorate([
    track
], DisTrack);
// factory
function albums(value) {
    return value ? track : this.null;
}
let Truck = class Truck {
};
Truck = __decorate([
    albums(false)
], Truck);
// adavanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plants = class Plants {
    constructor() {
        this.name = "Green Plant";
    }
};
Plants = __decorate([
    albums(true),
    printable
], Plants);
const plants = new Plants();
plants.print();
//  method decorator 
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// property override
function overWritable(value) {
    return function (target, propName) {
        const descriptor = {
            writable: value
        };
        return descriptor;
    };
}
class Project {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(10000);
    }
}
__decorate([
    overWritable(true)
], Project.prototype, "projectName", void 0);
__decorate([
    editable(true)
], Project.prototype, "calcBudget", null);
const project = new Project("wliwiw");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project.projectName);
// parameter decorators
function paramDeco(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("MethodName: ", methodName);
    console.log("ParamIndex: ", paramIndex);
}
class Course {
    constructor(name) {
        this.CourseName = name;
    }
    calc(name, nam) {
        console.log(name);
    }
}
__decorate([
    __param(1, paramDeco)
], Course.prototype, "calc", null);
const course = new Course("wow");
course.calc("nidnsd", 12);
