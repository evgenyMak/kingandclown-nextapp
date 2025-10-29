// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Указываем разрешённые источники для разработки
  allowedDevOrigins: ["http://localhost:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**",
      },
    ],
  },
};

export default nextConfig;
