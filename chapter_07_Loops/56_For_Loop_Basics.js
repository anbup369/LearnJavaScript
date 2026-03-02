// ==========================================
// For Loops - Core Fundamentals & Edge Cases
// ==========================================

// ------------------------------------------
// 1. Basic Structure: for(Initialization; Condition; Update)
// ------------------------------------------
console.log("--- 1. Pre VS Post Increment ---");

// Using Pre-increment (++i)
console.log("Pre-increment loop:");
for (let i = 0; i < 5; ++i) {
    console.log(i);
}

// Using Post-increment (i++)
console.log("Post-increment loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ------------------------------------------
// 2. Custom Variable Naming
// ------------------------------------------
console.log("\n--- 2. Custom Variable Naming ---");
// Loop iterator variables don't have to be named 'i'. You can use any valid identifier.
for (let somya = 0; somya < 10; somya++) {
    console.log("somya counter:", somya);
}

// You can even use numbers with underscores, though non-standard.
// for (let _1 = 0; _1 <= 10; _1++) { // 0 to 10 (runs 11 times)
//     console.log(_1);
// }


// ------------------------------------------
// 3. Loops With Logic (Conditionals)
// ------------------------------------------
console.log("\n--- 3. Loops With Conditionals ---");
// You can nest standard if/else logic perfectly inside loops
for (let somya = 14; somya <= 17; somya++) {
    if (somya > 15) {
        console.log(`Year ${somya}: Gift from papa, iphone this year!`);
    } else {
        console.log(`Year ${somya}: No Gift, only barbie doll.`);
    }
}


// ------------------------------------------
// 4. Edge Cases: Infinite Loops & Zero Executions
// ------------------------------------------
console.log("\n--- 4. Edge Cases ---");

// a) Zero Execution & Missing Updates
// Because 0 is NOT greater than 10, this condition is 'false' immediately.
// The loop never runs its block even once. Also notice the missing update 'U' piece!
console.log("Zero Execution Example (Nothing prints after this line):");
for (let i = 0; i > 10;) {
    console.log("Hello from inside the zero-execution loop!");
}

// b) Immediate False Condition (Commented out)
// for (let pramod = 0; pramod > 1; pramod++) {
//     console.log(pramod); // Evaluates false immediately.
// }

// c) Infinite Loop (Commented out to prevent application freeze/crash)
// Missing the condition entirely creates an infinite loop.
// for (let pramod = 0; ; pramod++) {
//     console.log(pramod);
// }