import { rl as readline } from "../index.js";

let totalScore = 0;
let totalScorePartTwo = 0;

function getShapeScore(shape) {
    if (shape === 'A' || shape === 'X') { //rock
        return 1;
    }
    if (shape === 'B' || shape === 'Y') { //paper
        return 2;
    }
    if (shape === 'C' || shape === 'Z') { //scissors
        return 3;
    }
    return 0;
}

function calculateScore(round) {
    const opponent = round.charAt(0);
    const strategy = round.charAt(2);
    const shapeScore = getShapeScore(strategy);
    if (getShapeScore(opponent) === shapeScore) {
        totalScore = totalScore + 3 + shapeScore;
        return totalScore;
    }
    if (opponent === 'A') {
        if (strategy === 'Y') {
            totalScore = totalScore + 6 + shapeScore;
        } else totalScore = totalScore + shapeScore;
    }
    if (opponent === 'B') {
        if (strategy === 'Z') {
            totalScore = totalScore + 6 + shapeScore;
        } else totalScore = totalScore + shapeScore;
    }
    if (opponent === 'C') {
        if (strategy === 'X') {
            totalScore = totalScore + 6 + shapeScore;
        } else totalScore = totalScore + shapeScore;
    }
    return totalScore;
}

function calculateScorePartTwo(round) {
    const opponent = round.charAt(0);
    const strategy = round.charAt(2);
    if (strategy === 'Y') { //draw
        totalScorePartTwo = totalScorePartTwo + 3 + getShapeScore(opponent);
    }
    if (strategy === 'X') { //lose
        if (opponent === 'A') {
            totalScorePartTwo = totalScorePartTwo + getShapeScore('C');
        } else if (opponent === 'B') {
            totalScorePartTwo = totalScorePartTwo + getShapeScore('A');
        } else totalScorePartTwo = totalScorePartTwo + getShapeScore('B');
    }
    if (strategy === 'Z') { //win
        if (opponent === 'A') {
            totalScorePartTwo = totalScorePartTwo + 6 + getShapeScore('B');
        } else if (opponent === 'B') {
            totalScorePartTwo = totalScorePartTwo + 6 + getShapeScore('C');
        } else totalScorePartTwo = totalScorePartTwo + 6 + getShapeScore('A');
    }
    return totalScorePartTwo;
}

readline('day2/day2_input.txt').on('line', (line) => {
    console.log(`Strategy for this round is: ${line}`);
    console.log(`The total score for part one is ${calculateScore(line)}`);
    console.log(`The total score for part two is ${calculateScorePartTwo(line)}`);
});
