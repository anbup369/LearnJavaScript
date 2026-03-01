// Lab: Variable Declarations, Hoisting, and Scope
// ----------------------------------------------------
// Try to answer these questions before uncommenting and running the code!

// Question 1: What will be the output of the following code?
// console.log(a);
// var a = 10;
// Answer: undefined (due to var hoisting)


// Question 2: What will be the output of the following code?
// console.log(b);
// let b = 20;
// Answer: ReferenceError: Cannot access 'b' before initialization (due to TDZ)


// Question 3: Predict the output and explain why.
// const c = 30;
// c = 40;
// Answer: TypeError: Assignment to constant variable (const cannot be reassigned).


// Question 4: Scope test - What will the two console.logs print?
/*
function scopeTest() {
    if (true) {
        var x = "var is function scoped";
        let y = "let is block scoped";
    }
    console.log(x); // Output? -> "var is function scoped"
    console.log(y); // Output? -> ReferenceError: y is not defined
}
scopeTest();
*/

// Question 5: Variable Naming - Which of these are valid identifiers?
// let 1name = "Pramod";  // Invalid (Cannot start with a number)
// let _name = "Pramod";  // Valid
// let $name = "Pramod";  // Valid
// let first-name = "Pramod"; // Invalid (Hyphens are not allowed)
