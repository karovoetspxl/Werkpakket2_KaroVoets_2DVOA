<template>
  <ProductWinkelmandComponent
      v-for="book in winkelmandje"
      v-bind:key="book.id"
      v-bind:book="book"
  />
</template>

<script>

import ProductWinkelmandComponent from "../components/ProductWinkelmandComponent.vue";
import {useProductsStore} from "../store/store";
export default {
  data(){
    return{
      store: useProductsStore()
    }
  },
  computed:{
    winkelmandje(){
      return this.store.winkelmand;
    }
  },
  name: "winkelmand",
  components: {ProductWinkelmandComponent}

}
</script>

<style scoped>

</style>