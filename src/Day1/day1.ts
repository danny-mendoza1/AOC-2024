import * as fs from 'fs';

const filePath = './src/Day1/day1-input.txt'; // Correct path format

try {
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');

  const leftArray: number[] = [];
  const rightArray: number[]= [];

  lines.forEach(line => {
    const [leftNum, rightNum] = line.trim().split(/\s+/);
    leftArray.push(Number(leftNum))
    rightArray.push(Number(rightNum))
  })

  //sort both arrays in ascending order
  leftArray.sort((a,b) => a-b)
  rightArray.sort((a,b) => a-b)

  if(leftArray.length !== rightArray.length) {
    console.log("Arrays must have the same length")
  }
  else {
    let totalDistance = 0;

    for (let i=0; i < leftArray.length; i++) {
      const distance = Math.abs(leftArray[i] - rightArray[i])
      totalDistance += distance;
    }

    console.log("Total distance: ", totalDistance)
  }

} catch (err) {
  console.error('Error reading file:', err);
}


