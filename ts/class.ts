class Person {
  name: string;
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('old guy');
  }

  private setType(type: string) {
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

  constructor(username: string) {
    super('Andrew', username);
    this.age = 31;
  }
}
const elAndy = new Andrew('andrew');
console.log(elAndy);

// Getters & Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
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
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
