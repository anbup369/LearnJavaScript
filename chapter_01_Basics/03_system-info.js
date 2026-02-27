/* ## 🔹 Setup Steps for Running JavaScript Standalone with Node.js

1. **Install Node.js**
   - Go to [nodejs.org](https://nodejs.org) and download the latest LTS (Long-Term Support) version for your operating system.
   - Install it using the installer (Windows `.msi`, macOS `.pkg`, or Linux package manager).

2. **Verify Installation**
   - Open a terminal (Command Prompt, PowerShell, or shell).
   - Run:
     ```bash
     node -v
     ```
     This prints the Node.js version (e.g., `v20.11.0`).
   - Run:
     ```bash
     npm -v
     ```
     This prints the Node Package Manager version.

3. **To Run this Script**
   - In the terminal, navigate to the folder containing `system-info.js`.
   - Run:
     ```bash
     node system-info.js
     ```
   - You’ll see output like:
     ```
     OS Platform : win32
     Processor Architecture : x64
     Node Version: v20.11.0
     ```
     */

console.log("OS Platform :", process.platform);
// MAC - DARWIN
// WINDOWS - WIN32
// LINUX - LINUX

console.log("Processor Architecture :", process.arch);
// x64
// arm64


console.log("Node Version:", process.version);



