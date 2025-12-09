<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import SectionHeader from "../../shared/SectionHeader.vue";
import VideoCard from "./components/VideoCard.vue";
import { videos } from "@/assets/data/videoData.js";

const carouselConfig = {
  itemsToShow: 3.5,
  wrapAround: true,
  mouseDrag: true,
  breakpoints: {
    768: {
      itemsToShow: 2.5,
    },
    640: {
      itemsToShow: 1.5,
    },
  },
};
</script>

<template>
  <section class="py-20 px-4 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <div
        class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"
      />
      <div
        class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"
      />
    </div>

    <div class="max-w-7xl mx-auto">
      <SectionHeader
        title="Explore in Video"
        subtitle="Tunisian restaurants, hotels, and sites on video"
      />

      <div class="relative">
        <Carousel v-bind="carouselConfig">
          <Slide v-for="(video, index) in videos" :key="video.id">
            <div class="px-3">
              <VideoCard
                :title="video.title"
                :type="video.type"
                :duration="video.duration"
                :thumbnail="video.thumbnail"
                :index="index"
              />
            </div>
          </Slide>
        </Carousel>

        <div
          class="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"
        />
      </div>

      <div class="flex gap-4 mt-8 justify-center">
        <button
          v-for="(type, i) in ['Tous', 'Hotel', 'Destination', 'Restaurant']"
          :key="type"
          :class="[
            'px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ',
            i === 0
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg'
              : 'bg-white text-gray-700  hover:bg-yellow-400/20 hover:border-yellow-400/30 cursor-pointer',
          ]"
        >
          {{ type }}
        </button>
      </div>
    </div>
  </section>
</template>
