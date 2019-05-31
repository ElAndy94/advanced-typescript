"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType('old guy');
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person('Andrew', 'andrew');
// console.log(person);
// console.log(person.name, person.username);
person.printAge();
// person.setType('Cool guy');
// Inheritance
class Andrew extends Person {
    //   name = 'Andrew';
    constructor(username) {
        super('Andrew', username);
    }
}
const elAndy = new Andrew('andrew');
console.log(elAndy);
