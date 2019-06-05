interface NamedPerson {
  firstName: string;
}

function greetPerson(veryNewPerson: NamedPerson) {
  console.log('Hello, ' + veryNewPerson.firstName);
}

function changeName(veryNewPerson: NamedPerson) {
  veryNewPerson.firstName = 'Anna';
}

const veryNewPerson = {
  firstName: 'Andrew',
  age: 27
};

greetPerson(veryNewPerson);
changeName(veryNewPerson);
