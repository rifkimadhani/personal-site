import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl.href }];
}
