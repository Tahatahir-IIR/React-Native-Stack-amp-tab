const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

async function createImage(filename, width, height, backgroundColor = '#007AFF') {
  const outputPath = path.join(assetsDir, filename);
  
  // Create a simple colored square as placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="${Math.min(width, height) / 10}" 
            fill="white" text-anchor="middle" dominant-baseline="middle">${filename}</text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .resize(width, height)
    .png()
    .toFile(outputPath);
  
  console.log(`✓ Created ${filename} (${width}x${height})`);
}

async function createAllAssets() {
  console.log('Creating placeholder assets...\n');
  
  try {
    // Create icon.png (1024x1024)
    await createImage('icon.png', 1024, 1024, '#007AFF');
    
    // Create splash.png (1284x2778 - iPhone X size)
    await createImage('splash.png', 1284, 2778, '#ffffff');
    
    // Create adaptive-icon.png (1024x1024)
    await createImage('adaptive-icon.png', 1024, 1024, '#007AFF');
    
    // Create favicon.png (48x48)
    await createImage('favicon.png', 48, 48, '#007AFF');
    
    console.log('\n✓ All assets created successfully!');
  } catch (error) {
    console.error('Error creating assets:', error);
    process.exit(1);
  }
}

createAllAssets();
