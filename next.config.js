/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dev.bitcoders.net']
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  }
};

module.exports = nextConfig;
