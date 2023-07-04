/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images5.alphacoders.com", "www.themoviedb.org"],
  },
};

module.exports = nextConfig;
