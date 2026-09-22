//File System Module
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'myfile.txt');

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ' + err);
    return;
  }
  console.log('File content: ' + data);
});

console.log('Reading file... (this runs first!)');

// OS Module
const os = require('os');

console.log(`OS Platform: ${os.platform()}`); // e.g., 'darwin', 'win32', 'linux'
console.log(`CPU Architecture: ${os.arch()}`); // e.g., 'x64'
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Current User Info: ${JSON.stringify(os.userInfo())}`);

// DNS Module
const dns = require('dns');
dns.lookup('google.com', (err, address, family) => {
    if (err) {
        console.error(`DNS lookup failed: ${err.message}`);
        return;
    }
    console.log(`The Address: ${address}`);
    console.log(`The Family: IPv${family}`);
});
    
//Simple Web Server
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  console.log('Server running at http://localhost:8080/');
}).listen(8080);