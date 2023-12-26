<template>
    <div class="container">
        <div class="sidebar">
            <div class="img-tripturbo">

                <img :src="tripTurbo" class="mx-3 pb-2" />


            </div>
            <div class="sidebar-list">
                <p class="sidebar-menu">
                    <img src="../../assets/icons/img2.png" class="img" />
                    Dash board
                </p>
                <p class="sidebar-menu">
                    <img src="../../assets/icons/img1.png" class="img" />
                    Inventory
                </p>
                <p class="sidebar-menu">
                    <img src="../../assets/icons/img3.png" class="img" />
                    Bookings
                </p>
            </div>
        </div>
        <div class="header">
            <div class="inputText">
                <input type="text" v-model="searchQuery" placeholder="Search" class="search" />
            </div>
            <div class="main">
                <h1>dajijadijiaaoi</h1>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import tripTurbo from '@/assets/icons/tripTurbo.png'
import home from '@/assets/icons/home.png'
import invent from '@/assets/icons/invent.png'
import book from '@/assets/icons/book.png'

const searchQuery = ref('')
</script>
  
<style scoped>
.container {
    display: flex;
    background: #e9e4e4;

    max-width: max-content;


}

.header {
    margin-right: 19%;
    height: 70px;
}

.inputText {
    margin-top: 20px;

}

.search {
    top: 20;
    width: 1130px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #fff;
    border: 1px solid black;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    margin-left: 3%;
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

    width: 250px;
    height: 1024px;
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

.img-tripturbo {

    /*  */
    color: #000;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #EA2127;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-right: 20px;


}



.sidebar-menu {
    display: flex;

    color: #9E9E9E;
    font-family: Mona Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 30%;
    padding: 15px 0;
}

.img {
    padding-right: 10px;
}

.searchincon {}
</style>