// ==========================================
// While Loops - Variations & Advanced Patterns
// ==========================================

// ------------------------------------------
// 1. The 'while(true)' Pattern (Controlled Infinite Loop)
// ------------------------------------------
console.log("--- The 'while(true)' Pattern ---");
let health = 100;

// 'while(true)' runs forever UNTIL it hits a 'break' statement inside the block.
// This is heavily used in game loops, event listeners, or complex algorithms!
while (true) {
    console.log(`Current Health: ${health}`);
    health -= 30; // Take damage

    if (health <= 0) {
        console.log("Health depleted. Game Over!");
        break; // Breaks out of the loop immediately!
    }
}

// ------------------------------------------
// 2. Array Iteration using While
// ------------------------------------------
console.log("\n--- Array Iteration via While ---");
const fruits = ["Apple", "Banana", "Cherry"];
let index = 0; // Must manually create and track our own index

while (index < fruits.length) {
    console.log(`Fruit at index ${index} is ${fruits[index]}`);
    index++; // Manually increment the tracking index
}

// ------------------------------------------
// 3. Multiple Complex Conditions
// ------------------------------------------
console.log("\n--- Multiple Conditions ---");
let isLoggedIn = true;
let sessionTimeRemaining = 5;

// Loop continues as long as BOTH conditions remain true
while (isLoggedIn && sessionTimeRemaining > 0) {
    console.log(`Session active. Remaining time: ${sessionTimeRemaining} minutes.`);
    sessionTimeRemaining--;

    // If time hits 0, the next condition check returns false
}
console.log("Session expired. Logged out.");
