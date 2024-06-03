'use strict';

function practiceForLoop() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Lifting weight reps ${i}`);
    }

    const personData = ['Laci', 34, 'engineer'];
    for (let i = 0; i < personData.length; i++) {
        console.log(personData[i]);
    }

    for (let i = personData.length - 1; i >= 0; i--) {
        console.log(personData[i]);
    }

    personData.forEach((dataField) => console.log(dataField, typeof dataField));

    // continue and break
    for (let i = 0; i < 10; i++) {
        if (i === 9) {
            console.log(`Iteration ${i} stops the process with break.`);
            break;
        } else if (i % 2 === 0) {
            console.log(`Iteration ${i} is skipped with continue.`);
            continue;
        }
        console.log(`Iteration ${i} is completed.`);
    }

    // loop within loop
    const matrix = [];
    for (let i = 0; i < 5; i++) {
        matrix[i] = [];
        for (let j = 0; j < 4; j++) {
            matrix[i][j] = `${i},${j}`;
        }
    }
    console.log(matrix);
}

function practiceWhileLoop() {
    const queue = [1, 2, 3];
    while (queue.length > 0) {
        console.log(queue.pop());
    }
}

practiceForLoop();
practiceWhileLoop();
