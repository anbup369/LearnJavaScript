// ==========================================
// While Loops - Core Fundamentals
// ==========================================

// ------------------------------------------
// 1. When to use 'while' vs 'for'
// ------------------------------------------
// Use a 'for' loop when you know exactly HOW MANY times you want to loop.
// Use a 'while' loop when you are waiting for a CONDITION TO CHANGE.
// (e.g. waiting for user input, waiting for a file to download, waiting for a game to end)

// ------------------------------------------
// 2. Basic Structure (Initialization, Condition, Update)
// ------------------------------------------
console.log("--- Basic While Loop ---");

let attempts = 0; // Initialization (where to start)

while (attempts < 3) { // Condition (when to stop)
    console.log("Attempt", attempts);
    attempts++; // Update/Increment (how to step towards the end of the loop!)
}

// ------------------------------------------
// 3. Another Basic Example
// ------------------------------------------
console.log("\n--- Another Basic Example ---");

let modi = 1;
// This will loop exactly 15 times
while (modi <= 15) {
    console.log(`Year ${modi}: Modi will do 15+ years`);
    modi++;
}