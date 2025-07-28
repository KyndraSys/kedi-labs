import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';

const routes = [
  '/',
  '/about',
  '/programs',
  '/partners',
  '/blog',
  '/blog/blogdetail',
  '/contact',
];

export default defineConfig({
  base: '/', // Remove '/kedi-labs/' since you're using custom domain
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.kedilabs.net', // Your actual domain
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