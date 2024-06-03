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

for (let i = 0; i < game.scored.length; i++) {
    //console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

const averageOdds = calcAverage(Object.values(game.odds));

const scorers = new Map();
for (const scorer of game.scored) {
    scorers.set(scorer, scorers.get(scorer) + 1 || 1);
}

// ------------------------------ challenge 3 ------------------------------

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card']
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const eventPeriodicity = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${eventPeriodicity} minutes`);

for (const [minute, event] of gameEvents) {
    const currentPeriod = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${currentPeriod}] ${minute}: ${event}`);
}
