// The "Fall-Through" Bug
// ----------------------
// Without 'break' statements, the switch will execute ALL subsequent 
// cases after it finds an initial match.

let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}
