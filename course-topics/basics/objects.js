'use strict';

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'teacher',
    driverLicense: true,
    friends: ['Zorro', 'Peter', 'Steven'],

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.driverLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log('lastname:', jonas.lastName);
console.log('lastname:', jonas['lastName']);

console.log('age:', jonas.calcAge(1989));
console.log(jonas.getSummary());
