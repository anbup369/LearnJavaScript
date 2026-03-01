// Step 1 - Defination of functions
function getUserStatus() {
    // var status_code = undefined; - not shown to you.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}

// Step 2 - Calling of the functions
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.

// ---------------------------------------------------------
// Function Declarations vs Function Expressions Hoisting
// ---------------------------------------------------------

// Function Declarations are fully hoisted (both name and body).
// You can call them before they are defined in code.
sayHello(); // Output: "Hello!"

function sayHello() {
    console.log("Hello!");
}

// Function Expressions (using var, let, or const) are hoisted 
// just like variables, meaning their body is NOT hoisted.

// console.log(sayGoodbye); // Output: undefined (if using var)
// sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function () {
    console.log("Goodbye!");
};