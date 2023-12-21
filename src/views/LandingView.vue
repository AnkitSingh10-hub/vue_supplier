<script setup lang="ts">
import LandingCarousel from '@/components/layout/LandingCarousel.vue'
import RegisterIcon from '@/assets/icons/register.png'
import InventoryIcon from '@/assets/icons/inventory.png'
import BookingIcon from '@/assets/icons/booking.png'
import MoneyIcon from '@/assets/icons/money.png'
import ReachIcon from '@/assets/icons/reach.png'
import SuppliersIcon from '@/assets/icons/suppliers.png'
import DownloadsIcon from '@/assets/icons/downloads.png'
import ActivitiesIcon from '@/assets/icons/activities.png'
import { useJwtStore } from '@/stores/jwt'

const jwtStore = useJwtStore()
</script>

<template>
  <div class="w-[100vw] min-h-[80vh] overflow-x-hidden">
    <LandingCarousel />
    <section class="font-[Poppins] py-[30px] lg:py-[40px] xl:py-[60px] w-full">
      <h2 class="uppercase text-2xl md:text-[28px] xl:text-[32px] font-bold text-center">
        How it works?
      </h2>
      <article
        class="grid grid-cols-2 lg:grid-cols-4 mx-[5%] xl:mx-[10%] mt-5 gap-[50px] xl:gap-[80px]"
      >
        <aside class="flex flex-col items-center">
          <img
            :src="RegisterIcon"
            loading="lazy"
            class="scale-[0.90] xl:scale-1 h-[100px] w-[100px]"
          />

          <h3 class="text-[20px] font-bold">Register</h3>
          <p class="text-base font-medium text-center">
            Add your travel activities, packages and inventories
          </p>
        </aside>
        <aside class="flex flex-col items-center">
          <img
            :src="InventoryIcon"
            loading="lazy"
            class="scale-[0.90] xl:scale-1 h-[100px] w-[100px]"
          />

          <h3 class="text-[20px] font-bold">List your inventory</h3>
          <p class="text-base font-medium text-center">
            Add your travel activities, packages and inventories
          </p>
        </aside>
        <aside class="flex flex-col items-center">
          <img
            :src="BookingIcon"
            loading="lazy"
            class="scale-[0.90] xl:scale-1 h-[100px] w-[100px]"
          />

          <h3 class="text-[20px] font-bold">Recieve Bookings</h3>
          <p class="text-base font-medium text-center">
            Add your travel activities, packages and inventories
          </p>
        </aside>
        <aside class="flex flex-col items-center">
          <img
            :src="MoneyIcon"
            loading="lazy"
            class="scale-[0.90] xl:scale-1 h-[100px] w-[100px]"
          />

          <h3 class="text-[20px] font-bold">Earn Money</h3>
          <p class="text-base font-medium text-center">
            Add your travel activities, packages and inventories
          </p>
        </aside>
      </article>
    </section>
    <section class="py-[30px] lg:py-[40px] font-[Poppins] bg-[#FFE9E3] px-[5%] xl:px-[8%]">
      <h2 class="text-2xl md:text-[28px] xl:text-[32px] font-bold uppercase mb-[25px] text-center">
        Why choose trip turbo?
      </h2>

      <article class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[40px]">
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            1
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">Free registration</h4>
            <p class="text-base font-medium">No hidden fees, register as a supplier at zero cost</p>
          </div>
        </aside>
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-h-[40px] min-w-[40px] max-w-[40x] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            2
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">Reach</h4>
            <p class="text-base font-medium">
              Gain access to a vast community of travellers eager to discover new experiences
            </p>
          </div>
        </aside>
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-w-[40px] min-h-[40px] max-w-[40x] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            3
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">Free Marketing</h4>
            <p class="text-base font-medium">
              Leverage our marketing efforts to enhance your visibility
            </p>
          </div>
        </aside>
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-w-[40px] min-h-[40px] max-w-[40x] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            4
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">Boost sales</h4>
            <p class="text-base font-medium">
              Enjoy a hassale-free booking process that streamlines customer engagement and increase
              your sale
            </p>
          </div>
        </aside>
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-w-[40px] min-h-[40px] max-w-[40x] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            5
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">app & website</h4>
            <p class="text-base font-medium">
              Spread your inventories across our omni channel platform
            </p>
          </div>
        </aside>
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-w-[40px] min-h-[40px] max-w-[40x] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            6
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">Powerful vendor engine</h4>
            <p class="text-base font-medium">
              Seamless management of your inventories and booking through our powerful app and
              website
            </p>
          </div>
        </aside>
        <aside class="flex gap-[10px] flex-nowrap">
          <div
            class="bg-[#7030A0] rounded-[50%] min-w-[40px] min-h-[40px] max-w-[40x] max-h-[40px] flex justify-center items-center text-white font-bold text-xl"
          >
            7
          </div>
          <div class="">
            <h4 class="text-xl font-bold uppercase mb-[5px]">Timely payment</h4>
            <p class="text-base font-medium">Enjoy timely payments,no delays,no fuss</p>
          </div>
        </aside>
      </article>
    </section>
    <section
      class="grid grid-cols-2 lg:grid-cols-4 w-[92.5%] xl:w-[87.5%] mx-auto gap-5 xl:gap-[40px] w-full py-[40px]"
    >
      <aside
        class="box-aside-shadow rounded-[20px] w-full flex justify-center flex-col gap-[30px] items-center py-[40px]"
      >
        <img :src="ReachIcon" loading="lazy" class="scale-[0.90] xl:scale-1 w-[80px] h-[80px]" />
        <p class="text-primary-400 text-xl font-semibold">30 Lakhs+ reach</p>
      </aside>
      <aside
        class="box-aside-shadow rounded-[20px] w-full flex justify-center flex-col gap-[30px] items-center py-[40px]"
      >
        <img
          :src="SuppliersIcon"
          loading="lazy"
          class="scale-[0.90] xl:scale-1 w-[80px] h-[80px]"
        />
        <p class="text-primary-400 text-xl font-semibold">50+ Suppliers</p>
      </aside>
      <aside
        class="box-aside-shadow rounded-[20px] w-full flex justify-center items-center flex-col gap-[30px] py-[40px]"
      >
        <img
          :src="DownloadsIcon"
          loading="lazy"
          class="scale-[0.90] xl:scale-1 w-[80px] h-[80px]"
        />
        <p class="text-primary-400 text-xl font-semibold">2K+ app downloads</p>
      </aside>
      <aside
        class="box-aside-shadow rounded-[20px] flex justify-center items-center flex-col gap-[30px] py-[40px]"
      >
        <img
          :src="ActivitiesIcon"
          loading="lazy"
          class="scale-[0.90] xl:scale-1 w-[80px] h-[80px]"
        />
        <p class="text-primary-400 text-xl font-semibold">100+ Activities</p>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.box-aside-shadow {
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.25);
}
</style>
