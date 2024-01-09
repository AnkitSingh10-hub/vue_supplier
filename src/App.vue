<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useJwtStore } from './stores/jwt'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import Footer from '@/components/layout/Footer.vue'
const jwtStore = useJwtStore()
onBeforeMount(async () => {
  await jwtStore.refreshAccessToken()
})
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <div style="margin-top: 70px; min-height: 80vh;">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
