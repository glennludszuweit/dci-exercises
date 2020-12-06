
// Create a function called add VAT
//   that adds the current VAT (16 percent) to the firs argument
//   return the result

const fs = require('fs');
let basics = fs.readFileSync('easy_04.js');
eval(basics);

if ( Math.round(VAT(100)) != 116 ) throw new Error('wrong answer');
