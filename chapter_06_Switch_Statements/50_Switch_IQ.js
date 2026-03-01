// Strict Equality (===) Checking
// ------------------------------
// Unlike simple `if (value == 5)`, a switch statement ALWAYS uses strict 
// type checking under the hood. The value AND type must match exactly!

let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}
// Output: "String '5' matched"
// switch uses ===, so "5" !== 5 (different types)


