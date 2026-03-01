// var is globally or function scoped, not block scoped.
console.log(myVar); // Output: undefined
if (true) {
    var myVar = "I am hoisted outside this if block!";
}
console.log(myVar); // Output: "I am hoisted outside this if block!"
