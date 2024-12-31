import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import path from 'path';

//----------------------------------------------------------------------
const PORT = 8080;
// https://vite.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      external: [
        'react',
        'react/jsx-runtime',
        '@mui/material',
        '@mui/lab',
        '@mui/system',
        '@mui/styled-engine-sc',
      ],
    },
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ include: 'lib' }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{js,jsx,ts,tsx}"',
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      src: path.resolve(__dirname, './src'),
      lib: path.resolve(__dirname, './lib'),
    },
  },
  server: { port: PORT, host: true, fs: { allow: ['..'] } },
  preview: { port: PORT, host: true },
});
