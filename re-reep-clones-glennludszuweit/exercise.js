// 1. Clone this object

const obj1 = {
  array: [1, 2, 3],
  value: 42,
  object: { value: 7 },
};

// 1.1. shallowly (only the upper level)

const shallowClone = { ...obj1 };

// 1.2. deeply ( all internal arrays and objects )

const deepClone = Object.assign(obj1);

// 2. Write a function that compares two values (a,b)

function shallowCompare(a, b) {
  return a === b;
}

shallowCompare(1, 'b');

// 2.2. Write a function that compares two values (a,b) deeply
//      meaning compare their contents ( hard, hint: recursion )
function deepCompare() {
  return JSON.stringify(shallowClone.array) === JSON.stringify(deepClone.array);
}

// 3.1. Create a function that pushes to the array
//      the object should be used by reference
const array1 = [];

function pushToClone(obj) {
  return array1.push(obj);
}

const pushedClone = pushToClone(obj1);

// 3.2. Create a function that pushed to the array
//      this time the original object and array
//      should not be altered

function pushToReference(obj) {
  return (obj2 = { ...obj });
}

const pushedReference = pushToReference(obj1);
