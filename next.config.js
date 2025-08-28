const path = require("path");
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  transpilePackages: ["next-mdx-remote"],
};

module.exports = withMDX(nextConfig);
