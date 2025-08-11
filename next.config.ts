import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.simpleicons.org",
            },
        ],
    },
    outputFileTracing: true,
    outputFileTracingIncludes: {

        "**/*": ["./generated/client"],
    },
};

export default nextConfig;
