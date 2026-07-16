import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel/Apache hosting — `next build` emits plain
  // HTML/CSS/JS into `out/`, no Node.js needed on the server.
  output: "export",
  // Emit /about/index.html so Apache serves /about/ directly.
  trailingSlash: true,
  // The image optimizer needs a server; serve original files instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
