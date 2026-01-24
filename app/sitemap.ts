import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://ohara-chapitre-yvelines-paris.fr";

    return [
        {
            url: siteUrl,
            lastModified: "2026-01-24",
            changeFrequency: "monthly",
            priority: 1.0
        }
    ];
}
