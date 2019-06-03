"use strict";
// Exercuse 1 - Class
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log('Toooooot!');
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
const bigCar = new Car('BMW');
bigCar.honk();
console.log(bigCar.acceleration);
bigCar.accelerate(20);
console.log(bigCar.acceleration);
// Exercise 2 - Inheritance
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Getters & Setters
class BigPerson {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = '';
        }
    }
}
const bigPerson = new BigPerson();
console.log(bigPerson.firstName);
bigPerson.firstName = 'Ma';
console.log(bigPerson.firstName);
bigPerson.firstName = 'ElAndrew';
console.log(bigPerson.firstName);
