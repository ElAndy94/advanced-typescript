"use strict";
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
// Destructuring
console.log('Destructuring');
const myHobbies = ['cooking', 'sports'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
const userData = { userName: 'Andrew', age: 24 };
// const userName = userData.userName;
// const age = userData.age;
const { userName, age } = userData;
// if you wish to name things differently then do this ->
const { userName: myName, age: myAge } = userData;
console.log(myName, myAge);
// Template Literals
const myName2 = 'Andrew';
const greeting = `This is a heading!
I'm ${myName2}
This is very basic!`;
console.log(greeting);
