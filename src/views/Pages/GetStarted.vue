<template>
    <div class="heading">
        <h1 id="headings">WHAT SERVICE/PRODUCT DO YOU WANT TO ADD?</h1>
        <p id="subheading">Please pick the option that best fits your service below:</p>

        <div class="grid">
            <div class="column">
                <img src="../../assets/icons/activity.png" alt="" class="img">

                <img src="../../assets/icons/Activity-label.png" alt="" class="img-label">
            </div>
            <div class="column"> <img src="../../assets/icons/hotel.png" alt="" class="img">

                <img src="../../assets/icons/hotel-labe.png" alt="" class="img-label">


            </div>
            <div class="column"> <img src="../../assets/icons/package.png" alt="" class="img">
                <img src="../../assets/icons/package-label.png" alt="" class="img-label">
            </div>
            <div class="column">
                <img src="../../assets/icons/event.png" alt="" class="img">
                <img src="../../assets/icons/event-label.png" alt="" class="img-label">
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts"></script>
  
<style scoped>
.img {
    width: 60%;
    display: block;
    margin: 0 auto;
}

.img-label {
    margin-top: 20px;
    display: block;
    margin-top: 30px;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    transform: scale(0.72);

}

#headings {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    line-height: 30px;
}

#subheading {

    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;

    text-align: center;
    line-height: 60px;



}

.heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 70px;
    margin-bottom: 10px;
    width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 50px;
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 27px;

}

.column {
    border: 1px solid #B1B1B1;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 25px;
    padding-bottom: 25px;

}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .column {
        padding-left: 20px;
        padding-right: 20px;
    }

    #headings {
        font-size: 20px;
        margin-top: 10px;
        line-height: 24px;
    }

    #subheading {
        font-size: 16px;
        line-height: 36px;
    }
}
</style>
  