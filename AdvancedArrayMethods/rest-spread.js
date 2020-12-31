/* refactor */
const arr = [1234, 21, 32, -4, 555656, -5466];
function filterOutOdds(arr, ...arguments) {
  return arr.filter((num) => num % 2 === 0);
}

/* findMin */
function findMin(arr, ...arguments) {
  let x = arr.sort((a, b) => a - b);
  console.log(x);
  return x[0];
}

/* mergeObjects */
let first = { a: 1, b: 2 };
let second = { c: 3, d: 4 };
function mergeObjects(first, second) {
  const combined = { ...first, ...second };
  console.log(combined);
  return combined;
}

/* Double and return */
function doubleAndReturnArgs(arr, ...extra) {
  let x = extra.join("").split("");
  let y = x.map(function (val) {
    return val * 2;
  });
  console.log(...arr, y);
  return [...arr, ...y];
}
/** remove a random element in the items array
and return a new array without that item. */

items = [123, 435345, 76, 87687, 4567, 4567, 5436, 4536];

function removeRandom(items) {
  let a = items[Math.floor(Math.random() * items.length)];
  items.splice(items[a], 1);
  return items;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}
