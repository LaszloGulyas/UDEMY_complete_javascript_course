'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

function execute() {
    document.getElementById('js-logics-button-msg').textContent = 'Button pressed.';
    console.log('Execute finished!');
}