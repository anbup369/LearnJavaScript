// Null — "intentionally nothing"

let selectedItem = null;
let searchResult = null;

console.log(searchResult);

// Undefined — "not yet assigned"
let declaredOnly;                     // automatically undefined
console.log(declaredOnly);           // undefined


// The typeof Quirks
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a famous JavaScript bug from the early days!)


// Equality comparisons
console.log(null == undefined); // true
