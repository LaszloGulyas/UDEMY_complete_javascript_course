'use strict';

const array = ['hello', 'world', '!'];

for (const item of array) console.log(item);

console.log(...array.entries());

for (const [i, value] of array.entries()) console.log(i, value);
