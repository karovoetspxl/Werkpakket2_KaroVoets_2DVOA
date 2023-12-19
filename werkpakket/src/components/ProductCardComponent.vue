<template>
  <div>
    <img :src="product.image" :alt="product.altimage"/>
    <p class="boek-info"> {{ product.title }} </p>
    <p>{{ product.author }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'product'
  ]
}
</script>

<style scoped>

</style>