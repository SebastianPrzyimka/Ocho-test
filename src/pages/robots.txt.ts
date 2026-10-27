import type { APIRoute } from "astro";
import { isProduction } from "../config/site";

// Test builds ask every crawler to stay away. Production allows crawling and lists the sitemap.
export const GET: APIRoute = ({ site }) => {
  const body = isProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", site).href}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
