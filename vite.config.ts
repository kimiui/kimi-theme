import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import preserveDirectives from 'rollup-preserve-directives';
//----------------------------------------------------------------------

const PORT = 8080;
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
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
    preserveDirectives() as Plugin,
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
