// generic function
function echo(data) {
    return data;
}
console.log(echo("hello").length);
console.log(echo(29));
console.log({ name: "peter", age: 20 });
//generic class
class Covid {
    getInfo() {
        console.log(`Covid-19 is ${this.family} that affects ${this.category}`);
    }
}
let covid = new Covid();
covid.category = "lungs";
covid.family = "virus";
covid.getInfo();
// in built generic
const values = [1, 2, 3, 4];
values.push(99);
console.log(values);
// array generic 
function printAll(argss) {
    argss.forEach((element) => console.log(element));
}
printAll([1, 2, 3, 9]);
// generic types
const mimi = echo;
console.log(mimi(29));
