import { join } from "path";
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const BASE_URL = "https://skoolifer.com";

const pages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/features", changefreq: "monthly", priority: 0.9 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.4 },
  { url: "/terms-of-service", changefreq: "yearly", priority: 0.4 }
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  pages.forEach(page => sitemap.write(page));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  const sitemapPath = join(process.cwd(), "dist", "sitemap.xml");
  writeFileSync(sitemapPath, data.toString());
}

generateSitemap();
