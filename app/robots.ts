import type { MetadataRoute } from "next";

// Test build: ask search engines not to crawl anything.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
