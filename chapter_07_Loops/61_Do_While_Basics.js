// ==========================================
// Do...While Loops - Core Fundamentals
// ==========================================

// ------------------------------------------
// 1. The 'do...while' Superpower
// ------------------------------------------
// A normal 'while' loop checks the condition BEFORE running the code.
// A 'do...while' loop runs the code FIRST, and then checks the condition at the END.
// This means the code inside 'do' is GUARANTEED to execute at least once!

console.log("--- Guaranteed Execution Example ---");

let a = 10;

// The condition says "while a is strictly less than 10".
// Normally, because 'a' is exactly 10, a normal while loop would skip the block completely!
do {
    // This executes before JavaScript even looks at the condition!
    console.log(`First Execution ALWAYS fires! (a = ${a})`);
    a++;
} while (a < 10); // Condition is false, so it stops after the first print.

console.log(`Final value of a is: ${a}`);


// ------------------------------------------
// 2. A Basic Retrying Example
// ------------------------------------------
console.log("\n--- Basic Retry Pattern ---");

let retry = 0;

do {
    console.log("Executing some code...");
    console.log("Retrying attempt number:", retry);
    retry++;

} while (retry < 3); // Will run 3 times total (0, 1, 2)