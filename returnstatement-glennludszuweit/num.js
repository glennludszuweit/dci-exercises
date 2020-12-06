let numArr = [23, 43, 12, 46, 93];

let minMax = (array) => {
  let result = `${Math.min(...array)} ${Math.max(...array)}`;
  console.log(result);
  return result;
};

minMax(numArr);
