import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  
  images: {
    domains: ["images.pexels.com"],
    unoptimized: true, 
  },
  basePath: process.env.NODE_ENV === 'production' ? '/interactive-seat-booking-system' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/interactive-seat-booking-system/' : '',
};

export default nextConfig;