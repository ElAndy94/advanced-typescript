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
