interface YourName {
    name: string,
    age?: number,
    [parseName: string]: any,
    greet3(num: number, num2: number): void
};

// functions implementing an interface
interface YourFunc {

    (person4: YourName): any,

}

let greet2: YourFunc;
greet2 = function(person4: YourName) {
    console.log("hello " + person4.name + "my age is " + person4.age + "born in " + person4.yob );
}

//objects implementing an interface
let person5: YourName = {
    name: "peter",
    age: 12,
    yob: 2008,
    greet3(){}
};

greet2(person5);

//class implementing an interface
class Miss implements YourNickName {
    name: string = "hi";
    nickName: string = "hola"
    greet3(num: number, num2: number) {
        console.log(num+num2);
    }
}

const miss = new Miss();
miss.greet3(1,2);
console.log(miss.name);
console.log(miss.nickName);

// interface inheritance

interface YourNickName extends YourName {
    nickName: string;
}