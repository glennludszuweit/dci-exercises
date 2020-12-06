// find the LENGTH longest name in this array
//   and assign it to the variable longestNameLength

var myNames = ['alice', 'bob', 'sam'];

var longestNameLength = myNames.reduce((result, value) => {
  if (value.length > result.length) {
    result = value.length;
  }
  return result;
}, '');

console.log(longestNameLength);
