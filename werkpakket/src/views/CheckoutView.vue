<template>
  <div class="checkout">
    <h1>Your information</h1>
    <FormComponent/>
    <div class="billing">
      <h1>Do you want to change billing address?</h1>
      <input id="check" v-model="isTrue" type="checkbox">
    </div>

    <ExtraFormComponent v-if="isTrue"/>
    <div class="page">
      <h1>Overview</h1>
      <ProductWinkelmandComponent

          v-for="book in winkelmandje"
          v-bind:key="book.id"
          v-bind:book="book"
      />
    </div>
    <div class="pay">
      <h1> Total price: {{ calcTotalPrice() }}</h1>
      <button id="pay" @click="pay">Pay</button>
    </div>
  </div>
</template>

<script>
import ProductWinkelmandComponent from "../components/ProductWinkelmandComponent.vue";
import {useProductsStore} from "../store/store";
import FormComponent from "../components/FormComponent.vue";

import ExtraFormComponent from "../components/ExtraFormComponent.vue";

export default {
  data() {
    return {
      store: useProductsStore(),
      isTrue: false
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

    pay() {
      this.$router.push('confirmationView');
    }
  },
  computed: {
    winkelmandje() {
      return this.store.winkelmand;
    }
  },
  name: "CheckoutView",
  components: {
    ExtraFormComponent,
    ProductWinkelmandComponent,
    FormComponent
  }
}
</script>

<style scoped>
.checkout {
  padding: 3% 15%;
}

h1 {
  color: #B2675E;
}

.billing {
  display: flex;
  margin-bottom: 5%;
}

#check {
  transform: scale(2);
  margin-left: 2%;
}

.pay{
  text-align: center;
  border: #B2675E solid 2px;
  border-radius: 2rem;
  padding-top: 2%;
  padding-bottom: 2%;
}

#pay {
  padding: 2% 10%;
  margin-top: 2%;
  border: #B2675E solid 2px;
  border-radius: 2rem;
}

#pay:hover{
  background-color: #B2675E;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
}

</style>