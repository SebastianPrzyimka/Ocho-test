// Minimal OpenNext config for Cloudflare. No R2 cache bucket is needed for this
// simple site, so nothing extra has to be created in the Cloudflare account.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
