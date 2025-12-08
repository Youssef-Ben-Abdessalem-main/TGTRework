<script setup>
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import HotelHeader from "@/widget/Hotels/Components/HotelHeader.vue";
import HotelGallery from "@/widget/Hotels/Components/HotelGallery.vue";
import HotelFeatures from "@/widget/Hotels/Components/HotelFeatures.vue";
import HotelBooking from "@/widget/Hotels/Components/HotelBooking.vue";
import HotelAmenities from "@/widget/Hotels/Components/HotelAmenities.vue";
import HotelOverview from "@/widget/Hotels/Components/HotelOverview.vue";
import HotelComments from "@/widget/Hotels/Components/HotelComments.vue";
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
  <div class="flex flex-col min-h-screen bg-gray-50">
    <Breadcrumbs
      :title="slug?.replace(/%20/g, ' ') || 'Hotel Details'"
      subtitle="Discover luxury accommodations and premium services in Tunisia"
      :badge="{ icon: Home, label: 'Hotel Details' }"
      :image="'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200'"
      :breadcrumbs="breadcrumbs"
    />

    <HotelHeader :hotel-name="slug?.replace(/%20/g, ' ') || 'Hotel Details'" />

    <div class="max-w-7xl w-full p-3.5 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <HotelGallery class="md:col-span-3" />
        <HotelFeatures />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
        <div class="lg:col-span-2">
          <HotelBooking :hotel-name="slug?.replace(/%20/g, ' ') || 'Hotel Details'" />
        </div>
        <div class="lg:col-span-1">
          <HotelAmenities />
        </div>
      </div>

      <div class="w-full">
        <HotelOverview />
      </div>

      <div class="w-full">
        <HotelComments />
      </div>
    </div>
  </div>
</template>
