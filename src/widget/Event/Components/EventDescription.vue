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
      <div class="text-gray-700 leading-relaxed" v-html="event.description"></div>

      <div
        v-if="event.description_en && event.description_en !== event.description"
        class="mt-6 p-4 bg-gray-50 rounded-lg"
      >
        <h4 class="font-medium text-gray-900 mb-2 flex items-center">Description</h4>
        <div class="text-gray-700 text-sm" v-html="event.description_en"></div>
      </div>

      <div class="mt-6 p-4 bg-ocean-light/20 rounded-lg border-l-4 border-ocean-mid">
        <p class="text-ocean-deep font-medium">{{ event.callToAction }}</p>
        <div
          v-if="event.reservable"
          class="mt-2 flex items-center text-sm text-green-600"
        >
          <span class="mr-2">✓</span> Reservations available
        </div>
      </div>
    </div>
  </div>
</template>
