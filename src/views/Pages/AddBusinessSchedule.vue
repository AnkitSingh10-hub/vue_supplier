<template>
    <div class="contain">
        <!-- <div class="sidebar">

            <div class="sidebar-list">

                <q-tabs v-model="innerTab" vertical>
                    <q-tab class="tabs" name="innerMails">
                        <p class="sidebar-heading">My service photos</p>
                        <p class="sidebar-heading">Includes multiples images</p>
                    </q-tab>

                    <q-tab class="tabs" name="innerAlarms">
                        <p class="sidebar-heading2">option2</p>

                    </q-tab>

                    <q-tab class="tabs" name="innerMovies"> option 3</q-tab>

                </q-tabs>


            </div>
        </div> -->

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
                <q-tab name="innerMovies"> option 3</q-tab>
                <q-tab name="innerMovies"> option 3</q-tab>


            </q-tabs>

        </div>


        <div class="rightside">
            <h1 class="heading">ADD BUSINESS SCHEDULE</h1>

            <p class="para">In this section, suppliers are clearly required to load the correct time and day about their
                business activities</p>

            <hr class="underline">

            <h2 class="second-header"> At what time does your service open and close?</h2>

            <p class="second-para"> In this part, the suppliers are required to provide their service opening time and
                closing time. </p>

            <div class="inputs">

                <div class="first-input"> <input class="input-field" type="text" placeholder="Opening Time">

                    <img class="input-icon" src="../../assets/icons/clock.png" alt="Icon">

                </div>

                <div class="second-input"><input class="input-field" type="text" placeholder="Closing Time">
                    <img class="input-icon" src="../../assets/icons/clock.png" alt="Icon">
                </div>


            </div>

            <h2 class="third-heading">In which day does your service open each week?</h2>
            <p class="second-para">In this part, the suppliers are required to select the day on which the service opens.
            </p>

            <div class="checkboxes">

                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option1">

                    <label for="option4">
                        Option 4
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option1">

                    <label for="option4">
                        Option 4
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option1">

                    <label for="option4">
                        Option 4
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option1">

                    <label for="option4">
                        Option 4
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option1">

                    <label for="option4">
                        Option 4
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option1">

                    <label for="option4">
                        Option 4
                    </label>
                </div>

            </div>


            <div class="button-container">
                <button class="next-button">Next &nbsp;<img style="display:inline;" src="../../assets/icons/Vector.png"
                        alt="" class="src"></button>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">

import { ref } from 'vue'
import tripTurbo from '@/assets/icons/tripTurbo.png'
import home from '@/assets/icons/home.png'
import invent from '@/assets/icons/invent.png'
import book from '@/assets/icons/book.png'

const searchQuery = ref('')
</script>
  
<style scoped>
.lefthalf-sidebar {
    position: sticky;
    width: 250px;
    background-color: #FFF;
    height: 40rem;
    top: 70px;
    overflow-y: auto;

}
.rightside {
    width: 80%;
    background-color: #F2F2F2;
    margin-left: auto;
    padding-left: 35px;
    padding-right: 30px;
}


.next-button {
    background-color: #EA2127;
    color: white;
    margin-right: 50px;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

}

.button-container {
    display: flex;
    justify-content: flex-end;

}

.para {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
}

label {
    position: relative;
    top: -5px;
}

.individual-checks {
    height: 24px;
    width: 24px;
    border: 1px groove #B1B1B1;
}

.input-checks {
    position: relative;
    top: -2px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

}

hr {
    border-color: darkgrey;
    margin-top: 20px;
    margin-bottom: 20px;

}

.heading {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;

}

.second-header {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

}

.input-field {
    width: 100%;
    padding: 20px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
}

.second-para {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

}

.first-input {
    margin-right: 30px;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;

}

.input-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: auto;
}


.second-input {
    margin-right: 30px;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;


}

.third-heading {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

}

.inputs {
    display: flex;
    flex-direction: row;
    justify-content: center;

}


.tabs {
    margin: 5px 20px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 5px;
    background-color: #EA2127;
    color: white;

}

.contain {
    display: flex;
    background: #F2F2F2;
    max-width: 100%;
    height: 80vh;

}


.inputText {
    width: 100%;
    margin-top: 2rem;
}

.search {
    width: 100%;
    top: 20px;
    height: 70px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid black;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    border: none;

}


.search::placeholder {

    padding: 80px;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.seach:input {
    margin: 20px;
}

.sidebar {
    position: fixed;
    width: 250px;
    flex-shrink: 0;
    background-color: #fff;


}

.main {

    margin-top: 30px;
    margin-left: 3%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);

}

.sidebar-menu {
    display: flex;
    color: #9E9E9E;
    font-family: Mona Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 20%;
    padding: 15px 0;
    align-content: left;
    flex-direction: column;
}

.img {
    padding-right: 10px;
}

.qtab {
    background-color: #e9e4e4;
}

.qtabheading {
    border-radius: 5px;
    background: #ea2127;
}


.checkboxes {
    margin-top: 30px;
    margin-right: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
}

.checkboxes {
    padding-bottom: 10px;
}

@media screen and (max-width: 768px) {
    .container {
        flex-direction: column;
        height: auto;
        overflow-x: hidden;

    }

    .rightside {
        margin-left: 0;
        width: 100%;
        padding: 15px;
    }

    .sidebar {
        position: static;
        width: 100%;
        background-color: #fff;
        padding: 15px;
    }

    .sidebar-menu {
        margin-left: 0;
        padding: 15px;
    }

    .checkboxes {
        margin-right: 0;
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
    }



    .next-button {
        margin-right: 0;
    }

    .inputs {
        flex-direction: column;
    }

    .first-input,
    .second-input {
        margin-right: 0;
        margin-bottom: 10px;
    }

    .tabs {
        margin: 5px 0;
    }

    .tabs p {
        display: none;
    }
}
</style>