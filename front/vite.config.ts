import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    react({
      jsxImportSource: '@welldone-software/why-did-you-render',
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
      treeshake: true,
    },
  },
  publicDir: 'public',
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // app: '/src/app',
      // pages: '/src/pages',
      // widgets: '/src/widgets',
      // shared: '/src/shared',
      // features: '/src/features',
      // entities: '/src/entities'
    },
  },
});
