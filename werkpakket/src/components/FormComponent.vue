<template>
  <h1>{{this.store.loggedInUser.email}}</h1>
  <h1>{{this.store.loggedInUser.gemeente}}</h1>
  <h1>{{this.store.loggedInUser.straat}}</h1>
  <h1>{{this.store.loggedInUser.telefoonnummer}}</h1>
</template>

<script>
import {useProductsStore} from "../store/store";
export default {
  data(){
    return{
      store: useProductsStore()
    }
  },
  components:{
    useProductsStore
  },
  name: "FormComponent"
}
</script>

<style scoped>

</style>