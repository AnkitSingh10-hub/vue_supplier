<template>
    <div class="contain">

        <div class="lefthalf-sidebar">

            <q-tabs vertical>
                <q-tab name="innerMails">
                    <p class="sidebar-heading">My service photos</p>
                    <p class="sidebar-heading">Includes multiples images</p>
                </q-tab>

                <q-tab name="innerAlarms">
                    <p class="sidebar-heading2">option2</p>

                </q-tab>

                <q-tab name="innerMovies"> option 3</q-tab>

            </q-tabs>

        </div>
        <div class="righthalf">
            <h1 class="heading">SERVICE QUESTION</h1>

            <p class="service-question">
                In this section, supppliers are required to answer service related questions.

            </p>

            <hr>

            <div>
                <form class="form-container">
                    <div class="form-row">
                        <label for="field1">What safety gear do you provide?</label>
                        <img class="input-icon" src="../../assets/icons/question.png" alt="Icon">

                        <input type="text" id="field1" name="field1" placeholder="Enter answer" />

                    </div>
                    <div class="form-row">
                        <label for="field2">Is the driver included in the boating service?
                        </label>
                        <img class="input-icon" src="../../assets/icons/question.png" alt="Icon">

                        <input type="text" id="field2" name="field2" placeholder="Enter answer" />
                    </div>
                    <div class="form-row">
                        <label for="field3">Is there any kind of weight and number restriction?
                        </label>
                        <img class="input-icon" src="../../assets/icons/question.png" alt="Icon">

                        <input type="text" id="field3" name="field3" placeholder="Enter answer" />
                    </div>
                    <div class="form-row">
                        <label for="field4">How frequently do you maintain/ inspect your boats for damages/ safety
                            protocols?</label>
                        <img class="input-icon" src="../../assets/icons/question.png" alt="Icon">

                        <input type="text" id="field4" name="field4" placeholder="Enter answer" />
                    </div>
                    <div class="form-row">
                        <label for="field5">Can guests use the boat without the drivers? Does this violate any terms of the
                            SOP?
                        </label>
                        <img class="input-icon" src="../../assets/icons/question.png" alt="Icon">

                        <input type="text" id="field5" name="field5" placeholder="Enter answer" />
                    </div>
                    <div class="form-row">
                        <label for="field6">Do you have an emergency evacuation procedure? If yes, provide the
                            details.</label>
                        <img class="input-icon" src="../../assets/icons/question.png" alt="Icon">

                        <input type="text" id="field6" name="field6" placeholder="Enter answer" />
                    </div>
                </form>
            </div>



        </div>


    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
hr {
    color: #B1B1B1;
    border: 1.5px solid;
    margin-top: 12px;
    margin-bottom: 15px;
    margin-right: -10px;
    margin-left: -10px;
}



.form-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 20px;
    margin-bottom: 90px;
    align-items: stretch;


}

.form-row {
    display: flex;
    flex-direction: column;
    position: relative;

}

label {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
}

input {
    padding: 15px 10px 15px 50px;
    font-family: Poppins;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    border: 1px solid #9E9E9E;
    border-radius: 5px;

}

.input-icon {
    position: absolute;
    top: 70%;
    left: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: auto;
}

.contain {
    display: flex;
    flex-direction: row;

}

.service-question {
    font-family: Poppins;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

}

.lefthalf-sidebar {
    width: 20%;
    position: fixed;
    left: 0;
    top: 70px;

    bottom: 0px;
    background-color: white;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.righthalf {
    width: 80%;
    background-color: #F2F2F2;
    margin-left: auto;
    padding-left: 30px;
    padding-right: 30px;


}

.heading {
    font-family: Poppins;
    font-size: 1.6em;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;

}
</style>