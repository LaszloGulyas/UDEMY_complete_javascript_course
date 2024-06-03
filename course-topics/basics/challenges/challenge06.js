'use strict';

const calcTipAsArray = function (bills) {
    const calcTipRate = (bill) => (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
    const calcTip = (bill) => calcTipRate(bill) * bill;
    return bills.map((bill) => calcTip(bill));
}

const calcTotalAsArray = function (bills, tips) {
    if (bills.length !== tips.length) {
        return null;
    }

    const calcTotal = (bill, tip) => bill + tip;

    const totals = [];
    for (let i = 0; i < bills.length; i++) {
        totals.push(calcTotal(bills[i], tips[i]));
    }
    return totals;
}

const bills = [125, 555, 44];
const tips = calcTipAsArray(bills);
const totals = calcTotalAsArray(bills, tips);
console.log('Totals:', totals);
