import { defineStore } from "pinia";
import productsJson from '../data.json';
import {useLocalStorage} from "@vueuse/core/index";

export const useProductsStore = defineStore('products', {
    // state
    state: () => ({
        products: productsJson,
        selectedProduct: useLocalStorage('selectedProduct', 0),
        winkelmand: useLocalStorage('winkelmand', []),
        loggedInUser:{},
        isLoggedIn: false
    }),
    persistence: {
        enable: true,
        mode: "localSession"
    },
    // actions
    actions: {
        findProduct(id) {
            return this.products.find(product => product.id === id);

        },
        changeStock(id, amount){
            this.products.find(product => product.id === id).stock = amount;
        },
        addToWinkelmand(book){

            this.winkelmand.push(book);
        },
        deleteBook(id){
            let removeIndex = this.winkelmand.map(item => item.id).indexOf(id);

            this.winkelmand.splice(removeIndex, 1);
        },
        defineLoggedInUser(user){
            this.loggedInUser = user;
            this.isLoggedIn = true;
        },
        signOut(){
            this.loggedInUser = {};
            this.isLoggedIn = false;
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