import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enable static site export
  ...(isGithubPages && {
    basePath: "/<repository-name>", // GitHub Pages base path
    assetPrefix: "/<repository-name>", // Asset prefix for GitHub Pages
  }),
};

export default nextConfig;

