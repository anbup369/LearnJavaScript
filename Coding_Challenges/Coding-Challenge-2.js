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
