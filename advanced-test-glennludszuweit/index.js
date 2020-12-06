// Answer Sheet - all answers should go here

////////// *** Objects ***

//1. Key Pair Values (5 Points)
let profileData = {
  name: 'Tony',
  surname: 'Paloni',
  age: 45,
  city: 'Milan',
};

//2. Object to Array (5 Points)
let convertObjectToArray = {
  1: 10,
  2: 20,
  3: 30,
};
Object.entries(convertObjectToArray);

////////// *** Arrays ***

//1. Data Manipulation (10 Points)
const convertArrayData = (originalArr) => {
  const a = 0;
  const b = 1;
  originalArr[a] = originalArr.splice(b, 1, originalArr[a])[0];
  originalArr[2] = 'milk';
  console.log(originalArr);
};
convertArrayData(['coffee', 'tea', 'juice']);

//2. Data Manipulation (15 Points)
const array1 = ['Berlin', 'Hamburg', 'Munich', 'Stuttgart', 'Düsseldorf'];
const array2 = [
  '891.68 km2',
  '755.3 km2',
  '310.7 km2',
  '207.35 km2',
  '217.41 km2',
];
const CovertArraysToObject = (key, value) => {
  let newObj = key.reduce((obj, key, index) => {
    obj[key] = value[index];
    return obj;
  }, {});
  return newObj;
};
CovertArraysToObject(array1, array2);

//3. Create Grid (10 Points)
const createGrid = (size, char) => {
  let childArr = new Array(size).fill(char);
  let parentArr = new Array(size).fill(childArr);
  console.log(parentArr.join('\n'));
};
createGrid(3, '*');

//4. Word Converter (10 Points)
let wordsArr = ['smart', 'kind', 'sweet', 'small', 'clear'];
const wordConverter = (array) => {
  let result = array.map((element) => {
    return element + 'er';
  });
  console.log(result);
};
wordConverter(wordsArr);

//5. Hour Calculation (10 Points)
const hourTracking = [
  { day: 'Monday', start: 8, end: 17 },
  { day: 'Tuesday', start: 9, end: 15 },
  { day: 'Wednesday', start: 10, end: 18 },
  { day: 'Thursday', start: 7, end: 14 },
  { day: 'Friday', start: 6, end: 12 },
];
const calculateHours = (values) => {
  let total = 0;
  values.forEach((value) => {
    let daily = value.end - value.start;
    total = total + daily;
  });
  console.log(total);
};
calculateHours(hourTracking);

////////// *** Classes (10 Points) ***
class Course {
  constructor(teacher, course, numOfStudents) {
    this.teacher = teacher;
    this.course = course;
    this.numOfStudents = numOfStudents;
  }

  spaceNeeded() {
    let roomSize = this.numOfStudents * 2;
    console.log(`The classroom should be ${roomSize}m²`);
  }

  details() {
    console.log(
      `This is a ${this.course} course taught by ${this.teacher}. There are ${this.numOfStudents} students taking the course.`
    );
  }
}

let course1 = new Course('Sebastian', 'web development', 10);
course1.spaceNeeded();
course1.details();

///////// *** Problem Solving ***

//1. Format your string (10 Points)
const capitalizeFirstLetter = (sentence) => {
  let array = sentence
    .split(' ')
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join(' ');
  console.log(array);
};
capitalizeFirstLetter('how are you?');

//2. Validation (15 Points)
const validPin = () => {};

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
  profileData,
  convertObjectToArray,
  convertArrayData,
  CovertArraysToObject,
  createGrid,
  wordConverter,
  calculateHours,
  Course,
  capitalizeFirstLetter,
  validPin,
};
