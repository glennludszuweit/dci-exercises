
// Create a function called getAverage
//   that calculates the average of 3 given numbers
//   return the result

const fs = require('fs');
let basics = fs.readFileSync('easy_04.js');
eval(basics);

if ( getAverage(1,2,3) != 2 ) throw new Error('wrong answer');
