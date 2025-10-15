
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/growth-hub" : "",
  assetPrefix: isProd ? "/growth-hub/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};