// Type Operators (typeof)
// -----------------------
// The typeof operator returns a string representing the type of a value.
// It is very useful for checking data before doing operations on it!

console.log(typeof "hello"); // -> "string"

console.log(typeof 123); // -> "number"
console.log(typeof 31.4); // -> "number" (JavaScript does not have separate float/int types)

console.log(typeof true); // -> "boolean"

console.log(typeof undefined); // -> "undefined"

// The famous JS Bug
console.log(typeof null); // -> "object" (should have been "null" but it's a legacy bug)

console.log(typeof []); // -> "object" (Arrays are a special type of object in JS)