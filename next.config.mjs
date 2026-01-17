import getBasePath from "./src/integrations/gh-pages/getBasePath.mjs";
import createMDX from "@next/mdx";

const basePath = getBasePath(true);

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactCompiler: true,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
