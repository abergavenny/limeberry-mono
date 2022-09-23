import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'limeberry-components',
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: '@abergavenny/limeberry-components',
      proxiesFile: '../vue-limeberry-components/src/libComponents.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [sass()]
};
