'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

function processGameResult(inputData) {
    const scoreDolphins = calcAverage(inputData.dolphins[0], inputData.dolphins[1], inputData.dolphins[2]);
    const scoreKoalas = calcAverage(inputData.koalas[0], inputData.koalas[1], inputData.koalas[2]);
    checkWinner(scoreDolphins, scoreKoalas);
}

const data1 = {
    dolphins: [44, 23, 71],
    koalas: [65, 54, 49]
};

const data2 = {
    dolphins: [85, 54, 41],
    koalas: [23, 34, 27]
};

processGameResult(data1);
processGameResult(data2);
