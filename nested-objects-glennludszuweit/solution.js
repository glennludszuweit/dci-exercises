//1. 2D Array
let board = [
  [1, 2, 3],
  ['quick', 'brown', 'fox', 'jumped', 'over', 'lazy', 'dog'],
  [true, false],
];

board.forEach((el) => {
  el.forEach((data) => console.log(data));
});

console.log('----------------------------------');

//2. Doggo
const doggo = {
  name: 'Tony',
  breed: 'Patterdale Terrier',
  'favorite foods': ['chicken', 'sausage', 'bakers treats', 'dentastix'],
};

const fav = doggo['favorite foods'][1];
console.log(fav);

doggo.printFavFoods = () => {
  doggo['favorite foods'].forEach((food) => {
    console.log(food);
  });
};
doggo.printFavFoods();

//3. Recipes
const recipes = {
  ingredients: {
    butter: '1 cup',
    sugar: '1/2 cup',
    flour: '4 cups',
  },
};

recipes.ingredients.ginger = '1 tps';

recipes.ingredients['brown sugar'] = recipes.ingredients['sugar'];
delete recipes.ingredients['sugar'];

recipes.printIngredients = () => {
  Object.values(recipes.ingredients).forEach((ingredient) => {
    console.log(ingredient);
  });
};
recipes.printIngredients();
