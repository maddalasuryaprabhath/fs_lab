require("./node_script.js"); 

console.log("\n--- [global.js execution] ---");

console.log("App Version:", global.appVersion);
console.log("User Role:", userRole); 

// B. Demonstrating Scope Limits
try {
  // This will throw an error because secretKey was not attached to global
  console.log("Secret Key:", secretKey);
} catch (error) {
  console.log("Scope Error Captured:", error.message);
}

// processExample.js
console.log("🧠 Node Version:", process.version);
console.log("📁 Current Working Directory:", process.cwd());
console.log("🧪 Platform:", process.platform);


// bufferExample.js
const buf = Buffer.from("Hello, Node.js!");
console.log("🔢 Buffer Length:", buf.length);
console.log("📦 Buffer Content:", buf.toString()); // Output: Hello, Node.js!
 