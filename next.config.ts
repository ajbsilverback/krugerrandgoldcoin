import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  
  // Permanent (301) redirects for renamed routes
  async redirects() {
    return [
      {
        source: "/prices",
        destination: "/live-gold-prices",
        permanent: true,
      },
      // Redirect old bar-site URL pattern to new coin URL
      {
        source: "/where-to-buy-10-oz-gold-bars",
        destination: "/where-to-buy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
