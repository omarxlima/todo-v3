import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {URL_API} from './configs/api'

axios.defaults.BASE_URL = URL_API

createApp(App)
    .use(router)
    .mount('#app')
