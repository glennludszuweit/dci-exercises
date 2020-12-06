//1.)
// for (i = 1; i <= 5; i++) {
//   let angle = '';
//   for (j = 0; j < i; j++) {
//     angle += '* ';
//   }
//   console.log(angle);
// }

for (let i = '*'; i.length <= 10; i += '*') {
  console.log(i);
}

//2.)
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i = 0; i < arr.length; i++) {
  const row = arr[i];
  console.log('row ' + i);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

//3.)
let nums = '';
let result = '';
let result2 = '';
for (let i = 0; i <= 4; i++) {
  nums = nums + i;
  result2 = nums.repeat(nums.length);
}
for (let j = 1; j <= 4; j++) {
  result = result + nums[j].repeat(3);
}
console.log(result);
console.log(result2);
