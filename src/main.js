import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

const app = createApp(App)

app.use(router).use(createPinia())

app.mount('#app')
