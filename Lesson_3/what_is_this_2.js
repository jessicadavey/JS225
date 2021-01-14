// 1.

let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count; // this is myChildObject
    },
  },
};

myObject.myChildObject.myMethod(); // returns undefined

// 2.

let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod.call(myObject); // set the context explicitly to myObject

// 3.

let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman(); // "Peter Parker is the Amazing Spiderman!"

// 4.

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) { // this is undefined, so this.price === undefined
        return 1000;
      } else {
        return 0; // returns 0
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total()); // 30000 + 2000 + 3000 - 0 = 35000

// Fixed code:

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(this); // provide explict context for specialDiscount()
  }
};

console.log(computer.total()); 