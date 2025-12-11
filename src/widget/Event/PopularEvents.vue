<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import EventCard from "./Components/EventCard.vue";
import { EventsService } from "@/services/events.js";

const popularEvents = ref([]);
const isLoading = ref(true);

const currentSlide = ref(0);
const itemsPerSlide = ref(3);
const slideWidth = computed(() => 100 / itemsPerSlide.value);
const totalSlides = computed(() => Math.ceil(popularEvents.value.length / itemsPerSlide.value));

const updateItemsPerSlide = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    itemsPerSlide.value = 3;
  } else if (width >= 768) {
    itemsPerSlide.value = 2;
  } else {
    itemsPerSlide.value = 1;
  }
  currentSlide.value = 0;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const getShortMonth = (month) => {
  const months = {
    janvier: "Jan",
    février: "Feb",
    mars: "Mar",
    avril: "Apr",
    mai: "May",
    juin: "Jun",
    juillet: "Jul",
    août: "Aug",
    septembre: "Sep",
    octobre: "Oct",
    novembre: "Nov",
    décembre: "Dec",
  };
  return months[month] || month.slice(0, 3);
};

let autoplayInterval;

onMounted(async () => {
  try {
    popularEvents.value = await EventsService.get_featured_events();
  } catch (error) {
    console.error("Failed to load events:", error);
  } finally {
    isLoading.value = false;
  }

  updateItemsPerSlide();
  window.addEventListener("resize", updateItemsPerSlide);
  // autoplayInterval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsPerSlide);
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<template>
  <section
    class="relative bg-gradient-to-br from-ocean-deep to-ocean-mid py-20 overflow-hidden"
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

    <div class="relative mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif text-white mb-4">
          Popular Events in Tunisia
        </h2>
        <p class="text-xl text-white/90 font-light">
          Discover amazing events across Tunisia
        </p>
      </div>

      <div class="relative">
        <div v-if="isLoading" class="flex items-stretch">
          <div v-for="i in 3" :key="i" class="flex-shrink-0 px-4" :style="{ width: slideWidth + '%' }">
            <div class="w-96 h-[300px] bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
        </div>
        
        <div
          v-else
          class="flex transition-transform duration-500 ease-in-out items-stretch"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(event, index) in popularEvents"
            :key="event.id"
            class="flex-shrink-0 px-4"
            :style="{ width: slideWidth + '%' }"
          >
            <EventCard
              :title="event.title"
              :slug="event.slug"
              :location="event.location || 'Tunisia'"
              :date="event.date"
              :image="event.image"
              :status="event.status.toLowerCase()"
              :index="index"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(_, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-200"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40'"
        />
      </div>
    </div>
  </section>
</template>
