/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  // Add webpack configuration
  webpack: (config, { isServer }) => {
    // Add fallbacks for node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      path: false,
      os: false,
    };
    return config;
  },
};

module.exports = nextConfig; 