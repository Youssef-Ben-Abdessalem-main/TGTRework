<script setup>
import { Play, Clock } from 'lucide-vue-next'

defineProps({
  title: String,
  type: String,
  duration: String,
  thumbnail: String,
  index: Number
})
</script>

<template>
  <div class="group relative overflow-hidden rounded-2xl cursor-pointer min-w-[280px]">
    <!-- Thumbnail -->
    <div class="relative aspect-video overflow-hidden rounded-2xl">
      <img
        :src="thumbnail || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/90 transition-all duration-300" />
      
      <!-- Play Button -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-16 h-16 rounded-full bg-yellow-400/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-yellow-400 transition-colors duration-300 hover:scale-110">
          <Play class="w-7 h-7 text-gray-900 fill-current ml-1" />
        </div>
      </div>

      <!-- Type Badge -->
      <div class="absolute top-3 left-3">
        <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20">
          {{ type }}
        </span>
      </div>

      <!-- Duration -->
      <div class="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-900/80 backdrop-blur-sm text-white text-xs">
        <Clock class="w-3 h-3" />
        {{ duration }}
      </div>
    </div>

    <!-- Title -->
    <div class="absolute bottom-0 left-0 right-0 p-4">
      <h3 class="text-white font-semibold text-base group-hover:text-yellow-400 transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-yellow-400/80 text-xs mt-1 flex items-center gap-1">
        <Play class="w-3 h-3" />
        Regarder la vidéo
      </p>
    </div>
  </div>
</template>