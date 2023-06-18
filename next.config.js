/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dev.bitcoders.net']
  },
  env: {
    GOOGLE_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  }
};

module.exports = nextConfig;
