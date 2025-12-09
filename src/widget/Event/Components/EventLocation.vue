<script setup>
import { MapPin, Navigation, Phone, Globe } from "lucide-vue-next";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const venueDetails = {
  phone: "+216 75 123 456",
  website: "www.vegadjerba.com",
  capacity: "800 people",
  parking: "Free parking available",
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <div class="flex items-center mb-6">
      <MapPin class="w-6 h-6 text-sand-mid mr-3" />
      <h2 class="text-2xl font-bold text-gray-900">Location & Venue</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-gray-900 text-lg mb-2">{{ event.venue }}</h3>
          <p class="text-gray-600">{{ event.location }}, {{ event.address }}</p>
        </div>

        <div class="space-y-3">
          <div class="flex items-center text-gray-600">
            <Phone class="w-4 h-4 text-sand-mid mr-3" />
            <span>{{ venueDetails.phone }}</span>
          </div>

          <div class="flex items-center text-gray-600">
            <Globe class="w-4 h-4 text-sand-mid mr-3" />
            <span>{{ venueDetails.website }}</span>
          </div>
        </div>

        <div class="bg-sand-mid/10 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">Venue Details</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Capacity: {{ venueDetails.capacity }}</li>
            <li>• {{ venueDetails.parking }}</li>
            <li>• Air conditioned venue</li>
            <li>• Accessible facilities</li>
          </ul>
        </div>

        <RouterLink
          :to="`/itinerary/${encodeURIComponent('your-location')}/${encodeURIComponent(
            event.location.toLowerCase().replace(/\s+/g, '-')
          )}`"
          class="w-full bg-sand-mid hover:bg-sand-deep text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center no-underline"
        >
          <Navigation class="w-5 h-5 mr-2" />
          Get Directions
        </RouterLink>
      </div>

      <div class="bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.7461,33.8869,10.7661,33.9069&layer=mapnik&marker=33.8969,10.7561"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>
