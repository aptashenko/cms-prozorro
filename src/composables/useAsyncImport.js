import {defineAsyncComponent} from "vue";

export function useAsyncImport() {
    const importModule = path => {
        const module = defineAsyncComponent(() => import(path));
        return module
    }

    return {
        importModule
    }
}
