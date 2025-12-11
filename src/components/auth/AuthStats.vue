<script setup>
import { MapPin, Star, Shield } from "lucide-vue-next";

const stats = [
  { icon: MapPin, value: "500+", label: "Destinations" },
  { icon: Star, value: "4.9", label: "Guest Rating" },
  { icon: Shield, value: "Secure", label: "Booking" },
];
</script>
<template>
  <div class="flex flex-wrap gap-6">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="flex items-center gap-2 text-white/60"
    >
      <div class="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
        <component :is="stat.icon" class="w-5 h-5 text-gold" />
      </div>
      <div>
        <p class="text-sm font-semibold text-white">{{ stat.value }}</p>
        <p class="text-xs">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>
