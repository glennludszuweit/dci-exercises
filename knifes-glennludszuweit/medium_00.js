// Create a function called convertToNumbers
//      that takes an array as an argument and
//      turns every element (being a string) into a number
//   return the resulting array

let stringNums = ['1', '2', '3', '4', '5'];

let realNums = stringNums.map(convertToNumbers);

function convertToNumbers(numbers) {
  return Number(numbers);
}

console.log(realNums);
