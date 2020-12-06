//1. Array Destructuring
[fruit, vegetable, ...food] = ['banana', 'cucumber', 'bread', 'cakes', 'pizza'];
console.log(fruit);
console.log(vegetable);
console.log(food);

//2.Object Destructuring
({ tony, gregg, amor } = {
  tony: { costume: 'Zombie', kind: 'dog', age: 4 },
  gregg: { costume: 'Hulk', kind: 'human', age: 3 },
  amor: { costume: 'Witch', kind: 'bird', age: 30 },
});
console.log(tony);
console.log(gregg);
console.log(amor);

//3. Parameters: Object Destructuring
const profile = {
  name: 'Sliptknot',
  type: 'Band',
  genre: 'Metal',
  nationality: 'American',
  greatestHit: 'Wait and Bleed',
};
const displayBandDetails = (details) => {
  return `${details.name} is an ${details.nationality} ${details.type}. The ${details.type} plays ${details.genre} music and their greatest hit is ${details.greatestHit}.`;
};
displayBandDetails(profile);
