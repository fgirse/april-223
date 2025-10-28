const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "Carlo2024",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "school",
    // Ensure Sharp environment variables are available
    SHARP_IGNORE_GLOBAL_LIBVIPS: "1",
    SHARP_FORCE_GLOBAL_LIBVIPS: "0",
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  serverExternalPackages: ['@prisma/studio-core'],
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
  // Ensure Sharp is properly handled and disable fallback
  images: {
    loader: 'default',
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Force Sharp usage and prevent fallback
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        sharp: 'commonjs sharp'
      });
    }
    return config;
  },
};

export default nextConfig;

