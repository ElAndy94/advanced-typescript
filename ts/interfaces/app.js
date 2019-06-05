"use strict";
function greetPerson(veryNewPerson) {
    console.log('Hello, ' + veryNewPerson.name);
}
function changeName(veryNewPerson) {
    veryNewPerson.name = 'Anna';
}
const veryNewPerson = {
    name: 'Andrew',
    age: 27
};
greetPerson(veryNewPerson);
changeName(veryNewPerson);
