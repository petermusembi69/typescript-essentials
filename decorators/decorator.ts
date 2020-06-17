function track(constructor: Function) {
    console.log(constructor);
}

@track
class DisTrack {
    constructor() {}
}

// factory
function albums(value: boolean) {
  return value ? track : this.null ;
}

@albums(false)
class Truck{
}

// adavanced

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}


@albums(true)
@printable
class Plants {
  name = "Green Plant"
}

const plants = new Plants();
(<any>plants).print();

//  method decorator 

function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

// property override

function overWritable(value: boolean) {
  return function (target: any, propName: string): any {
    const descriptor: PropertyDescriptor = {
      writable: value
    };
    return descriptor;
  }
}

class Project {
  //false makes the class read only
  @overWritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(true)
  calcBudget() {
    console.log(10000);
  }
}

const project = new Project("wliwiw");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
}
project.calcBudget();

console.log(project.projectName);

// parameter decorators

function paramDeco(target: any, methodName: string,paramIndex: number): any {
    console.log("Target: ", target);
    console.log("MethodName: ", methodName);
    console.log("ParamIndex: ", paramIndex);
  }


class Course {
  //false makes the class read only
  // @overWritable(true)
  CourseName: string;

  constructor(name: string) {
    this.CourseName = name;
  }

  calc(name: string, @paramDeco nam: number) {
    console.log(name);
  }
}

const course = new Course("wow");
course.calc("nidnsd", 12);
