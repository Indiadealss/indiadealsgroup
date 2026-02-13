// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.brandsdoor.in",
      },
    ],
  },
};
export default nextConfig;