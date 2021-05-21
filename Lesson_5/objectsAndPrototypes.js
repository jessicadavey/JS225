let prot = {};

let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo) === prot);
console.log(prot.isPrototypeOf(foo));


console.log(prot.isPrototypeOf(foo)); // true
console.log(Object.prototype.isPrototypeOf(foo)); // true; Object.prototype is in the prototype chain of fooc