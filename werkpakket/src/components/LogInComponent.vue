<template>
  <main class="main-profile">
    <div onsubmit="return false" class="form">
      <div class="login">
        <h1>Login to your account</h1>
        <form method="post" action="https://jkorpela.fi/cgi-bin/echo.cgi" enctype="text/plain">
          <label for="mail">Email *</label><br>
          <input type="email" id="mail" name="mail" required><br>

          <label for="password">Password *</label><br>
          <input type="password" id="password" name="password" required><br>

          <p class="forgot">Forgot password?</p>

          <div @click="logIn" class="parent-submit-btn"><button type="submit">Login</button></div>
        </form>
      </div>
      <div class="profile-img">
        <img src="@/assets/images/profilebooks.jpg" alt="books">
      </div>
    </div>
  </main>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


import {useProductsStore} from "../store/store";
export default {
  data(){
    return{
      store: useProductsStore(),
      users:[
        {id:1, email: "karovoets@hotmail.com",  wachtwoord: "karovoets", gemeente:"Baal", telefoonnummer:"0478326925", straat:"Rozendal"},
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
          return this.notify();
        }
      }

    }
  },
  components: {
    ProductCardComponent
  },
  name: "LoginComponent",
  setup() {
    const notify = () => {
      toast("Login failed!", {
        autoClose: 2000,
        theme: "colored",
        type: "error",
        position: "top-left",
        transition: "slide",
        dangerouslyHTMLString: true
      }); // ToastOptions
    }
    return { notify };
  }




}
</script>

<style scoped>

</style>