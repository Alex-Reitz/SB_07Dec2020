Maps and sets exercises

/* let x = new Set([1, 1, 2, 2, 3, 4]);
console.log(x);
[...new Set("referee")].join("")

 let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); */
/* arr = [1, 1, 1, 1, 3, 4, 5, 456, 54, 6, 5, 5, 6, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7];
arr2 = [1, 2, 3, 4];
function hasDuplicate(input) {
  let x = [...new Set(input)];
  const equals = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);
  return !equals(input, x);
}
 */

/* function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
 */
