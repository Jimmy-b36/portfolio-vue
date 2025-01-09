import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'

const app = createApp(App)
app.use(PrimeVue, {
  theme: { preset: Aura },
})
app.mount('#app')
