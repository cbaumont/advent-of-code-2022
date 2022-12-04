import { rl as readline } from "../index.js";

let totalCalories = 0;
let maxCalories = 0;
let caloriesElves = new Set();

const sumCalories = ((calories) => {
    totalCalories = totalCalories + calories;
})

const checkMaxCalories = (() => {
    caloriesElves.add(totalCalories);
    if (totalCalories >= maxCalories) {
        maxCalories = totalCalories;
    }
    console.log(`Top 1 elf is carrying in total ${maxCalories} calories.`);
    totalCalories = 0;
    topThreeElves();
})

const topThreeElves = (() => {
    const topElves = [...caloriesElves];
    topElves.sort(function (a, b) { return b - a });
    let sumTopCalories = 0;
    for (const value of topElves.slice(0, 3)) {
        sumTopCalories += value;
    }
    console.log(`Top 3 elves are carrying in total ${sumTopCalories} calories.`);
})

readline('day1/day1_input.txt').on('line', (line) => {
    line !== '' ? sumCalories(parseInt(line)) : checkMaxCalories();
});
