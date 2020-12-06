
// Create a function called myFunction
//   that prints "im a function"

const fs = require('fs');
let basics = fs.readFileSync('easy_00.js');

eval(basics);

if ( typeof myFunction != 'function' ) throw new Error('myFuction is not a function');

myFunction();