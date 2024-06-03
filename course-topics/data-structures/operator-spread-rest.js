'use strict';

// SPREAD operation

const baseArray = [7, 8, 9];
let extendedArray = [5, 6, baseArray];
console.log(extendedArray);

extendedArray = [5, 6, baseArray[0], baseArray[1], baseArray[2]];
console.log(extendedArray);

// using spread operator
extendedArray = [5, 6, ...baseArray];
console.log(extendedArray);
console.log(...extendedArray);

const fullArray = [...extendedArray, 10];
console.log(fullArray);

// deep copy of an array
const copyArray = [...fullArray];
copyArray.shift();
console.log('copy array:', copyArray);
console.log('full array:', fullArray);

// iterables in javascript: array, map, set, string
const myName = 'Laci';
console.log(...myName);

const myObject = {
    name: 'hello',
    ...myName,
    number: 10
};
console.log(myObject);

// REST operation
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log('Rest', rest);
