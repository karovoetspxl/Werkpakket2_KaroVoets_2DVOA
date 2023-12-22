

<template>

  <div class="book">
    <div class="afb"><img :src="product.image" :alt="product.alt"></div>
    <div class="inhoud">
      <h2>{{product.title}}</h2>
      <h3>{{product.author}}</h3>
      <p>{{product.description}}</p>
    </div>
    <div class="prijs">
      <h2>€{{product.price}}</h2>
      <a>
        <button @click="goToDetailPage(product.id)">View</button>
      </a>
    </div>
  </div>
</template>

<script>
import {useProductsStore} from "../store/store";

export default {
  data(){
    return{
      store: useProductsStore()
    }
  },
  methods:{
    goToDetailPage(id) {
      this.store.selectedProduct = id;
      this.$router.push('ProductDetail');
    }
  },
  props: [
    'product'
  ]
}
</script>

<style scoped>

</style>