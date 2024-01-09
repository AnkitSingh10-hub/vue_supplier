<template>
    <div class="contain">
        <q-card class="box">
            <div class="flex justify-center text-black font-sans text-xl font-black leading-4">
                <h1 class="header">JOIN US AS A SUPPLIER</h1>
            </div>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
                narrow-indicator>
                <q-tab name="account">
                    <img :src="accountImage" class="mx-6 pb-2" />
                    Account Info
                </q-tab>
                <q-tab name="business">
                    <img :src="account2" class="mx-6 pb-2" />
                    Business Info
                </q-tab>
                <q-tab name="contact">
                    <img :src="account3" class="mx-12 pb-2" />
                    Contact-Person Info
                </q-tab>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="account">

                    <form action="" class="max-w-md mx-auto space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-info text-lg font-bold">First Name</label>
                                <input type="text" placeholder="Enter first name"
                                    class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2"
                                    required />
                            </div>
                            <div>
                                <label class="text-info text-lg font-bold">Last Name</label>
                                <input type="text" placeholder="Enter Last name"
                                    class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                            </div>
                        </div>
                        <div>
                            <label class="text-info text-lg font-bold">Email Address</label>
                            <input type="text" placeholder="Email Address"
                                class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        </div>

                        <div>
                            <label class="text-info text-lg font-bold">Mobile Number</label>
                            <input type="text" placeholder="Mobile Number"
                                class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        </div>
                        <div>
                            <label class="text-info text-lg font-bold">Set Password</label>
                            <input type="password" placeholder="Enter Password"
                                class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        </div>
                        <div>
                            <label class="text-info text-lg font-bold">Confirm Password</label>
                            <input type="password" placeholder="Enter Confirm Password"
                                class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        </div>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                            <label class="agreement-label" for="vehicle1"> I agree to Trip Turbo’s <span
                                    class="privacy-policy">Privacy policy</span> & <span class="privacy-policy">Supplier’s
                                    contract.</span></label><br>
                        </div>
                    </form>
                    <div class="btn">
                        <button class="text-info-button rounded bg-red-600 w-64 h-12 mr-24 text-white font-bold"
                            @click="redirect">
                            Create an account
                        </button>
                    </div>
                </q-tab-panel>
                <!-- business--------------------------- -->
                <!-- info -->
                <q-tab-panel name="business">
                    <form action="" class=" max-w-md mx-auto space-y-4">
                        <div class="sec grid-cols-2 gap-4 items-center mt-4">
                            <div>
                                <label class="text-info text-xs font-bold">How do you run your business?*</label>
                                <input type="text" placeholder="As a registered company"
                                    class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                            </div>
                            <div>
                                <input type="text" placeholder="Enter Last name"
                                    class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-7 " />
                            </div>
                        </div>
                        <div>
                            <label class="text-info text-lg font-bold">What is the name of your company?</label>
                            <input type="text" placeholder="Enter name of company"
                                class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        </div>
                        <div class="grid grid-cols-2 gap-4 items-center mt-4">
                            <div>
                                <label class="text-info text-xs font-bold">What is the address of your company?*</label>
                                <label class="text-info-small text-xs">Province</label>
                                <select class="text-info-small custom-select">
                                    <option class="select">Select Province</option>
                                    <option>option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>

                            <div>
                                <label class="text-info-small text-xs">District*</label>
                                <select class="text-info-small custom-select" style="width: 200px">
                                    <option class="select">Select District</option>
                                    <option>option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-info-small text-xs">Municipality*</label>
                                <select class="text-info-small custom-select" style="width: 200px">
                                    <option class="select">Select muncipality</option>
                                    <option>option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-info-small text-xs">Ward number*</label>
                                <select class="text-info-small custom-select" style="width: 200px">
                                    <option class="select">Enter ward number</option>
                                    <option>option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-info-small text-xs">City</label>
                                <input type="text" placeholder="Enter city"
                                    class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 items-center mt-4">
                            <div>
                                <label class="text-info text-xs font-bold">Business Documents</label>
                                <br />
                                <label class="text-info-small text-xs">PAN</label>
                                <input type="text" placeholder="Upload PNG"
                                    class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                            </div>

                            <div>
                                <label class="text-info-small text-xs">PAN photo*</label>
                                <br />
                                <button class="text-info-small button">Upload PNG</button>
                            </div>
                            <div>
                                <label class="text-info-small text-xs">Business registration id*</label>
                                <input type="text" placeholder="EnterPAN"
                                    class="text-info-small border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                            </div>
                            <div>
                                <label class="text-info-small text-xs">Business registration photo*</label>
                                <button class="text-info-small button2">Upload PNG</button>
                            </div>
                        </div>
                        <div class="btn-proceed">
                            <button class="text-info-button rounded bg-red-600 w-36 h-12 mr-24 text-white font-bold"
                                @click="redirect">
                                Proceed
                            </button>
                        </div>
                    </form>
                </q-tab-panel>
                <!-- contact-person info -->

                <q-tab-panel name="contact">
                    <form action="" class="max-w-md mx-auto space-y-4">
                        <label class="text-info text-lg font-bold">Full name</label>
                        <input type="text" placeholder="Enter Full Name"
                            class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        <label class="text-info text-lg font-bold ">Address</label>
                        <input type="text" placeholder="Email Address"
                            class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        <label class="text-info text-lg font-bold">Mobile number</label>
                        <input type="text" placeholder="Enter Mobile number"
                            class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        <label class="text-info text-lg font-bold">Citizenship id</label>
                        <input type="text" placeholder="Citizenship id"
                            class="input-text-style border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500 mt-2" />
                        <!-- copy -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-info text-lg font-bold">Citizenship Photo (front)*</label>
                                <button class="text-info-small button3">Upload PNG</button>
                                <div class="attachment">

                                    <img :src="attachment" class="mx-1 pb-2" />
                                    front_image.png
                                </div>
                            </div>
                            <div>
                                <label class="text-info text-lg font-bold">Citizenship Photo (back)*</label>
                                <button class="text-info-small button3">Upload PNG</button>
                                <div class="attachment">

                                    <img :src="attachment" class="mx-1 pb-2" />
                                    back_image.png
                                </div>
                            </div>
                        </div>
                        <div class="btn-proceed">
                            <button class="text-info-button rounded bg-red-600 w-60 h-12 mr-24 text-white font-bold"
                                @click="redirect">
                                Register now
                            </button>
                        </div>
                    </form>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
