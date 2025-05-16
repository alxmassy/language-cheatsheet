/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove invalid experimental options
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig; 