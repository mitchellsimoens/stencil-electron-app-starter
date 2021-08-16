import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';
import replace from 'postcss-replace';

// purge function to keep only the classes used in EACH component
const purge = purgecss({
  content: ['./src/**/*.tsx', './src/index.html'],
  safelist: [':host'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    openBrowser: false,
  },
  plugins: [
    postcss({
      // add postcss plugins
      plugins: [
        // add tailwind css. Config file was added using `npx tailwindcss init`
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        // shadow dom does not respect 'html' and 'body' styling, so we replace it with ':host' instead
        replace({ pattern: 'html', data: { replaceAll: ':host' } }),
        // purge and cssnano if production build
        ...(!process.argv.includes('--dev') ? [purge, cssnano()] : []),
      ],
    }),
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
};
