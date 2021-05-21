// // 1.
// (function () {
// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo(); // logs '2'

// foo.bar(); // logs '2'
// Foo();  // sets globalThis.a = 2, logs '2'

// obj = {};
// Foo.call(obj); // logs 2
// obj.bar(); // logs 2

// console.log(this.a); // logs '2'

// }());

// 2.

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.bind(this)();
//   this.perimeter = RECTANGLE.perimeter.bind(this)();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // NaN
// console.log(rect1.perimeter); // NaN

// 3.

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.PI * this.radius**2;
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.area === b.area); // true

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // true; when swingSword is called on 
// // the ninja object, the method is found on Ninja.prototype.  But 'this' still
// // references the calling object. When 'ninja' was created on line 72, this.swung
// // was set to 'true'.

//5.
// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// }; // Ninja.prototype references a different object than the prototype of ninja

// // console.log(ninja.swingSword()); // ninja.swingSword is not a function

// console.log(Object.getPrototypeOf(ninja) === Ninja.prototype);
// console.log(Object.getPrototypeOf(ninja));

// 6.
// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// 7.

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true