<template>
  <div class="md:col-span-1 flex flex-col space-y-4 mt-4 md:mt-0">
    <div class="flex flex-col space-y-2">
      <div 
        v-for="feature in features" 
        :key="feature.text"
        class="border border-gray-300 py-2 px-3 rounded-md flex items-center space-x-2"
      >
        <i :class="`${feature.icon} text-xs text-green-600`"></i>
        <span>{{ feature.text }}</span>
      </div>
    </div>
    <div class="vue-map-container w-full h-40 sm:h-52 md:h-64 lg:h-72 rounded-lg">
      <div class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
        <span class="text-gray-500">Map will be loaded here</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    default: () => [
      { icon: 'fas fa-user-slash', text: 'Interdit aux célibataires' },
      { icon: 'fas fa-water', text: 'Pieds dans l\'eau' },
      { icon: 'fas fa-ban', text: 'Burkini Interdit' }
    ]
  }
});
</script>