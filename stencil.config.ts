import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
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
  rollupPlugins: {
    after: [nodePolyfills()],
  },
};
