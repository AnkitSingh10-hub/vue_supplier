
<template>
<section>
    <h2 class="text-2xl-font-semibold my-5">
        Our Activities
    </h2>
    <input type="text" v-model="searchQuery" />

<button @click="buttonClicked">Search</button>
<div v-if="activityStore.initialActivitiesResponse">

<div class="flex flex-col gap-5 ">
    <article class="flex w-[80%] mx-auto max-h-[220px] items-center justify-between gap-5 rounded-lg overflow-hidden" :key="index" v-for="(activity,index) in activityStore.getActivityList">
    <img class="w-[450px]" :src="activity.thumbnail" alt="">
    <aside class="flex flex-col gap-2 px-2">
    <p class="text-lg font-medium">{{ activity.sServiceName }}</p>
    <p class="text-lg font-medium">{{ activity.detail }}</p>
    <p class="text-lg font-medium">{{ activity.startingDiscountedPrice }}</p>
    <button class="bg-primary-500 rounded-md text-center px-5 py-2">Book now</button>
</aside>
</article>
</div>

</div>
</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAPI } from '@/api';
import {useActivityStore} from '@/stores/activity';
const searchQuery = ref('');
const activityStore = useActivityStore()
const buttonClicked = () =>{
    activityStore.getApiActivityList(searchQuery.value);
}
onMounted(()=>{
    buttonClicked()
})
</script>

<style scoped>

</style>