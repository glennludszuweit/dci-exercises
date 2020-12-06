
const fs = require('fs');
let basics = fs.readFileSync('basics.js');

eval(basics);

if ( hello !== 'Hello' ) throw new Error('hello is not correct');
if ( world !== 'World' ) throw new Error('world is not correct');
if ( helloWorld !== 'Hello World' ) throw new Error('helloWorld is not correct');
if ( sayHelloWorld !== 'Hello World' ) throw new Error('sayHelloWorld is not correct');
