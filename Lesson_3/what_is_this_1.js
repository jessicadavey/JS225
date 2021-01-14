// 1.

function whatIsMyContext() {
  return this;
}

// unknown until function execution

// 2.

function whatIsMyContext() {
  return this; // this points to the global object (window; undefined in strict mode)
}

whatIsMyContext();

// 3.

function foo() {
  function bar() {
    function baz() {
      console.log(this); // this === window => true
    }

    baz();
  }

  bar();
}

foo();

// 4.

let obj = {
  count: 2,
  method() {
    return this.count; // this === obj
  },
};

obj.method();

// 5.

function foo() {
  console.log(this.a);
}

let a = 2;
foo(); // Raises an error, something like, "a is not a property of undefined"

// 6.

let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar,
};

obj.foo(); // Logs 2 to the console, because foo is invoked as 
// a method on obj

// 7.

let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar(); // object foo
let qux = foo.bar;
qux(); // Logs an error (no baz method on global object)