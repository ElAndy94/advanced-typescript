"use strict";
// string
let myName = 'Andrew';
// myName = 28;
// number
let myAge = 24;
// myAge = 'andrew';
//boolean
let hasHobbies = false;
// hasHobbies = 1;
// assign types
let myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
let hobbies = ['cooking', 'sports'];
// console.log(typeof hobbies);
hobbies = [100];
// hobbies = ['A string of strings'];
// tuples
let address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
// console.log(myColor);
//any
let car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
    //   return myName;
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(20, 30));
