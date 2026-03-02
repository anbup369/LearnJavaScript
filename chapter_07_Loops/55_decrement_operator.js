// Decrement Operator
// -- -> decrease the value by 1

// The Golden Rule:
// - **Pre-decrement (`--a`)** → decrement first, then assign.  
// - **Post-decrement (`a--`)** → assign first, then decrement. 


//Pre-decrement
let a = 10;
let b = --a; //(--a -> 10 - 1 and 9 is assigned to b)
console.log(b);//9
console.log(a);//9

// ### ERP Table (Pre-Decrement)

// | Line No | Expression / Statement | Value of `a` | Value of `b` | Output (console) |
// |---------|-------------------------|--------------|--------------|------------------|
// | 1       | `let a = 10; `          | 10           | NA           | NA               |
// | 2       | `let b = --a; `         | 9            | 9            | NA               |
// | 3       | `console.log(b); `      | 9            | 9            | 9                |
// | 4       | `console.log(a); `      | 9            | 9            | 9                |

//Post-decrement
let x = 10;
let y = x--; //(x--> 10 is assigned to y and then x-> 10-1)
console.log(y);//10
console.log(x);//9

// ### ERP Table (Post-Decrement for Comparison)

// | Line No | Expression / Statement | Value of `x` | Value of `y` | Output (console) |
// |---------|-------------------------|--------------|--------------|------------------|
// | 1       | `let x = 10; `          | 10           | NA           | NA               |
// | 2       | `let y = x--; `         | 9            | 10           | NA               |
// | 3       | `console.log(y); `      | 9            | 10           | 10               |
// | 4       | `console.log(x); `      | 9            | 10           | 9                |


// Advanced Interview Trick Questions

// let a = 10;
// console.log(a-- + a);
// // A+B -> A -> a-- (  ExpA - 10, a-> 9 )
// // +
// // B -> 9, a -> 9 ,
// // Exp A. + ExpB -> 10 + 9

// **ERP Validation:**

// | Line No | Expression / Statement | Value of `a` | Result | Output |
// |---------|-------------------------|--------------|--------|--------|
// | 13      | `let a = 10;`          | 10           | NA     | NA     |
// | 14      | `console.log(a-- + a);`| 9            | 19     | 19     |

// let a = 10;
// console.log(a-- + --a);
// console.log(a);

// // A + B
// // ExpA -> 10, a -> 9
// // +
// // ExpB -> 8, a-> 8
// // ExpA. + ExpB ->  10+8 -> 18
// // a -> 8

// **ERP Validation:**
// | Line No | Expression / Statement | Value of `a` | Result | Output |
// |---------|-------------------------|--------------|--------|--------|
// | 1       | `let a = 10;`          | 10           | NA     | NA     |
// | 2       | `console.log(a-- + --a);`| 8          | 18     | 18     |
// | 3       | `console.log(a);`      | 8            | NA     | 8      |


// let a = 10;
// console.log(--a + --a);
// console.log(a);

// **ERP Validation:**
// | Line No | Expression / Statement | Value of `a` | Result | Output |
// |---------|-------------------------|--------------|--------|--------|
// | 1       | `let a = 10;`          | 10           | NA     | NA     |
// | 2       | `console.log(--a + --a);`| 8          | 17     | 17     |
// | 3       | `console.log(a);`      | 8            | NA     | 8      |

