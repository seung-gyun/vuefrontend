import { createApp } from 'vue'
import store from "./scripts/store"
import router from "./scripts/router"
import App from './App.vue'

createApp(App).use(store).use(router).mount('#app')
// store라는 main.js에서 사용을 하겠다는 의미