</template>
  
<script setup lang="ts">
import { QTabs, QTab, QCard, QSeparator, QTabPanels, QTabPanel } from 'quasar'

import accountImage from '@/assets/icons/account.png'
import account2 from '@/assets/icons/business.png'
import account3 from '@/assets/icons/contact.png'
import attachment from '@/assets/icons/attachment.png'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const tab = ref('account')
// const redirect = () => {
//   router.push('/supplierBusiness')
// }
</script>
  
<style scoped>
.header {
    color: #000;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.contain {
    display: flex;
    margin: 0 auto;
    justify-content: center;

}

.text-info {
    color: #000 !important;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.text-info-small {
    color: #000 !important;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.text-info-button {
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.box {
    box-shadow: none !important;
    width: 50%

}

.input-text-style{
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.sec {
    display: flex;
    align-items: center;
}

.privacy-policy {
    color: #EA2127;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
}

.agreement-label {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}

.btn {
    display: flex;
    justify-content: center;
    margin: 22px 0;
    margin-right: 15%;
}

.line-border {
    display: flex;
    justify-content: center;
    margin-left: 29%;
    border-width: 1px;
    width: 510px;
    height: 4px;
    background: linear-gradient(to right, #ea2127 140px, #ccc 200px);
}

.custom-select {
    padding: 8px;
    border: solid gray;
    border-radius: 5px;
}

.button {
    width: 140px;
    border: solid grey;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
}

.button2 {
    width: 140px;
    border: solid grey;
    height: 40px;
    margin-top: 7px;
    border-radius: 5px;
}

.button3 {
    width: 140px;
    border: solid grey;
    padding: 15px 0;
    margin-top: 7px;
    border-radius: 5px;

}

.attachment {
    display: flex;
    color: #EA2127;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 6px;
}
</style>
  