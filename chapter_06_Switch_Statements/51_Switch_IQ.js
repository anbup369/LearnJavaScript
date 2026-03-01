// Strict Equality (===) Checking
// ------------------------------
// A switch statement ALWAYS uses strict type checking under the hood.
// The value AND type must match exactly!

let Status = 0;
switch (Status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

// Output: "0 matched" (0 === 0, NOT 0 === false)