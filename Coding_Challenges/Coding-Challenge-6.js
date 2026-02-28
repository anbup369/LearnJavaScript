//Coding Challenge 6 of 10

/*
Bug Severity Classifier

As a QA engineer, classify bugs based on two factors:
 frequency ("always", "often", "rarely") 
 and impact ("blocker", "major", "minor"). 
Write a JavaScript program using nested if-else that prints the bug severity level.

Critical: Stop release immediately


Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

Examples:

Input:
frequency = "always", impact = "blocker"

Output:
Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately

💡 Explanation:A bug that always occurs and is a blocker gets the highest severity P0, requiring immediate action.

Example Messages
• 	P0 – Critical: Stop release immediately
• 	P1 – High: Must be fixed before release
• 	P2 – Medium: Fix in upcoming sprint/release
• 	P3 – Low: Minor issue, schedule later
• 	P4 – Trivial: Cosmetic, fix if time permit

*/
let BugTitle = "Checkout page crashes on applying coupon"
let frequency = "always";
let impact = "blocker"
let severity;
if (frequency === "always") {
    if (impact === "blocker") {
        severity = "P0 - Critical: Stop release immediately"
    } else if (impact === "major") {
        severity = "P1 - High: Must be fixed before release"
    } else {
        severity = "P2 - Medium: Fix in upcoming sprint/release"
    }
} else if (frequency === "often") {
    if (impact === "blocker") {
        severity = "P1 - High: Must be fixed before release"
    } else if (impact === "major") {
        severity = "P2 - Medium: Fix in upcoming sprint/release"
    } else {
        severity = "P3 - Low: Minor issue, schedule later"
    }
} else {
    if (impact === "blocker") {
        severity = "P2 - Medium: Fix in upcoming sprint/release"
    } else if (impact === "major") {
        severity = "P3 - Low: Minor issue, schedule later"
    } else {
        severity = "P4 - Trivial: Cosmetic, fix if time permit"
    }
}

console.log(`Bug Title: ${BugTitle} Frequency: ${frequency} Impact: ${impact} Severity: ${severity}`)