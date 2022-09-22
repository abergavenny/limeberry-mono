import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'limeberry-components/loader';

export const ComponentLibrary: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};