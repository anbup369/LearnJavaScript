"use strict";

// Strict mode helps you write cleaner code by catching common mistakes.
// It changes previously accepted "bad syntax" into real errors.

// 1. Using undeclared variables throws an error
// x = 10; // ReferenceError: x is not defined (without use strict, this creates a global variable)

let x = 10;
console.log(x);

// 2. Assigning to a non-writable global or a constant variable throws an error
const IS_ADMIN = true;
// IS_ADMIN = false; // TypeError: Assignment to constant variable.

// 3. Deleting plain variables throws an error
let y = 50;
// delete y; // SyntaxError: Delete of an unqualified identifier in strict mode

console.log("Strict mode execution successful");
