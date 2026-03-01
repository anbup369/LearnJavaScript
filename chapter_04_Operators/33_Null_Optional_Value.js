// Nullish Coalescing Operator (??)
// --------------------------------
// The ?? operator returns its right-hand operand ONLY when its left-hand
// operand is null or undefined.

// Why not use || (Logical OR) instead?
// Because || triggers on ANY falsy value (like 0, "", or false).
// If your user's age is 0, || would overwrite it with a default!
// ?? safely preserves 0, "", and false.

let amul = null;
let val = amul ?? "aavin milk";
let val2 = null ?? "default";

// Modern JS - Typescript.

val = "which milk? -> " + val;
console.log(val)
console.log(val2)
// very useful in test data handling.