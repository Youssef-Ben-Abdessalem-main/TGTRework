<script setup>
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import ItineraryMap from "@/widget/itinerary/Components/ItineraryMap.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { from, to } = route.params;
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Itinerary", href: "/itinerary" },
  {
    label: `Traveling to ${to.replaceAll("-", " ")}`,
    href: `/itinerary/${from}/${to}`,
  },
];
</script>

<template>
  <div class="min-h-screen">
    <Breadcrumbs
      title="Route Directions"
      subtitle="Get detailed directions for your journey"
      :badge="{ icon: Navigation, label: 'Itinerary' }"
      :image="'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200'"
      :breadcrumbs="breadcrumbs"
    />
    <ItineraryMap />
  </div>
</template>
