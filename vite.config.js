import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/programs', name: 'Programs' },
  { path: '/partners', name: 'Partners' },
  { path: '/blog', name: 'Blog' },
  { path: '/blog/blogdetail', name: 'Blog Detail' },
  { path: '/contact', name: 'Contact' },
];

export default defineConfig({
  base: '/kedi-labs/', // Matches GitHub Pages URL structure
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://kyndrasys.github.io/kedi-labs/', // Temporary for testing
      routes,
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Kedi Labs - Transforming STEM Education',
          description: 'Empowering Africa\'s next generation of engineers and innovators through digital STEM education.',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});