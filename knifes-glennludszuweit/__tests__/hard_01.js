

// find the combined (total) LENGTH of all strings
//   in myNames and assign it to totalLength

const fs = require('fs');
let basics = fs.readFileSync('hard_01.js');
eval(basics);

if ( totalLength !== 11 ) throw new Error('wrong answer');
