'use strict';

const bookSet = new Set(['Harry Potter', 'Lord of the Ring', 'Survival book']);
console.log(bookSet);
console.log(bookSet.size);
console.log(bookSet.has('Survival book'));

bookSet.add('Diary');
console.log(bookSet);

bookSet.delete('Harry Potter');
console.log(bookSet);

for (const book of bookSet) {
    console.log(book);
}

const numberArray = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4];
console.log(numberArray);
const numberSet = new Set(numberArray);
console.log(numberSet);
const numberArrayUnique = [...numberSet];
console.log(numberArrayUnique);

const bookArray = [];
bookArray.push('hello');
bookArray.push('mate');
console.log(bookArray);
bookArray.unshift('...');
bookArray.push('!');
console.log(bookArray);
bookArray.shift();
bookArray.pop();
console.log(bookArray);
