<template>
  <h1>This is a login view</h1>
  <q-input v-model="text" label="Standard" />
  <div class="left-panel">
    <h2>This is the left panel</h2>
    <img src="" alt="Your Image">

  </div>
  <div class="right-panel">
    <h2>This is the right panel</h2>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useJwtStore } from '@/stores/jwt'
import {QInput} from 'quasar'

// useMeta({
//   title: 'Login'
// })
const JwtStore = useJwtStore()
const text = ref('')

</script>

<style scoped>
.login-form {
  width: 100%;
}

.left-panel {
  flex: 70%;
  background-color: #ea2127;
}


.right-panel {
  flex: 30%;
}

body {
  margin: 0;
  display: flex;
  height: 100vh;
}
</style>
