// Grouping Cases (Intentional Fall-Through)
// -----------------------------------------
// By intentionally omitting the 'break' keyword, we can group multiple cases
// together so they all cascade and share the exact same output block!

let browser = "Edge";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}