import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      "images.unsplash.com",
      "api.uifaces.co",
      "mighty.tools",
      "cdn.sanity.io",
    ],
  },
};

export default nextConfig;
