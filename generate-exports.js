import { join, resolve } from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const distDir = resolve(process.cwd(), 'dist');
const packageJsonPath = resolve(process.cwd(), 'package.json');

function generateExports(dir, basePath = '.') {
  const entries = readdirSync(dir, { withFileTypes: true });
  const exports = {};

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const subExports = generateExports(join(dir, entry.name), join(basePath, entry.name));
      Object.assign(exports, subExports);
    } else if (entry.isFile() && entry.name === 'index.js') {
      const exportPath = join(basePath, entry.name).replace(/\\/g, '/');
      const key = basePath.replace(/\\/g, '/');
      if (!['.'].includes(key) && !key.includes('_examples') && !key.includes('_mock')) {
        exports[key] = `./${exportPath}`;
      }
    }
  });

  return exports;
}

function updatePackageJson(exports) {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  packageJson.exports = exports;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

const exports = generateExports(distDir);
updatePackageJson(exports);