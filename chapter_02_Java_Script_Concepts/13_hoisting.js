// Hoisting in Action with var
// ----------------------------

// Even though 'a' is declared at the bottom, the JS engine hoists the
// DECLARATION of 'a' to the top of the file during the memory creation phase.
console.log(a); // Output: undefined

// The assignment happens sequentially during the execution phase.
var a = "abc";

// Now 'a' has its value.
console.log(a); // Output: "abc"