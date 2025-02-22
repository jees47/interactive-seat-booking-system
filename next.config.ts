import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  theme: {
    extend: {
      colors: {
        silver: '#C4C4C4',
        gold: '#FFD700',
        platinum: '#E5E4E2',
      },
    },
  },
};

export default nextConfig;
