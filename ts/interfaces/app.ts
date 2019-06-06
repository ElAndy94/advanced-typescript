interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
}

function greetPerson(veryNewPerson: NamedPerson) {
  console.log('Hello, ' + veryNewPerson.firstName);
}

function changeName(veryNewPerson: NamedPerson) {
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
