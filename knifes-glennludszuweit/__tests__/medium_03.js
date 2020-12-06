
// find the longest name in this array
//   and assign it to the variable longestName

const fs = require('fs');
let basics = fs.readFileSync('medium_03.js');
eval(basics);

if ( longestName !== 'alice' ) throw new Error('wrong answer');
