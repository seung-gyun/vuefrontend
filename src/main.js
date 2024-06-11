import { createApp } from 'vue'
import store from "./scripts/store"
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "./pages/Home";
import Login from './pages/Login.vue';

const routes = [
    {path:'/', component: Home}, // '/' 경로로 들어오면 Home을 띄워줘
    {path:'/login', component: Login}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

createApp(App).use(store).use(router).mount('#app')
// store라는 main.js에서 사용을 하겠다는 의미