// Combining Logical Operators in Conditions
// -----------------------------------------

let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

// The engine first checks if BOTH the username AND password match.
// If they do, it THEN checks if the account is NOT locked (!).
if ((username === "Dev" && password === "secure123") && !isAccountLocked) {
    console.log("Allowed to enter");
} else {
    // This will print because isAccountLocked is true
    console.log("Not allowed to enter");
}
