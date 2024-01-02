<template>
    <div class="container">
        <img class="checkmark" src="../../assets/icons/check.png" alt="">
        <h1>Congratulations!<br>
Service Enrollment Completed</h1>
        <p>You have successfully registered as a Supplier with us.</p>
        <button>Start Enrollment</button>
    </div>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>
button {
    background-color: #EA2127;
    width: 300px;
    height: 50px;
    top: 517px;
    left: 570px;
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
    text-align: left;

}

p {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

}

.container {
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
}
@media (max-width: 768px) {
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
  