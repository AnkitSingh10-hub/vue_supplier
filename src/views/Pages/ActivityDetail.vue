<template>
    <div class="container">
        <h1>Item Detail</h1>
        <h1>it's ID is {{ route.params.id }}</h1>

        <div class="details">
            <p class="detail-label">Item Name:</p>
            <p id="itemName">Item Name Placeholder</p>

            <p class="detail-label">Description:</p>
            <p id="itemDescription">Item Description Placeholder</p>
        </div>
    </div>
    <pre>
        {{ activityStore.activityDetailResponse }}
        {{
            $route.params.id }}</pre>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useActivityStore } from '@/stores/activity'
const activityStore = useActivityStore()
const route = useRoute()
onMounted(() => {
    activityStore.getApiActivityDetail(route.params.id)
})


</script>

<style lang="scss" scoped></style>