<template>
  <header>
    <div class="header-text">
      <h1>Booktopia</h1>
      <p>Where every page is a new adventure.</p>
      <!--<a href="./ProductsView.vue">
        <button>Shop here</button>
      </a>-->
    </div>

    <img src="../assets/images/BoekenHome.png" alt="Boekenhand">
  </header>

  <main>
    <div class="main-div-1">
      <div>
        <h2>Who are we?</h2>
        <div class="div-p">
          <p>
            Welcome to Booktopia, your literary haven in the heart of Hasselt. We are more than just a
            store; we are a sanctuary for book lovers, a gateway to countless worlds, and a place where stories
            come to life.</p>
          <p>So, whether you're sipping a cup of coffee at home, waiting for your next meeting,
            or traveling to far-off destinations, your literary companions are just a few clicks away. Booktopia
            invites you to embark on a literary journey that knows no bounds. Immerse yourself
            in the stories, knowledge, and inspiration that our virtual bookstore has to offer. Start exploring
            the world of words with us today.</p>
        </div>
      </div>
      <img src="../assets/images/BoekHome2.jpg" alt="BoekenHome2">
    </div>

    <div class="main-div-2">
      <h2>In the spotlight</h2>
      <div class="div2-boeken">
        <PopularProductsComponent
            v-for="product in popularProducts"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
  </main>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import PopularProductsComponent from "../components/PopularProductsComponent.vue";
import {useProductsStore} from "../store/store.js";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    PopularProductsComponent,
  },
  data() {
    return {
      productStore: useProductsStore(),
    };
  },
  computed: {
    popularProducts() {
      const sortedProducts = this.productStore.popularProducts.sort((a, b) => b.stock - a.stock);
      return sortedProducts.slice(0, 3);
    }
  },
}
</script>

<style scoped>

</style>