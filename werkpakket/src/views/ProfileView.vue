<template>
  <LogInComponent v-if="this.store.isLoggedIn === false"/>
  <ProfileComponent v-if="this.store.isLoggedIn"/>
</template>

<script>
import LogInComponent from "../components/LogInComponent.vue";
import ProfileComponent from "../components/ProfileComponent.vue";

import {useProductsStore} from "../store/store";




export default {
  data(){
    return{
      store: useProductsStore(),
      users:[
        {id:1, email: "karovoets@hotmail.com",  wachtwoord: "karovoets"},
        {id:2, email: "jamie@hotmail.com",  wachtwoord: "jamie"}

      ]
    }
  },

  methods:{
    logIn(){
      
      let password = document.getElementById("password");
      let mail = document.getElementById("mail")  ;
      for (const user of this.users) {
        if (user.email === mail.value && user.wachtwoord === password.value) {
           this.store.defineLoggedInUser(user);
           console.log(this.store.loggedInUser)
           this.$router.push('cart');
        }
        else{
          this.notify()
        }
      }

    }
  },
  components: {
      LogInComponent,
      ProfileComponent
    },
  name: "ProfileView",










}
</script>

<style scoped>

</style>