import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static site export
  //basePath: process.env.NODE_ENV === 'production' ? '/kevtran2.github.io' : '',
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/kevtran2.github.io/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;

