// Real World Example: Form Validation
// -----------------------------------

function validateForm(email, password) {
    if (!email.includes("@")) {
        console.log("Error: Invalid email format.");
        return false;
    } else if (password.length < 6) {
        console.log("Error: Password must be at least 6 characters.");
        return false;
    } else {
        console.log("Success! Form is valid.");
        return true;
    }
}

validateForm("pramod", "123");         // "Error: Invalid email format."
validateForm("pramod@test.com", "123");// "Error: Password must be at least 6 characters."
validateForm("pramod@test.com", "secure123"); // "Success! Form is valid."