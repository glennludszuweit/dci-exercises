const calculatePoints = (wins, draws, losses) => {
  let result = wins * 3 + draws + losses * 0;
  console.log(result);
  return result;
};
calculatePoints(3, 2, 4);
