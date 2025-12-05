<script setup>
import { Home, Calendar } from "lucide-vue-next";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import EventHero from "./Components/EventHero.vue";
import EventDescription from "./Components/EventDescription.vue";
import EventSchedule from "./Components/EventSchedule.vue";
import EventGallery from "./Components/EventGallery.vue";
import EventLocation from "./Components/EventLocation.vue";
import SimilarEvents from "./SimilarEvents.vue";

const props = defineProps({
  slug: String,
});

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Events", href: "/events" },
  { label: props.slug.replaceAll("-", " "), href: `/events/${props.slug}` },
];

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

const schedule = [
  {
    time: "8PM",
    title: "Doors Open",
    description: "Welcome drinks and networking",
  },
  {
    time: "9PM",
    title: "DJ Danjer Set",
    description: "Opening performance",
  },
  {
    time: "10PM",
    title: "Laazara Band Live",
    description: "Main concert performance",
  },
];
</script>

<template>
  <Breadcrumbs
    title="Event Details"
    subtitle="Discover amazing events happening across Tunisia"
    :badge="{ icon: Calendar, label: 'Events' }"
    :image="'https://t4.ftcdn.net/jpg/01/43/47/65/360_F_143476574_BCC0hyaoMiD5Rw5Qj7mcTzYJjBh6e49g.jpg'"
    :breadcrumbs="breadcrumbs"
  />

  <div class="max-w-7xl mx-auto py-8 space-y-8">
    <EventHero :event="event" />
    <EventDescription :event="event" />

    <div class="grid lg:grid-cols-2 gap-8">
      <EventSchedule :schedule="schedule" />
      <EventGallery :event="event" />
    </div>

    <EventLocation :event="event" />
  </div>

  <SimilarEvents />
</template>
