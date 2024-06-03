'use strict';

// short-circuiting with && and || operators

console.log(3 || 'Laca'); // 3 is truthy
console.log(undefined || null); // undefined and null are falsy

console.log(3 && 'Laca' && 'Hello');
console.log(false && 'Laca');

// this can simplify ternary operators for basic checks
const name = undefined;

let validatedName = name ? name : 'default name';
console.log(validatedName);

validatedName = name || 'default name';
console.log(validatedName);

// ------------------------------------------------------------------------

// nullish coalescing operator
// nullish means: null or undefined (excluding 0 or '')
const numberOfVisits = 0;
const validatedWithOr = numberOfVisits || 5;
console.log(validatedWithOr);
const validatedWithNco = numberOfVisits ?? 5;
console.log(validatedWithNco);

// ------------------------------------------------------------------------

// logical assignment operator

const rest1 = {
    name: 'Laca',
    birthPlace: 'Pecs'
}

const rest2 = {
    name: 'Orsi',
    carOwner: false
}

const rest3 = {
    name: 'Balazs',
    petOwner: true,
    birthPlace: ''
}

const rest4 = {
    name: 'Cintia',
    petOwner: true,
    birthPlace: ''
}

rest1.birthPlace = rest1.birthPlace || 'Budapest';
rest2.birthPlace = rest2.birthPlace || 'Budapest';
console.log('Rest1', rest1);
console.log('Rest2', rest2);

// OR assignment operator
rest3.birthPlace ||= 'Budapest';
console.log('Rest3', rest3);

// logical nullish assignment operator
rest4.birthPlace ??= 'Budapest';
console.log('Rest4', rest4);

// AND assignment operator
rest4.name &&= 'ANONYMOUS';
console.log('Rest4', rest4);
