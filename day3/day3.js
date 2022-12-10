import { rl as readline } from "../index.js";

function splitRucksack(rucksack) {
    const divisor = (rucksack.length / 2);
    const firstCompartment = rucksack.slice(0, divisor);
    const secondCompartment = rucksack.slice(divisor);
    return [firstCompartment, secondCompartment];
}

function itemPriority(char) {
    if (char === char.toLowerCase()) {
        const code = 'a'.charCodeAt(0);
        return char.charCodeAt(0) - code + 1;
    } else {
        const code = 'A'.charCodeAt(0);
        return char.charCodeAt(0) - code + 27;
    }
}

function intersectionSum(firstCompartment, secondCompartment) {
    let result = 0;
    let intersection = firstCompartment.split("").filter(char => secondCompartment.includes(char));
    let uniqueIntersection = intersection.filter((element, index) => intersection.indexOf(element) === index);
    for (let i = 0; i < uniqueIntersection.length; i++) {
        result = result + itemPriority(uniqueIntersection[i]);
    }
    return result;
}

let totalPrioritiesSum = 0;

readline('day3/day3_input.txt').on('line', (line) => {
    console.log(`Itens in current rucksack: ${line}`);
    const compartments = splitRucksack(line);
    const prioritiesSum = intersectionSum(compartments[0], compartments[1]);
    console.log(`Current priorities sum is: ${prioritiesSum}`);
    totalPrioritiesSum = totalPrioritiesSum + prioritiesSum;
    console.log(`Total priorities sum is: ${totalPrioritiesSum}`);
});