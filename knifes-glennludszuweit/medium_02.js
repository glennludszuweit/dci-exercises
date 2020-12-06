// Convert this given array
//  into an array of greetings
//   add 'hi ' before each name
//  using the map function

var myNames = ['alice', 'bob', 'sam'];

var myGreetings = myNames.map((name) => {
  let greetName = 'hi ' + name;
  return greetName;
});

console.log(myGreetings);
