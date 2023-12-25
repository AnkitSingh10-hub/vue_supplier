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
      <form class="login-form" @submit.prevent="signIn">
        <img id="logo" src="../../assets/icons/tripTurbo.png" alt="Description of the image">


        <input class="check" type="username" id="username" v-model="payload.username" required
          placeholder="Enter username" style="padding: 17px">

        <input class="check" type="password" id="password" v-model="payload.password" required
          placeholder="Enter Password" style="padding:17px">
        <a class="pass" href="#">Forgot Password?</a>

        <br>
        <button @click="signIn">Sign In</button>
        <br>
        <p id="noid">Don’t have an account? <span id="signupnow"><a href="#">Signup now</a></span></p>


      </form>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useJwtStore } from '@/stores/jwt';
const jwtStore = useJwtStore()


const payload = ref({
  username: '',
  password: '',
  fcm_token: 'sdafadf',
  fcm_type: 'web',

});

const signIn = async () => {
  const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!usernameRegex.test(payload.value.username)) {
    console.error('Invalid email address');
    return;
  }

  if (payload.value.password.length < 6) {
    console.error('Password must be at least 6 characters long');
    return;
  }
  await jwtStore.getJWT(payload.value)
  console.log('Signing in with:', payload.value.username, payload.value.password);
};


</script>
<style scoped>
#logo {
  height: 50px;
  margin-bottom: 20px;
}

#signupnow {
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
  height: 100%;
  width: 100%;
  max-width: 100%;
}

.left-half {
  width: 65%;
  background-image: url('../../assets/icons/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

.right-half {
  width: 35%;
  background-color: #ffffff;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  margin-top: 20%;

}

.login-form label {
  margin-bottom: 5px;
  display: block;


}

.login-form input {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #B1B1B1;
  background: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 17px;

}

.login-form button {
  border-radius: 10px;
  background: #EA2127;
  color: white;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  transition: box-shadow 0.3s ease;
  /* Add transition for smooth effect */
}

.login-form button:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  /* Add box shadow on hover */
}


.login-form {
  width: 100%;
  max-width: 100%;
}

.image-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
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

  color: #002060;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: auto;

}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-half {
    width: 100%;
    height: auto;
  }

  .right-half {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;

  }

  .heading {
    font-size: 18px;
  }

  h4 {
    font-size: 10px;
  }

}</style>
