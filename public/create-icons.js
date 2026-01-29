const fs = require('fs');
const path = require('path');

// Create simple SVG-based icons
const createIcon = (size) => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size}" fill="url(#grad)"/>
    <text x="${size/2}" y="${size/2}" font-size="${size/3}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">WQ</text>
  </svg>`;
};

// Create PNG from SVG using a simple approach
const sizes = [96, 192, 512];
sizes.forEach(size => {
  const svg = createIcon(size);
  fs.writeFileSync(path.join(__dirname, `icon-${size}x${size}.svg`), svg);
  console.log(`Created icon-${size}x${size}.svg`);
});

// Create maskable icons
sizes.forEach(size => {
  const svg = createIcon(size);
  fs.writeFileSync(path.join(__dirname, `icon-maskable-${size}x${size}.svg`), svg);
  console.log(`Created icon-maskable-${size}x${size}.svg`);
});

console.log('Icons created successfully!');
