/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bitcoders.net']
  }
};

module.exports = nextConfig;
