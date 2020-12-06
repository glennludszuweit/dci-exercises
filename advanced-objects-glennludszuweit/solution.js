//1. Check if a number is within a given range.
let withinRange = (number, range) => {
  if (number <= range.min || number <= range.max) {
    return true;
  }
  return false;
};
withinRange(0, { min: 0, max: 5 });

//2. Scrabble.
let scrabble = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
  { tile: 'E', score: 1 },
];
const scrabbleTotalScore = (values) => {
  let totalScore = 0;
  values.forEach((value) => {
    totalScore = totalScore + value.score;
  });
  console.log(totalScore);
};
scrabbleTotalScore(scrabble);

//3. Is it an empty object?
const emptyOrNot = (obj) => {
  if (Object.entries(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};
emptyOrNot({ samuel: 'Hacker' });

//4. Counting Letters.
const countSameLetters = (str) => {
  let newArray = Array.from(str);
  let countsOfLetters = {};
  newArray.forEach((el) => {
    countsOfLetters[el] = (countsOfLetters[el] || 0) + 1;
  });
  console.log(countsOfLetters);
};
countSameLetters('tree');

//5. Free Shipping.
const freeShipping = (orderDetails) => {
  let totalCost = 0;
  Object.values(orderDetails).forEach((order) => {
    totalCost = totalCost + order;
  });
  if (totalCost > 50) {
    return true;
  } else {
    return false;
  }
};
freeShipping({ Wool: 50, 'Knitting Needles': 15.5, Bag: 13.99 });

//6. Programming Object.
const programming = {
  languages: ['JavaScript', 'Python', 'Ruby'],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',
};

programming.languages.push('Go');

programming.difficulty = 7;

delete programming.jokes;

programming.isFun = true;

programming.languages.forEach((language) => {
  console.log(language);
});

Object.keys(programming).forEach((key) => console.log(key));

Object.values(programming).forEach((value) => console.log(value));

const printReward = () => {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: "JavaScript, Python, Ruby, Go is rewarding and challenging.`;
  } else {
    return 'No reward!';
  }
};
console.log(printReward());

//BONUS
Object.seal(programming);
