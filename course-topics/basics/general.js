let test = 10;
let plus = 40;
console.log(test + plus);
console.log(4 ** 4 * 2);

let result = 0;
result = --test + test++;
console.log(result);

const fix = 30;

let text1 = 'msdaaaaaaasds';
let text2 = 'loooooong';
console.log(text2 > text1);

let testValue = 10;
testValue ??= 15;
console.log('??= ' + testValue);
testValue = null;
testValue ??= 20;
console.log(testValue);

let a = 10;
let b = "10";
console.log(a === b); // false
console.log(a == b); // true
console.log(a !== b); // true
console.log(a != b); // false

let x = 20;
x = -x;
console.log(x);

let whoIAm = "somebody";
let introduction = "I'm " + whoIAm + ".";
console.log(introduction);

const tryTemplateLiterals = `I'm ${whoIAm} and my number is: ${1000 - 1}.`;
console.log(tryTemplateLiterals);

const tryMultipleLines = 'First line \nSecond line';
console.log(tryMultipleLines);

let flag = false;
if (flag) {
  console.log('Flag is true');
} else {
  console.log('Flag is false');
}

console.log(typeof 'hello');
console.log(typeof true);
let somethingEmpty = {};
console.log(typeof somethingEmpty);
