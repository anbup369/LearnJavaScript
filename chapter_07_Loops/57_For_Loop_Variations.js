// ==========================================
// Additional For-Loop Concepts (Part 1 - Basics)
// ==========================================

// 1. Decrements (Looping backwards)
console.log("--- Decrements ---");
for (let i = 10; i > 0; i--) {
    console.log("Countdown:", i);
}

// 2. Different Step Sizes (Jumping by more than 1)
console.log("--- Custom Step Sizes ---");
for (let i = 0; i <= 20; i += 5) {
    console.log("Stepping by 5:", i);
}

// 3. Variable Scope (let vs var)
// Using 'let' keeps the variable 'i' confined to this loop block.
// If you use 'var', the variable leaks outside the loop and can cause bugs!
console.log("--- Variable Scope ---");
for (let i = 0; i < 3; i++) {
    console.log("Inside loop (let):", i);
}
// console.log(i); // This would cause a ReferenceError because 'i' is properly scoped!

// 4. Loop Control (Break and Continue)
console.log("--- Break and Continue ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping 5 using continue!");
        continue; // Skips the rest of this iteration
    }
    if (i === 8) {
        console.log("Stopping the loop at 8 using break!");
        break; // Exits the loop entirely
    }
    console.log("Print:", i);
}