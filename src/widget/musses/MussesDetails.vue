<script setup>
import { Home, Building } from "lucide-vue-next";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import img from "@/assets/images/Turath.png";
import MuseumHero from "./components/MuseumHero.vue";
import HotelShowCase from "@/widget/Hotels/Components/HotelShowcase.vue";
import MuseumActivities from "./components/MuseumActivities.vue";
import MuseumSection from "./components/MuseumSection.vue";
import MuseumDescription from "./components/MuseumDescription.vue";
 
const props = defineProps({
  slug: String,
});

console.log(props.slug);

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Museums", href: "/musses" },
  {
    label: decodeURIComponent(props.slug || "Details"),
    href: `/musses/${props.slug || ""}`,
  },
];
</script>
<template>
  <Breadcrumbs
    title="Museum Details"
    subtitle="Explore Tunisia's rich cultural heritage and history"
    :badge="{ icon: Building, label: 'Museums' }"
    :image="img"
    :breadcrumbs="breadcrumbs"
  />
  <MuseumHero />
  <HotelShowCase />
  <MuseumActivities />
  <MuseumSection />
  <MuseumDescription />
</template>
