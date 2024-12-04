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
console.log(`Total part 1: ${occurrences}`); 

// part 2, code taken from ajm-gov, Sorry but I started getting brain damage

function partTwo(grid) {
    let totalCount = 0;
    const rows = grid.length;
    const cols = grid.at(0).length;

    // Loop through grid to assess the X shape of each letter that is within the X boundaries
    for (let row = 1; row < rows - 1; row++) {
        for (let col = 1; col < cols - 1; col++) {
            // Form a string based on the "X" shape for the current row,col position
            const xGridString = grid[row - 1][col - 1] + grid[row][col] + grid[row + 1][col + 1] + grid[row - 1][col + 1] + grid[row][col] + grid[row + 1][col - 1];

            // These strings will form an acceptable X grid
            const acceptableXGrids = ["SAMSAM", "SAMMAS", "MASSAM", "MASMAS"]

            if (acceptableXGrids.includes(xGridString)) {
                totalCount++;
            }
        }
    }

    console.log("Part two solution is ", totalCount);
}

partTwo(grid);