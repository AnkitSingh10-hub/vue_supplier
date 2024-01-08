<template>
    <div class="contain">
       

        <div class="lefthalf-sidebar">

            <q-tabs vertical>
                <q-tab name="innerMails">
                    <p class="sidebar-heading">My service photos<br>Includes multiples images</p>
                
                </q-tab>

                <q-tab name="innerAlarms">
                    <p class="sidebar-heading2">option2</p>

                </q-tab>

        

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

                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option1" name="option1"
                        value="option1">

                    <label for="option1">
                        Sunday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option2" name="option2"
                        value="option2">

                    <label for="option2">
                        Monday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option3" name="option3"
                        value="option3">

                    <label for="option3">
                        Tuesday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option4" name="option4"
                        value="option4">

                    <label for="option4">
                        Wednesday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option5" name="option5"
                        value="option5">

                    <label for="option5">
                        Thursday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option6" name="option6"
                        value="option6">

                    <label for="option6">
                        Friday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option7" name="option7"
                        value="option7">

                    <label for="option7">
                        Saturday
                    </label>
                </div>
                <div class="input-checks"><input class="individual-checks" type="checkbox" id="option8" name="option8"
                        value="option8">

                    <label for="option8">
                        All of the above
                    </label>
                </div>

            </div>


            <div class="button-container">
                <button class="next-button">Next &nbsp;<img style="display:inline;" src="../../assets/icons/Vector-1.png"
                        alt="" class="src"></button>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">

import { ref } from 'vue'

</script>
  
<style scoped>
.contain {
    display: flex;
    flex-direction: row;
}
.lefthalf-sidebar {
    position: sticky;
    width: 250px;
    background-color: #FFF;
    height: 40rem;
    top: 70px;
    overflow-y: auto;
    margin-left: auto;


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
    font-size: 1.6em;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;

}

.second-header {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:8px;

}

.input-field {
    width: 100%;
    padding: 20px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    font-family: Poppins;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    
}

.second-para {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:8px;

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
    margin-bottom: 8px;

}

.inputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 8px;

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