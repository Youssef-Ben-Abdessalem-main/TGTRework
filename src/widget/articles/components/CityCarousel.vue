<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      <div class="lg:col-span-1">
        <h3 class="text-3xl font-normal text-gray-900 mb-2">Visit Tunisia</h3>
        <h2 class="text-4xl font-bold text-ocean-mid mb-4">City By City</h2>
        <p class="text-gray-600 leading-relaxed">
          Discover the wonders of each Tunisian destination with our detailed guides.
        </p>
      </div>

      <div class="lg:col-span-2">
        <div class="relative overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div
              v-for="city in cities"
              :key="city.id"
              class="flex-shrink-0 px-3"
              :style="{ width: `${slideWidth}%` }"
            >
              <div
                class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div class="aspect-[4/3] overflow-hidden">
                  <img
                    :src="city.image"
                    :alt="city.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"
                >
                  <div class="absolute bottom-0 left-0 right-0 p-2">
                    <h3 class="text-white text-lg font-semibold">
                      {{ city.name }}
                    </h3>
                    <a
                      :href="city.link"
                      class="inline-flex items-center text-white/90 hover:text-white text-xs font-medium group-hover:underline"
                    >
                      Discover
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-2 h-2 rounded-full transition-all duration-200"
            :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRight } from "lucide-vue-next";
import { ref, computed, onMounted, onUnmounted } from "vue";

const cities = [
  {
    id: 1,
    name: "Bizerte",
    image: "https://tunisiagotravel.com/blog/wp-content/uploads/2023/10/14-330x220.jpg",
    link: "/destinations/bizerte",
  },
  {
    id: 2,
    name: "Djerba",
    image: "https://tunisiagotravel.com/blog/wp-content/uploads/2023/10/1010-330x220.png",
    link: "/destinations/djerba",
  },
  {
    id: 3,
    name: "Hammamet",
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2021/12/Fort-de-Hammamet-330x220.jpeg",
    link: "/destinations/hammamet",
  },
  {
    id: 4,
    name: "Sidi Bou Saïd",
    image: "https://tunisiagotravel.com/blog/wp-content/uploads/2023/10/sidi-330x220.jpg",
    link: "/destinations/sidi-bou-said",
  },
  {
    id: 5,
    name: "Sousse",
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2023/10/sousse-330x220.jpg",
    link: "/destinations/sousse",
  },
];

const currentSlide = ref(0);
const itemsPerSlide = ref(4);
const slideWidth = computed(() => 100 / itemsPerSlide.value);
const totalSlides = computed(() => Math.ceil(cities.length / itemsPerSlide.value));

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

let autoplayInterval;

onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>
