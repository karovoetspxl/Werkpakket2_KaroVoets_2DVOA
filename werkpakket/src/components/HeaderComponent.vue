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
    // Accessing elements with ref
    const hamburger = this.$refs.hamburger;
    const navMenu = this.$refs.navMenu;
    const navLink = this.$refs.navLink;

    // Event listeners
    hamburger.addEventListener("click", this.mobileMenu);

    // Loop through each nav link and add event listener
    navLink.forEach(n => n.addEventListener("click", this.closeMenu));
  },
  methods: {
    mobileMenu() {
      // Toggle 'active' class on hamburger and navMenu
      this.$refs.hamburger.classList.toggle("active");
      this.$refs.navMenu.classList.toggle("active");
    },
    closeMenu() {
      // Remove 'active' class from hamburger and navMenu
      this.$refs.hamburger.classList.remove("active");
      this.$refs.navMenu.classList.remove("active");
    },
  },
};
</script>

<style scoped>

</style>