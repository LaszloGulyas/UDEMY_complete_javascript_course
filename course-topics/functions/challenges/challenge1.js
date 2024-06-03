'use strict';

const readline = require('readline');

function readInput(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

function displayResults(type = 'array') {
    switch (type) {
        case 'array':
            console.log(this.answers + '\n');
            break;
        case 'string':
            console.log('Poll results are ' + this.answers.join(', ') + '\n');
            break;
    }
}

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    buildQuestionText() {
        return this.question + '\n' + this.options.join('\n') + '\n' + '(Write option number)' + '\n';
    },
    validateAnswer(answer) {
        return !Number.isNaN(answer) && answer >= 0 && answer < this.answers.length
    },
    async registerNewAnswer() {
        const answer = Number(await readInput(this.buildQuestionText()));
        if (this.validateAnswer(answer)) {
            this.answers[answer] += 1;
        } else {
            // console.log(`Invalid answer, must be a number between 0 and ${this.answers.length - 1}`);
        }
        displayResults.call(this);
    }
};

const BONUS_TEST_DATA_1 = [5, 2, 3];
const BONUS_TEST_DATA_2 = [1, 5, 3, 9, 6, 1];

async function main() {
    for (let i = 0; i < 3; i++) {
        await poll.registerNewAnswer();
    }

    const customPrinter = (array, type) => displayResults.call({answers: array}, type);
    customPrinter(BONUS_TEST_DATA_1, 'array');
    customPrinter(BONUS_TEST_DATA_2, 'string');
}

main();
