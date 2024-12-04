const fs = require("fs");
const input = fs.readFileSync("./input", "utf-8");

function multiply(a, b) {
    return a * b;
}

const regex = /mul\(\d+,\d+\)/g;
const totalNumber = 0;
let result = totalNumber;

const matches = input.match(regex);
if (matches) {
    matches.forEach(match => {
        const numbers = match.match(/\d+/g).map(Number);
        result += multiply(numbers[0], numbers[1]);
    });
}

console.log("Total: " + result);