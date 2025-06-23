import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
      remotePatterns : [
          {
          protocol : "https",
          hostname : "res.cloudinary.com",
          pathname : "/**"
      },
          {
              protocol: 'https',
              hostname: 'cdn.simpleicons.org',
          },
      ],
  }
};
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});

export default nextConfig;
