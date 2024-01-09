import '@/styles/main.css'
import { Quasar, Notify, LocalStorage, Dialog } from 'quasar'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'
import '@/styles/base.css'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    LocalStorage
  },
  config: {
    notify: {
      position: 'top-right',
      progress: true,
      timeout: 2500,
      actions: [
        {
          icon: 'close',
          color: 'white',
          attrs: { round: true, 'aria-label': 'Close' }
        }
      ]
    }
  }
})

app.mount('#app')
// FILE: main.js
