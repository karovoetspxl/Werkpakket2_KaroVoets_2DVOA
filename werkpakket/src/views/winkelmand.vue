<template>
  <ProductWinkelmandComponent

      v-for="book in winkelmandje"
      v-bind:key="book.id"
      v-bind:book="book"
  />
  <p v-if="winkelmandje.length === 0">Uw winkelmand is leeg</p>
  <div>Total price: {{calcTotalPrice()}}</div>
  <button @click="checkout()" >Checkout</button>
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
  methods:{
    calcTotalPrice(){
      let totalPrice = 0;
      for (const book of this.store.winkelmand){
        let priceForAllBooks = book.price * book.amountWinkelmand;
        totalPrice += priceForAllBooks;
      }
      return totalPrice;
    },
    checkout() {
      this.$router.push('Checkout');
    }
  },
  name: "winkelmand",
  components: {ProductWinkelmandComponent}

}
</script>

<style scoped>

</style>