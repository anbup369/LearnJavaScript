// Logical Operators (&&, ||, !)
// -----------------------------
// Used to determine the logic between variables or values.

// && (AND) -> Returns true ONLY if both sides are true.
// || (OR)  -> Returns true if AT LEAST one side is true.
// !  (NOT) -> Returns the opposite boolean value.

let a = true;
let b = false;

console.log(a && b); // false (because b is false)
console.log(a || b); // true (because a is true)
console.log(!a);     // false (the opposite of true)