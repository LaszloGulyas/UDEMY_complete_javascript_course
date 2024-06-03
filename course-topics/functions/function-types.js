'use strict';

function weakAmplifier(value) {
    return value * 10;
}

const mediumAmplifier = function (value) {
    return value * 100;

}
const strongAmplifier = value => value * 1000;


// store function as value
let amplifier = mediumAmplifier;
console.log(amplifier(4));


// return existing function from a function
function amplifierSelector(value) {
    if (value >= 100) {
        return weakAmplifier;
    } else if (value >= 10) {
        return mediumAmplifier;
    } else {
        return strongAmplifier;
    }
}

const myValue = 5000;
amplifier = amplifierSelector(myValue);
console.log(amplifier(myValue));


// return new function from a function
function customAmplifier(multiplier) {
    return (value) => value * multiplier;
}

amplifier = customAmplifier(100000);
console.log(amplifier(5));
const amplifiedResult = customAmplifier(500)(300);
console.log(amplifiedResult);

const customAmplifierWithArrows = multiplier => value => value * multiplier;
console.log(customAmplifierWithArrows(10)(20));

// higher-order function: receives another functions as argument
function higherOrderFunction(value, printer) {
    console.log('Called printer:', printer.name);
    return (printer(value));
}


// call-back function: passed as an argument to call it later
const callbackFunction = (value) => {
    console.log('Passed value is:', value)
}
higherOrderFunction(5, callbackFunction);
