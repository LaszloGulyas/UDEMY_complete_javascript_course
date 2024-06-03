'use strict';

const page = {
    number: 10,
    content: 'written-text',
    checkPageNumber: function (pageNumber) {
        return pageNumber === this.number;
    }
}

const book1 = {
    pages: [page, page, page],
    title: 'test-book'
}

const book2 = {
    pages: [page, page, page],
    title: ''
}

const shelf = {
    books: [book1, undefined, book2]
}

console.log(shelf.books[0].pages[0].content);

//console.log(shelf.books[1].pages[0].content); // would produce error
console.log(shelf?.books[1]?.pages[0]?.content); // returns undefined
console.log(shelf?.books[2]?.title || 'no content found');

// check if method exists
console.log(shelf?.books[0]?.pages[0]?.checkPageNumber?.(10));

// check if array exists
const books = [book1, book2];
const undefinedBooksArray = undefined;
console.log(books[0]?.title);
console.log(books[300]?.title);
// console.log(undefinedBooksArray[0]?.title); // would produce error because books array is undefined
console.log(undefinedBooksArray?.[0]?.title); // checks both the array and its element
console.log(undefinedBooksArray?.[0]?.title ?? 'title is not available');
