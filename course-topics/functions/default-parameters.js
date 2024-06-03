'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 200) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("001", 20);
//console.log(myBooking);
