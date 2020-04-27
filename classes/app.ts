// Working wit classes and objects

//creating a class
class Person2 {
    //name is public by default
    name: string;
    // private is only accessed within the class
    private age: number = 21;
    // protected is accessed only from inherited classes and objects  
    protected salary: number;
    
    //constructer creates a new object username
    constructor(name, public username: string) {
        this.name = name;
    }

    showAge() {
        return this.age;
    }

    addSalary(cb) {
        this.salary = cb;
        console.log(this.salary);
        return this.salary;
    }

}

//class instance
let person2 = new Person2("peter", "pinches")

console.log(person2.showAge());
person2.addSalary(200);

//inheritance
class Musembi extends Person2 {
    // name: string = "Musembi";

    // constructor adjusted by initializing name 
    constructor( username: string) {
        // reference to Person class constructor
        super("Musembi",username);
    }

    justDo() {
        this.salary = this.addSalary(2000) + 1000;
        return this.salary;
    }
}

let peter = new Musembi( "pinches2")
console.log(peter.showAge());
console.log(peter.justDo());

// Getter and Setters 

class Plant {
    private _species: string;

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = "Default"
        } else {
            this._species = value;
        }
    }
}

let plant =  new Plant();
plant.species = "egg";
console.log(plant.species);
plant.species = "yozah";
console.log(plant.species);