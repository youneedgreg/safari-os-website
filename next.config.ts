import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Trailing-slash-free canonical URLs: one URL per page, no duplicate-content pairs.
  trailingSlash: false,
};

export default nextConfig;
