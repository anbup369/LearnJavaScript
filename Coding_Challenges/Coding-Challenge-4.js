//Coding Challenge 4 of 10

/*
Element Visibility Checker

In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

Examples:

Input:
isPresent = true, isDisplayed = true, isEnabled = false

Output:
Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.

💡 Explanation:Element is present and displayed but not enabled. Severity is WARNING because it's not fully interactable.
*/

// let isPresent = true, isDisplayed = true, isEnabled = true;
let isPresent = true, isDisplayed = true, isEnabled = false;
// let isPresent = true, isDisplayed = false, isEnabled = false;
// let isPresent = false, isDisplayed = false, isEnabled = false;
let Status, Action;

if (isPresent === true && isDisplayed === true && isEnabled === true) {
    Status = "READY"
    Action = "Element is present, visible and enabled."

} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    Status = "DISABLED"
    Action = "Element is visible but disabled. Wait for enable state or check preconditions."


} else if (isPresent === true && isDisplayed === false) {
    Status = "HIDDEN"
    Action = "Element is present but not displayed. Investigate visibility conditions."

} else {
    Status = "NOT FOUND"
    Action = "Element is not present."

}

let Severity = (Status === "READY") ? "OK" : (Status === "DISABLED" || Status === "HIDDEN") ? "WARNING" : "CRITICAL"

console.log(`Status: ${Status} Severity: ${Severity} Action: ${Action}`)