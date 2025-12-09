<script setup>
import SectionHeader from "../../shared/SectionHeader.vue";
import RestaurantCard from "./components/RestaurantCard.vue";
import { restaurants } from "@/assets/data/restaurantData.js";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import MuseumCard from "@/widget/musses/components/MuseumCard.vue";
import Restaurants from "@/widget/Views/Restaurants.vue";
import Events from "@/widget/Views/Events.vue";

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: true,
  mouseDrag: true,
};
</script>

<template>
  <section
    class="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"
  >
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        class="relative block w-full h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="fill-white"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </div>

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg
        class="relative block w-full h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="fill-white"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </div>
    <div
      class="absolute top-1/2 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2"
    />

    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-4xl md:text-5xl font-serif text-white mb-1">
          Popular Restaurants
        </h2>
        <p class="text-xl text-white/90 font-light">
          Discover and book the best restaurant in Tunisia
        </p>
      </div>

      <Carousel v-bind="carouselConfig">
        <Slide v-for="(restaurant, index) in restaurants" :key="index" class="my-5">
          <RestaurantCard
            :name="restaurant.name"
            :region="restaurant.region"
            :address="restaurant.address"
            :price-from="restaurant.priceFrom"
            :rating="restaurant.rating"
            :image="restaurant.image"
            :is-reservable="restaurant.isReservable"
            :index="index"
          />
        </Slide>
      </Carousel>
    </div>
  </section>
</template>
