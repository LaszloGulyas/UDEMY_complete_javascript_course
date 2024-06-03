'use strict';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends[0]);
console.log(friends.length);

const years = new Array(1991, 1994, 2008, 2020);
console.log('years:', years);

// push
years.push(2024);
console.log('years after push:', years);

// pop
const poppedElement =  years.pop();
console.log('Popped element:', poppedElement);
console.log('years after pop:', years);

// unshift
years.unshift(1900);
console.log('years after unshift:', years);

// shift
const shiftedElement = years.shift();
console.log('Shifted element:', shiftedElement);
console.log('years after shift:', years);

const indexOfExistingElement = years.indexOf(2008);
console.log('index of existing element:', indexOfExistingElement);
const indexOfNotExistingElement = years.indexOf(900);
console.log('index of not existing element:', indexOfNotExistingElement);
console.log(years.includes(900));

const emptyArray = [];
emptyArray[100] = 'hello';
emptyArray[150] = 'world';
console.log(emptyArray);
