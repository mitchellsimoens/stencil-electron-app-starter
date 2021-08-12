import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.scss',
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
    sass({
      injectGlobalPaths: ['src/global/variables.scss', 'src/global/mixins.scss'],
    }),
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
};
