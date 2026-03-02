// ==========================================
// Do...While Loops - Practical Use Cases
// ==========================================

// ------------------------------------------
// 1. API Retries Simulation (Fetching Elements/Students)
// ------------------------------------------
console.log("--- 1. Simulating API Retries ---");

// This is the classic, real-world scenario for do...while!
// We ALWAYS want to attempt the fetch at least once. If it fails, we keep trying.
let studentApiData = null; // Simulated API Data
let fetchAttempt = 1;
const maxAttempts = 3;

do {
    console.log(`Attempt ${fetchAttempt} to fetch student data...`);

    // Simulate complex network logic here
    // For this example, we pretend it successfully fetches data exactly on the 3rd attempt
    if (fetchAttempt === 3) {
        studentApiData = ["Somya", "Pramod", "Amit"];
        console.log("Success! Data fetched.");
    } else {
        console.log("Network error, retrying...");
    }

    fetchAttempt++;
} while (!studentApiData && fetchAttempt <= maxAttempts);

console.log("Final Students List:", studentApiData);

// ------------------------------------------
// 2. Non-incremental Random Conditions
// ------------------------------------------
console.log("\n--- 2. Waiting For A Random Event ---");

// Here we don't just count 1,2,3. We loop until a randomized condition is magically met!
let diceRoll = 0;
let rollsNeeded = 0;

console.log("Rolling the dice until we get a 6!");
do {
    // Math.random() generates something between 0 and 1
    // Math.floor(Math.random() * 6) + 1 generates an integer between 1 and 6
    diceRoll = Math.floor(Math.random() * 6) + 1;
    rollsNeeded++;
    console.log(`Rolled a ${diceRoll}...`);

} while (diceRoll !== 6); // Loop strictly continues if the roll is NOT a 6

console.log(`Finally got a 6! It took ${rollsNeeded} rolls.`);