'use strict';

function makeFirstLetterCapital(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function convertToCamelCase(word) {
    const parts = word.trim().toLowerCase().split('_');
    for (let i = 1; i < parts.length; i++) {
        parts[i] = makeFirstLetterCapital(parts[i]);
    }
    return parts.join('');
}

function printInCamelCase(text) {
    const lines = text.split('\n');
    const camelCaseWords = [];
    for (let i = 0; i < lines.length; i++) {
        const formattedWord = convertToCamelCase(lines[i]).padEnd(20, ' ') + 'C'.repeat(i + 1);
        console.log(formattedWord);
    }
}


const testData = 'underscore_case\n  first_name\nSome_Variable\n   calculate_AGE\ndelayed_departure';
printInCamelCase(testData);
