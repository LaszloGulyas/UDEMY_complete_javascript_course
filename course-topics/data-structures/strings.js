'use strict';

const book = 'Harry Potter';
console.log(book[0]);
console.log('Harry'[0]);
console.log(book[20]);
console.log(book.indexOf('r')); // 2
console.log(book.lastIndexOf('r')); // 11
console.log(book.indexOf('Potter')); // 6
console.log(book.indexOf('asd'));  // -1
console.log(book.slice(book.indexOf(' ') + 1));
console.log(book.slice(book.indexOf('Pot')));

function checkMiddleSeat(seat) {
    const seatFormatted = seat.toUpperCase();
    return seatFormatted.indexOf('B') > 0 || seatFormatted.indexOf('E') > 0;
}

console.log(checkMiddleSeat('19E'));

// start any string with capital letter then rest is lower case
function formatToFirstLetterCapital(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const anyString = 'hEllOWorlD!';
console.log(formatToFirstLetterCapital(anyString));

// replace string parts
const price = '288,97€';
const priceFormatted = price.replace(',', '.').replace('€', "$");
console.log(priceFormatted);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
const updatedAnnouncement = announcement.replaceAll('door', 'gate');
console.log(updatedAnnouncement);

const array = [1, 3, 5, 11, 13, 14];
console.log(array.includes(3));
console.log(array.slice(array.length / 2));
console.log(updatedAnnouncement.includes('door'));

function checkBaggage(items) {
    const formattedItems = items.toLowerCase();
    if (formattedItems.includes('gun') || formattedItems.includes('knife')) {
        console.log('You are NOT allowed on board!');
    } else {
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a Laptop, some Food and a pocket Knife.');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split
const rawString = 'a+very+nice+string';
const processedString = rawString.split('+');
console.log(processedString);
const compiledSentence = processedString.join(' ');
console.log(compiledSentence);

// padding
const message = 'Go to gate 23';
const paddedMessage = message.padStart(25, '+').padEnd(40, '-');
console.log(paddedMessage);

function maskCreditCard(cardNumber) {
    let maskedNumber = cardNumber.slice(-4);
    console.log(cardNumber.length);
    for (let i = 10; i <= cardNumber.length + 1; i += 5) {
        maskedNumber = '-' + maskedNumber;
        maskedNumber = maskedNumber.padStart(i - 1, '*');
    }
    return maskedNumber;
}

function maskCreditCardFast(cardNumber) {
    const base = '****-'.repeat(cardNumber.length / 5);
    return base + cardNumber.slice(-4);
}

const creditCardNumber = '1234-1234-5678-1234-3982';
console.log(maskCreditCard(creditCardNumber));
console.log(maskCreditCardFast(creditCardNumber));
