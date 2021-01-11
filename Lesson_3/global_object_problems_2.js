// 5. What does the following code do?

function func() {
    b = 1;
}

func();

console.log(b); 

// creates a property b on the global object with value 1, and line 9 logs 1 to the console.

// 6. What does the following code log?

"use strict"
function func() {
    b = 1;
}

func();

console.log(b); // on line 17 b is not defined, so it can't be reassigned.  An error is raised.