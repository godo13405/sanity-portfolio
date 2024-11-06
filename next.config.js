/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/cv",
        destination: process.env.NEXT_PUBLIC_CV_LINK,
      },
    ];
  },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
