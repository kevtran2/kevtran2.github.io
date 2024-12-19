import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enable static site export
  ...(isGithubPages && {
    basePath: "/kevtran2.github.io", // GitHub Pages base path
    assetPrefix: "/kevtran2.github.io", // Asset prefix for GitHub Pages
  }),
};

export default nextConfig;

