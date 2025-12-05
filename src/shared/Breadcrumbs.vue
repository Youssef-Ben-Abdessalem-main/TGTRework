<script setup>
import { RouterLink } from "vue-router";
import { Home, ChevronRight, MapPin } from "lucide-vue-next";

const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  badge: [String, Object],
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

<template>
  <section class="relative h-[550px] overflow-hidden w-full">
    <div class="absolute inset-0">
      <img :src="image" :alt="title" class="w-full h-full object-cover scale-110" />
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-mid/70 to-sand-deep/40"
    />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="(_, i) in 6"
        :key="i"
        class="absolute w-2 h-2 bg-amber-glow/30 rounded-full animate-float"
        :style="{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          animationDelay: `${i * 0.5}s`,
        }"
      />
    </div>

    <div
      class="relative h-full max-w-7xl mx-auto px-6 py-10 space-y-8 w-full flex flex-col items-start justify-center"
    >
      <nav class="flex items-center space-x-2 text-sm opacity-0 animate-fade-in">
        <div v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <template v-if="index === 0">
            <RouterLink
              :to="crumb?.href || '/'"
              class="flex items-center space-x-1.5 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <component
                :is="crumb.icon || Home"
                class="w-4 h-4 group-hover:scale-110 transition-transform"
              />
              <span class="font-medium">{{ crumb.label }}</span>
            </RouterLink>
          </template>

          <template v-else>
            <ChevronRight class="w-4 h-4 text-white/50 mx-2" />

            <RouterLink
              :to="crumb?.href || '/'"
              class="transition-all duration-300"
              :class="{
                'text-white font-semibold': index === breadcrumbs.length - 1,
                'text-white/80 hover:text-white': index !== breadcrumbs.length - 1,
              }"
            >
              {{ crumb.label }}
            </RouterLink>
          </template>
        </div>
      </nav>

      <div class="space-y-5 opacity-0 animate-slide-up stagger-2">
        <div
          class="inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full group hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <component
            :is="badge?.icon || MapPin"
            class="w-4 h-4 text-amber-500 animate-pulse-glow"
          />
          <span class="text-white text-sm font-semibold tracking-wide">
            {{ badge?.label || badge }}
          </span>
        </div>

        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-2xl"
        >
          {{ title }}
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-lg font-light leading-relaxed"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>

    <svg
      class="absolute -bottom-1 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        fill="white"
        d="M0,64C120,96,240,112,360,106.7C480,101,600,75,720,69.3C840,64,960,80,1080,85.3C1200,91,1320,85,1380,82.7L1440,80L1440,120L0,120Z"
      />
    </svg>
  </section>
</template>
