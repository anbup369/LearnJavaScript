//Coding Challenge 10 of 10

/*
Mini Test Suite Runner

Build a mini test suite runner that executes test cases and generates a summary report. 
This question combines ALL topics: var/let/const, if-else, switch, for loop, 
while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). 
Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), 
find first failure (do...while), and print a comprehensive report.

Examples:

Input:
{ name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
Output:

✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED

💡 Explanation:Each test is evaluated based on its comparison type using switch, with results tracked via counters and reported at the end.
*/

// Mini Test Suite Runner
const tests = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Loose equality check", actual: "5", expected: 5, type: "looseEqual" },
    { name: "Type check number", actual: 42, expected: "number", type: "typeCheck" },
    { name: "Truthy value", actual: "hello", expected: true, type: "truthy" },
    { name: "Less than check", actual: 3, expected: 10, type: "lessThan" },
    { name: "Failure case", actual: false, expected: true, type: "strictEqual" }
];

let passCount = 0;
let failCount = 0;
let errorCount = 0;
let report = "";

// Run all tests
for (let i = 0; i < tests.length; i++) {
    const tc = tests[i];
    const comparisonType = tc.type || "strictEqual";
    const actualValue = tc.actual ?? "N/A";
    let result;
    try {
        switch (comparisonType) {
            case "strictEqual":
                result = actualValue === tc.expected;
                break;
            case "looseEqual":
                result = actualValue == tc.expected;
                break;
            case "typeCheck":
                result = typeof actualValue === tc.expected;
                break;
            case "truthy":
                result = !!actualValue === tc.expected;
                break;
            case "lessThan":
                result = actualValue < tc.expected;
                break;
            default:
                throw new Error("Unknown comparison type");
        }

        if (result) {
            passCount++;
            report += `✅ TC-${String(i + 1).padStart(2, "0")}: ${tc.name} → PASS (${actualValue} ${comparisonType} ${tc.expected})\n`;
        } else {
            failCount++;
            report += `❌ TC-${String(i + 1).padStart(2, "0")}: ${tc.name} → FAIL (${actualValue} ${comparisonType} ${tc.expected})\n`;
        }
    } catch (err) {
        errorCount++;
        report += `⚠️ TC-${String(i + 1).padStart(2, "0")}: ${tc.name} → ERROR (${err.message})\n`;
    }
}

// Find consecutive passes from start (while loop)
let consecutivePasses = 0;
let idx = 0;
while (idx < tests.length) {
    const tc = tests[idx];
    const comparisonType = tc.type || "strictEqual";
    const actualValue = tc.actual ?? "N/A";
    let passed = false;
    switch (comparisonType) {
        case "strictEqual": passed = actualValue === tc.expected; break;
        case "looseEqual": passed = actualValue == tc.expected; break;
        case "typeCheck": passed = typeof actualValue === tc.expected; break;
        case "truthy": passed = !!actualValue === tc.expected; break;
        case "lessThan": passed = actualValue < tc.expected; break;
    }
    if (!passed) break;
    consecutivePasses++;
    idx++;
}

// Find first failure (do...while loop)
let firstFailureIndex = -1;
let j = 0;
if (tests && tests.length > 0) {
    do {
        const tc = tests[j];
        const comparisonType = tc.type || "strictEqual";
        const actualValue = tc.actual ?? "N/A";
        let passed = false;
        switch (comparisonType) {
            case "strictEqual": passed = actualValue === tc.expected; break;
            case "looseEqual": passed = actualValue == tc.expected; break;
            case "typeCheck": passed = typeof actualValue === tc.expected; break;
            case "truthy": passed = !!actualValue === tc.expected; break;
            case "lessThan": passed = actualValue < tc.expected; break;
        }
        if (!passed) {
            firstFailureIndex = j;
            break;
        }
        j++;
    } while (j < tests.length);
}

// Summary
const total = tests.length;
const passRate = ((passCount / total) * 100).toFixed(2);
const overall = passCount === total ? "✅ PASSED" : "❌ FAILED";

report += `\n--- Summary Report ---\n`;
report += `Total: ${total}, Pass: ${passCount}, Fail: ${failCount}, Error: ${errorCount}\n`;
report += `Consecutive Passes (from start): ${consecutivePasses}\n`;
report += `First Failure Index: ${firstFailureIndex !== -1 ? firstFailureIndex + 1 : "None"}\n`;
report += `Pass Rate: ${passRate}% Overall: ${overall}\n`;

console.log(report);