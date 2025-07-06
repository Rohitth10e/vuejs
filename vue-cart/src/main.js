import './assets/main.css'

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import store from './store'

const app=createApp(App)
app.use(Toast)
app.use(Quasar)

app.use(store)
app.mount('#app')
