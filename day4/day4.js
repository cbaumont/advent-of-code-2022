import { fileToArray as fileToArray } from "../index.js";

let containedPairs = 0;
let overlappingPairs = 0;

function isContainedPair(pairs) {
    const pairsArray = pairs.split(',');
    const firstPair = extractNumbersFromPair(pairsArray.shift());
    const secondPair = extractNumbersFromPair(pairsArray.pop());
    if ((secondPair[0] >= firstPair[0] && secondPair[1] <= firstPair[1]) ||
        (firstPair[0] >= secondPair[0] && firstPair[1] <= secondPair[1])) {
        return true;
    }
    return false;
}

function isOverlappingPair(pairs) {
    const pairsArray = pairs.split(',');
    const firstPair = extractNumbersFromPair(pairsArray.shift());
    const secondPair = extractNumbersFromPair(pairsArray.pop());
    if ((firstPair[1] >= secondPair[0]) &&
        (secondPair[1] >= firstPair[0])) {
        return true;
    }
    return false;
}

function extractNumbersFromPair(pair) {
    const sections = pair.split('-');
    const firstSection = Number.parseInt(sections[0]);
    const secondSection = Number.parseInt(sections[1]);
    return [firstSection, secondSection];
}

fileToArray('day4/day4_input.txt').then(array => {
    array.forEach(element => {
        if (isContainedPair(element)) {
            containedPairs += 1;
        }
        if (isOverlappingPair(element)) {
            overlappingPairs += 1;
        }
    });
    console.log(`Number of pairs where one fully contain the other: ${containedPairs}`);
    console.log(`Number of overlapping pairs: ${overlappingPairs}`);
}).catch(error => {
    console.error(error);
});