// 1. 

// Higher-order functions are functions that operate on other functions.
// They take functions as arguments, return functions, or both.

// 2.

let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]

// filter is the higher-order function because it takes a function
// (checkEven) as an argument.

// 3.

let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
     return number % 2 === 0;
  }
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

// 4.

function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

// 5.

function makeListTransformer(func) {
  return function(list) {
    return list.map(func)
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]