<script setup>
import { Toaster } from "vue-sonner";
import AuthBackground from "@/components/auth/AuthBackground.vue";
import AuthHero from "@/components/auth/AuthHero.vue";
</script>

<template>
  <div class="min-h-screen w-full relative overflow-hidden">
    <AuthBackground />

    <div class="relative z-10 min-h-screen flex flex-col lg:flex-row">
      <AuthHero />

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
