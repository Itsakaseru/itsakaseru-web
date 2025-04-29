import fs from "fs";
import path from "path";
import { getPortfolioList } from "~/portfolio/resource";

interface SitemapEntry {
  url:         string,
  lastmod?:    string,
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
  priority?:   number,
}

interface SitemapURL {
  loc:         string,
  lastmod?:    string,
  changefreq?: string,
  priority?:   string,
}

function generateSitemapXML(baseUrl: string, entries: SitemapEntry[]): string {
  const urls: SitemapURL[] = entries.map((entry) => ({
    loc: `${baseUrl}${entry.url}`,
    ...entry.lastmod && { lastmod: entry.lastmod },
    ...entry.changefreq && { changefreq: entry.changefreq },
    ...entry.priority && { priority: entry.priority.toString() },
  }));

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `
  <url>
    <loc>${url.loc}</loc>${url.lastmod ?
`
    <lastmod>${url.lastmod}</lastmod>` :
""}${url.changefreq ?
`
    <changefreq>${url.changefreq}</changefreq>` :
""}${url.priority ?
`
    <priority>${url.priority}</priority>` :
""}
  </url>`).join("")}
</urlset>`;

  return xmlContent.trim();
}

function writeSitemapToFile(xmlContent: string, outputPath: string): void {
  fs.writeFileSync(path.resolve(outputPath), xmlContent);
}

const staticPages: SitemapEntry[] = [
  {
    url:        "/",
    lastmod:    "2025-04-29",
    changefreq: "yearly",
    priority:   0.5,
  },
  {
    url:        "/portfolio",
    lastmod:    "2025-04-29",
    changefreq: "monthly",
    priority:   1,
  },
  {
    url:        "/about",
    lastmod:    "2025-04-29",
    changefreq: "monthly",
    priority:   0.75,
  },
];

const dynamicPages: SitemapEntry[] = (await getPortfolioList()).map((portfolio) => ({
  url:        `/portfolio/${portfolio.slug}`,
  lastmod:    portfolio.lastUpdated,
  changefreq: "monthly",
  priority:   0.85,
}));

const generatedSitemapXML = generateSitemapXML("https://itsakaseru.me", [ ...staticPages, ...dynamicPages ]);
writeSitemapToFile(generatedSitemapXML, path.join(process.cwd(), "public", "sitemap.xml"));
