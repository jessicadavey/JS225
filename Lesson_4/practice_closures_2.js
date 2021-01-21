// 1.

function makeMultipleLister(number) {
  let num = number;
  return function() {
      while (num < 100) {
        console.log(num);
        num += number;
      }
  }
}

let lister = makeMultipleLister(1);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// 2.

let total = 0;

function add(num) {
  return total += num;
}

function subtract(num) {
  return total -= num;
}

console.log(add(1));
// 1
console.log(add(42));
// 43
console.log(subtract(39));
// 4
console.log(add(6));
// 10

// 3.

function later(func, arg) {
  return function() {
    return func(arg);
  }
}

let logWarning = later(console.log, 'The system is shutting down!');
logWarning();
// The system is shutting down!