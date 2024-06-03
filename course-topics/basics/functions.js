'use strict';

function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

function execute() {
    let juiceResult = fruitProcessor(5, 3);
    console.log(juiceResult);
}

execute();

// function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(1989));

// function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
console.log(calcAge2(1989));

// arrow function
const calcAge3 = birthYear => 2024 - birthYear;
console.log(calcAge3(1989));

// arrow function, more complex
const yearsUntilRetirement = (birthYear, ageOfRetirement) => {
    const currentAge = 2024 - birthYear;
    return ageOfRetirement - currentAge;
}
console.log(yearsUntilRetirement(1989, 65));
