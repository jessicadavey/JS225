// 1. function makeCounterLogger(num1) {
  return function(num2) {
    if (num1 < num2) {
      for (let index = num1; index <= num2; index += 1) {
        console.log(index);
      }
    } else {
      for (let index = num1; index >= num2; index -= 1) {
        console.log(index);
      }
    }
  }

}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2


// 2.
function makeList() {
  let todoList = [];

  function displayTodos() {
    if (todoList.length === 0) {
      console.log("The list is empty.");
    } else {
      todoList.forEach(todo => {
        console.log(todo);
      })
    }
  }

  function addTodo(todo) {
    todoList.push(todo);
    console.log(`${todo} added!`)
  }

  function removeTodo(todo) {
    todoList = todoList.filter(t => t !== todo);
    console.log(`${todo} removed!`)
  }

  return function(todo) {
    if (arguments.length === 0) {
      displayTodos();
    } else if (todoList.includes(todo)) {
      removeTodo(todo);
    } else {
      addTodo(todo);
    }
  }
}


let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book