function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function greet(salutation, name) {
  console.log(`${capitalize(salutation)}, ${name}!`)
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  }
}


let sayHello = partial(greet, 'hello');
sayHello('Brandon');

let sayHi = partial(greet, 'hi');
sayHi('Sarah');