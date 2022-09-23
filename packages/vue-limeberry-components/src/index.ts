import { App } from "vue"
import * as components from "./components/index"

import './assets/main.css'

export interface VueLimeberryOptions {
    components?: Record<string, any>;
}

const createVueLimeberryPlugin = (options: VueLimeberryOptions = {}) => {
    const install = (app: App) => {
        const plugins: Record<string, any> = components;
        for (const key in plugins) {
            app.component(key, plugins[key])
        }
    }

    return { install }
}

export default createVueLimeberryPlugin

export * from './components/index';
export * from './components';
export * from './plugin';