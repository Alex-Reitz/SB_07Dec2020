/* What does this code return? */
/* let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts; */
/* The first line returns 8 */
/* The second line returns 1846 */

/* What does this code return? */

/* let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts; */

/* returns 8, followed by the other two properties in the object */

/* What does the following code print? */
/* function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
} */

/* The first example: getUserData({firstName: "Alejandro", favoriteColor: "purple"}) returns :Your name is Alejandro and you like purple" */
/* The second example:  getUserData({firstName: "Melissa"}) returns: the same thing as above but with green since green is the default and not value was specified*/
/* The third example: getUserData({}) returns: Your name is undefined and you like green, there is no default firstname defined in the function */

/* Array destructuring */
/* let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); //Maya
console.log(second); // Marisa
console.log(third); // Chi */

/* let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); //Returns "Raindrops on roses"
console.log(whiskers); //Returns "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); //Returns the rest of the array after the first two indexes
 */

/* let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); //Switches the places of 20 and 30 in the array
 */

/* Refactor */
/* var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
const { a, b } = obj.numbers; */

/* Swap */
/* var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], (arr[1] = arr[1]), arr[0]];
console.log(arr[0], arr[1]);
 */
/* arr = [1, 2, 3, 4, 5, 6];
const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
}); */
