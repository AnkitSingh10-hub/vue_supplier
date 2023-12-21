<template>
 
  <CustomInput :length="6" @button-click="handleClick"/>
</template>

<script setup lang="ts">

import {ref } from "vue";
import CustomInput from '@/components/FormComponents/CustomInput.vue';
 

const otp = defineProps({
  length: {
    type: Number,
    default: 6,
  },
});

const handleClick = (data)=>{
  console.log('this is clicked',data.join(''))
  
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
