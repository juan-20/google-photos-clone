/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.icon-icons.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
