//simple types
let isComplete: boolean = false;
let decimal: number = 6; 
let color: string = "blue"; 
let anotherBig: bigint = BigInt(12345678901234567890);
const sym1: symbol = Symbol("unique1");

//explicit assignment
let firstName: string ="Dylan";

//implicit assignment
let lastName:"Tylor";

//error in type assignment
let user: string = "Dylan"; 
//user = 33; 

let contactUser="Dylan";
//contactUser=33;

const json = JSON.parse("55");
console.log(typeof json);

//special types
let u : any=true;
u=4;

let w: unknown = 1;
w="string";

//let s:never=true;

let y:undefined = undefined;
let z:null=null;

//arrays
const names: string[] = [];
names.push("Dylan");

const names2: readonly string[] = ["Dylan"];
//names2.push("Jack"); 

const numbers = [1, 2, 3]; 
numbers.push(4); 

//tuples
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding expert was here'];

let ourTupl2: [number, boolean, string];
//ourTupl2 = [false, 'Coding God was mistaken', 5];

let ourTuple3: [number, boolean, string];
ourTuple3 = [5, false, 'Coding God was here'];
ourTuple3.push('Something new and wrong');
console.log(ourTuple3); //no type safety

let ourTuple4: readonly [number, boolean, string];


//named tuples
const graph: [x: number, y: number] = [55.2, 41.3];

//objects
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };


/*  const car2: { type: string, mileage: number } = { 
type: "Toyota",
};
car2.mileage = 2000;*/

//optional parameter
const car2: { type: string, mileage?: number } = { 
    type: "Toyota"
  };
car2.mileage = 2000;

//enum
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
console.log(CardinalDirections.East);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StatusCodes.Success);

enum CardinalDirections2 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
console.log(CardinalDirections2.North);

//Aliases 
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const auto: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

//Interface
interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

//Function to return greeting
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("World"));

//Functions
function getTime(): number {
    return new Date().getTime();
}

function printHello(): void {
    console.log('Hello!');
}

function multiply(a: number, b: number) {
    return a * b;
}
//optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
//default value
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

//casting
let x: unknown = 'hello';
console.log((x as string).length);

let b: unknown = 'hello';
console.log((<string>b).length);

//classes
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Jane");
console.log(person.name); 

//access modifiers
class Person2 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person2 = new Person2("Jane");
  //console.log(person2.getName()); 

//arrow functions
const addArrow = (a: number, b: number): number => a + b;
console.log(addArrow(2, 3)); 



