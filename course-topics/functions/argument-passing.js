'use strict';

const flight = 'LH1234';
const person = {
    name: 'Laca',
    passport: '1231233421'
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'AS9999';
    passenger.name = 'test new name';
}

// pass by value
console.log(flight, person);
checkIn(flight, person);
console.log(flight, person);

// seal locks the structure of the object: cannot add or remove fields
Object.seal(person);
//person.email = 'hello@world.com'; this would throw error

// freeze makes object immutable
Object.freeze(person);
// checkIn(flight, person); this would throw error

