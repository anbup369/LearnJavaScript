let a = 10;
console.log(a);

if (true) {
    // 'a' is hoisted to the top of this block scope.
    // However, it is in the Temporal Dead Zone (TDZ) from the beginning
    // of the block until the evaluation of its declaration.
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 20;
}
