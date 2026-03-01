// null vs undefined
// -----------------
// They both signify an "empty" value, but they are NOT the exact same!

console.log(null === undefined); // false
// Why false? Because they are strictly different types:
// typeof null -> "object", typeof undefined -> "undefined"

console.log(null == undefined); // true
// Why true? Because loose equality (==) coerces them and recognizes 
// that they both represent the concept of "nothing".

console.log(null == 0);         // false
console.log(null == "");        // false
console.log(undefined == 0);    // false
console.log(undefined == "");   // false
