/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dev.bitcoders.net']
  },
  env: {
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    VERCEL: process.env.NEXTAUTH_URL,
    VERCEL_URL: process.env.NEXTAUTH_URL
  }
};

module.exports = nextConfig;
