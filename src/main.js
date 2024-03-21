import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/styles/main.css'
import router from "@/router/index.js";
import dayjs from 'dayjs'
import SvgIcon from "@/components/shared/SvgIcon.vue";

const app = createApp(App);
const pinia = createPinia()

app.provide('dayjs', dayjs)

app.use(pinia)
app.use(router)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
