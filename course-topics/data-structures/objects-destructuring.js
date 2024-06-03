'use strict';

const book = {
    length: 120,
    authors: ['J.K. Rowling', 'George R. R. Martin'],
    genre: {
        sciFi: true,
        drama: true,
        comedy: false
    },
    releaseDate: undefined
};

let {length, authors, genre} = book;

// simple destructuring
console.log('Original object:', book);
console.log('Destructured fields:', length, authors, genre);
length = 200;
console.log('Original object:', book);
console.log('Destructured fields:', length, authors, genre);

// using custom variable names at declaration
const {length: nrOfPages, genre: listOfAuthors} = book;
console.log(nrOfPages, listOfAuthors);

// using default value
const {releaseDate: publishDate = 1990} = book;
console.log('publishDate:', publishDate);

// mutating variables
let a = 111;
let b = 999;
const myObj = {
    a: 23,
    b: 7,
    c: 14
};

console.log(a, b);
({a, b} = myObj);
console.log(a, b);

// nested objects
const {genre: {sciFi: isSciFi, comedy: isComedy}} = book;
console.log(isSciFi, isComedy);
