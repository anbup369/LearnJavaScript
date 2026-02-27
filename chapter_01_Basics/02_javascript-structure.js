
//Variable Shadowing: 
let a = 10;
console.log(a);

//Runs Untill 100000 
for (let a = 0; a < 100000; a++) {
    console.log(a);
    print();
}

/*- **Variable Shadowing**:  
  - You declare `let a = 10` outside the loop.  
  - Inside the `for` loop, you redeclare `let a = 0`.  
  - This *shadows* the outer variable — meaning the loop’s `a` is a completely separate variable from the outer `a`.  
  - So the outer `a` remains `10`, but inside the loop you’re working with the loop counter.*/

function print() {
    console.log("Hello");
}


// Why This Shows JavaScript Structure
// • 	Block Scope with : Each  declaration is scoped to its block. The loop’s  doesn’t overwrite the outer .
// • 	Variable Shadowing: The inner  hides the outer  within the loop.
// • 	Function Declaration: Shows how functions can be defined and called inside loops.
