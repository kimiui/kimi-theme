import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
//----------------------------------------------------------------------

const PORT = 8080;
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
      src: resolve(__dirname, './src'),
      lib: resolve(__dirname, './lib'),
    },
  },
  server: { port: PORT, host: true, fs: { allow: ['..'] } },
  preview: { port: PORT, host: true },
});
