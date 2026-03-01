//Coding Challenge 9 of 10

/*
Login Brute-Force Detection

Write a JavaScript program that simulates a login system with brute-force detection. 
The system should lock the account after 3 consecutive failed attempts. 
Use a do...while loop to process login attempts from an array. 
Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
Validate using strict equality (===) and logical operators (&&).

Examples:

Input:
Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]

Output:
Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected

💡 Explanation:After 3 consecutive failures, the account is locked. Even correct credentials on attempt 4 are rejected.
*/


const ValidEmail = "admin@testingacademy.com";
const ValidPassword = "Test@1234";
const MaxAttempts = 3;

var failedAttempts = 0;
var accountLocked = false;


//we can also use Objects as key value pairs instead of two arrays , but in this case used two arrays 
const attempts_password = ["wrong", "wrong", "wrong", "Test@1234"];// 3 wrong password and 4th correct password 
const attempts_email = ["admin1@testingacademy.com", "admin2@testingacademy.com", "admin3@testingacademy.com", "admin@testingacademy.com"];// 3 wrong email and 4th correct email.

let i = 0;
do {
    let currentAttempts_email = attempts_email[i];
    let currentAttempts_password = attempts_password[i];

    if (accountLocked) {
        console.log(`Attempt ${i + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    } else if (currentAttempts_email === ValidEmail && currentAttempts_password === ValidPassword && failedAttempts < MaxAttempts) {
        console.log(`Attempt ${i + 1}: ✅ SUCCESS - Logged In`);
        break;
    } else {
        failedAttempts++;
        console.log(
            `Attempt ${i + 1}: ❌ FAILED - Strike ${failedAttempts}/${MaxAttempts}`
        );

        if (failedAttempts === MaxAttempts) {
            accountLocked = true;
            console.log(`🚨 ACCOUNT LOCKED`);
        }
    }

    i++;
} while (i < attempts_password.length);





