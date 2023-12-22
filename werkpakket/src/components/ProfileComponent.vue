<template>
  <div>
    <h1>You're logged in:</h1>
    <h2>{{ this.store.loggedInUser.email }}</h2>
    <h2>{{ this.store.loggedInUser.gemeente }}</h2>
    <h2>{{ this.store.loggedInUser.straat }}</h2>
    <h2>{{ this.store.loggedInUser.telefoonnummer }}</h2>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import {useProductsStore} from "../store/store";

export default {
  data() {
    return {
      store: useProductsStore()
    }
  },
  name: "ProfileComponent",
  methods: {
    signOut() {
      this.store.signOut();
      this.$router.push('profile');
      console.log(this.store.loggedInUser)
    }
  }
}
</script>

<style scoped>
div{
  height: 60vh;
  text-align: center;
  margin-top: 7%;
}
h1{
  margin-bottom: 2%;
  color: #B2675E;
}
button{
  padding: 1% 4%;
  border-radius: 2rem;
  border: #B2675E solid 2px;
  margin-top: 5%;
}
button:hover{
  background-color: #B2675E;
  color: #fff;
  cursor: pointer;
}
</style>