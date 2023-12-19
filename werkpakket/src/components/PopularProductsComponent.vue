<template>
  <div v-for="product in topProducts" :key="product.id" class="product-card">
    <img src="@/assets/covers/fourth-wing-1.jpg" alt="Fourth Wing">
    <p class="boek-info"> {{ products.name }} </p>
    <p>{{ products.author }}</p>
  </div>
</template>

<script>
import { useStore } from '@/store/store.js';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  data() {
    return {
      store: useStore()
    }
  },
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