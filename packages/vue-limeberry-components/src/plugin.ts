import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@abergavenny/limeberry-components/loader';

export const ComponentLibrary: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};