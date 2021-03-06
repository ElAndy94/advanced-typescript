// string
let myRealName: string = 'Andrew';
// myName = 28;

// number
let myRealAgeNum: number = 24;
// myAge = 'andrew';

//boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ['cooking', 'sports'];
// console.log(typeof hobbies);
hobbies = [100];
// hobbies = ['A string of strings'];

// tuples
let address: [string, number] = ['Superstreet', 99];

// enum
enum Color {
  Grey,
  Green = 100,
  Blue
}

let myColor: Color = Color.Green;
// console.log(myColor);

//any
let car: any = 'BMW';
console.log(car);

car = { brand: 'BMW', series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
  //   return myName;
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(20, 30));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userDataObj: { name: string; age: number } = {
  name: 'Andrew',
  age: 24
};

// userData = {
//     a: 'hello',
//     b: 22
// }

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// Declaring a custom type with Type Aliases
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: string | number = 27;
myRealRealAge = '27';

// check types
let finalValue = 'A string';
if (typeof finalValue == 'number') {
  console.log('final value is a number');
}

// never type
function neverReturns(): never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
console.log(canThisBeAny);

/**
 * Exercise
 */

type BankAccount = { money: number; deposit: (val: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);
