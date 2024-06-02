import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/locale'
import './assets/style.css'
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(router)
  .use(i18n)

app.component('IconifyIcon', Icon)

app.mount('#app')
