// sitemap-generator.js
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },              
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/courses', changefreq: 'weekly', priority: '0.8' },
  { path: '/blogpage', changefreq: 'weekly', priority: '0.7' },
  { path: '/aboutuspage', changefreq: 'monthly', priority: '0.6' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>https://www.smartflows.in${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  const outDir = join(__dirname, 'dist');
  if (!existsSync(outDir)) {
    mkdirSync(outDir);
  }
  writeFileSync(join(outDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();