// Duplicate Cases in a Switch Statement
// -------------------------------------

let x = 10;
switch (x) {
    case 10:
        console.log("First 10 matched!");
        break;
    case 10:
        // This is a duplicate case!
        console.log("Second 10 matched!");
        break;
    default:
        console.log("Default");
}

// NOTE: JavaScript ALLOWS duplicate cases.
// It will simply execute the first one it finds that matches the value. 