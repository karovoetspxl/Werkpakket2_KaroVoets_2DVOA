import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import Winkelmand from "../views/winkelmand.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , component: HomeView },
        { path: '/products' , component: ProductsView },
        { path: '/productDetail' , component: ProductDetailView },
        { path: '/profile' , component: ProfileView },
        { path: '/cart' , component: Winkelmand },
    ]
})

export default router