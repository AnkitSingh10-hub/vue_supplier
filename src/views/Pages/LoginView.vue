<template>
  <div class="container">
    <div class="left-half">
      <h2>Left Half</h2>
      <div class="image-container">
        <img src="../../assets/icons/loginpersonimage.png" alt="Description of the image">
      </div>
    </div>

    <div class="right-half">
      <h2>Right Half</h2>
      <form class="login-form">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>

        <button @click="signIn">Sign In</button>
        

        <a href="#">Forgot Password?</a>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('');
const password = ref('');

const signIn = () => {
  console.log('Signing in with:', email.value, password.value);
}
</script>
<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.left-half {
  flex: 7;
  background-color: #EA2127;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.right-half {
  flex: 3;
  background-color: #ffffff;
  padding: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form label {
  margin-bottom: 5px;
}

.login-form input {
  margin-bottom: 10px;
  padding: 5px;
  background-color: #ccc; /* Set background color to grey */
  border: 1px solid #666; /* Add a border for better visibility */
}

.login-form button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #45a049;
}

.login-form a {
  margin-top: 10px;
  text-decoration: none;
  color: #333;
}
.image-container {
  text-align: center; /* Center the image within its container */
}
</style>
