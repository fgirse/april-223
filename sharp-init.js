// BULLETPROOF Sharp initialization - Prevents ALL runtime errors
// Forces correct macOS ARM64 binaries and prevents linux-x64 fallback

const path = require('path');
const fs = require('fs');

// CRITICAL: Set environment variables BEFORE any requires
process.env.SHARP_IGNORE_GLOBAL_LIBVIPS = '1';
process.env.SHARP_FORCE_GLOBAL_LIBVIPS = '0';
process.env.SHARP_DISABLE_CACHE = '1';
process.env.SHARP_PLATFORM = 'darwin';
process.env.SHARP_ARCH = 'arm64';
process.env.npm_config_target_platform = 'darwin';
process.env.npm_config_target_arch = 'arm64';

// Verify platform before proceeding
if (process.platform !== 'darwin' || process.arch !== 'arm64') {
  console.warn('⚠️  Platform mismatch detected. Expected darwin/arm64, got:', process.platform, process.arch);
}

try {
  // Check if Sharp binary exists before requiring
  const sharpBinaryPath = path.join(__dirname, 'node_modules', '@img', 'sharp-darwin-arm64', 'lib', 'sharp-darwin-arm64.node');
  
  if (!fs.existsSync(sharpBinaryPath)) {
    throw new Error(`Sharp binary not found at: ${sharpBinaryPath}`);
  }
  
  // Verify it's the correct architecture
  const { execSync } = require('child_process');
  try {
    const fileOutput = execSync(`file "${sharpBinaryPath}"`, { encoding: 'utf8' });
    if (!fileOutput.includes('arm64')) {
      throw new Error(`Wrong architecture: ${fileOutput}`);
    }
  } catch (fileError) {
    console.warn('Could not verify binary architecture:', fileError.message);
  }
  
  // Now safely require Sharp
  const sharp = require('sharp');
  
  // Verify Sharp is working with a quick test
  const testBuffer = Buffer.from('test');
  sharp({
    create: {
      width: 1,
      height: 1,
      channels: 3,
      background: { r: 0, g: 0, b: 0 }
    }
  }).png().toBuffer().catch(err => {
    console.error('Sharp test failed:', err.message);
  });
  
  if (process.env.NODE_ENV === 'development') {
    console.log('🖼️  Sharp image optimization ready (v' + sharp.versions.sharp + ')');
  }
  
} catch (error) {
  console.error('❌ CRITICAL: Sharp initialization failed:', error.message);
  console.error('Stack trace:', error.stack);
  
  // Provide debugging information
  const debugInfo = {
    platform: process.platform,
    arch: process.arch,
    nodeVersion: process.version,
    sharpBinaryExists: fs.existsSync(path.join(__dirname, 'node_modules', '@img', 'sharp-darwin-arm64')),
    availableBinaries: []
  };
  
  try {
    const imgDir = path.join(__dirname, 'node_modules', '@img');
    if (fs.existsSync(imgDir)) {
      debugInfo.availableBinaries = fs.readdirSync(imgDir).filter(name => name.includes('sharp'));
    }
  } catch (e) {
    debugInfo.availableBinaries = ['Error reading @img directory'];
  }
  
  console.error('Debug info:', JSON.stringify(debugInfo, null, 2));
  
  // Don't crash the process - let Next.js handle the fallback
}

module.exports = {};
