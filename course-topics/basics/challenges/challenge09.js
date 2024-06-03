'use strict';

const TEST_DATA_1 = [17, 21, 23];
const TEST_DATA_2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let message = '';
    for (let i = 0; i < arr.length; i++) {
        message += `... ${arr[i]}°C in ${i + 1} days`;
    }
    message += ' ...';
    console.log(message);
}

printForecast(TEST_DATA_1);
printForecast(TEST_DATA_2);
