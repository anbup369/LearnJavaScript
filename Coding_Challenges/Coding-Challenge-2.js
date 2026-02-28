//Coding Challenge 2 of 10
/*
Test Case Result Counter

After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped.
 Print a test report with total tests, counts, pass rate percentage, and 
 a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

Examples:

Input:
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

Output:
Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.

💡 Explanation:The for loop iterates through results, counting each type. With 2 failures (≤2), the verdict is to review before release.
*/

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let pass_count = 0;
let fail_count = 0;
let skip_count = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        pass_count += 1;
    } else if (testResults[i] === "fail") {
        fail_count += 1;
    } else if (testResults[i] === "skip") {
        skip_count += 1;
    }

}

let percentage = 0;
percentage = (pass_count / testResults.length) * 100

let verdict = "";

if (pass_count === testResults.length) {
    verdict = "Ready for release.";
} else if (fail_count <= 2) {
    verdict = "Minor failures. Review before release."
} else {
    verdict = "Block release."
}

console.log(`Total Tests : ${testResults.length} Passed: ${pass_count} Failed: ${fail_count} Skipped: ${skip_count} Pass Rate: ${percentage.toFixed(2)}% VERDICT: ${verdict}`)

