<template>
  <main class="main-fourthwing">
    <div class="afb"><img :src="book.image" :alt="book.alt"></div>
    <div class="inhoud">
      <h1>{{book.title}}</h1>
      <h3>{{book.author}}</h3>
      <p>{{book.description}}</p>
    </div>
    <div class="prijs">
      <h2>{{book.price}}</h2>
      <div class="aantal">
        <button @click="decreaseAmount">&laquo;</button>
        <a class="cijfer" href="#">{{amountToBuy}}</a>
        <button @click="addAmount">&raquo;</button>
      </div>
      <a class="but">
        <button id="buy" @click="addToWinkelmand">Add to cart</button>
      </a>
      <p>{{checkIfStockIsNull}}</p>

    </div>
  </main>
</template>

<script >
import {useProductsStore} from "../store/store";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data(){
    return{
      store: useProductsStore(),
      amountToBuy: 1
    }

  },

  computed:{
    book(){
        return this.store.findProduct(this.store.selectedProduct)
    },
    checkIfStockIsNull(){

      if (this.book.stock === 0){
        this.amountToBuy = 0;
      }
    },

  },
  methods:{
    addAmount(){
      if (this.amountToBuy !== this.book.stock)
      this.amountToBuy++;
    },
    decreaseAmount(){
      if (this.amountToBuy !== 0)
      this.amountToBuy--;
    },
    addToWinkelmand(){
      if (this.store.isLoggedIn ===  true && this.book.stock !== 0){

        this.book.amountWinkelmand = this.amountToBuy;
        this.store.addToWinkelmand(this.book);

        toast("Book added to shopping cart!", {
          theme: "colored",
          type: "success",
          position: "top-left",
          transition: "slide",
          dangerouslyHTMLString: true
        })
      }
      else if(this.book.stock === 0){
        toast("Book is out of stock!", {
          theme: "colored",
          type: "warning",
          autoClose: 2000,
          position: "top-left",
          transition: "slide",
          dangerouslyHTMLString: true
        })
      }
      else{
        toast("You need to login first!", {
          theme: "colored",
          type: "warning",
          position: "top-left",
          transition: "slide",
          dangerouslyHTMLString: true
        })
      }

    }
  },
  name: "ProductDetailView",
  props: [
      'product',
  ],



}
</script>

<style scoped>

</style>