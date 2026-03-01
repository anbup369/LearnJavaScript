// var and Block Scope (The Leak)
// ------------------------------
// 'var' declarations are function-scoped or globally-scoped.
// They completely ignore block scopes (like if statements or loops).

var a = "Pramod";

if (true) {
    console.log(a); // "Pramod"

    // Because var ignores this block, we are actually
    // RE-ASSIGNING the global 'a' variable here!
    var a = "temp";

    console.log(a); // "temp"
}

// The global 'a' was modified by the code inside the block!
console.log("Outside the block:", a); // "temp"
