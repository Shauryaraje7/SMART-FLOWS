import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSitemap from 'vite-plugin-sitemap';

const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/services', changefreq: 'weekly', priority: 0.9 },
  { path: '/courses', changefreq: 'weekly', priority: 0.8 },
  { path: '/blogpage', changefreq: 'weekly', priority: 0.7 },
  { path: '/aboutuspage', changefreq: 'monthly', priority: 0.6 },
];

export default defineConfig({
  plugins: [
    react(),
    viteSitemap({
      baseUrl: 'https://www.smartflows.in',  // 🚨 Note: Use "https://" (not "http://")
      routes,
      generateRobotsTxt: true,  // Optional: creates robots.txt
      // Force clean XML output (no extra namespaces if unused)
      customEntries: [
        { loc: '/', changefreq: 'weekly', priority: 1.0 },
      ],
    }),
  ],
  build: { outDir: 'dist', emptyOutDir: true },
});