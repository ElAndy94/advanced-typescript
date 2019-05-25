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
