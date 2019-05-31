"use strict";
// string
let myRealName = 'Andrew';
// myName = 28;
// number
let myRealAgeNum = 24;
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
// function types
let myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
let userDataObj = {
    name: 'Andrew',
    age: 24
};
// userData = {
//     a: 'hello',
//     b: 22
// }
// complex object
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
let complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
let myRealRealAge = 27;
myRealRealAge = '27';
// check types
let finalValue = 'A string';
if (typeof finalValue == 'number') {
    console.log('final value is a number');
}
// never type
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
console.log(canThisBeAny);
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
