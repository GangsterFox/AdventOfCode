const fs = require("fs");
const input = fs.readFileSync("./input", "utf-8").split("\n");

const grid = input.map(line => line.split(''));

const target = "XMAS";
const targetLength = target.length;

function checkDirection(grid, row, col, rowDir, colDir) {
    for (let i = 0; i < targetLength; i++) {
        const newRow = row + i * rowDir;
        const newCol = col + i * colDir;
        if (newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[0].length || grid[newRow][newCol] !== target[i]) {
            return false;
        }
    }
    return true;
}

function countOccurrences(grid) {
    let count = 0;
    const directions = [
        [0, 1],   
        [0, -1],  
        [1, 0],   
        [-1, 0],  
        [1, 1],   
        [1, -1],  
        [-1, 1],  
        [-1, -1]  
    ];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            for (const [rowDir, colDir] of directions) {
                if (checkDirection(grid, row, col, rowDir, colDir)) {
                    count++;
                }
            }
        }
    }

    return count;
}
const occurrences = countOccurrences(grid);
console.log(`Total: ${occurrences}`);