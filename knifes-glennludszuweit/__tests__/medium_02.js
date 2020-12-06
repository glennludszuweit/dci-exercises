
// Convert this given array
//  into an array of greetings
//   add 'hi ' before each name
//  using the map function

const fs = require('fs');
let basics = fs.readFileSync('medium_02.js');
eval(basics);

if ( myGreetings[0] !== 'hi alice' ) throw new Error('wrong answer');
if ( myGreetings[1] !== 'hi bob'   ) throw new Error('wrong answer');
if ( myGreetings[2] !== 'hi sam'   ) throw new Error('wrong answer');
