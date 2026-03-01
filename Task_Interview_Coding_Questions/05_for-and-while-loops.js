//🔰 Beginner Level Programs
//This script demonstrates basic looping constructs ( and ) in JavaScript by solving simple problems:

console.log("Beginner Level Programs")
console.log("---------------------------------------------\n")
//For Loop
console.log("Using For Loop")
console.log("---------------------------------------------")
//1️⃣ Print "Hello" 5 times
console.log(`Print "Hello" 5 times\n`)
for (let i = 0; i < 5; i++) {
    console.log("Hello")
}
console.log("---------------------------------------------")
// 2️⃣  Print numbers from 1 to 10
console.log(`Print numbers from 1 to 10\n`)
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("---------------------------------------------")
// 3️⃣ Print even numbers from 1 to 20
console.log(`Print even numbers from 1 to 20\n`)
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(i)
}
console.log("---------------------------------------------")
// 4️⃣ Print the sum of first 10 natural numbers
console.log(` Print the sum of first 10 natural numbers\n`)
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum)
console.log("---------------------------------------------")
// 5️⃣ Print the multiplication table of 5
console.log(` Print the multiplication table of 5\n`)
let prod;
for (let i = 1; i <= 10; i++) {
    prod = 5 * i
    console.log(`5x${i}=${prod}`)
}
console.log("---------------------------------------------")
// While Loop
console.log("Using While Loop")
console.log("---------------------------------------------")
// 1️⃣ Print "Playwright" 5 times
console.log(` Print "Playwright" 5 times\n`)
let i = 0;
while (i < 5) {
    console.log("Playwright")
    i++
}
console.log("---------------------------------------------")
// 2️⃣ Print numbers from 1 to 10
console.log(` Print numbers from 1 to 10\n`)
let num = 1;
while (num <= 10) {
    console.log(num)
    num++
}
console.log("---------------------------------------------")
// 3️⃣ Print even numbers from 1 to 20
console.log(` Print even numbers from 1 to 20\n`)
let even = 1;
while (even <= 20) {
    if (even % 2 === 0) {
        console.log(even)
    }
    even++
}
console.log("---------------------------------------------")
// 4️⃣ Calculate sum of first 10 natural numbers
console.log(` Calculate sum of first 10 natural numbers\n`)
let natural_sum = 0;
let natural = 1;
while (natural <= 10) {
    natural_sum += natural
    natural++
}
console.log(natural_sum)

console.log("---------------------------------------------")
// 5️⃣ Print the multiplication table of 7
console.log(` Print the multiplication table of 7\n`)
let tab = 1;
let multi;
while (tab <= 10) {
    multi = 7 * tab;
    console.log(`7*${tab}=${multi}`);
    tab++
}
console.log("---------------------------------------------")