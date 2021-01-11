// 1. What will the code below output?

function foo() {
  return this;
}

let context = foo();
console.log(context); // window

// 2. What will the above code output in strict mode?
// undefined

// 3. What will the code below output?

let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context); // returns obj
// obj.foo() returns a reference to the foo method on obj (not this)

// 4. What will the code below output?
var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // 'Hello from the global scope!'

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage(); // 'Hello from the function scope!'

// 5. What will the code below output? What would happen if we replaced var on line 1 with let? 
// Can you explain why the output changes?

let a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add()); // 10 + 10 = 20
console.log(c.add()); // -10 + 10 = 0
// if line 1 were `let a = 10;`:

// undefined + 10 = NaN <-- variables declared with let are not properties of the global object,
// so this.a === undefined
// -10 + 10 = 0

// 6. methods for explicit execution context:
// Function methods call and apply

// 7. 

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};

bar.add.call(foo); // returns 3

// 8.
let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here:

outputList.apply(fruitsObj, fruitsObj.list); // using apply because the list is already an array.
// to use call I would need to spread the array first (...fruitsObj.list)

// A Collection of Fruit:
// Apple
// Banana
// Grapefruit
// Pineapple
// Orange

// 9.  
// [].slice.call(arguments) executes the Array.prototype.slice method, but using the arguments
// object as the context.  This object has all of the arguments, but doesn't have access to 
// Array methods.  Calling Array.prototype.slice with no arguments just makes a copy of an array.
// When used with arguments as the context, it converts the arguments object into a real array,
// which will then have access to the forEach method.