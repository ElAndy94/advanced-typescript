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

const person = new Person('Andrew', 'max');
// console.log(person);
// console.log(person.name, person.username);
person.printAge();
// person.setType('Cool guy');
