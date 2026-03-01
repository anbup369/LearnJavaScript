let a = "Pramod";

if (true) {
    // Temporal Dead Zone (TDZ):
    // 'let' and 'const' declarations are hoisted to the top of their block scope,
    // but they are NOT initialized with undefined like 'var'. 
    // The JS engine intentionally throws a ReferenceError to prevent usage before initialization.
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = "temp";
}
