// The 'const' Declaration
// -----------------------
// 'const' creates a block-scoped variable whose reference CANNOT be reassigned.
// It also suffers from the Temporal Dead Zone (TDZ) just like 'let'.

// console.log(MAX_RETRIES); // ReferenceError (due to TDZ)
// const MAX_RETRIES = 3;
// MAX_RETRIES = 4; // TypeError: Assignment to constant variable.

const score = 100
// score = score+10; // This will crash! You cannot reassign a const.

const pi = 3.14;
const prod_api_url = "https://app.vwo.com/#login";
//prod_api_url = "https://google.com"
const qa_api_url = "https://qa.vwo.com/#login";

let abc = "anil";
console.log(abc);