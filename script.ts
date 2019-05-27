// string
let myName: string = 'Andrew';
// myName = 28;

// number
let myAge: number = 24;
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
let userData: { name: string; age: number } = {
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
