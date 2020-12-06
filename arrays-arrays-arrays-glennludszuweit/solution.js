///////// **** Arrays ****
//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];

//2. Change the first item in the array to "Berlin".
euroCities[0] = 'Berlin';

//3. Print the length of the array "euroCities".
console.log(euroCities.length);

//4. Remove the last item of the array "euroCities".
euroCities.pop();

//5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push('Budapest');

//6. Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = [
  'Manila',
  'Tokyo',
  'Bangkok',
  'Jakarta',
  'Kuala Lumpur',
  'Hongkong',
];

//8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let slicedAsianCities = asianCities.slice(1, 4);

//9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);

//10. Reverse the order of worldCities.
worldCities.reverse();

//11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = 'Toronto';

//12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, 'Washington');

//13. Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
let worldCitiesString = (array) => {
  return array.join(', ');
};
worldCitiesString(worldCities);

///////// **** Bonus ****
//1. Write a program to reverse the string: "Hello World".
let wordReverse = (word) => {
  console.log(word.split('').reverse().join(''));
};
wordReverse('Hello World');

///////// **** Extra Practice ****
// Print the results to the console.
//1. Make an array of your siblings' names or your favorite movie characters' names.
const mySiblings = ['Tanya', 'Tara', 'Trisha', 'Jeff', 'Serge', 'Nicky'];
console.log(mySiblings);
//2. Make an array of your parents' names.
const myParents = ['Perlie', 'Daniel'];
console.log(myParents);
//3. Combine these two arrays.
const myFamily = myParents.concat(mySiblings);
console.log(myFamily);
//4. Add your pets' names.
myFamily.push('Tony', 'Boris', 'Missy');
console.log(myFamily);
//5. Reverse the order of the array.
myFamily.reverse();
console.log(myFamily);
//6. Access one of your parents' names.
console.log(myParents[1]);
//7. Update the name of one of your parents.
myFamily[9] = 'Richard';
console.log(myFamily);
