<script setup>
import { MapPin, Navigation, Phone, Globe, MapPinHouse } from "lucide-vue-next";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const getMapUrl = () => {
  if (props.event.lat && props.event.lng) {
    const lat = props.event.lat;
    const lng = props.event.lng;
    const bbox = `${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}`;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  }
  return "https://www.openstreetmap.org/export/embed.html?bbox=10.7461,33.8869,10.7661,33.9069&layer=mapnik&marker=33.8969,10.7561";
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <div class="flex items-center mb-6">
      <MapPin class="w-6 h-6 text-sand-mid mr-3" />
      <h2 class="text-2xl font-bold text-gray-900">Location</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <div class="flex items-start text-gray-600">
          <MapPinHouse class="w-4 h-4 text-sand-mid mr-3 mt-1" />
          <div>
            <p class="text-gray-600">{{ event.address }}</p>
            <p v-if="event.address_en && event.address_en !== event.address" class="text-sm text-gray-500 mt-1">
              {{ event.address_en }}
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <div v-if="event.phone" class="flex items-center text-gray-600">
            <Phone class="w-4 h-4 text-sand-mid mr-3" />
            <a :href="`tel:${event.phone}`" class="hover:text-sand-deep transition-colors">
              {{ event.phone }}
            </a>
          </div>
        </div>

        <div class="bg-sand-mid/10 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Venue Details</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Capacity: {{ event.numberplaces }} people</li>
            <li v-if="event.settings?.parking === '1'">• Parking available</li>
            <li v-if="event.settings?.wifi === '1'">• WiFi available</li>
            <li>• Accessible facilities</li>
            <li v-if="event.reservable">• Advance booking recommended</li>
          </ul>
        </div>

        <a
          :href="`https://www.google.com/maps/dir/?api=1&destination=${event.lat},${event.lng}`"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-sand-mid hover:bg-sand-deep text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center no-underline"
        >
          <Navigation class="w-5 h-5 mr-2" />
          Get Directions
        </a>
      </div>

      <div class="bg-gray-100 rounded-lg overflow-hidden border border-gray-300 h-64">
        <iframe
          :src="getMapUrl()"
          width="100%"
          height="100%"
          loading="lazy"
          class="border-0"
        ></iframe>
      </div>
    </div>
  </div>
</template>
