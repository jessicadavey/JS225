// 1.

// function getDefiningObject(object, propKey) {
//   let prototype = object;

//   while (prototype !== null) {
//     if (prototype.hasOwnProperty(propKey)) {
//       return prototype;
//     }
//     prototype = Object.getPrototypeOf(prototype);
//   }

//   return null;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(bar, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'c') === baz);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// 2.

// function shallowCopy(object) {
//   let newObject = Object.create(Object.getPrototypeOf(object));

//   Object.keys(object).forEach(key => {
//     newObject[key] = object[key];
//   })

//   return newObject;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

function extend(destination) {
  let args = Array.prototype.slice.call(arguments, 1);
  
  args.forEach(source => {
    Object.getOwnPropertyNames(source).forEach(prop => {
      destination[prop] = source[prop];
    });
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe