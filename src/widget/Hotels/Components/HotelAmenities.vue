<script setup>
import { computed } from "vue";

const props = defineProps({
  amenities: {
    type: Array,
    default: () => [
      { icon: "fas fa-utensils", name: "Restaurant", category: "dining" },
      { icon: "fas fa-glass-martini", name: "Bar & Lounge", category: "dining" },
      { icon: "fas fa-coffee", name: "Café", category: "dining" },
      { icon: "fas fa-swimming-pool", name: "Pool", category: "recreation" },
      { icon: "fas fa-dumbbell", name: "Fitness Center", category: "recreation" },
      { icon: "fas fa-spa", name: "Spa & Wellness", category: "recreation" },
      { icon: "fas fa-snowflake", name: "A/C", category: "room" },
      { icon: "fas fa-wifi", name: "Free Wi-Fi", category: "room" },
      { icon: "fas fa-lock", name: "Safe", category: "room" },
      { icon: "fas fa-tv", name: "Flat TV", category: "room" },
      { icon: "fas fa-building", name: "Business Center", category: "services" },
      { icon: "fas fa-tshirt", name: "Laundry", category: "services" },
      { icon: "fas fa-car", name: "Parking", category: "services" },
      { icon: "fas fa-concierge-bell", name: "Concierge", category: "services" },
    ],
  },
});

const categorizedAmenities = computed(() => {
  const categories = {
    dining: { name: "Dining", items: [] },
    recreation: { name: "Recreation", items: [] },
    room: { name: "In-Room", items: [] },
    services: { name: "Services", items: [] },
  };

  props.amenities.forEach((amenity) => {
    if (categories[amenity.category]) {
      categories[amenity.category].items.push(amenity);
    }
  });

  return Object.values(categories).filter((cat) => cat.items.length > 0);
});
</script>

<template>
  <div class="overflow-hidden">
    <div class="px-4 text-sand-mid">
      <h2 class="text-2xl font-bold flex items-center">
        <i class="fas fa-concierge-bell mr-2"></i>
        Hotel Amenities
      </h2>
    </div>

    <div class="p-4 space-y-3">
      <div
        v-for="category in categorizedAmenities"
        :key="category.name"
        class="space-y-1"
      >
        <h3
          class="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-1"
        >
          {{ category.name }}
        </h3>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="amenity in category.items"
            :key="amenity.name"
            class="flex items-center p-2 rounded-lg bg-gray-50 hover:bg-sand-light/10 transition-colors group cursor-pointer"
          >
            <div
              class="w-8 h-8 bg-gradient-to-br from-sand-mid to-sand-light rounded-full flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform"
            >
              <i :class="`${amenity.icon} text-xs`"></i>
            </div>
            <span
              class="text-sm font-medium text-gray-800 group-hover:text-sand-mid transition-colors truncate"
            >
              {{ amenity.name }}
            </span>
          </div>
        </div>
      </div>

      <div
        class="p-3 bg-gradient-to-r from-ocean-deep/30 to-ocean-deep/10 rounded-lg border border-blue-100"
      >
        <div class="flex items-center text-ocean-deep text-sm">
          <i class="fas fa-info-circle mr-2"></i>
          <span class="font-semibold">24/7 Concierge & Room Service Available</span>
        </div>
      </div>
    </div>
  </div>
</template>
