import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'


createApp(App).use(router).use(store).use(axios).mount('#app')
