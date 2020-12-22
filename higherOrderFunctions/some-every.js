let arr = [2, 2, 2, 2, 2, 2, 2, 2];
let arr2 = [333333, 5, 7, 9];
let arr3 = [12, 546345, 87568, 0, 435, 423523];
var arr4 = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];
/* hasOddNumber */
function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}
/* hasZero */
function hasAZero(arr) {
  return arr.some(function (val) {
    return val === 0;
  });
}
/* hasOnlyOddNumbers */
function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}
/* hasNoDupicates */
function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
/* hasCertainKey */

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return key in val;
  });
}
/* has Certain Value */

function hasCertainValue(arr, key, value) {
  return arr.every(function (val) {
    return val[key] === value;
  });
}
