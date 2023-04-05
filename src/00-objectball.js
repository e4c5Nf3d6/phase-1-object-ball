function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }
}

function numPointsScored(name) {
    let pointsScored;
    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            if (player === name) {
                pointsScored = gameObject()[team].players[player].points;
            }
        }
    };
    return pointsScored
}

function shoeSize(name) {
    let size;
    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            if (player === name) {
                size = gameObject()[team].players[player].shoe;
            }
        }
    };
    return size
}

function teamColors(name) {
    let colorsOfTeam;
    for (const team in gameObject()) {
        if (gameObject()[team].teamName === name) {
            colorsOfTeam = gameObject()[team].colors;
        }
    }
    return colorsOfTeam;
}

function teamNames() {
    let namesOfTeams = [];
    for (const team in gameObject()) {
        namesOfTeams.push(gameObject()[team].teamName)
    }
    return namesOfTeams;
}

function playerNumbers(nameOfTeam) {
    let nums = [];
    for (const team in gameObject()) {
        if (gameObject()[team].teamName === nameOfTeam) {
            for (const player in gameObject()[team].players) {
                nums.push(gameObject()[team].players[player].number)
            }
        }
    }
    return nums;
}

function playerStats(playerName) {
    let statsOfPlayer;
    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            if (player === playerName) {
                statsOfPlayer = gameObject()[team].players[playerName]
            }
        }
    }
    return statsOfPlayer;
}

function bigShoeRebounds() {
    let bigShoe = 0;
    let bigShoeRebounds;

    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            let playerShoe = gameObject()[team].players[player].shoe;
            let playerRebounds = gameObject()[team].players[player].rebounds;
            if (playerShoe > bigShoe) {
                bigShoe = playerShoe;
                bigShoeRebounds = playerRebounds
            }
        }    
    }
    return bigShoeRebounds
}

function mostPointsScored() {
    let mostPoints = 0;
    let mostPointsPlayer;

    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            let playerName = player;
            let playerPoints = gameObject()[team].players[player].points;
            if (playerPoints > mostPoints) {
                mostPoints = playerPoints;
                mostPointsPlayer = playerName
            }
        }    
    }
    return mostPointsPlayer
}

function winningTeam() {
    let pointsTotal = 0;
    let winningName;
    for (const team in gameObject()) {
        let teamPointsTotal = 0;
        for (const player in gameObject()[team].players) {
            let playerPoints = gameObject()[team].players[player].points;
            teamPointsTotal = teamPointsTotal + playerPoints;
        }
        if (teamPointsTotal > pointsTotal) {
            pointsTotal = teamPointsTotal;
            winningName = gameObject()[team].teamName;
        }
    }
    return winningName
}

function playerWithLongestName() {
    let longestName = "";
    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            nameLength = player.length;
            if (nameLength > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName
}

function doesLongNameStealATon() {
    let mostSteals = 0;
    let mostStealsPlayer;

    for (const team in gameObject()) {
        for (const player in gameObject()[team].players) {
            let playerName = player;
            let playerSteals = gameObject()[team].players[player].steals;
            if (playerSteals > mostSteals) {
                mostSteals = playerSteals;
                mostStealsPlayer = playerName
            }
        }    
    }
    
    if (mostStealsPlayer === playerWithLongestName()) {
        return true;
    } else {
        return false;
    }
}