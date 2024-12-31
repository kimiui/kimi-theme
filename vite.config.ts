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
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: {
        // Disable code splitting
        manualChunks: undefined,
      },
      external: ['react', '@mui/material'],
    },
  },
  plugins: [
    react(),
    dts(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
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
    },
  },
  server: { port: PORT, host: true, fs: { allow: ['..'] } },
  preview: { port: PORT, host: true },
});
