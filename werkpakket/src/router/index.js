import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , component: HomeView },
        { path: '/products' , component: ProductsView},
        { path: '/profile' , component: ProfileView},
    ]
})

export default router