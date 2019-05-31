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
const person = new Person('Andrew', 'max');
// console.log(person);
// console.log(person.name, person.username);
person.printAge();
// person.setType('Cool guy');
