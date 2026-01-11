import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Gzip compression for production
        isProduction && viteCompression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 1024, // Only compress files > 1KB
        }),
        // Brotli compression for modern browsers (better compression ratio)
        isProduction && viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 1024,
        }),
      ].filter(Boolean),
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Production optimizations
        target: 'es2020',
        minify: 'terser',
        cssMinify: true,
        sourcemap: false, // Disable sourcemaps in production for smaller bundle
        
        // Terser options for aggressive minification
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
          },
          mangle: {
            safari10: true,
          },
          format: {
            comments: false, // Remove comments
          },
        },
        
        // Chunk splitting for better caching
        rollupOptions: {
          output: {
            // Manual chunk splitting for optimal caching
            manualChunks: {
              // Vendor chunk for React ecosystem
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              // Animation library chunk (loaded when needed)
              'motion': ['framer-motion'],
            },
            // Asset naming with content hash for cache busting
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name || '';
              if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(info)) {
                return 'assets/images/[name]-[hash][extname]';
              }
              if (/\.(woff2?|eot|ttf|otf)$/i.test(info)) {
                return 'assets/fonts/[name]-[hash][extname]';
              }
              if (/\.css$/i.test(info)) {
                return 'assets/css/[name]-[hash][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
        
        // Increase chunk size warning limit (React + Framer Motion are large)
        chunkSizeWarningLimit: 500,
        
        // CSS code splitting
        cssCodeSplit: true,
        
        // Asset inlining threshold (inline small assets as base64)
        assetsInlineLimit: 4096, // 4KB
      },
      
      // Optimize dependencies pre-bundling
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
      },
      
      // Preview server config (for testing production builds locally)
      preview: {
        port: 4173,
        host: '0.0.0.0',
      },
    };
});
