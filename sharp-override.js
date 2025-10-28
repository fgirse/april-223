// Sharp module override to prevent runtime errors
// This file ensures Sharp always loads with correct binaries for macOS ARM64

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
    process.env.SHARP_PLATFORM = 'darwin';
    process.env.SHARP_ARCH = 'arm64';
    
    try {
      const sharp = originalRequire.call(this, id);
      return sharp;
    } catch (error) {
      if (error.message.includes('linux-x64') || error.message.includes('linux') || error.message.includes('glibc')) {
        console.error('❌ Prevented Sharp linux runtime error:', error.message);
        console.log('🔧 Trying to load correct macOS ARM64 Sharp binary...');
        
        // Force macOS ARM64 platform
        process.env.npm_config_target_platform = 'darwin';
        process.env.npm_config_target_arch = 'arm64';
        
        // Try to require with explicit path
        try {
          const sharpPath = path.join(__dirname, 'node_modules', 'sharp');
          return originalRequire.call(this, sharpPath);
        } catch (secondError) {
          console.error('❌ Failed to load Sharp with explicit path:', secondError.message);
          throw new Error('Sharp module could not be loaded. Please run: npm rebuild sharp');
        }
      }
      throw error;
    }
  }
  
  return originalRequire.call(this, id);
};

module.exports = {};
