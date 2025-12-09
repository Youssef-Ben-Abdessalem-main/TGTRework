<script setup>
import HotelView from "@/assets/images/HotelView.png";
import Card from "@/components/ui/card/Card.vue";
import { MapPin, Star, Shield } from "lucide-vue-next";
import { Toaster } from "vue-sonner";
</script>
<template>
  <div class="min-h-screen w-full relative overflow-hidden">
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
    <div class="relative z-10 min-h-screen flex flex-col lg:flex-row">
      <div
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }"
        class="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0"
      >
        <div class="mb-8">
          <h2 class="text-2xl font-bold tracking-widest text-white/90">
            <span class="text-gold">TUNISIA GO</span>
            <span class="font-light ml-2">TRAVEL</span>
          </h2>
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Your Gateway to
          <br />
          <span class="text-gold">Extraordinary</span>
          <br />
          Escapes
        </h1>

        <p class="text-lg text-white/70 max-w-md mb-10 leading-relaxed">
          Discover handpicked luxury destinations and book your dream getaway with
          exclusive member benefits.
        </p>

        <div class="flex flex-wrap gap-6">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
            class="flex items-center gap-2 text-white/60"
          >
            <div class="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
              <MapPin class="w-5 h-5 text-gold" />
            </div>
            <div>
              <p class="text-sm font-semibold text-white">500+</p>
              <p class="text-xs">Destinations</p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }"
            class="flex items-center gap-2 text-white/60"
          >
            <div class="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
              <Star class="w-5 h-5 text-gold" />
            </div>
            <div>
              <p class="text-sm font-semibold text-white">4.9</p>
              <p class="text-xs">Guest Rating</p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
            class="flex items-center gap-2 text-white/60"
          >
            <div class="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
              <Shield class="w-5 h-5 text-gold" />
            </div>
            <div>
              <p class="text-sm font-semibold text-white">Secure</p>
              <p class="text-xs">Booking</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-center px-6 py-12 lg:py-0">
        <RouterView />
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent pointer-events-none"
    />
    <Toaster position="top-center" class="bg-ocean-deep" />
  </div>
</template>
<style scooped></style>
