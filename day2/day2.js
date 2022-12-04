import { rl as readline } from "../index.js";

let totalScore = 0;

function getShapeScore(shape) {
    if (shape === 'A' || shape === 'X') {
        return 1;
    }
    if (shape === 'B' || shape === 'Y') {
        return 2;
    }
    if (shape === 'C' || shape === 'Z') {
        return 3;
    }
    return 0;
}

function calculateScore(match) {
    const opponent = match.charAt(0);
    const strategy = match.charAt(2);
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

readline('day2/day2_input.txt').on('line', (line) => {
    console.log(line);
    console.log(`The total score is ${calculateScore(line)}`);
});
