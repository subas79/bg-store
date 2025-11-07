// Script to organize WhatsApp assets into proper structure
// Run this script to move assets from assets/ to public/

import * as fs from 'fs';
import * as path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'assets');
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'products');
const PUBLIC_VIDEOS_DIR = path.join(process.cwd(), 'public', 'videos', 'products');

// Create directories if they don't exist
[PUBLIC_IMAGES_DIR, PUBLIC_VIDEOS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Read assets directory
const files = fs.readdirSync(ASSETS_DIR);

let imageCounter = 1;
let videoCounter = 1;

files.forEach(file => {
  const sourcePath = path.join(ASSETS_DIR, file);
  const stats = fs.statSync(sourcePath);
  
  if (stats.isFile()) {
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
      // Rename image files to product-XXX.jpg format
      const newFileName = `product-${String(imageCounter).padStart(3, '0')}.jpg`;
      const destPath = path.join(PUBLIC_IMAGES_DIR, newFileName);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Moved image: ${file} -> ${newFileName}`);
      imageCounter++;
    } else if (ext === '.mp4' || ext === '.mov' || ext === '.avi') {
      // Rename video files to product-XXX.mp4 format
      const newFileName = `product-${String(videoCounter).padStart(3, '0')}.mp4`;
      const destPath = path.join(PUBLIC_VIDEOS_DIR, newFileName);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Moved video: ${file} -> ${newFileName}`);
      videoCounter++;
    }
  }
});

console.log(`\nOrganization complete!`);
console.log(`- ${imageCounter - 1} images moved to public/images/products/`);
console.log(`- ${videoCounter - 1} videos moved to public/videos/products/`);

