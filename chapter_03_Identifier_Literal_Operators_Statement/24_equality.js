// ==, ===, = 

let a = 5;

// You cannot assign a value to a literal:
// console.log(5 = 5); // SyntaxError: Invalid left-hand side in assignment
console.log(5 == "5");
console.log(5 === "5");  // number, string

console.log(null == undefined); // special rule, they only equal each other)
console.log(null === undefined);

console.log(5 == 5.0);
console.log(5 === 5.0);
console.log(5 === 5.01);