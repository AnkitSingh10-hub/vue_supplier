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
                <q-tab name="innerMovies"> option 3</q-tab>
                <q-tab name="innerMovies"> option 3</q-tab>


            </q-tabs>

        </div>
        <div class="righthalf">
            <h1 class="heading">POLICIES</h1>

            <p class="service-question">
                In this section, suppliers are required to provide accurate information about the inventory with its
                pricing.
            </p>

            <hr>

            <div>

                <h1 class="booking-header">Booking Policy</h1>

                <div class="default-booking-policy">
                    <h1> Default Booking Policy</h1>
                    <p> <img id="tick" src="/src/assets/icons/tick.png" alt="Icon">&nbsp;Customers can book your service up
                        to 12 hours before the start time of your activity.</p>
                </div>

                <h1 class="mini-headings"> Do you wish to follow the booking policy recommended by Tripturbo? </h1>

                <div class="checkboxes">
                    <label>
                        <input type="radio" style="background-color: red;" name="option" value="option1">&nbsp;&nbsp;Yes -
                        <span> It means you want to
                            proceed
                            with the
                            policy according to Tripturbo</span>
                    </label>
                </div>
                <div class="checkboxes">
                    <label>
                        <input type="radio" name="option" value="option2">&nbsp;&nbsp;No - <span>It means you wish to change
                            your booking
                            policy as you desire</span>
                    </label>
                </div>

                <h1 class="mini-headings">What is the minimum time frame you wish to allocate for customers to book your
                    services?</h1>

                <p class="note">Note: Suppose you have entered ‘8 in duration’ and selected ‘hour in time unit’, it means
                    your customers
                    need to book 8 hour in advance to use your service of desired time. eg: For boating, a customer wishes
                    to book a time slot from 10:00 AM to 11:00 AM tomorrow.
                    Therefore, they can only make a booking for the boating service up to 8 hours before this time or
                    even earlier. <br>
                    Suppose you have entered ‘2 in duration’ and selected ‘day in time unit’, it means your customers need
                    to book 2 day in advance to use your <br> service of
                    desired time. eg: For boating, a customer wishes to reserve a time slot from 10:00 AM to 11:00 AM on
                    Monday. Therefore, they can only make a booking for the
                    boating service starting from Saturday, two days before the desired time or even earlier.</p>


                <div class="input-fields">
                    <input class="input-with-logo" type="text" placeholder="Enter Time Duration">

                    <select class="select-options" id="dropdown" name="dropdown">
                        <option value="" disabled selected>Select time unit</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>

                <hr>
                <h1 class="mini-headings">Cancellation Policy</h1>

                <div class="default-booking-policy">
                    <h1> Default Cancellation Policy</h1>
                    <p><img id="tick" src="/src/assets/icons/tick.png" alt="Icon">&nbsp;Customers who cancel bookings before
                        4
                        days will get 100% refund</p>
                    <p><img id="tick" src="/src/assets/icons/tick.png" alt="Icon">&nbsp;Customers who cancel bookings before
                        3
                        days will get 80% refund</p>
                </div>


                <h1 class="mini-headings"> Do you wish to follow the cancellation policy recommended by Tripturbo? </h1>

                <div class="checkboxes">
                    <label>
                        <input type="radio" name="option" value="option1">&nbsp;&nbsp;Yes - <span>It means you want to
                            proceed with the policy according to Tripturbo.</span>
                    </label>
                </div>
                <div class="checkboxes">
                    <label>
                        <input type="radio" name="option" value="option2">&nbsp;&nbsp;No - <span>It means you wish to change
                            your cancellation policy as you desire.</span>
                    </label>
                </div>

                <h1 class="mini-headings">What is the minimum time frame you wish to allocate for customers to receive full
                    refund on cancellation?</h1>

                <p class="note">Note: Suppose you enter “4 in duration” and “day in the time unit”, it means customers will
                    get a full refund if they cancel their booking four days before
                    their activity time.</p>

                <div class="input-fields">

                    <input class="input-with-logo" type="text" placeholder="Enter Time Duration">

                    <select class="select-options" id="dropdown" name="dropdown">
                        <option value="" disabled selected>Select time unit</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>

                <h1 class="mini-headings">Do you always want to provide full refund if the customers cancel their bookings
                    before their activity time?</h1>
                <div class="checkboxes">
                    <label>
                        <input type="radio" name="option" value="option1">&nbsp;&nbsp;Yes - <span>It means you want to
                            proceed with the policy according to Tripturbo.</span>
                    </label>
                </div>
                <div class="checkboxes">
                    <label>
                        <input type="radio" name="option" value="option2">&nbsp;&nbsp;No - <span>It means you wish to change
                            your cancellation policy as you desire.</span>
                    </label>
                </div>

                <h1 class="mini-headings">If the customers cancel their bookings after the deadline, what percentage(%) of
                    their total amount will be deducted?</h1>


                <p class="note">Note: If you enter "80% for refund," "3 for duration," and "days for the time unit," it
                    means customers will receive an 80% refund from their<br>total amount if
                    they cancel their booking three days before their activity time.<br>
                    “You can either create multiple cancellation policies or just a single one.”</p>

                <div class="input-fields">
                    <select class="select-options-one input-with-logo-two" id="dropdown" name="dropdown">
                        <option value="" disabled selected>Enter Refund</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>


                    <input class="input-with-logo" type="text" placeholder="Enter Time Duration">

                    <select class="select-options" id="dropdown" name="dropdown">
                        <option value="" disabled selected>Select time unit</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>

                <div class="cancellation-button-div">

                    <button class="add-new-cancellation">Add New Cancellation</button>
                </div>


            </div>

            <hr id="bottom-line">


            <div class="button-container">
                <button class="back-button"><img style="display:inline;" src="../../assets/icons/Vector.png" alt=""
                        class="src"> &nbsp; Back</button>
                <button class="next-button">Next &nbsp;<img style="display:inline;" src="../../assets/icons/Vector-1.png"
                        alt="" class="src"></button>
            </div>

            &nbsp;
        </div>


    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.cancellation-button-div {
    position: relative;
}
.input-with-logo
 {
      background-image: url('../../assets/icons/clock.png'); 
      background-size: 20px 20px; 
      background-repeat: no-repeat;
      background-position: 14px center;
      
    
}
.input-with-logo-two
 {
      background-image: url('../../assets/icons/percent.png'); 
      background-size: 20px 20px; 
      background-repeat: no-repeat;
      background-position: 14px center;    
}



