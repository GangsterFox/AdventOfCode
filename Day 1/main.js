const fs = require('fs');

function readInput() {
  let left = [];
  let right = [];
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split('\n');
  for (let line of lines) {
    if (line.trim() === '') continue; // Skip empty lines
    let values = line.split('   ');
    left.push(parseInt(values[0]));
    right.push(parseInt(values[1]));
  }

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  return [left, right];
}

function firstPart(left, right) {
  let distancesSum = 0;
  for (let i = 0; i < left.length; i++) {
    distancesSum += Math.abs(left[i] - right[i]);
  }

  return Math.abs(distancesSum);
}

function secondPart(left, right) {
  let productSum = 0;
  for (let lValue of left) {
    productSum += lValue * right.filter(num => num === lValue).length;
  }

  return productSum;
}

if (fs.existsSync('input.txt')) {
  let [left, right] = readInput();
  console.log('First part result: ' + firstPart(left, right));
  console.log('Second part result: ' + secondPart(left, right));
} else {
  console.log('input.txt file does not exist.');
}