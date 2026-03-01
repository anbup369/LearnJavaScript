// let Hoisting and the Temporal Dead Zone (TDZ)
// ---------------------------------------------

// If you uncomment the line below, the script will crash with a ReferenceError.
// console.log(username); 

// Why does it crash? 
// Because 'let' IS hoisted, but it is NOT initialized with 'undefined' like 'var'.
// It remains in the "Temporal Dead Zone" until the engine evaluates its declaration line.

let username = "Dutta"; // TDZ ends here.

console.log("Username is initialized:");
console.log(username); // Output: "Dutta"
