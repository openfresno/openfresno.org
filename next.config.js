const createMDX = require("@next/mdx");
const path = require("path");

// Make GH Pages work for forks as well as the main openfresno.org repo.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isMainRepo =
  process.env.GITHUB_REPOSITORY === "openfresno/openfresno.org";

// Only set basePath if it's a fork.
const basePath = isGitHubActions && !isMainRepo ? "/openfresno.org" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);
