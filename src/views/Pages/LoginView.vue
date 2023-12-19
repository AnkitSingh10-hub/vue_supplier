<template>
  <div class="container">
    
    <div class="left-half">
      <h1 class="heading">Welcome to Supplier Sign In Portal</h1>
      <h4>Become a part of Trip Turbo’s network of suppliers in just a few clicks away.<br>
        Sign up now and begin revolutionizing the way Nepal travels.</h4>
      <div class="image-container">
        <img src="../../assets/icons/loginpersonimage.png" alt="Description of the image">
      </div>
    </div>

    <div class="right-half">
      <form class="login-form">
        <img id="logo" src="../../assets/icons/tripTurbo.png" alt="Description of the image">


        <input class="check" type="email" id="email" v-model="email" required placeholder="Email">

        <input class="check" type="password" id="password" v-model="password" required placeholder="Password">
        <a class="pass" href="#">Forgot Password?</a>

        <br>
        <button @click="signIn">Sign In</button>
        <br>
        <p id="noid">Don’t have an account? <span id="signupnow"><a href="#">SignUp now</a></span></p>


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
#logo{
  height:50px
}
#signupnow{
  color: #EA2127;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
#noid {
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.login-form a {
  margin-top: 10px;
  text-decoration: none;
  margin-left: auto;
}

.heading {
  color: #FFF;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.container {
  display: flex;
  height: 100vh;
  width: 1440px;

}


.left-half {
  flex: 6.5;
  /* background-color: #EA2127; */
  background-image: url('../../assets/icons/background.png');
  background-size: cover;
  background-repeat: no-repeat; 
  height: 100vh;
  margin: 0; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right-half {
  flex: 3.5;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 100px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.login-form label {
  margin-bottom: 5px;
  display: block;
  /* Ensure labels are on their own line */
}

.check {
  margin-top: 20px;
}

.login-form input {
  margin-bottom: 10px;
  padding: 10px;

  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;

  border: 1px solid #B1B1B1;
  background: #FFF;
  flex-shrink: 0;
}

.login-form button {
  border-radius: 10px;
  background: #EA2127;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}


.login-form a {
  margin-top: 10px;
  text-decoration: none;
}

.login-form {
  max-width: 300px;
  /* Set a maximum width for the form */
  margin: 0 auto;
  /* Center the form on the page */
}

.image-container {
  text-align: center;
  margin-top: 50px;
}


h4 {
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.pass {

  align-items: right;
  color: #002060;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
