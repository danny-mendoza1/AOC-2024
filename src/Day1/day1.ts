import * as fs from 'fs';

const filePath = './src/Day1/day1-input.txt'; // Correct path format

// Read the file synchronously
try {
  const data = fs.readFileSync(filePath, 'utf-8');
  
  // Store the data in a variable and print it
  const numbers = data.split('\n').map(line => parseInt(line.trim()));
  console.log('Parsed Numbers:', numbers);
} catch (err) {
  console.error('Error reading file:', err);
}
