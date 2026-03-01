// Using Switch with User Input (Node.js Example)
// ----------------------------------------------

// 👇 NOTE: About this block! It is just "boilerplate" code needed 
// in Node.js to read text that a user types into the terminal.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a browser name (Chrome, Firefox, Safari): ', browser => {

    switch (browser.toLowerCase()) {
        case "chrome":
            console.log("You chose Google Chrome!");
            break;
        case "firefox":
            console.log("You chose Mozilla Firefox!");
            break;
        case "safari":
            console.log("You chose Apple Safari!");
            break;
        default:
            console.log("Unknown browser...");
    }

    readline.close();
});