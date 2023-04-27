const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dl.airtable.com", "v5.airtableusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withPlaiceholder(nextConfig);
