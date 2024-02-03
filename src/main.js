import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import router from "@/router/index.js";
import dayjs from 'dayjs'

const app = createApp(App);

app.provide('dayjs', dayjs)

app.use(PrimeVue);
app.use(router)
app.mount('#app')
