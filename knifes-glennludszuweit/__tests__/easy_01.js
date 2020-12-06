
// Create a function called addOne
//   that adds one to a number given as first parameter
//   return the result

const fs = require('fs');
let basics = fs.readFileSync('easy_01.js');

eval(basics);

if ( addOne(5) != 6 ) throw new Error('wrong answer');
