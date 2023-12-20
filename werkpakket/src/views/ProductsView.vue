<template>
  <header class="header-products">
    <div class="products-headertekst">
      <h1>Shop</h1>
      <p>Our virtual shelves are brimming with a diverse collection of books, covering every genre, topic, and age
        group. From timeless classics to the latest bestsellers, from gripping mysteries to heartwarming romances,
        and from insightful non-fiction to children's picture books, there's something for every reader within our
        pages.</p>
    </div>
    <div class="products-boekenrek">
      <img src="../assets/images/Boekenrek.jpg" alt="Boekenrek">
    </div>
  </header>

  <main class="main-products">
    <div class="filter">
      <div class="category">
        <form method="post" action="" enctype="text/plain">
          <label>Category</label><br>

          <label for="romance"><input type="checkbox" id="romance" name="romance"
                                      value="In bezit">Romance</label>

          <label for="fantasy"><input type="checkbox" id="fantasy" name="fantasy"
                                      value="In bezit">Fantasy</label>

          <label for="lf"><input type="checkbox" id="lf" name="lf"
                                 value="In bezit">Literary Fiction</label>
        </form>
      </div>
      <div class="category">
        <form method="post" action="" enctype="text/plain">
          <label>Author</label><br>

          <label for="suzanne collins"><input type="checkbox" id="suzanne collins" name="sc" value="In bezit">Suzanne
            Collins</label>

          <label for="rebecca yarros"><input type="checkbox" id="rebecca yarros" name="ry" value="In bezit">Rebecca
            Yarros</label>

          <label for="stephanie garber"><input type="checkbox" id="stephanie garber" name="sg" value="In bezit">Stephanie
            Garber</label>

          <label for="ana huang"><input type="checkbox" id="ana huang" name="ah" value="In bezit">Ana Huang</label>

          <label for="lynn painter"><input type="checkbox" id="lynn painter" name="lp" value="In bezit">Lynn
            Painter</label>

          <label for="emily henry"><input type="checkbox" id="emily henry" name="eh" value="In bezit">Emily
            henry</label>

          <label for="gabrielle zevin"><input type="checkbox" id="gabrielle zevin" name="gz" value="In bezit">Gabrielle
            Zevin</label>

        </form>
      </div>
    </div>


    <div class="page">
      <ProductCardComponent
          v-for="product in paginatedProducts"
          @click="goToDetailPage(product.id)"
          v-bind:key="product.id"
          v-bind:product="product"
      />


      <div class="pagination">
        <button @click="previousPage" v-if="currentPage !== 1">&lt;</button>
        <ul>
          <li v-for="page in this.totalPages"><button @click="goToPage(page)" :class="{ 'selected': page === currentPage }"> {{ page }}</button></li>
        </ul>
        <button @click="nextPage" v-if="currentPage !== totalPages">></button>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";
import {useProductsStore} from "../store/store.js";

export default {
  name: "ProductsView",
  components: {
    ProductCardComponent
  },
  data() {
    return {
      store: useProductsStore(),
      itemsPerPage: 8,
      currentPage: 1,
      currentFilter: 'all',
      filters: [
        "all",
        "category",
        "author"
      ],
    }
  },
  computed: {
    filteredProducts() {
      if (this.currentFilter === "all") {
        return this.store.products;
      } else {
        return this.store.products.filter(product => product.tags.included(this.currentFilter));
      }
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    filter(tag) {
      this.currentFilter = tag;
      this.currentPage = 1;
    },
    goToDetailPage(id) {
      this.store.selectedProduct = id;
      this.$router.push('ProductDetail');
    }
  }
}
</script>

<style scoped>

</style>