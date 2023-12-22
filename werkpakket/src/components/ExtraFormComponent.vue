<template>
  <form action="/submit" method="post" class="profile-form">
    <div class="form-group">
      <label for="mail">E-mail:</label>
      <input id="mail" type="email">
    </div>

    <div class="form-group">
      <label for="gemeente">Town:</label>
      <input id="gemeente" type="text">
    </div>

    <div class="form-group">
      <label for="straat">Street:</label>
      <input id="straat" type="text">
    </div>

    <div class="form-group">
      <label for="nummer">Phone:</label>
      <input id="nummer" type="text">
    </div>
  </form>
</template>

<script>
export default {
  name: "ExtraFormComponent"
}
</script>

<style scoped>
.profile-form {
  max-width: 40%;
  margin-left: 5%;
  margin-top: 2%;
}

.form-group {
  margin-bottom: 3%;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 2%;
  color: #B2675E;
}

input {
  width: 80%;
  padding: 2%;
  box-sizing: border-box;
  margin-top: 1%;
  margin-bottom: 2%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media screen and (max-width: 800px){
  .profile-form{
    max-width: 80%;
  }
  input{
    width: 100%;
  }
}
</style>