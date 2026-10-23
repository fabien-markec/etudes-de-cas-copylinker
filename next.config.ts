import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Toutes les pages sont statiques : export HTML servi par nginx.
  output: "export",
  // Pages portées telles quelles depuis Lovable : on garde le typage, pas les règles de style ESLint.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
