"use strict";
// Exercise 1 - Maybe use an Arrow Function?
let double = (value) => value * 2;
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
let greet = (name = 'Andrew') => {
    if (name === undefined) {
        name = 'Andrew';
    }
    console.log('Hello, ' + name);
};
greet();
greet('Anna');
// Exercise 3 - Isn't there a shorter way to get all these Values?
let theNumbers = [-3, 33, 38, 5];
console.log(Math.min(...theNumbers));
// Exercise 4 - I have to think about Exercise 3 ...
let newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
newArray.push(...theNumbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
let testResults = [3.89, 2.99, 1.38];
// let result1 = testResults[0];
// let result2 = testResults[1];
// let result3 = testResults[2];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
let scientist = { firstName: 'Will', experience: 12 };
// let firstName = scientist.firstName;
// let experience = scientist.experience;
let { firstName: fName, experience: exp } = scientist;
console.log(fName, exp);
