<script setup>
import { Info } from "lucide-vue-next";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <div class="flex items-center mb-4">
      <Info class="w-6 h-6 text-ocean-deep mr-3" />
      <h2 class="text-2xl font-bold text-ocean-deep">About This Event</h2>
    </div>

    <div class="prose prose-lg max-w-none">
      <p class="text-gray-700 leading-relaxed" v-html="event.description"></p>

      <div class="mt-6 p-4 bg-ocean-light/20 rounded-lg border-l-4 border-ocean-mid">
        <p class="text-ocean-deep font-medium">{{ event.callToAction }}</p>
      </div>
    </div>
  </div>
</template>
