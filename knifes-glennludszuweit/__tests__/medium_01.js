
// Create a function called returnSecond
//   that takes an array as an argument
//   and returns the second element
//    hint : [1] (we start counting at zero)

const fs = require('fs');
let basics = fs.readFileSync('medium_01.js');
eval(basics);

if ( returnSecond(['1','2','3']) !== 2 ) throw new Error('wrong answer');
