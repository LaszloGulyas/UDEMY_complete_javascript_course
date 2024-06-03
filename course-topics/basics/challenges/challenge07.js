'use strict';

const calcBMI = (mass, height) => mass / (height * height);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = calcBMI(this.mass, this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = calcBMI(this.mass, this.height);
        return this.bmi;
    }
};

function createSummaryMessage(personHigherBmi, personLowerBmi) {
    return `${personHigherBmi.fullName}'s BMI (${personHigherBmi.bmi}) is higher than ${personLowerBmi.fullName}'s (${personLowerBmi.bmi})!`;
}

function logSummary(person1, person2) {
    if (person1.bmi > person2.bmi) {
        console.log(createSummaryMessage(person1, person2));
    } else if (person1.bmi < person2.bmi) {
        console.log(createSummaryMessage(person2, person1));
    }
}

function execute() {
    mark.calcBMI();
    john.calcBMI();
    logSummary(mark, john);
}

execute();
