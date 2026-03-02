// ==========================================
// Additional For-Loop Concepts (Part 2 - Advanced)
// ==========================================

// 1. Multiple Assignments
console.log("--- Multiple Assignments ---");
// You can declare and update multiple variables in the same statement
for (let i = 0, j = 10; i <= j; i++, j--) {
    console.log(`i is ${i}, j is ${j}`);
}

// 2. Iterating Arrays (for...of)
console.log("--- Array Iteration (for...of) ---");
const fruits = ["Apple", "Banana", "Cherry"];
// Modern JS way to iterate arrays without an index counter
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// 3. Iterating Objects (for...in)
console.log("--- Object Iteration (for...in) ---");
const user = {
    name: "Somya",
    age: 25,
    role: "Developer"
};
// Iterating over properties/keys of an object
for (const key in user) {
    console.log(key + ":", user[key]);
}