#tick {
    display: inline;
    position: relative;
    top: -2.1px;
    left: -1px;
}

#bottom-line {
    color: #B1B1B1;
    border: 1.5px solid;
    margin-top: 5px;
    margin-bottom: 30px;
    margin-right: -10px;
    margin-left: -10px;
    flex-shrink: 0;


}

.input-fields {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
}

input[type='radio'] {
    color: blue;
    accent-color: red;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    position: relative;
    top: 3px;
    border-radius: 50%;
    transform: scale(1.4);

}


.select-options,
.select-options-one {
    color: #9E9E9E;
}



hr {
    color: #B1B1B1;
    border: 1.5px solid;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: -10px;
    margin-left: -10px;
    flex-shrink: 0;

}

.add-new-cancellation {
    border-radius: 5px;
    border: 1px solid #EA2127;
    background-color: transparent;
    color: #EA2127;
    padding: 12px 10px 12px 40px;
    margin-top: 10px;
    margin-bottom: 30px;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

}

.checkboxes span {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.checkboxes {
    margin-top: 10px;
    margin-bottom: 10px;

}

.default-booking-policy {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;

}

.mini-headings {
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 10px;
    padding-bottom: 5px;
}

.default-booking-policy h1 {
    color: #EA2127;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.default-booking-policy p {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
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

.select-options {
    padding: 15px 60px 15px 50px;
    font-family: Poppins;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    margin-left: 30px;


}

.select-options-one {
    padding: 15px 60px 15px 50px;
    font-family: Poppins;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    margin-right: 30px;


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
    position: sticky;
    width: 250px;
    background-color: #FFF;
    height: 40rem;
    top: 70px;
    overflow-y: auto;

}

.righthalf {
    width: 80%;
    background-color: #F2F2F2;
    margin-left: auto;
    padding-left: 35px;
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

.booking-header {
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3px;
}

.note {
    color: #002060;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 15px;
    margin-bottom: 13px;
    padding-bottom: 10px;
}

.button-container {
    display: flex;
    justify-content: flex-end;

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


.back-button {
    background-color: white;
    color: #EA2127;
    margin-right: 20px;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

}

@media screen and (max-width: 768px) {
    .contain {
        flex-direction: column;
    }

    .lefthalf-sidebar {
        position: static;
        width: 100%;
        top: 0;
        height: auto;
        margin-bottom: 20px;
    }

    .righthalf {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }


    .heading {
        font-size: 1.4em;
    }

    .booking-header {
        font-size: 18px;
    }

    .service-question {
        font-size: 1em;
    }

    .mini-headings {
        font-size: 1.2em;
        padding-top: 5px;
        padding-bottom: 2px;
    }

    .input-fields {
        display: block;
        margin-bottom: 20px;
    }

    .input-fields input {
        display: block;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    .input-fields select {
        display: block;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    .add-new-cancellation {
        display: block;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }



    .note {
        font-size: 12px;
    }

    .default-booking-policy p {
        font-size: 12px;
        margin-top: 8px;
    }

    .checkboxes span {
        font-size: 14px;
    }

    .add-new-cancellation {
        font-size: 16px;
        padding: 10px 10px 10px 30px;
    }


    .button-container {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

    }

    .next-button,
    .back-button {
        margin-right: 0;
        margin-bottom: 10px;
    }

}
</style>