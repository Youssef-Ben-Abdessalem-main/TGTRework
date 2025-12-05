<script setup>
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import HotelHeader from "@/widget/Hotels/Components/HotelHeader.vue";
import HotelGallery from "@/widget/Hotels/Components/HotelGallery.vue";
import HotelFeatures from "@/widget/Hotels/Components/HotelFeatures.vue";
import { Home } from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Hotels", href: "/hotels" },
  { label: "Hotel Details" },
  { label: slug },
];
</script>

<template>
  <div class="flex flex-col">
    <Breadcrumbs
      :title="slug?.replace(/%20/g, ' ') || 'Hotel Details'"
      subtitle="Discover luxury accommodations and premium services in Tunisia"
      :badge="{ icon: Home, label: 'Hotel Details' }"
      :image="'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200'"
      :breadcrumbs="breadcrumbs"
    />

    <HotelHeader :hotel-name="slug?.replace(/%20/g, ' ') || 'Hotel Details'" />

    <div class="container p-3.5 sm:px-4 md:px-8 lg:px-16 xl:px-16 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <HotelGallery class="md:col-span-3" />
        <HotelFeatures />
      </div>
    </div>
  </div>
</template>
