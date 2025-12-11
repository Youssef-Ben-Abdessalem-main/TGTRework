<script setup>
import HotelView from "@/assets/images/HotelView.png";
</script>
<template>
  <div class="absolute inset-0">
    <img
      :src="HotelView"
      alt="Luxury resort infinity pool at sunset"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/20 to-navy-dark/70"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-navy-dark/50 via-transparent to-navy-dark/30"
    />
  </div>
</template>
