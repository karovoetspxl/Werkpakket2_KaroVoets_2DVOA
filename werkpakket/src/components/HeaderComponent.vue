<template>
  <nav class="head">
    <div class="navbar">
      <a href="../../index.html" class="nav-logo"><img src="@/assets/images/logo.png" alt="Logo"></a>
      <ul class="nav-menu" ref="navMenu">
        <li class="nav-item" ref="navLink">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item" ref="navLink">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="nav-item" ref="navLink">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
          <a href="/cart" class="nav-link" ref="navLink">Cart</a>
        </li>
      </ul>
      <div class="hamburger" ref="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComponent",
  mounted() {
    const hamburger = this.$refs.hamburger;
    const navMenu = this.$refs.navMenu;
    const navLink = this.$refs.navLink;

    hamburger.addEventListener("click", this.mobileMenu);

  },
  methods: {
    mobileMenu() {
      this.$refs.hamburger.classList.toggle("active");
      this.$refs.navMenu.classList.toggle("active");
    },
    closeMenu() {
      this.$refs.hamburger.classList.remove("active");
      this.$refs.navMenu.classList.remove("active");
    },
  },
};
</script>

<style scoped>

</style>