/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove invalid experimental options
  webpack: (config) => {
    return config;
  },
  output: 'export',
  // Only use basePath and assetPrefix in production
  basePath: process.env.NODE_ENV === 'production' ? '/language-cheatsheet' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/language-cheatsheet/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add trailing slashes to all pages
  trailingSlash: true,
  // Ensure static files are generated
  distDir: 'out',
  // Add build cache configuration
  experimental: {
    // Enable build cache
    turbotrace: {
      logLevel: 'error',
    },
  },
};

module.exports = nextConfig; 