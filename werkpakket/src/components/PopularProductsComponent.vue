<template>
  <div>
    <img :src="product.image" :alt="product.altimage"/>
    <p class="boek-info"> {{ product.title }} </p>
    <p>{{ product.author }}</p>
  </div>
</template>

<script>
import { useStore } from "@/store/store";

export default {
  props:[
      'product'
  ],
  data(){
    return {
      productStore: useStore(),
    }
  },
  computed: {
    product(){
      return this.store.fetchProducts(this.store.selectedProduct)
    }
  },
  methods: {
    goToProducts(){
      this.$router.push("Products")
    },
    addItem(product){
      this.store.addItem(product)
    }
  }
}
</script>

<style scoped>

</style>