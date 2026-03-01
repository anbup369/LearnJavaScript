// Common Interview Question Snippets
// ----------------------------------

// Case 0: Empty Arrays evaluate to true (truthy)!
if ([]) {
    console.log("Arrays are always truthy!");
}

let response;

// Case 1: Checking for truthiness (implicitly handles null/undefined/0/"")
if (response) {
    console.log("We got a valid response!");
} else {
    // This runs because response is currently 'undefined' (falsy)
    console.log("Response is falsy.");
}

// Case 2: Explicitly checking against null
if (response !== null) {
    // This runs! 'undefined' is NOT strictly equal to 'null'
    console.log("Response is not null! But it could still be undefined or empty.");
}


// Case 3: Dead Code execution
if (true) {
    console.log("This block will ALWAYS run.");
} else if (false) {
    // This block is "dead code" - it will NEVER be reached or executed.
    console.log("This block will NEVER run.");
}