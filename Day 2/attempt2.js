// thanks to sadan4 for his code, I couldnt figure out why it would output more than 689

const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "./input"), "utf-8");

function recursiveArrToInt(arr) {
    return arr.map((el) => Array.isArray(el) ? recursiveArrToInt(el) : parseFloat(el));
}

function isSafe(n, guh = false) {
    const first = n[0];
    const last = n[n.length - 1];
    let shouldIncrease = first < last;
    for (let i = 1; i < n.length; i++) {
        let [a, b] = n.slice(i - 1, i + 1);
        let diff = b - a;
        if (!shouldIncrease) diff = -diff;
        if (diff === 1 || diff === 2 || diff === 3) continue;

        return false;
    }
    return true;
}

function isSavep2(n) {
    for (let i = 0; i < n.length; i++) {
        const a = [...n.slice(0, i), ...n.slice(i + 1)];
        if (isSafe(a)) return true;
    }
    return false;
}

let lines = input.split("\n");
lines.pop();

const lines2 = lines.map(l => l.split(" "));

const linesasnums = recursiveArrToInt(lines2);

const tests = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]
];

console.log(tests);
const testResults = tests.map(x => isSavep2(x));
console.log(testResults);
const safe = linesasnums.filter(x => isSavep2(x));
console.log(safe.length);