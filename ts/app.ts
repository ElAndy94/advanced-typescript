let myName: string = 'Andrew';
let myAge: number = 24;
let anything: any;
anything = 12;

function controlMe(isTrue: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}
