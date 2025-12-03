<script setup>
import Breadcrumbs from "@/shared/Breadcrumbs.vue";

import { Home, FileText } from "lucide-vue-next";
import CityCarousel from "@/widget/articles/components/CityCarousel.vue";
import FeaturedArticles from "@/widget/articles/components/FeaturedArticles.vue";
import TravelGuides from "@/widget/articles/components/TravelGuides.vue";
import DestinationGuides from "@/widget/articles/components/DestinationGuides.vue";
import CitySpotlight from "@/widget/articles/components/CitySpotlight.vue";
import LastAtricles from "./LastAtricles.vue";

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Articles", href: "/blogs" },
];
</script>

<template>
  <div class="flex flex-col">
    <Breadcrumbs
      title="Travel Articles & Guides"
      subtitle="Discover expert travel tips, destination guides, and insider knowledge for your perfect Tunisia adventure"
      :badge="{ icon: FileText, label: 'Blog & Articles' }"
      :image="'https://thebuzzmagazines.com/sites/default/files/article-photos/2018/04/travel%20guide%20books%20resized.jpg'"
      :breadcrumbs="breadcrumbs"
    />
    <CityCarousel />
    <FeaturedArticles />
    <TravelGuides />
    <DestinationGuides />
    <CitySpotlight />

    <LastAtricles :IsMore="false" />
  </div>
</template>
