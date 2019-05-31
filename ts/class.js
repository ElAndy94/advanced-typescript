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
        this.age = 31;
    }
}
const elAndy = new Andrew('andrew');
console.log(elAndy);
// Getters & Setters
class Plant {
    constructor() {
        this._species = 'Default';
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = 'Default';
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plants';
console.log(plant.species);
// Static Properties & Methods
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
