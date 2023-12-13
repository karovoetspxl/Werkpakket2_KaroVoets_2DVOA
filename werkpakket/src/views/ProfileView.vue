<template>
  <main class="main-profile">
    <div class="form">
      <div class="login">
        <h1>Login to your account</h1>
        <form method="post" action="https://jkorpela.fi/cgi-bin/echo.cgi" enctype="text/plain">
          <label for="mail">Email *</label><br>
          <input type="email" id="mail" name="mail" required><br>

          <label for="password">Password *</label><br>
          <input type="password" id="password" name="password" required><br>

          <p class="forgot">Forgot password?</p>

          <div class="parent-submit-btn"><button type="submit">Login</button></div>
        </form>
      </div>
      <div class="profile-img">
        <img src="@/assets/images/profilebooks.jpg" alt="books">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProfileView"
}
</script>

<style scoped>

</style>