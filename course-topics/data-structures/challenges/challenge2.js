'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: [
        'Lewandowski',
        'Gnarby',
        'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};

function printGoals(...playerNames) {
    playerNames.forEach(playerName => {
        console.log(playerName);
    });
    console.log('Goals:', playerNames.length);
}

function calcAverage(numbers) {
    let sum = 0;
    let count = 0;
    for (const number of numbers) {
        sum += number;
        count++;
    }
    return sum / count;
}

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1, x: draw, team2} = game.odds;
const teamLikelyWinning = (team1 < team2) && 'team1' || 'team2';

// ------------------------------ challenge 2 ------------------------------

console.log(game.scored);
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

const averageOdds = calcAverage(Object.values(game.odds));
console.log('Average odds is:', averageOdds);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

const scorers = new Map();
for (const scorer of game.scored) {
    scorers.set(scorer, scorers.get(scorer) + 1 || 1);
}
console.log(scorers);
