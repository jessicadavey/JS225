function newStack() {
  let stack = [1, 2, 3];
  return {
    push(n) {
      stack.push(n);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      for (let index = 0; index < stack.length; index += 1) {
        console.log(stack[index]);
      }
    },
  };
}


let myStack = newStack();

myStack.push(4);

myStack.printStack();

myStack.pop();
myStack.pop();


myStack.printStack();
