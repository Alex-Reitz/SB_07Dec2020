/* extract Value */

const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

/* vowelCount */

let str = "Hello there";

function vowelCount(str) {
  const vowels = "aeiou";
  return str.split("").reduce(function (acc, next) {
    let lowerCased = next.toLowerCase();
    if (vowels.indexOf(lowerCased) !== -1) {
      if (acc[lowerCased]) {
        acc[lowerCased]++;
      } else {
        acc[lowerCased] = 1;
      }
    }
    return acc;
  }, {});
}

/* addKeyAndValue */

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

/* partition */
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOdd(val) {
  return val % 2 !== 0;
}

function partition(arr, cb) {
  return arr.reduce(
    function (acc, next) {
      if (cb(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}
