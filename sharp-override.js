// Sharp module override to prevent runtime errors
// This file ensures Sharp always loads with correct binaries

const path = require('path');
const Module = require('module');

// Store original require
const originalRequire = Module.prototype.require;

// Override require for Sharp specifically
Module.prototype.require = function(id) {
  if (id === 'sharp') {
    // Set environment variables before requiring Sharp
    process.env.SHARP_IGNORE_GLOBAL_LIBVIPS = '1';
    process.env.SHARP_FORCE_GLOBAL_LIBVIPS = '0';
    process.env.SHARP_DISABLE_CACHE = '1';
    
    try {
      const sharp = originalRequire.call(this, id);
      return sharp;
    } catch (error) {
      if (error.message.includes('linux-x64')) {
        console.error('❌ Prevented Sharp linux-x64 runtime error');
        
        // Try to require with explicit path
        const sharpPath = path.join(__dirname, 'node_modules', 'sharp');
        return originalRequire.call(this, sharpPath);
      }
      throw error;
    }
  }
  
  return originalRequire.call(this, id);
};

module.exports = {};
