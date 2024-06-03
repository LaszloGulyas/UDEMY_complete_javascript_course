'use strict';

const word = 'gulyas lasz';

function generateAnagramRecursive(givenLetters, pickedLetters, resultSet) {
    for (let i = 0; i < givenLetters.length; i++) {
        const remainingLetters = [];
        for (let j = 0; j < givenLetters.length; j++) {
            if (j === i) {
                pickedLetters.push(givenLetters[j]);
            } else {
                remainingLetters.push(givenLetters[j]);
            }
        }
        if (remainingLetters.length === 0) {
            resultSet.add(pickedLetters.join(''));
        } else {
            generateAnagramRecursive(remainingLetters, pickedLetters, resultSet);
        }
        pickedLetters.pop();
    }
}

function generateAnagram(original) {
    const resultSet = new Set();
    generateAnagramRecursive([...original], [], resultSet);
    return resultSet;
}

function factorize(number) {
    let result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    return result;
}

function countAnagram(original) {
    const characters = [...original];
    const uniqueCharacterCountMap = new Map();

    for (let char of characters) {
        uniqueCharacterCountMap.set(char, uniqueCharacterCountMap.get(char) + 1 || 1);
    }

    let permutationCount = factorize(original.length);
    for (let repetitionCount of uniqueCharacterCountMap.values()) {
        if (repetitionCount > 1) {
            permutationCount /= factorize(repetitionCount);
        }
    }

    return permutationCount;
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}. ${array[i]}`);
    }
}

const startTime = performance.now();

console.log(generateAnagram(word));

// printArray([...generateAnagram(word)]);
//console.log('Count of unique anagrams:', countAnagram(word));

const end = performance.now();
console.log(`Execution time: ${end - startTime} ms`);
