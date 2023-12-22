<template>
  <nav class="head">
    <div class="navbar">
      <a href="../../index.html" class="nav-logo"><img src="@/assets/images/logo.png" alt="Logo"></a>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
          <a href="/cart" class="nav-link">Cart</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>

</style>