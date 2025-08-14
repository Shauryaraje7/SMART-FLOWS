import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSitemap from 'vite-plugin-sitemap'; 

const routes = [
  { path: '/', lastmod: new Date() },
  { path: '/services', lastmod: new Date() },
  { path: '/courses',  lastmod: new Date() },
  { path: '/blogpage',  lastmod: new Date() },
  { path: '/aboutuspage',  lastmod: new Date() }
];

export default defineConfig({
  plugins: [
    react(),
    viteSitemap({
      baseUrl: 'http://smartflows.in/', // Must include protocol
      routes: routes,
      // Available options in v0.8.2:
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: true,
      readable: true
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});