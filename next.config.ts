import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "Apex Academy Minnesotaclassical.org",
      },
    ],
  },
};

export default nextConfig;
