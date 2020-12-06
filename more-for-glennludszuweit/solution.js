//1. **Addition.**
let addNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
addNumbers([2, 5, 6, 7, 43, 56]);

//2. **There are i bottles of beer on the wall.**
let beers = (beerCount) => {
  for (let i = 1; i <= beerCount; i++) {
    if (i === 1) {
      console.log(`There is ${i} bottle of beer on the wall.`);
    } else {
      console.log(`There are ${i} bottles of beer on the wall.`);
    }
  }
};
beers(5);

//3. **The odd/even reporter.**
let oddOReven = (count) => {
  for (let i = 0; i <= count; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is an EVEN number`);
    } else {
      console.log(`${i} is an ODD number`);
    }
  }
};
oddOReven(20);

//4. **Multiplication Tables.**
let multiplicationTable = (times) => {
  let rows = times;
  let start;
  let columns = '';
  for (let i = 1; i <= rows; i++) {
    columns = '';
    start = i;
    for (let j = 0; j < rows; j++, columns += (j * start).toString() + '	');
    console.log(columns);
  }
};
multiplicationTable(10);

//5. **Fizz Buzz**
let fizzBuzz = (highestCount) => {
  for (let i = 0; i < highestCount; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(100);

//6. **Sum of Multiples**
let sumOfMultiples = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
};
sumOfMultiples(1000);

//7. **Bonus**
/////// 7.1
let displayHundrets = (counter) => {
  let hunderts = '';
  for (let i = 1; i <= counter; i++) {
    hunderts = hunderts + i * 100 + ' ';
  }
  console.log(hunderts);
};
displayHundrets(10);
/////// 7.2
let numberByTwo = (counter) => {
  let result = '';
  for (let i = 1; i <= counter; i *= 2) {
    result = result + i + ' ';
  }
  console.log(result);
};
numberByTwo(130);
/////// 7.3
let divisbleByTwo = (counter) => {
  let result = '';
  for (let i = 0; i <= counter; i++) {
    if (i % 2 === 0) {
      result = result + i + ' ';
    }
  }
  console.log(result);
};
divisbleByTwo(10);
/////// 7.4
let divisbleByThree = (counter) => {
  let result = '';
  for (let i = 1; i <= counter; i++) {
    if (i % 3 === 0) {
      result = result + i + ' ';
    }
  }
  console.log(result);
};
divisbleByThree(15);
/////// 7.5
let reverseCount = (counter) => {
  let numbers = '';
  for (let i = counter; i >= 0; i--) {
    numbers = numbers + i + ' ';
  }
  console.log(numbers);
};
reverseCount(9);
/////// 7.6
let repeatIndex = (counter) => {
  let result = '';
  for (let j = 1; j <= counter; j++) {
    j = j + ' ';
    result = result + j.repeat(3);
  }
  console.log(result);
};
repeatIndex(4);
/////// 7.7
let repeatValue = (counter) => {
  let result = '';
  for (let i = 0; i < counter; i++) {
    result = result + i + ' ';
  }
  console.log(result.repeat(counter));
};
repeatValue(4);

//8. **isPalindrome.**
let palidrome = (word) => {
  let reversed = word
    .split('')
    .reverse()
    .join('')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '');
  let unreversed = word
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '');
  if (reversed == unreversed) {
    console.log(`'${word}' - is a palidrome`);
  } else {
    console.log(`'${word}' - is not a palidrome`);
  }
};
palidrome('Now saw ye no mosses or foam, or aroma of roses. So money was won.');
