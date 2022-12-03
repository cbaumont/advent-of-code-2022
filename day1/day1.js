const fs = require('node:fs');
const readline = require('node:readline');

const rl = readline.createInterface({
    input: fs.createReadStream('day1/day1_input.txt'),
    crlfDelay: Infinity,
});

let totalCalories = 0;
let maxCalories = 0;

const sumCalories = ((calories) => {
    totalCalories = totalCalories + calories;
})

const checkMaxCalories = (() => {
    if (totalCalories >= maxCalories) {
        maxCalories = totalCalories;
    }
    console.log(maxCalories);
    totalCalories = 0;
})

rl.on('line', (line) => {
    line !== '' ? sumCalories(parseInt(line)) : checkMaxCalories();
});
