const fs = require('fs');
const path = require('path');

// Fix for Windows node:sea directory issue
const expoDir = path.join(__dirname, '..', '.expo', 'metro', 'externals');
const nodeSeaDir = path.join(expoDir, 'node:sea');

// Create the externals directory if it doesn't exist
if (!fs.existsSync(expoDir)) {
  fs.mkdirSync(expoDir, { recursive: true });
}

// Create a symbolic link or file to handle the node:sea case
// Since we can't create directories with : on Windows, we'll create a file instead
const nodeSeaFile = path.join(expoDir, 'node-sea.js');
if (!fs.existsSync(nodeSeaFile)) {
  fs.writeFileSync(nodeSeaFile, '// Placeholder for node:sea\nmodule.exports = {};');
}

console.log('Fixed Windows node:sea directory issue');
