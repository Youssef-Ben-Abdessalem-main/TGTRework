<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="text-start relative max-w-7xl mx-auto mb-20">
    <h2
      class="text-3xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
    >
      {{ subtitle }}
    </h2>
    <p class="text-7xl text-gray-300 font-extrabold">{{ title }}</p>
  </div>
</template>
