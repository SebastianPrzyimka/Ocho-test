import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: cacheComponents / partialPrefetching were switched on by the Next.js
  // starter, but they hang requests on Cloudflare Workers, so they are left off.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings locally (see OpenNext docs).
import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
