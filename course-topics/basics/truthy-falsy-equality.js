// there are 5 falsy values in js
// 0, '', undefined, null, NaN

console.log(Boolean(undefined));

console.log(Boolean(''));
console.log(Boolean(' '));

console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(1));

console.log(Boolean(null));
console.log(Boolean({}));

let myObject;
if (myObject) {
    console.log(myObject);
} else {
    console.log('myObject is falsy');
}

const age = 18;
if (age === 18) {
    console.log('Age is exactly 18');
}

if (age == '18') {
    console.log('Age is 18 after type coercion');
}

if (age === '18') {
    console.log("False due to no type coercion: string never be equal to a number")
}