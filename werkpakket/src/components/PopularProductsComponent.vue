<template>
  <div class="div2-boeken">
    <div>
      <img :src="product.image" :alt="product.alt"/>
      <p class="boek-info"> {{ product.title }} </p>
      <p>{{ product.author }}</p>
    </div>
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