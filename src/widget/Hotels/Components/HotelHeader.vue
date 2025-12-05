<template>
  <div class="container p-3.5 sm:px-4 md:px-8 lg:px-16 xl:px-16 mx-auto my-2 relative">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col gap-2">
          <div class="flex flex-row gap-2">
            <span class="text-xl md:text-2xl font-bold relative inline-block pb-1 bg-gradient-to-r from-[#15A5DF] to-[#15A5DF] bg-[length:60%_2.5px] bg-left-bottom bg-no-repeat">
              {{ hotelName }}
            </span>
            <div class="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
              <i v-for="n in 5" :key="n" :class="n <= rating ? 'fas fa-star text-xs text-orange-500' : 'fas fa-star text-xs text-gray-300'"></i>
            </div>
          </div>
          <a :href="`/itinerary/0/0`" class="text-gray-600 text-sm sm:text-base mt-1 hover:underline hover:cursor-pointer mb-2">
            <i class="fas fa-map-marker-alt text-md text-blue-500 mr-1"></i>
            <span>{{ address }}</span>
          </a>
        </div>
        <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full opacity-20 -translate-y-4 translate-x-4"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hotelName: { type: String, default: 'Hôtel Joya Paradise & SPA Djerba' },
  rating: { type: Number, default: 4 },
  address: { type: String, default: 'Zone Touristique BP 357 - 4116 Djerba Midoun' }
});
</script>