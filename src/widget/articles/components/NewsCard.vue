<script setup>
import { Calendar, User } from "lucide-vue-next";

defineProps({
  image: String,
  category: String,
  categoryColor: String,
  title: String,
  description: String,
  author: String,
  date: String,
});
</script>

<template>
  <div
    class="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform group cursor-pointer"
  >
    <div class="relative h-96 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-ocean-deep/20 to-transparent duration-500 transition-colors"
      />

      <div
        class="p-4 absolute bottom-0 transform translate-y-2 transition-transform duration-300"
      >
        <div
          class="bg-white w-max flex justify-center items-center p-1 rounded-t-lg opacity-90 transition-opacity duration-300"
        >
          <span
            :class="`inline-block px-3 py-1 rounded-md text-xs font-semibold ${categoryColor} animate-pulse`"
          >
            {{ category }}
          </span>
        </div>
        <div
          class="bg-white flex flex-col justify-center items-center rounded-r-lg py-3 px-3 opacity-90 transition-all duration-300 transform"
        >
          <h3
            class="text-md font-bold text-gray-900 mb-2 line-clamp-2 transition-colors duration-300"
          >
            {{ title }}
          </h3>
          <p class="text-gray-600 text-xs line-clamp-2 transition-colors duration-300">
            {{ description }}
          </p>
        </div>
        <div
          class="flex items-center text-xs text-gray-500 bg-white w-max py-2 px-3 rounded-b-lg opacity-90 transition-all duration-300 transform"
        >
          <User class="w-4 h-4 mr-1 transition-transform duration-300" />
          <span class="mr-3">{{ author }}</span>
          <Calendar class="w-4 h-4 mr-1 transition-transform duration-300" />
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
