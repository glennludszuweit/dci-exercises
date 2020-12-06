
// Create a function called sum
//   that adds two given parameters
//   return the result

const fs = require('fs');
let basics = fs.readFileSync('easy_01.js');

eval(basics);

if ( sum(5,1) != 6 ) throw new Error('wrong answer');
