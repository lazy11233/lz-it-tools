import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/locale'
import './assets/style.css'

const app = createApp(App)

app.use(router)
  .use(i18n)

app.mount('#app')
