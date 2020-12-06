// Add answers here

////////// *** Conditional Algorithms ***

//1. Los or New?
const nameOfCity = (city) => {
  result = city.toLowerCase();
  if (result.includes('los') || result.includes('new')) {
    console.log(city);
  } else {
    console.log('The city name does not begin with Los or New');
  }
};
nameOfCity('Newcastle');

//2. isDivisible?
const isDivisible = (number) => {
  if (number % 100 === 0) {
    return true;
  } else {
    return false;
  }
};
isDivisible(200);

//3. Missing Angle
const missingAngle = (first, second) => {
  let calculation = 180 - (first + second);
  if (calculation > 90 && calculation < 180) {
    return 'obtuse';
  } else if (calculation === 90) {
    return 'right angle';
  } else if (calculation < 90) {
    return 'acute';
  }
};
missingAngle(10, 10);

//4. What's the weather?
const isRaining = (value) => {
  return value
    ? 'wet day - you need an umbrella!'
    : 'dry day - leave your umbrella at home!';
};
console.log(isRaining(true));

////////// *** Loops ***

//1. Sequence
const geometricalSequence = (repeat) => {
  stringSeq = [];
  for (let i = 1; i < Math.pow(2, repeat); i *= 2) {
    stringSeq.push(i);
  }
  console.log(stringSeq.join(' '));
};
geometricalSequence(9);

//2. Multiples
const multiplesOfThree = (max) => {
  stringSeq = [];
  for (let i = 3; i <= max; i += 3) {
    stringSeq.push(i);
  }
  console.log(stringSeq.join(' '));
};
multiplesOfThree(15);

////////// *** Math ***

//1. You've got the power
const powerOf = (number) => {
  return Math.pow(number, number);
};
powerOf(5);

////////// *** Problem Solving ***

//1. How many?
const vowelCount = (str) =>
  Array.from(str).filter((letter) => 'aeiouAEIOU'.includes(letter)).length;
vowelCount('test');

// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {
  nameOfCity,
  isDivisible,
  missingAngle,
  isRaining,
  geometricalSequence,
  multiplesOfThree,
  powerOf,
  vowelCount,
};
