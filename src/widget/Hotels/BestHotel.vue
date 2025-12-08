<script setup>
import { bestHotels } from "@/assets/data/ShareData";
import Separator from "@/components/ui/separator/Separator.vue";
import { Star, MapPin, Calendar, Users } from "lucide-vue-next";
import { onMounted, onUnmounted, ref, computed } from "vue";
import Badge from "@/components/ui/badge/Badge.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const fallbackHotels = [
  {
    name: "Four Seasons Tunis",
    location: "Tunis, Tunisia",
    rating: 4.9,
    price: "$320",
    period: "per night",
    checkIn: "Dec 15, 2024",
    checkOut: "Dec 18, 2024",
    guests: 2,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
];
function handleDetailsClick(tab) {


  router.push(`/hotels/details/${tab.name}`);
}

const hotels = bestHotels?.length > 0 ? bestHotels : fallbackHotels;
const currentHotel = ref(hotels[0]);
const currentIndex = ref(0);
let intervalId = null;

const nextHotels = computed(() => {
  const next = [];
  for (let i = 1; i <= 3; i++) {
    const nextIndex = (currentIndex.value + i) % hotels.length;
    next.push(hotels[nextIndex]);
  }
  return next;
});

onMounted(() => {
  if (hotels.length > 1) {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % hotels.length;
      currentHotel.value = hotels[currentIndex.value];
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
  <div class="pt-32 relative">
    <div class="text-start relative mb-8">
      <h2
        class="text-3xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
      >
        {{ "Selection of the best hotels in The Country" }}
      </h2>
      <p class="text-7xl text-gray-300 font-extrabold">{{ "Discover Tunisia" }}</p>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto py-8">
      <div class="grid lg:grid-cols-2 gap-6">
        <div
          class="relative bg-gradient-to-br rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md border-x-sand-mid border-y-sand-mid border-y-4"
        >
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ocean-light/20 to-cyan-200/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/20 to-ocean-deep/10 rounded-full blur-2xl"
          ></div>

          <div class="relative z-10 p-8">
            <div class="relative mb-8">
              <div
                class="absolute -top-4 -right-4 bg-gradient-to-r from-ocean-deep to-ocean-light text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-3"
              >
                <div class="text-2xl font-bold">{{ currentHotel.price }}</div>
                <div class="text-xs opacity-90">{{ currentHotel.period }}</div>
              </div>

              <div class="pr-20">
                <div class="flex items-center gap-3 mb-4">
                  <div
                    class="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200"
                  >
                    <Star class="w-4 h-4 text-yellow-500 fill-current" />
                    <span class="font-bold text-yellow-700">{{
                      currentHotel.rating
                    }}</span>
                  </div>
                  <span class="text-sm text-gray-500">(2,847 reviews)</span>
                </div>

                <h1
                  class="text-4xl font-bold mb-3 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                >
                  {{ currentHotel.name }}
                </h1>

                <div class="flex items-center gap-2 text-gray-600">
                  <div class="p-1 bg-ocean-light/10 rounded-full">
                    <MapPin class="w-4 h-4 text-ocean-deep" />
                  </div>
                  <span class="font-medium">{{ currentHotel.location }}</span>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                Premium Amenities
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div
                  class="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span class="text-sm font-medium text-gray-700">Ocean View</span>
                </div>
                <div
                  class="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span class="text-sm font-medium text-gray-700">Spa & Wellness</span>
                </div>
                <div
                  class="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span class="text-sm font-medium text-gray-700">Fine Dining</span>
                </div>
                <div
                  class="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span class="text-sm font-medium text-gray-700">Private Beach</span>
                </div>
              </div>
            </div>
            <!-- 
            <div class="mb-2">
              <div
                class="bg-gradient-to-r from-ocean-deep/5 via-ocean-light/10 to-cyan-100/20 rounded-2xl p-6 border border-ocean-light/20"
              >
                <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar class="w-5 h-5 text-ocean-deep" />
                  Your Reservation
                </h3>

                <div class="grid grid-cols-2 gap-6 mb-4">
                  <div class="text-center p-3 bg-white/60 rounded-xl">
                    <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Check-in
                    </div>
                    <div class="font-bold text-gray-900">{{ currentHotel.checkIn }}</div>
                  </div>
                  <div class="text-center p-3 bg-white/60 rounded-xl">
                    <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Check-out
                    </div>
                    <div class="font-bold text-gray-900">{{ currentHotel.checkOut }}</div>
                  </div>
                </div>

                <div class="flex items-center justify-between p-4 bg-white/80 rounded-xl">
                  <div class="flex items-center gap-3">
                    <div class="p-2 bg-ocean-light/20 rounded-full">
                      <Users class="w-4 h-4 text-ocean-deep" />
                    </div>
                    <span class="font-medium text-gray-700"
                      >{{ currentHotel.guests }} guests • 3 nights</span
                    >
                  </div>
                  <div class="text-right">
                    <div class="text-xs text-gray-500">Total</div>
                    <div class="text-xl font-bold text-ocean-deep">$960</div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
          <div
            class="absolute top-8 right-8 lg:right-auto lg:left-8 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3 z-20"
          >
            <div class="flex-1">
              <div class="font-semibold text-gray-900">{{ currentHotel.name }}</div>
              <div class="text-sm text-gray-600 flex items-center gap-1">
                <MapPin class="w-3 h-3" />
                {{ currentHotel.location }}
              </div>
              <div class="flex items-center gap-2 mt-1">
                <div class="flex items-center gap-1">
                  <Star class="w-3 h-3 text-yellow-500 fill-current" />
                  <span class="text-xs font-medium">{{ currentHotel.rating }}</span>
                </div>
                <span class="text-sm font-bold text-ocean-deep">{{
                  currentHotel.price
                }}</span>
                <span class="text-xs text-gray-500">{{ currentHotel.period }}</span>
              </div>
            </div>

            <button
              @click="handleDetailsClick(currentHotel)"
              class="bg-gradient-to-r from-ocean-deep to-ocean-light text-white p-2 rounded-full hover:scale-110 transition-transform"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div class="relative h-full">
            <img
              :src="currentHotel.image"
              :alt="currentHotel.name"
              class="w-full h-full object-cover"
            />
            <div class="w-full h-full bg-black/30 inset-0 absolute"></div>
            <div class="absolute bottom-0 right-0 p-4">
              <div
                v-for="(hotel, index) in nextHotels"
                :key="hotel.name"
                :class="[
                  'w-80 h-48 bg-white rounded-2xl shadow-xl overflow-hidden absolute transition-all duration-300 hover:scale-105 cursor-pointer',
                  index === 0 ? 'z-50 bottom-6 right-6' : '',
                  index === 1 ? 'z-40 bottom-4 right-4 opacity-80' : '',
                  index === 2 ? 'z-30 bottom-2 right-2 opacity-60' : '',
                ]"
              >
                <div class="relative h-full">
                  <img
                    :src="hotel.image"
                    :alt="hotel.name"
                    class="w-full h-full object-cover"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/60 to-transparent"
                  ></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4">
                    <div class="flex items-center justify-between mb-2">
                      <div class="flex items-center gap-1 glass px-2 rounded-full py-1">
                        <Star class="w-4 h-4 text-yellow-400 fill-current" />
                        <span class="text-white text-sm font-medium">{{
                          hotel.rating
                        }}</span>
                      </div>
                      <div class="text-white font-bold">
                        {{ hotel.price }}<span class="text-xs font-normal">/night</span>
                      </div>
                    </div>
                    <h4 class="text-white font-semibold text-lg">{{ hotel.name }}</h4>
                    <div class="flex items-center gap-2 mt-1">
                      <Calendar class="w-3 h-3 text-white/80" />
                      <span class="text-white/80 text-xs">Next in queue</span>
                    </div>
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
