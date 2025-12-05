<script setup>
import { ref, onMounted, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

defineProps({
  features: {
    type: Array,
    default: () => [
      { icon: "fas fa-user-slash", text: "No Singles Policy" },
      { icon: "fas fa-water", text: "Beachfront Location" },
      { icon: "fas fa-ban", text: "Burkini Not Allowed" },
    ],
  },
  coordinates: {
    type: Object,
    default: () => ({ lat: 33.875, lng: 10.758 }),
  },
});

const map = ref(null);

const initMap = async () => {
  await nextTick();

  map.value = L.map("hotel-map").setView([33.875, 10.758], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map.value);

  const hotelIcon = L.divIcon({
    html:
      '<div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"><div class="w-2 h-2 bg-white rounded-full"></div></div>',
    className: "custom-marker",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  L.marker([33.875, 10.758], { icon: hotelIcon })
    .addTo(map.value)
    .bindPopup("<b>Hotel Location</b>");
};

onMounted(() => {
  initMap();
});
</script>
<template>
  <div class="md:col-span-1 flex flex-col space-y-4 mt-4 md:mt-0">
    <div class="flex flex-col space-y-2">
      <div
        v-for="feature in features"
        :key="feature.text"
        class="border border-sand-mid py-2 px-3 rounded-md flex items-center space-x-2"
      >
        <i :class="`${feature.icon} text-xs text-sand-mid`"></i>
        <span>{{ feature.text }}</span>
      </div>
    </div>
    <div
      class="vue-map-container w-full h-40 sm:h-52 md:h-64 lg:h-72 rounded-lg overflow-hidden"
    >
      <div id="hotel-map" class="w-full h-full"></div>
    </div>
  </div>
</template>
