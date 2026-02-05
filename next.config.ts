import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // keep optimizer ON when using PM2
    domains: ["indiadealsgroup.com"],
  },
};

export default nextConfig;