let scoreDolphins;
let scoreKoalas;

function execute() {
    const inputDolphins = [96, 108, 89];
    const inputKoalas = [88, 91, 110];

    scoreDolphins = calculateAverageScore(inputDolphins);
    scoreKoalas = calculateAverageScore(inputKoalas);

    let result = evaluateResult();
    console.log(result);
}

function calculateAverageScore(scores) {
    let sum = 0;
    scores.forEach((score) => {
        sum += score;
    })
    return sum / scores.length;
}

function evaluateResult() {
    let result;
    if (scoreDolphins > scoreKoalas) {
        result = 'Dolphins win the trophy';
    } else if (scoreDolphins < scoreKoalas) {
        result = 'Koalas win the trophy';
    } else {
        result = 'Both win the trophy';
    }
    return result;
}

execute();