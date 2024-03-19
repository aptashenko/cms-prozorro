import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import router from "@/router/index.js";
import dayjs from 'dayjs'

const app = createApp(App);

app.provide('dayjs', dayjs)

app.use(router)
app.mount('#app')
