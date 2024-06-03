'use strict';

const mobile = {
    simNumber: '+3611234567',
    pin: '1234',
    printSimNumber() {
        console.log('Phone number is:', this.simNumber);
    }
}

const person = {
    name: 'Laca',
    // enhanced object literal allows to implicitly declare property name by reusing the passed variable's name
    mobile,
    printPerson() {
        console.log('Person name is:', this.name);
        this.mobile.printSimNumber();
    }
}

console.log(person);
person.printPerson();
