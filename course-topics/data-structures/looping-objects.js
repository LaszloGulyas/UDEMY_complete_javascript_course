'use strict';

const week = {
    mon: {
        day: 1,
        extra: 'first day of the week'
    },
    tue: {
        day: 2
    },
    wed: {
        day: 3
    },
    thu: {
        day: 4
    },
    fri: {
        day: 5
    }
}

console.log('----- entries -----');
for (const day of Object.entries(week)) {
    console.log(day);
}

console.log('----- keys -----');
console.log(Object.keys(week));

console.log('----- values -----');
console.log(Object.values(week));

for (const [dayName, {day: dayNumber}] of Object.entries(week)) {
    console.log(`key is: ${dayName}, value is: ${dayNumber}`);
}
