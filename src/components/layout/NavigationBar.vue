<template>
  <nav
    class="bg-white w-[100vw] fixed top-0 z-[100] flex justify-between h-[70px] px-5 xs:px-[100px] items-center"
  >
    <RouterLink to="/">
      <img
        :src="TripTurboLogo"
        alt="Trip Turbo Logo"
        loading="lazy"
        class="h-[32px] md:h-[36px] lg:h-[40px]"
      />
    </RouterLink>
    <RouterLink to="/">
      <SignInButton />
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import SignInButton from './signInButton.vue'
import TripTurboLogo from '../../assets/icons/tripTurbo.png'
</script>
