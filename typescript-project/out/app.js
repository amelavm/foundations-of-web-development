"use strict";
//simple types
let isComplete = false;
let decimal = 6;
let color = "blue";
let anotherBig = BigInt(12345678901234567890);
const sym1 = Symbol("unique1");
//explicit assignment
let firstName = "Dylan";
//implicit assignment
let lastName;
//error in type assignment
let user = "Dylan";
//user = 33; 
let contactUser = "Dylan";
//contactUser=33;
const json = JSON.parse("55");
console.log(typeof json);
//special types
let u = true;
u = 4;
let w = 1;
w = "string";
//let s:never=true;
let y = undefined;
let z = null;
//arrays
const names = [];
names.push("Dylan");
const names2 = ["Dylan"];
//names2.push("Jack"); 
const numbers = [1, 2, 3];
numbers.push(4);
//tuples
let ourTuple;
ourTuple = [5, false, 'Coding expert was here'];
let ourTupl2;
//ourTupl2 = [false, 'Coding God was mistaken', 5];
let ourTuple3;
ourTuple3 = [5, false, 'Coding God was here'];
ourTuple3.push('Something new and wrong');
console.log(ourTuple3); //no type safety
let ourTuple4;
//named tuples
const graph = [55.2, 41.3];
//objects
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
/*  const car2: { type: string, mileage: number } = {
type: "Toyota",
};
car2.mileage = 2000;*/
//optional parameter
const car2 = {
    type: "Toyota"
};
car2.mileage = 2000;
//enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.East);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Success);
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2["North"] = "North";
    CardinalDirections2["East"] = "East";
    CardinalDirections2["South"] = "South";
    CardinalDirections2["West"] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
;
console.log(CardinalDirections2.North);
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const auto = {
    year: carYear,
    type: carType,
    model: carModel
};
const rectangle = {
    height: 20,
    width: 10
};
//Function to return greeting
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("World"));
//Functions
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function multiply(a, b) {
    return a * b;
}
//optional
function add(a, b, c) {
    return a + b + (c || 0);
}
//default value
function pow(value, exponent = 10) {
    return value ** exponent;
}
//casting
let x = 'hello';
console.log(x.length);
let b = 'hello';
console.log(b.length);
//classes
class Person {
    constructor(name) {
        this.name = name;
    }
}
const person = new Person("Jane");
console.log(person.name);
//access modifiers
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person2 = new Person2("Jane");
//console.log(person2.getName()); 
//arrow functions
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));
