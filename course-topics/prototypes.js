'use strict';

function Person(name, email) {
    this.name = name;
    this.email = email;
}

// this adds the tellName() method to the Person prototype chain and every Person type or subtype can be called with it
Person.prototype.tellName = function () {
    console.log(this.name);
};

const me = new Person('Laca', 'asd@gmail.com');
me.tellName();
