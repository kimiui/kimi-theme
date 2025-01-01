import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import preserveDirectives from 'rollup-preserve-directives';
//----------------------------------------------------------------------

const PORT = 8080;
// https://vite.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts'],
          })
          .map((file: any) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
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
