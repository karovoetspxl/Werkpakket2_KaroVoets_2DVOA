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
        <a class="cijfer" href="#">{{book.amountWinkelmand}}</a>
        <button @click="addAmount">&raquo;</button>
        <button @click="deleteBook" class="btn btn-delete">
          <span class="mdi mdi-delete mdi-24px"></span>
          <span class="mdi mdi-delete-empty mdi-24px"></span>
          <span>Delete</span>
        </button>
        <div>
          <div>price: {{calcSubTotal()}}</div>
          <div>BTW: {{book.BTW}}</div>
        </div>
      </div>
      <br>

    </div>
  </main>
</template>

<script>
import {useProductsStore} from "../store/store";
export default {
  data(){
    return{
      store: useProductsStore()
    }

  },

  methods: {
    deleteBook(){
      this.store.deleteBook(this.book.id);
    },
    addAmount() {
      if (this.book.amountWinkelmand !== this.book.stock)
        this.book.amountWinkelmand++;
    },
    decreaseAmount() {
      if (this.book.amountWinkelmand !== 0)
        this.book.amountWinkelmand--;
    },
    calcSubTotal(){
      return this.book.amountWinkelmand * this.book.price;

    },

  },
  name: "ProductWinkelmandComponent",
  props:[
      'book'
  ]
}
</script>

<style scoped>

</style>