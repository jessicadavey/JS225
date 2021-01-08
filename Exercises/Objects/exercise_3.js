/*
input: 2 objects
output: boolean

rules: return true if both objects have the same key/value pairs

algorithm:

1. compare Object.keys of both objects
  - return false if their lengths are different
2. loop through Object.keys of first object
  - check if key exists in second object
    - if not return false
  - compare values from both objects
    - return false if they're not equal

3. return true

*/

function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let index = 0; index < obj1Keys.length; index += 1) {
    if (!obj2Keys.includes(obj1Keys[index]) || obj1[obj1Keys[index]] !== obj2[obj1Keys[index]]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false



