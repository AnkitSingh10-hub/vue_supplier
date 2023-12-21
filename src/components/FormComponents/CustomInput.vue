<template>
  <!-- parent -->
  <div class="container">
    <!-- left -->
    <div class="left">
      <img :src="otpVerification" />
    </div>

    <!-- right -->
    <div class="right">
      <div class="heading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 12L10.5714 2M2 12L10.5714 22M2 12L22 12"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 id="verification">Verfication</h2>
      </div>
      <hr />
      <div class="title">
        <h2>Verification Code</h2>
      </div>
      <div class="paragraph">
        <p>Please enter the OTP code sent to</p>
        <p class="number">98******78</p>
      </div>
      <div class="box-container">
        <input
          v-for="n in props.length"
          :key="n"
          v-model="val[n]"
          type="text"
          maxlength="1"
          class="box"
          name="number"
          id=""
        />
      </div>

      <div class="resend-code">
        <h2>Resend Code</h2>
      </div>

      <div class="verify-button">
        <h3 @click="childClickHandle">Verify</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ref } from 'vue'
import otpVerification from '@/assets/icons/otpVerification.png'
import backbutton from '@/assets/icons/backbutton.png'
const emit = defineEmits(['buttonClick'])
const val = ref([])
const props = defineProps({
  length: {
    type: Number,

    required: true
  }
})


const childClickHandle = () => {
  emit('buttonClick', val.value)
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}
.heading {
  display: flex;
  margin-left: 20px;
  color: #000;

  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: center;
  gap: 10px;
}

.title {
  color: #ea2127;

  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-align: center;
}
.paragraph {
  color: #000;

  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.number {
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.box {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #b1b1b1;
  background: #f2f2f2;
  text-align: center;
}
.box-container {
  margin-left: 20px;
  display: flex;
  gap: 20px;
  padding-top: 40px;
}

.resend-code {
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 10px 0;
  color: #ea2127;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
}

.verify-button {
  margin-left: 20px;
  width: 400px;
  height: 50px;
  flex-shrink: 0;
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  background: #ea2127;
  text-align: center;
  cursor: pointer;
}

.left {
  width: 570px;
  height: 560px;
  flex-shrink: 0;
  margin: 40px;
}

.right {
  margin: 60px;
  width: 440px;
  height: 444px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack elements vertically for smaller screens */
  }

  .heading {
    margin-left: 20px; /* No margin on the left for smaller screens */
  }

  .box-container {
    padding-top: 10px; /* Adjusted padding for smaller screens */
  }

  .verify-button {
    width: calc(100% - 20px); /* Full width with adjusted margin */
    margin: 10px; /* Adjusted margin for smaller screens */
  }

  .left {
    width: calc(100% - 40px); /* Full width with adjusted margin */
    margin: 20px 0;
    max-width: 70%;
  }
  .right {
    width: calc(100% - 40px); /* Full width with adjusted margin */
    margin: 20px 0; /* Adjusted margin for smaller screens */
    margin-bottom: 50px;
    max-width: 500px;
  }
}
</style>
