
// find the LENGTH longest name in this array
//   and assign it to the variable longestNameLength

const fs = require('fs');
let basics = fs.readFileSync('medium_03.js');
eval(basics);

if ( longestNameLength !== 5 ) throw new Error('wrong answer');
