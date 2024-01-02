<template>
  <nav class="bg-white w-[100vw] fixed top-0 z-[100] flex justify-between h-[70px] px-5 xs:px-[100px] items-center">
    <RouterLink to="/">
      <img :src="TripTurboLogo" alt="Trip Turbo Logo" loading="lazy" class="h-[32px] md:h-[36px] lg:h-[40px]" />
    </RouterLink>

    <RouterLink class="font-[Poppins] text-lg font-semibold sm:nav-hidden " to="/schedule">
      Schedule
    </RouterLink>
    <RouterLink class="font-[Poppins] text-lg font-semibold" to="/getstarted">
      Activity Section
    </RouterLink>
    <RouterLink class="font-[Poppins] text-lg font-semibold" to="/accountcreated">
      Account Created
    </RouterLink>
    <RouterLink class="font-[Poppins] text-lg font-semibold" to="/questions">
      Questions </RouterLink>
    <RouterLink class="font-[Poppins] text-lg font-semibold" to="/policy">
      Policy </RouterLink>

    <RouterLink class="font-[Poppins] text-lg font-semibold" to="/success-enrollment">
      Enrollment Success </RouterLink>



    <RouterLink to="/login">
      <div class="flex" v-if="!jwtStore.isLoggedIn">
        <SignInButton />

      </div>
      <aside class="text-red-500 text-lg">
        {{
          jwtStore.DecodedPayload.username }}
      </aside>
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import SignInButton from './signInButton.vue'
import { useJwtStore } from '@/stores/jwt';
import { useRoute, useRouter } from 'vue-router'


import TripTurboLogo from '../../assets/icons/tripTurbo.png'
const jwtStore = useJwtStore()
</script>

<style scoped>
.nav-hidden {
  display: none;
}
</style>