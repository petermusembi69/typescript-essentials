;
let greet2;
greet2 = function (person4) {
    console.log("hello " + person4.name + "my age is " + person4.age + "born in " + person4.yob);
};
//objects implementing an interface
let person5 = {
    name: "peter",
    age: 12,
    yob: 2012,
    greet3() { }
};
greet2(person5);
//class implementing an interface
class Miss {
    constructor() {
        this.name = "hi";
        this.nickName = "hola";
    }
    greet3(num, num2) {
        console.log(num + num2);
    }
}
const miss = new Miss();
miss.greet3(1, 2);
console.log(miss.name);
console.log(miss.nickName);
