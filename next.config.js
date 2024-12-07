/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/cv",
  //         destination: "/cv.pdf",
  //       },
  //       {
  //         source: "/cv/doc",
  //         destination: "/cv.docx",
  //       },
  //     ],
  //   };
  // },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
