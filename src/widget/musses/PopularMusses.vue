<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import MuseumCard from "@/widget/musses/components/MuseumCard.vue";

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
};
const museums = [
  {
    id: 1,
    name: "Bardo Museum",
    region: "Tunis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SNFJsFSl9bkLNuzJViIB3lP1tXsryzf1Gw&s",
  },
  {
    id: 2,
    name: "Dar Ben Abdallah",
    region: "Tunis",
    image:
      "https://darbenabdallah.best-hotelstunisia.com/data/Images/OriginalPhoto/501/50145/50145582/zougueg-dar-ben-abdallah-image-12.JPEG",
  },
  {
    id: 3,
    name: "Sidi Bou Said Museum",
    region: "Sidi Bou Said",
    image:
      "https://img.atlasobscura.com/By8KIHCsXaOV5SyE9B4ip28fbksXNiIaJjw6FV_D_xs/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy85NWZl/MzNjM2E2NTJmNTU1/ZDNfc2h1dHRlcnN0/b2NrXzEzMTM2NDQy/MzUuanBn.jpg",
  },
  {
    id: 4,
    name: "Ennejma Ezzahra",
    region: "Sidi Bou Said",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv5Q6X69zLimYi-VYHYXuIaEQeyQGJGB9jw&s",
  },
  {
    id: 5,
    name: "Kairouan Museum",
    region: "Kairouan",
    image:
      "https://umayyad.eu/sites/default/files/shutterstock_212414134_carpet%20shop_kairouan_rsz_text.jpg",
  },
];

const regions = ["All", "Djerba", "Sahel", "South", "Northwest", "Center"];
</script>
<template>
  <section class="py-20 px-4 relative overflow-hidden">
    <!-- <div
      class="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/5 to-transparent pointer-events-none"
    /> -->

    <div class="max-w-7xl mx-auto relative">
      <div class="text-start relative max-w-7xl mx-auto mb-20">
        <h2
          class="text-3xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
        >
          {{ "Discover the national museums to visit in Tunisia" }}
        </h2>
        <p class="text-7xl text-gray-300 font-extrabold">{{ "Cultural Heritage" }}</p>
      </div>
      <div
        class="w-16 h-[60%] bg-gradient-to-r from-white to-transparent pointer-events-none z-50 bottom-[10%] absolute left-0"
      ></div>
      <div
        class="w-16 h-[60%] bg-gradient-to-l from-white to-transparent pointer-events-none z-50 bottom-[10%] absolute right-0"
      ></div>
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(museum, index) in museums" :key="index">
          <MuseumCard
            :name="museum.name"
            :region="museum.region"
            :image="museum.image"
            :index="index"
          />
        </Slide>
      </Carousel>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 }, once: true }"
        class="flex flex-wrap gap-3 mt-8 justify-center"
      >
        <button
          v-for="(region, i) in regions"
          :key="region"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
            i === 0
              ? 'bg-ocean-mid text-white'
              : 'bg-white/5 text-foreground border border-white/10 hover:bg-gold/20 hover:border-gold/30',
          ]"
        >
          {{ region }}
        </button>
      </div>
    </div>
  </section>
</template>
