console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);

}
console.log("After 10000 calls:", result);


// Why It’s Not Hot Code
// • 	Hot code (or hot code reloading / hot module replacement) means the program can update itself while running when you change the source code.
// • 	This script doesn’t have any mechanism to reload or swap code. It’s compiled/interpreted once and executed as-is.
// • 	Tools like Webpack HMR, Vite, or nodemon are needed to enable hot code behavior. They watch your files and reload/recompile automatically when you edit them.



// Hot code usually means **Hot Module Replacement (HMR)** or **live reloading**, where your app updates automatically when you change code, without restarting everything.

/*
## 🔹 Example: Hot Code Reloading with Node.js

Here’s a minimal setup using `nodemon` (a tool that watches files and restarts automatically):

```js
// hello.js
console.log("Hello World");

function add(a, b) {
    return a + b;
}

console.log("Sum:", add(2, 3));
```

Run it with:
```bash
nodemon hello.js
```

- When you edit `hello.js` (say, change `"Hello World"` to `"Hello Hot Code!"`),  
- `nodemon` detects the change and reloads the script automatically.  
- You don’t need to stop and restart manually — that’s **hot code reloading**.*/