
// Create a function called convertToNumbers
//      that takes an array as an argument and
//      turns every element (being a string) into a number
//   return the resulting array

const fs = require('fs');
let basics = fs.readFileSync('medium_00.js');
eval(basics);

if ( convertToNumbers(['1','2','3'])[0] !== 1 ) throw new Error('wrong answer');
if ( convertToNumbers(['1','2','3'])[1] !== 2 ) throw new Error('wrong answer');
if ( convertToNumbers(['1','2','3'])[2] !== 3 ) throw new Error('wrong answer');
