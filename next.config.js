/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove invalid experimental options
  webpack: (config) => {
    return config;
  },
  output: 'export',
  basePath: '/language-cheatsheet',
  assetPrefix: '/language-cheatsheet/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 