import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CountryFlag from 'vue-country-flag-next'
import App from './App.vue'
import router from './router'
import '@/assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('CountryFlag', CountryFlag)
app.mount('#app')
