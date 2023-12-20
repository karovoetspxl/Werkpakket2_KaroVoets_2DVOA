import { defineStore } from "pinia";
import productsJson from '../data.json';

export const useProductsStore = defineStore('products', {
    // state
    state: () => ({
        products: productsJson,
        selectedProduct: 0
    }),
    // actions
    actions: {
        findProduct(id) {
            return this.products.find(product => product.id === id);
        },
        changeStock(id, amount){
            this.products.find(product => product.id === id).stock = amount;
        }
    },
    // getters
    getters: {
        popularProducts(){
            const sortedProducts = this.products.sort((a, b) => b.stock - a.stock);
            return sortedProducts.slice(0, 3);
        }
    }
})