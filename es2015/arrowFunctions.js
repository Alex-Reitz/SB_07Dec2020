arr = [1, 2, 3, 4, 5, 6];
function double(arr) {
  return arr.map((val) => val * 2);
}

double(arr);
console.log(double(arr));

/* Replace all functions with arrow functions */
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

numbers = [456, 435, 3456, 4356, 3456, 34, 875, 567];

function squareAndFindEvens(numbers) {
  let squares = numbers.map((num) => num ** 2);
  let evens = squares.filter((square) => square % 2 === 0);
  return evens;
}
console.log(squareAndFindEvens(numbers));
