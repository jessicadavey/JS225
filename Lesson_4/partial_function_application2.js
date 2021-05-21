// 1

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }

// sub5(10);
// sub5(20);

// 2


// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   return function(number) {
//     return subtract(number, n);
// }
// }

// let sub5 = makeSubN(5);

// sub5(10);

// 3

// function makePartialFunc(func, b) {
//   return function(number) {
//     return func(number, b);
//   }
// }

// function multiply(a, b) {
//   return a * b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);

// multiplyBy5(100);

// 4

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students); 
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan