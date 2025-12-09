<script setup>
import FeaturedDestinations from "../Home/FeaturedDestinations.vue";
import HeroSection from "../Home/HeroSection.vue";
import PopularTours from "../Home/PopularTours.vue";
import SearchBooking from "../SearchBooking/SearchBooking.vue";
import WhyChooseUs from "../Home/WhyChooseUs.vue";
import BestHotel from "@/widget/Hotels/BestHotel.vue";
import OurService from "@/widget/about-us/OurService.vue";
import PopularEvents from "../Event/PopularEvents.vue";
import PopularMusses from "@/widget/musses/PopularMusses.vue";
import RestaurantsSection from "../Restaurent/RestaurantsSection.vue";
import VideoRestaurent from "@/widget/Restaurent/VideoRestaurent.vue";
</script>

<template>
  <HeroSection />
  <div class="max-w-7xl mx-auto">
    <SearchBooking />
    <BestHotel />
    <FeaturedDestinations />
  </div>

  <div class="bg-gradient-to-b from-white via-gray-50 to-white">
    <OurService />
  </div>

  <div class="max-w-7xl mx-auto py-20">
    <WhyChooseUs />
  </div>

  <div class="bg-gradient-to-b from-blue-900 to-blue-800">
    <PopularEvents />
  </div>

  <div>
    <PopularMusses />
  </div>
  <div class="bg-gradient-to-br from-ocean-deep to-ocean-mid">
    <RestaurantsSection />
  </div>
  <VideoRestaurent />
</template>
