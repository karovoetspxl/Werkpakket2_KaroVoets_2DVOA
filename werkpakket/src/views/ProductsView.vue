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
      <button v-for="filterTag in this.filters" @click="addActiveFilter(filterTag)"
              :class="{ 'selected': filterTag === currentFilter }">{{ filterTag[0].toUpperCase() + filterTag.slice(1) }}
      </button>
      <div id="frm">
        <button class="fr" @click="this.filterBooks()">Filter</button>
        <button class="fr" @click="this.resetFilters()">Reset</button>
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
          <li v-for="page in this.totalPages">
            <button @click="goToPage(page)" :class="{ 'selected': page === currentPage }"> {{ page }}</button>
          </li>
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
      currentFilter: 'All',
      filters: [
        "All",
        "Romance",
        "Fantasy",
        "Literary fiction",
        "Suzanne Collins",
        "Rebecca Yarros",
        "Stephanie Garber",
        "Ana Huang",
        "Lynn Painter",
        "Emily Henry",
        "Gabrielle Zevin",
      ],
      activeFilters: [],
      filteredBooksArrays: [],
      filteredBooks: []
    }
  },
  computed: {
    filteredProducts() {
      let filer = this.currentFilter;
      if (this.currentFilter === "All") {
        return this.store.products;
      }
      /*else {
        const lowercaseFilter = this.currentFilter;
        return this.store.products.filter(product => product.tags.includes(lowercaseFilter));
      }*/

    },

    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      if (this.filteredBooks.length > 0)
        return this.filteredBooks.slice(startIndex, endIndex);
      else {
        return this.filteredProducts.slice(startIndex, endIndex);
      }

      /*return this.filteredProducts.slice(startIndex, endIndex);*/
    },
    totalPages() {
      if (this.filteredBooks.length > 0)
        return Math.ceil(this.filteredBooks.length / this.itemsPerPage);

      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);

    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    filterBooks() {

      for (let i = 0; i < this.activeFilters.length; i++) {
        let filter = this.activeFilters[i];
        this.filteredBooksArrays.push(this.store.products.filter(product => product.tags.includes(filter)));
      }

      for (const proxyArray of this.filteredBooksArrays) {
        for (const book of proxyArray) {
          // Now you can access and work with each Proxy(Object) in each array
          this.filteredBooks.push(book)
        }
      }

    },
    resetFilters() {
      this.filteredBooks = [];
      this.filteredBooksArrays = [];
      this.activeFilters = [];
    },
    addActiveFilter(filter) {
      console.log(this.activeFilters)
      this.activeFilters.push(filter);

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