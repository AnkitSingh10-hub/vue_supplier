<template>
    <div class="contain">
        <img class="checkmark" src="../../assets/icons/check.png" alt="">
        <h1>Congratulations!<br>
            Service Enrollment Completed</h1>
        <p>You have successfully completed onboarding your activity in TripTurbo,<br>
            once reviewed by our team you'll be notified.</p>
        <button>Done</button>
    </div>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>
button {
    background-color: #EA2127;
    padding: 10px 60px;

    border-radius: 5px;
    margin-top: 30px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    margin-bottom: 16%;



}

h1 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;

}

p {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;

}

.contain {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.checkmark {
    margin-top: 30px;
    width: 200px;
    margin-bottom: 20px;
    position: relative;
    left: 10px;
}

@media (max-width: 768px) {

    .contain {}

    button {
        width: 50%;
        font-size: 16px;
        height: 40px;

    }

    h1 {
        font-size: 16px;
        text-align: center;
    }

    p {
        font-size: 13px;
        text-align: center;

    }

    .checkmark {
        width: 100px;
    }
}
</style>
  