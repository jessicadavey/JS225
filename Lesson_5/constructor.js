// 1.
/*
Constructor functions begin with a capital letter.

*/

// 2.

function Lizard() {
  this.scamper = function() { // if 'new' isn't used, 'this' = global Object, which gets this method added to it
    console.log("I'm scampering!");
  }; // returns undefined if not invoked with the 'new' keyword
}

// let lizzy = Lizard();
// lizzy.scamper(); // TypeError: Cannot read property 'scamper' of undefined
// 

// 3.

let lizzy = new Lizard();
lizzy.scamper(); // "I'm scampering!"