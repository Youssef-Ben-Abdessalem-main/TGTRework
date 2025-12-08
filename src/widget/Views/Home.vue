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
</script>

<template>
  <HeroSection />
  <div class="max-w-7xl mx-auto">
    <SearchBooking />
    <BestHotel />
    <FeaturedDestinations />
  </div>
  <OurService />
  <div class="max-w-7xl mx-auto">
    <WhyChooseUs />
  </div>
  <PopularEvents />
  <PopularMusses />
</template>
