import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://ohara-chapitre-yvelines-paris.fr";

    return [
        {
            url: siteUrl,
            lastModified: "2026-01-25",
            changeFrequency: "monthly",
            priority: 1.0
        },
        {
            url: `${siteUrl}/mentions-legales`,
            lastModified: "2026-01-25",
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${siteUrl}/politique-de-confidentialite`,
            lastModified: "2026-01-24",
            changeFrequency: "yearly",
            priority: 0.3
        },
        {
            url: `${siteUrl}/cookies`,
            lastModified: "2026-01-24",
            changeFrequency: "yearly",
            priority: 0.2
        }
    ];
}
