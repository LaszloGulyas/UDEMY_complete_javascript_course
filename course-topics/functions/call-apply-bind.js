'use strict';

function flipPages(nrOfPages = 1, isForward = true) {
    if (isForward) {
        this.currentPage += nrOfPages;
    } else {
        this.currentPage -= nrOfPages;
    }
}

const book = {
    title: "Harry Potter",
    currentPage: 10
}

console.log(book.currentPage);

// call method
console.log('.call()');
flipPages.call(book, 10);
console.log(book.currentPage);

// apply method: same as call method except it takes only 1 array argument
console.log('.apply()');
console.log(book)
const flipData = [7, false];
flipPages.apply(book, flipData);
console.log(book);

flipPages.call(book, ...flipData);
console.log(book);

// bind method: returns a new function with bound this keyword and optionally bound (fixed) arguments
console.log('.bind()');
console.log(book);
let myPageFlipper = flipPages.bind(book);
myPageFlipper(5, false);
console.log(book);

myPageFlipper = flipPages.bind(book, 20, true);
myPageFlipper();
console.log(book);

// partial application of binding method: when 'this' keyword is irrelevant, not used within the bound function
console.log('.bind() partial application')
const multiplier = (multiplier, value) => value * multiplier;
console.log(multiplier(10, 7));
const multiplierDouble = multiplier.bind(null, 2);
console.log(multiplierDouble(17));
