<script setup>
import { MapPin, Star } from "lucide-vue-next";

defineProps({
  name: String,
  region: String,
  address: String,
  priceFrom: Number,
  rating: Number,
  image: String,
  isReservable: Boolean,
  index: Number,
});
</script>

<template>
  <div
    class="mx-2 w-full group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-yellow-400 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl"
  >
    <div class="relative h-52 overflow-hidden">
      <img
        :src="image"
        :alt="name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
      />

      <div
        v-if="rating"
        class="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-400 text-gray-900 text-xs font-bold"
      >
        <Star class="w-3 h-3 fill-current" />
        {{ rating }}
      </div>

      <div class="absolute top-3 left-3">
        <span
          class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium border border-white/10"
        >
          <MapPin class="w-3 h-3 text-yellow-400" />
          {{ region }}
        </span>
      </div>
    </div>

    <div class="p-5">
      <h3
        class="text-gray-900 font-bold text-lg mb-2 line-clamp-1 group-hover:text-yellow-600 transition-colors duration-300"
      >
        {{ name }}
      </h3>

      <p class="text-gray-600 text-xs line-clamp-2 mb-4 leading-relaxed">
        {{ address }}
      </p>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-500">from</p>
          <p class="text-yellow-600 font-bold text-xl">
            {{ priceFrom }}<span class="text-sm font-normal">$</span>
          </p>
        </div>

        <span
          v-if="!isReservable"
          class="text-xs text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full"
        >
          Not available for reservation
        </span>
      </div>
    </div>
  </div>
</template>
