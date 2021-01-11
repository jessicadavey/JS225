/* 1. With strict mode not enabled, the implicit execution context is the global object (window in browsers).  When strict
mode is enabled, the global object is not accessible as the implicit execution context.  
*/


// 2. What does the following code log?
a = 10;

console.log(window.a === a); // true

// 3. What does the code log in strict mode?
// raises an error

// 4 . What does the following code do?
function func() {
    let b = 1;
}

func();

console.log(b);

// creates a local variable within the function func(), which is not accessible outside the function
// on line 21, so it raises an error
