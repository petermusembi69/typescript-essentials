// generic function

function echo<T>(data: T) {
    return data;
}

console.log(echo("hello").length);
console.log(echo(29));
console.log({name: "peter", age: 20});

//generic class

class Covid<T extends string, U extends T> {
    category: T;
    family: U;
    getInfo() {
        console.log( `Covid-19 is ${this.family} that affects ${this.category}`);
    }
}

let covid =new Covid<string,string>();
covid.category = "lungs";
covid.family = "virus";
covid.getInfo();


// in built generic
const values: Array<number> = [1,2,3,4];
values.push(99);
console.log(values);

// array generic 
function printAll<T>(argss: T[]) {
    argss.forEach((element) => console.log(element));
}

printAll<number>([1,2,3,9]);

// generic types

const mimi: <T>(data: T) => T = echo;

console.log(mimi<number>(29));