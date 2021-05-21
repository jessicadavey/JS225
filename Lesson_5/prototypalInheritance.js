// 1.
// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a); // 1

// 2.
// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a); // 2

// 3.
let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code - myProp could have been defined on far somewhere in here

far.myProp; // 1

console.log(far.hasOwnProperty('myProp')); // false; proves that myProp is owned by an object up the prototypal chain
// 
console.log(boo.hasOwnProperty('myProp')); // true; 