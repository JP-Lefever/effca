import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const DOMAIN = "https://effca.fr";

    return [
        {
            url: `${DOMAIN}/`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${DOMAIN}/club`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${DOMAIN}/equipes/seniors`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${DOMAIN}/match/prochain-match`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${DOMAIN}/actualites`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${DOMAIN}/partenaires`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${DOMAIN}/contact`,
            lastModified: new Date("2025-12-10"),
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];
}
