import { defineConfig } from 'vite'
import { fileURLToPath } from "url";
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cms-prozorro/',
  plugins: [vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
