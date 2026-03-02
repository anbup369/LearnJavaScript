// Increment Operator
// ++ -> increase the value by 1

// The Golden Rule:
// - **Pre-increment (`++a`)** → increment first, then use the new value.  
// - **Post-increment (`a++`)** → use the current value first, then increment afterward.

//Pre-increment
let a = 10;
let b = ++a; //(++a -> 10 + 1 and 11 is assigned to b)
console.log(b);//11
console.log(a);//11

// ### ERP Table (Pre-Increment)

// | Line No | Expression / Statement | Value of `a` | Value of `b` | Output (console) |
// |---------|-------------------------|--------------|--------------|------------------|
// | 1       | `let a = 10;`          | 10           | NA           | NA               |
// | 2       | `let b = ++a;`         | 11           | 11           | NA               |
// | 3       | `console.log(b);`      | 11           | 11           | 11               |
// | 4       | `console.log(a);`      | 11           | 11           | 11               |

//Post-increment

let x = 10;
let y = x++;//(x++> 10 is assigned to y and then x-> 10+1)
console.log(y);//10
console.log(x);//11

// ### ERP Table (Post-Increment)

// | Line No | Expression / Statement | Value of `x` | Value of `y` | Output (console) |
// |---------|-------------------------|--------------|--------------|------------------|
// | 1       | `let x = 10;`          | 10           | NA           | NA               |
// | 2       | `let y = x++;`         | 11           | 10           | NA               |
// | 3       | `console.log(y);`      | 11           | 10           | 10               |
// | 4       | `console.log(x);`      | 11           | 10           | 11               |


// Advanced Interview Trick Questions

// let a = 10;
// console.log(a++ + a);
// // A+B -> A -> a++ (  ExpA - 10, a-> 11 )
// // +
// // B -> 11, a -> 11 ,
// // Exp A. + ExpB -> 10 + 11

// **ERP Validation:**
// | Line No | Expression / Statement | Value of `a` | Result | Output |
// |---------|-------------------------|--------------|--------|--------|
// | 13      | `let a = 10;`          | 10           | NA     | NA     |
// | 14      | `console.log(a++ + a);`| 11           | 21     | 21     |


// let a = 10;
// console.log(a++ + ++a);
// console.log(a);

// // A + B
// // ExpA -> 10, a -> 11
// // +
// // ExpB -> 12, a-> 12
// // ExpA. + ExpB ->  10+12 -> 22
// // a -> 12

// **ERP Validation:**
// | Line No | Expression / Statement | Value of `a` | Result | Output |
// |---------|-------------------------|--------------|--------|--------|
// | 1       | `let a = 10;`          | 10           | NA     | NA     |
// | 2       | `console.log(a++ + ++a);`| 12         | 22     | 22     |
// | 3       | `console.log(a);`      | 12           | NA     | 12     |


// let a = 10;
// console.log(++a + ++a);
// console.log(a);

// **ERP Validation:**
// | Line No | Expression / Statement | Value of `a` | Result | Output |
// |---------|-------------------------|--------------|--------|--------|
// | 1       | `let a = 10;`          | 10           | NA     | NA     |
// | 2       | `console.log(++a + ++a);`| 12         | 23     | 23     |
// | 3       | `console.log(a);`      | 12           | NA     | 12     |
