const fs = require("fs");
const input = fs.readFileSync("./input", "utf-8");

function multiply(a, b) {
    return a * b;
}

const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
const totalNumber = 0;
let result = totalNumber;

const matches = input.match(regex);
let shouldSkip = false;

if (matches) {
    matches.forEach(match => {
        if (match === "do()") {
            shouldSkip = false;
        } else if (match === "don't()") {
            shouldSkip = true;
        } else if (!shouldSkip) {
            const numbers = match.match(/\d+/g).map(Number);
            result += multiply(numbers[0], numbers[1]);
        }
    });
}

console.log("Total: " + result);