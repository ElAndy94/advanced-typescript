"use strict";
// let myName: string = 'Andrew';
// let myAge: number = 24;
// let anything: any;
// anything = 12;
// function controlMe(isTrue: boolean) {
//   let result: number;
//   if (isTrue) {
//     result = 12;
//   }
//   result = 33;
//   return result;
// }
// let & const
// let variable = 'Test';
// console.log(variable);
// Default parameters
console.log('Default parameters');
const countdown = (start = 10) => {
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown(10);
// Rest & Spread
console.log('Rest & Spread');
const numbers = [1, 10, 99, -5];
// console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));
// Rest
function makeArray(...args) {
    return args;
}
console.log(makeArray(1, 2, 6));
function makeArray2(name, ...args) {
    return name + args;
}
console.log(makeArray2('Andrew ', 1, 2, 6));
