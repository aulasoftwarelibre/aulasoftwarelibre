import type { NextConfig } from "next";

const isProd = process.env.PROD === "true";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/aulasoftwarelibre/wip' : '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
