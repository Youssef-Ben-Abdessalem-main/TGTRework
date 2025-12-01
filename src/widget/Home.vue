<script setup>
import FeaturedDestinations from "./Home/FeaturedDestinations.vue";
import HeroSection from "./Home/HeroSection.vue";
import PopularTours from "./Home/PopularTours.vue";
import SearchBooking from "./Home/SearchBooking.vue";
import WhyChooseUs from "./Home/WhyChooseUs.vue";
</script>

<template>
  <HeroSection />
  <div class="max-w-7xl mx-auto">
    <SearchBooking />
    <FeaturedDestinations />
  </div>
  <PopularTours />
  <div class="max-w-7xl mx-auto">
    <WhyChooseUs />
  </div>
</template>
