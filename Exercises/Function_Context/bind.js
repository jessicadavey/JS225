function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  }
}

let object = {
  a:89,
  b:2,
}

var a = 7;

function foo(n) {
  console.log(this.a + n);
}

let bound = myBind(foo, object);

bound(1);