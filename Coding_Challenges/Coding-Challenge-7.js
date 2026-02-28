//Coding Challenge 7 of 10

/*
Response Time SLA Analyzer

As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that analyzes an array of response times 
and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). 
Use comparison operators for min/max tracking.

Examples:

Input:
responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500

Output:
Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED
💡 Explanation:The while loop iterates through response times, tracking min/max and counting breaches over 500ms.
*/

let responseTimes = [120, 230, 450, 510, 180, 620];

const SLA_LIMIT = 500
let min = responseTimes[0];
let max = responseTimes[0];
let breaches = 0;
let i = 0;
let sum = 0;
while (i < responseTimes.length) {
    let current = responseTimes[i]
    sum += current
    if (current > max) {
        max = current
    }

    if (current < min) {
        min = current
    }

    if (current > SLA_LIMIT) {
        breaches++
    }
    i++
}

let overallStatus = breaches > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";
let average = (sum / responseTimes.length)

let breachPercentage = ((breaches / responseTimes.length) * 100)
console.log(`Total Requests: ${responseTimes.length} Min Response: ${min}ms Max Response: ${max}ms Average Response: ${average.toFixed(2)}ms SLA Breaches: ${breaches} (${breachPercentage.toFixed(2)}%) Overall Status: ${overallStatus}
`)
