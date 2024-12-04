const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

let counter = 0;

const rows = input.trim().split("\n");

rows.forEach(row => {
    const numbers = row.split(" ").map(Number);
    let isIncreasing = true;
    let isDecreasing = true;
    let isValid = true;
    let tolerance = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) {
            isIncreasing = false;
        }
        if (numbers[i] >= numbers[i - 1]) {
            isDecreasing = false;
        }
        if (Math.abs(numbers[i] - numbers[i - 1]) < 1 || Math.abs(numbers[i] - numbers[i - 1]) > 3) {
            tolerance++;
            if (tolerance > 1) {
                isValid = false;
                break;
            }
        }
    }

    if (!isValid) {
        for (let j = 0; j < numbers.length; j++) {
            const newNumbers = numbers.slice(0, j).concat(numbers.slice(j + 1));
            isIncreasing = true;
            isDecreasing = true;
            isValid = true;
            tolerance = 0;

            for (let i = 1; i < newNumbers.length; i++) {
                if (newNumbers[i] <= newNumbers[i - 1]) {
                    isIncreasing = false;
                }
                if (newNumbers[i] >= newNumbers[i - 1]) {
                    isDecreasing = false;
                }
                if (Math.abs(newNumbers[i] - newNumbers[i - 1]) < 1 || Math.abs(newNumbers[i] - newNumbers[i - 1]) > 3) {
                    tolerance++;
                    if (tolerance > 1) {
                        isValid = false;
                        break;
                    }
                }
            }

            if (isValid && (isIncreasing || isDecreasing)) {
                isValid = true;
                break;
            } else {
                isValid = false;
            }
        }
    }

    if (isValid && (isIncreasing || isDecreasing)) {
        counter++;
    }
});

console.log("Total: ", counter);