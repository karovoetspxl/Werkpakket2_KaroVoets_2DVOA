import { defineStore } from "pinia";

export const useStore = defineStore('main', {
    // state
    state: () => ({
        products: [],
    }),
    // actions
    actions: {
        fetchProducts() {
            this.products = require('@/data.json');
        }
    }
    // getters
})