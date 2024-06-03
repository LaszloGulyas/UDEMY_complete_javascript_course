'use strict';

class Book {
    constructor(title, countOfPages) {
        this.title = title;
        this.countOfPages = countOfPages;
    }

    title;
    countOfPages;
}

const bookMap = new Map();

bookMap.set('Harry Potter', new Book('Harry Potter', 354));
bookMap.set('some book', new Book('Lord of the Rings'));

console.log(bookMap);

console.log(bookMap.has('some book'));

bookMap.delete('some book');
console.log(bookMap.has('some book'));
console.log(bookMap.size);

// map iterations

const taskList = new Map([
    ['Monday', 'Gym'],
    ['Tuesday', 'Clean room, clean kitchen'],
    ['Sunday', 'Relax']
]);
console.log(taskList);

for (const [key, value] of taskList) {
    console.log('key:', key);
    console.log('value:', value);
}

const taskArray = [...taskList];
console.log(taskArray);
