<template>
  <pre>
  {{ activityStore.initialActivitiesResponse }}

  </pre>
  <section>
    <h2 class="text-2xl font-semibold my-5">Our Activities</h2>

    <!-- Improved Search Input -->
    <div class="flex items-center mb-5">
      <input type="text" v-model="searchQuery" placeholder="Search activities..."
        class="px-4 py-2 border border-gray-300 rounded-md mr-3 focus:outline-none focus:border-primary-500" />
      <button @click="buttonClicked" class="px-4 py-2 bg-primary-500 text-white rounded-md">
        Search
      </button>
    </div>

    <div v-if="activityStore.initialActivitiesResponse">
      <div class="flex flex-col gap-5">
        <article class="flex w-[80%] mx-auto max-h-[220px] items-center justify-between gap-5 rounded-lg overflow-hidden"
          :key="index" v-for="(activity, index) in activityStore.getActivityList">
          <img class="w-[450px]" :src="activity.thumbnail" alt="" />
          <aside class="flex flex-col gap-2 px-2">
            <p class="text-lg font-medium">{{ activity.sServiceName }}</p>
            <p class="text-lg font-medium">{{ activity.detail }}</p>
            <p class="text-lg font-medium">{{ activity.startingDiscountedPrice }}</p>

          </aside>
          <button @click="() => {
            $router.push({
              name: 'activitydetail',
              params: {
                id: activity.id
              }
            })
          }">
            book now
          </button>
        </article>
      </div>
    </div>
    <h2>
      Current page :
      {{
        activityStore.initialActivitiesResponse?.currentPage }}
    </h2>
    <div class="flex gap-2">
      <button @click="() => handlePagination(value)" :key="index" v-for="(value, index) in paginationArrLength "
        class="text-lg font-semibold">
        {{ value }}
      </button>
    </div>
    <button>View More</button>
  </section>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useActivityStore } from '@/stores/activity';
const searchQuery = ref('');
const paginationArrLength = 5
const activityStore = useActivityStore();
const buttonClicked = () => {
  activityStore.getApiActivityList(searchQuery.value);
};
const handlePagination = (id: number) => {
  if (activityStore.initialActivitiesResponse?.next)
    activityStore.getPaginationData(id)
}


onMounted(() => {
  buttonClicked();
});
</script>
  
<style scoped>
/* Add your custom styles here if needed */
</style>
  