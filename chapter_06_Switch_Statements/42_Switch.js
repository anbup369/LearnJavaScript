// The Switch Statement
// --------------------
// A switch statement evaluates an expression and matches it against multiple 
// "case" clauses. It is often used as a cleaner alternative to long if-else chains.

// 0 - Sunday, 1 - Monday, 2 - Tue.....
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");

        // ⚠️ WARNING: Variables declared with 'let' or 'const' here
        // are scoped to the ENTIRE switch block! 
        // If you try to declare `let a` in case 1, it will crash.
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 1:
        console.log("Monday — Sprint Planning");
        break;
    case 2:
        console.log("Tuesday — Development");
        break;
    case 3:
        console.log("Wednesday — Code Review");
        break;
    case 4:
        console.log("Thursday — Testing");
        break;
    case 5:
        console.log("Friday — Deployment & Retro");
        break;
    case 6:
        console.log("Saturday — Rest Day");
        break;
    default:
        console.log("Invalid day value");
}