import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://vjdarsh.com",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // Add other routes if we had separate pages
    ];
}
