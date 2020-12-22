let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Double Values */
function doubleFunction(val, index, arr) {
  return (arr[index] = val * 2);
}

arr.forEach(doubleFunction);
document.getElementById("double").innerHTML = arr;

/* Only Even Values */
let arr2 = [1, 3, 5, 7, 9];
function onlyEvens(val) {
  return val % 2 === 0;
}

arr2.forEach(onlyEvens);
document.getElementById("onlyEvens").innerHTML = arr2;

/* Show First and Last */
let nameList = ["colt", "matt", "tim", "test"];
let y = [];

function firstAndLast(val) {
  let answer = [];
  for (i = 0; i < val.length; i++) {
    if (i === 0) {
      answer.push(val[i]);
    } else if (i === val.length - 1) {
      answer.push(val[i]);
    }
  }
  let x = answer.join("");

  return y.push(x);
}

nameList.forEach(firstAndLast);
document.getElementById("firstAndLast").innerHTML = y;

/* Add Key and Value */
let inputArray = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

inputArray.forEach(function (item) {
  item.title = "instructor";
});

/* Vowel Count */
function vowelCount(str) {
  var splitArr = str.toLowerCase().split("");
  var obj = {};
  var vowels = "aeiou";

  splitArr.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}

/* Double Values with Map */

arr.map(function (val) {
  return val * 2;
});

/* varTimesIndex */
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

arr3.map(function (val, index, arr3) {
  return arr3[index] * index;
});

/* extractKey */

function extractFullName(arr) {
  return arr.map(function (value, index, array) {
    return value.first + " " + value.last;
  });
}

/* filterByValue */

let arr4 = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

function filterByValue(arr4, key) {
  return arr4.filter(function (val) {
    return val[key] !== undefined;
  });
}
/* find */

function find(arr3, value) {
  arr3.filter(function (value) {
    return val === value;
  });
}

/* Find In Object */
function findInObj(arr4, key, value) {
  return arr4.filter(function (val) {
    return val[key] === value;
  });
}

/* Remove Vowels */
let str = "jalsdfjlasdk;fjoaweifjoiasdcv";
function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}
/* Double Odd Numbers */

function doubleOddNumbers(arr3) {
  console.log(arr3);
  let odds = arr3
    .filter((odd) => {
      return odd % 2 !== 0;
    })
    .map(function (val) {
      return val * 2;
    });
}
