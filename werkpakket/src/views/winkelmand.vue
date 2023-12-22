<template>
  <ProductWinkelmandComponent

      v-for="book in winkelmandje"
      v-bind:key="book.id"
      v-bind:book="book"
  />
  <p id="leeg" v-if="winkelmandje.length === 0">Your cart is empty!</p>
  <div class="total">
    <div class="totalp">Total price: {{ calcTotalPrice() }}</div>
    <button class="checkout" @click="checkout()">Checkout</button>
  </div>
</template>

<script>

import ProductWinkelmandComponent from "../components/ProductWinkelmandComponent.vue";
import {useProductsStore} from "../store/store";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data() {
    return {
      store: useProductsStore()
    }
  },
  computed: {
    winkelmandje() {
      return this.store.winkelmand;
    }
  },
  methods: {
    calcTotalPrice() {
      let totalPrice = 0;
      for (const book of this.store.winkelmand) {
        let priceForAllBooks = book.price * book.amountWinkelmand;
        totalPrice += priceForAllBooks;
      }
      return totalPrice;
    },
    checkout() {
      if (this.store.winkelmand.length !== 0){
      this.$router.push('Checkout');
      }
      else {
        toast("Add something to your cart.", {
          theme: "colored",
          type: "warning",
          position: "top-left",
          transition: "slide",
          dangerouslyHTMLString: true
        })
      }
    }
  },
  name: "winkelmand",
  components: {ProductWinkelmandComponent}

}
</script>

<style scoped>
.total{
  text-align: center;
  padding: 5%;
}
.totalp{
  font-weight: bold;
}
.checkout {
  width: 30%;
  padding: 2% 0;
  border-radius: 5rem;
  border: #B2675E 2px solid;
  margin-top: 2%;
  font-size: 17px;
}
.checkout:hover{
  background-color: #B2675E;
  color: #fff;
  cursor: pointer;
}

#leeg{
  font-size: 200%;
  text-align: center;
  margin: 7% 0;
  font-weight: bold;
}
</style>