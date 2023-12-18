<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    PopularProductsComponent,
  }
}
</script>

<template>
  <HeaderComponent/>

  <router-view></router-view>

  <FooterComponent/>
</template>

<style>
</style>
