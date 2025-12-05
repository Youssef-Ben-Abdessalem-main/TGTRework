<script setup>
import { Clock, CheckCircle } from "lucide-vue-next";

const props = defineProps({
  schedule: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <div class="flex items-center mb-6">
      <Clock class="w-6 h-6 text-sand-mid mr-3" />
      <h2 class="text-2xl font-bold text-gray-900">Event Schedule</h2>
    </div>

    <div class="space-y-4">
      <div
        v-for="(item, index) in schedule"
        :key="index"
        class="flex items-start space-x-4 p-4 rounded-lg bg-purple-50 border border-purple-200 hover:shadow-md transition-shadow"
      >
        <div class="flex-shrink-0">
          <div
            class="w-12 h-12 bg-sand-mid text-white rounded-full flex items-center justify-center font-bold text-sm"
          >
            {{ item.time }}
          </div>
        </div>

        <div class="flex-1">
          <h3 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
        </div>

        <CheckCircle class="w-5 h-5 text-sand-mid mt-1" />
      </div>
    </div>
  </div>
</template>
