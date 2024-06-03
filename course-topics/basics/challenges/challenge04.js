const bill = 275;
let tip;

function execute() {
    let tipRate = (bill >= 50 && bill <=300) ? 0.15 : 0.20;
    tip = bill * tipRate;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
}

execute();