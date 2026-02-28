//Coding Challenge 3 of 10
/*Retry Failed API Call

In automation testing, API calls sometimes fail due to network issues. 
Write a JavaScript program that simulates retrying a failed API call using a do...while loop.
 The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() 
 (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.


Examples:

Input:
MAX_ATTEMPTS = 5

Output:
Attempt 1: ❌ FAILED (Timeout/Error) Attempt 2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).

💡 Explanation:The do...while loop runs at least once and continues until success or max attempts. Random simulation determines each attempt result.

*/