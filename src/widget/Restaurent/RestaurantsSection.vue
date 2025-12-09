<script setup>
import SectionHeader from "../../shared/SectionHeader.vue";
import RestaurantCard from "./components/RestaurantCard.vue";
import { restaurants } from "@/assets/data/restaurantData.js";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import MuseumCard from "@/widget/musses/components/MuseumCard.vue";
import Restaurants from "@/widget/Views/Restaurants.vue";

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
    <div
      class="absolute top-1/2 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2"
    />

    <div class="max-w-7xl mx-auto">
      <SectionHeader
        title="Popular Restaurants"
        subtitle="Discover and book the best restaurant in Tunisia"
      />

      <Carousel v-bind="carouselConfig">
        <Slide v-for="(restaurant, index) in restaurants" :key="index" class="my-10">
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
