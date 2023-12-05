<template>
  <nav class="head">
    <div class="navbar">
      <a href="../../index.html" class="nav-logo"><img src="@/assets/images/logo.png" alt="Logo"></a>
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="../../index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="products.html" class="nav-link">Products</a>
        </li>
        <li class="nav-item">
          <a href="profile.html" class="nav-link">Profile</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Cart</a>
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