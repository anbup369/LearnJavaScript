
// ✅ Leap Year Checker:

// Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.

// input year = 2000,2024, 2026 

console.log("Leap Year Calculator\n");

let Input_year = 2026;

if (Input_year % 400 == 0) {
    console.log(`${Input_year} Year is Leap Year`)
} else if (Input_year % 4 == 0 && Input_year % 100 != 0) {
    console.log(`${Input_year} Year is Leap Year`)
} else {
    console.log(`${Input_year} Year is Not Leap Year`)

}