<template>
  <h1>Your information</h1>
  <FormComponent/>
  <h1>Do you want to change billing address?</h1>
  <input v-model="isTrue"  type="checkbox">

  <ExtraFormComponent v-if="isTrue"/>
  <div class="page">
    <ProductCardComponent
        v-for="book in this.store.winkelmand"
        v-bind:key="book.id"
        v-bind:product="book"/>
  </div>
  <h1>price: {{calcTotalPrice()}}</h1>
  <button @click="pay" >Pay</button>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";
import {useProductsStore} from "../store/store";
import FormComponent from "../components/FormComponent.vue";

import ExtraFormComponent from "../components/ExtraFormComponent.vue";
export default {
  data(){
    return{
      store: useProductsStore(),
      isTrue: false
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

    pay() {
      this.$router.push('confirmationView');
    }
  },
  name: "CheckoutView",
  components:{
    ExtraFormComponent,
    ProductCardComponent,
    FormComponent
  }
}
</script>

<style scoped>

</style>