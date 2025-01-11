import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'

const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue, {
  theme: { preset: Aura },
})
app.use(pinia)
app.mount('#app')
