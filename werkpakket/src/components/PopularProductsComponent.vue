<template>
  <div v-for="product in topProducts" :key="product.id" class="product-card">
    <img src="@/assets/covers/fourth-wing-1.jpg" alt="Fourth Wing">
    <p class="boek-info"> {{ product.name }} </p>
    <p>{{ product.author }}</p>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useStore } from '@/store/store.js';

export default defineComponent({
  setup() {
    const store = useStore();

    // Fetch products when the component is mounted
    onMounted(() => {
      store.fetchProducts();
    });

    const sortedProducts = () =>
        store.products.slice().sort((a, b) => b.stock - a.stock);

    // Get the top 3 products
    const topProducts = sortedProducts().slice(0, 3);

    return { topProducts };
  },
});
</script>

<style scoped>

</style>