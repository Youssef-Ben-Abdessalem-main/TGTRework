<script setup>
import { HotelsService } from "@/services/hotels.js";
import Separator from "@/components/ui/separator/Separator.vue";
import { Star, MapPin, Calendar, Users, Map } from "lucide-vue-next";
import { onMounted, onUnmounted, ref, computed } from "vue";
import Badge from "@/components/ui/badge/Badge.vue";
import { useRouter } from "vue-router";
import { hotelService } from "@/services";
import { Skeleton } from "@/components/ui/skeleton";
import Hotels from "@/widget/Views/Hotels.vue";
import SectionHeader from "@/shared/SectionHeader.vue";
import Select from "@/components/ui/select/Select.vue";

const router = useRouter();
const hotels = ref([]);
function handleDetailsClick(tab) {
  router.push(`/hotels/details/${tab.name}`);
}

hotelService.getFeaturedHotels;

const currentHotel = ref(null);
const isTransitioning = ref(false);
const isLoading = ref(true);

const loadHotels = async () => {
  try {
    const data = await HotelsService.get_best_hotels();

    hotels.value = data.map((hotel) => ({
      ...hotel,
      price: `$${hotel.starting_price}`,
      period: "per night",
      image:
        hotel.pictures[0] ||
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    }));

    if (hotels.value.length > 0) {
      currentHotel.value = hotels.value[0];
    }
    isLoading.value = false;
  } catch (error) {
    console.error("Error loading hotels:", error);
    isLoading.value = false;
  }
};
const currentIndex = ref(0);
let intervalId = null;

const nextHotels = computed(() => {
  const next = [];
  for (let i = 1; i <= 10; i++) {
    const nextIndex = (currentIndex.value + i) % hotels.value.length;
    next.push(hotels.value[nextIndex]);
  }
  return next;
});

onMounted(async () => {
  await loadHotels();
  if (hotels.value.length > 1) {
    intervalId = setInterval(() => {
      isTransitioning.value = true;
      setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % hotels.value.length;
        currentHotel.value = hotels.value[currentIndex.value];
        setTimeout(() => {
          isTransitioning.value = false;
        }, 50);
      }, 300);
    }, 5000);
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="relative py-20">
    <SectionHeader
      title="Discover Tunisia"
      subtitle="Selection of the best hotels in The Country"
    />
    <div class="h-[600px]">
      <div v-if="isLoading" class="relative h-full overflow-hidden">
        <Skeleton class="absolute inset-0 w-full h-full" />
        <div class="absolute w-full px-5 flex justify-between items-center gap-1">
          <Skeleton class="w-1/5 h-14" />
          <Skeleton class="w-1/3 h-14" />
          <Skeleton class="w-1/5 h-14" />
        </div>
        <div class="absolute h-28 w-full bottom-0 grid grid-cols-5 gap-1">
          <Skeleton v-for="i in 5" :key="i" class="w-full h-full" />
        </div>
      </div>

      <div v-else class="relative h-full overflow-hidden">
        <img
          :src="hotels[(currentIndex + 1) % hotels.length]?.image"
          :alt="hotels[(currentIndex + 1) % hotels.length]?.name"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <img
          :src="currentHotel?.image"
          :alt="currentHotel?.name"
          class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          :style="{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }"
        />
        <div
          class="w-full h-full bg-gradient-to-t from-black/70 to-black/30 inset-0 absolute"
        ></div>

        <div class="absolute h-28 py-1 glass w-full bottom-0 overflow-hidden">
          <div class="flex h-full gap-1 animate-slide">
            <div
              class="flex-shrink-0 h-full bg-black rounded relative group"
              style="width: calc(10% - 4px)"
              v-for="(hotel, index) in [...nextHotels, ...nextHotels]"
              :key="`${hotel?.id}-${index}`"
            >
              <img
                :src="hotel?.image"
                :alt="hotel?.name"
                class="w-full h-full object-cover rounded"
              />
              <div
                class="bg-black/50 absolute inset-0 flex-col gap-1 group-hover:bg-black/40 flex justify-center items-center cursor-pointer"
              >
                <span class="text-white text-xs"> {{ hotel.name }}</span>
                <span class="text-white/70 text-xs flex flex-row items-center gap-1">
                  <MapPin class="w-4" />{{ hotel.location }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-10 p-8">
          <div class="relative mb-8">
            <div
              class="absolute -top-4 -right-4 glass text-white px-6 py-3 rounded-2xl shadow-lg"
            >
              <div class="text-2xl font-bold">{{ currentHotel.price }}</div>
              <div class="text-xs opacity-90">{{ currentHotel.period }}</div>
            </div>
            <div class="pr-20">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex items-center gap-2 glass px-3 py-1 rounded-full border border-yellow-200"
                >
                  <Star class="w-4 h-4 text-yellow-400 fill-current" />
                  <span class="font-bold text-white">{{ currentHotel.rating }}</span>
                </div>
                <div class="w-full flex flex-col justify-center items-center gap-2">
                  <h1 class="text-4xl font-bold text-white text-center">
                    {{ currentHotel.name }}
                  </h1>
                  <div class="flex items-center gap-2 text-white/50">
                    <MapPin class="w-4 h-4" />
                    <span class="font-medium text-sm">{{ currentHotel.location }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-slide {
  animation: slide 15s linear infinite;
  width: 200%;
}
</style>
