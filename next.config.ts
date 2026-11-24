import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.SITE_BASE_PATH ?? "",
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
  agentRules: false,
};

export default nextConfig;
