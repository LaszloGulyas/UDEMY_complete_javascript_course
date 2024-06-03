'use strict';

const week = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekend: function () {
        return [(this.days)[5], this.days[6]];
    }
}

const array = ['Hello', 'world', '!'];
const a = array[0];
const b = array[1];
const c = array[2];

console.log(a, b, c);

// destructuring declaration
const [x, y, z] = array;
console.log(x, y, z);

const [holiday1, holiday2] = week.weekend();
console.log(holiday1, holiday2);

// destructuring nested arrays
const nested = [1, undefined, [3, 4]];
const [e, f, [g, h]] = nested;
console.log(e, f, g, h);

// default values
const [p = -1, q = -1, r = -1] = nested;
console.log(p, q, r);
