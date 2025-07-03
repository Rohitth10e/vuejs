import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const route = [{path:'/',name:'home',component:Home},{path:'/about',name:'about',component:About}]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:route
})

export default router