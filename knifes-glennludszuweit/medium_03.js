// find the longest name in this array
//   and assign it to the variable longest name

var myNames = ['alice', 'bob', 'sam'];

var longestName = myNames.reduce((result, value) => {
  if (value.length > result.length) {
    result = value;
  }
  return result;
}, '');
console.log(longestName);
