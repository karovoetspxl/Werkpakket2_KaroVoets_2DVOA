<template>
  <button @click="signOut" >Sign out</button>
</template>

<script>
import {useProductsStore} from "../store/store";
export default {
  data(){
    return{
      store: useProductsStore()
    }
  },
  name: "ProfileComponent",
  methods:{
    signOut(){
      this.store.signOut();
      this.$router.push('profile');
      console.log(this.store.loggedInUser)
    }
  }
}
</script>

<style scoped>

</style>