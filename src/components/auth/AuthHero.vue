<script setup>
import AuthStats from "./AuthStats.vue";
</script>
<template>
  <div class="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0">
    <div class="mb-8">
      <h2 class="text-2xl font-bold tracking-widest text-white/90">
        <span class="text-gold">TUNISIA GO</span>
        <span class="font-light ml-2">TRAVEL</span>
      </h2>
    </div>

    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
      Your Gateway to
      <br />
      <span class="text-gold">Extraordinary</span>
      <br />
      Escapes
    </h1>

    <p class="text-lg text-white/70 max-w-md mb-10 leading-relaxed">
      Discover handpicked luxury destinations and book your dream getaway with exclusive
      member benefits.
    </p>

    <AuthStats />
  </div>
</template>
