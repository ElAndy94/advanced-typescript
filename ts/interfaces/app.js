"use strict";
function greetPerson(veryNewPerson) {
    console.log('Hello, ' + veryNewPerson.firstName);
}
function changeName(veryNewPerson) {
    veryNewPerson.firstName = 'Anna';
}
const veryNewPerson = {
    firstName: 'Andrew',
    age: 27,
    hoobies: ['cooking', 'sports']
};
greetPerson({ firstName: 'Andrew', age: 27 });
changeName(veryNewPerson);
greetPerson(veryNewPerson);
