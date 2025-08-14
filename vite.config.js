import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      // 1. ✅ CRITICAL FIX: Use 'hostname' instead of 'baseUrl'
      hostname: 'https://www.smartflows.in',

      // 2. Define your static page paths here
      dynamicRoutes: [
        '/',
        '/services',
        '/courses',
        '/blogpage',
        '/aboutuspage',
      ],

      // 3. Use the 'transform' function to add custom properties
      transform: (route) => {
        const routeConfig = {
          '/': { changefreq: 'weekly', priority: 1.0 },
          '/services': { changefreq: 'weekly', priority: 0.9 },
          '/courses': { changefreq: 'weekly', priority: 0.8 },
          '/blogpage': { changefreq: 'weekly', priority: 0.7 },
          '/aboutuspage': { changefreq: 'monthly', priority: 0.6 },
        };
        // The 'route' object passed by the plugin already has a 'loc' property.
        // We merge our custom properties into it.
        return { ...route, ...routeConfig[route.loc] };
      },

      // 4. Configure your robots.txt
      generateRobotsTxt: true,
      robots: [{
        userAgent: '*',
        allow: '/',
        // It's good practice to specify the sitemap location in robots.txt
        sitemap: 'https://www.smartflows.in/sitemap.xml'
      }],
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
