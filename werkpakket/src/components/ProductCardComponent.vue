<template>
  <div class="book">
    <div class="afb"><img :src="product.image" :alt="product.alt"></div>
    <div class="inhoud">
      <h2>{{product.title}}</h2>
      <h3>{{product.author}}</h3>
      <p>{{product.description}}</p>
    </div>
    <div class="prijs">
      <h2>{{product.price}}</h2>
      <a href="#">
        <button>View</button>
      </a>
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