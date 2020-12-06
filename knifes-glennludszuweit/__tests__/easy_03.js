
// Create a function called combineString
//   that adds two given string parameters with a space inbetween
//   return the result

const fs = require('fs');
let basics = fs.readFileSync('easy_03.js');
eval(basics);

if ( combineString('this','works') != 'this works' ) throw new Error('wrong answer');
