const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fix the node:sea directory issue before starting Expo
const expoDir = path.join(__dirname, '..', '.expo', 'metro', 'externals');
if (!fs.existsSync(expoDir)) {
  fs.mkdirSync(expoDir, { recursive: true });
}

// Set environment variable to potentially bypass the issue
process.env.EXPO_NO_METRO_LAZY = 'true';

// Start Expo
const expoProcess = spawn('npx', ['expo', 'start'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, EXPO_NO_METRO_LAZY: 'true' }
});

expoProcess.on('error', (error) => {
  console.error('Error starting Expo:', error);
  process.exit(1);
});

expoProcess.on('exit', (code) => {
  process.exit(code);
});
