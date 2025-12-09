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

const event = {
  title: "Laazara Band in Concert",
  venue: "Vega Djerba",
  location: "Djerba Midoun Tourist Area",
  address: "Djerba, Tunisia",
  date: "Thursday, May 1st, 2025",
  shortDate: "May 1, 2025",
  time: "8:00 PM",
  status: "expired",
  image:
    "https://cdn.tunisiagotravel.com/unsafe/1045x384/smart/activities/events/laazara.webp",
  description: `Experience an exceptional evening with <strong class="text-ocean-mid">Laazara Band</strong> live at 
    <strong class="text-ocean-mid">Vega Djerba</strong> this <strong class="text-ocean-mid">Thursday, May 1st</strong>. 
    Musical atmosphere guaranteed with the participation of <strong class="text-ocean-mid">DJ Danjer</strong>.`,
  callToAction:
    "Reserve your place now for an unforgettable night of music and entertainment!",
  price: "Free Entry",
};



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
  <MuseumSection :event="event" />
  <MuseumDescription />
  <MuseumActivities />
  <HotelShowCase />
</template>
