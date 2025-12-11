<script setup>
import { Home, Calendar } from "lucide-vue-next";
import { ref, onMounted } from "vue";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import EventHero from "./Components/EventHero.vue";
import EventDescription from "./Components/EventDescription.vue";
import EventSchedule from "./Components/EventSchedule.vue";
import EventGallery from "./Components/EventGallery.vue";
import EventLocation from "./Components/EventLocation.vue";
import SimilarEvents from "./SimilarEvents.vue";
import { EventsService } from "@/services/events.js";

const props = defineProps({
  slug: String,
});

const breadcrumbs = ref([
  { label: "Home", icon: Home, href: "/" },
  { label: "Events", href: "/events" },
  { label: props.slug.replaceAll("-", " "), href: `/events/${props.slug}` },
]);

const event = ref(null);
const isLoading = ref(true);
const error = ref(null);

const loadEvent = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const eventData = await EventsService.get_event_details(props.slug);
    const startDate = new Date(eventData.start_date);
    const endDate = new Date(eventData.end_date);
    const now = new Date();

    // Update breadcrumb with actual title
    breadcrumbs.value[2].label = eventData.title;

    event.value = {
      id: eventData.id,
      title: eventData.title,
      title_en: eventData.title_en,
      title_ar: eventData.title_ar,
      address: eventData.address,
      address_en: eventData.address_en,
      address_ar: eventData.address_ar,
      date: startDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      shortDate: startDate.toLocaleDateString(),
      startDate: eventData.start_date,
      endDate: eventData.end_date,
      isMultiDay: eventData.start_date !== eventData.end_date,
      time: startDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      status: startDate > now ? "upcoming" : endDate >= now ? "ongoing" : "expired",
      image: eventData.cover,
      phone: eventData.phone,
      description: eventData.description,
      description_en: eventData.description_en,
      description_ar: eventData.description_ar,
      callToAction: eventData.description_en?.includes("Reserve")
        ? eventData.description_en
            .split(".")
            .find((s) => s.includes("Reserve"))
            ?.trim() + "!"
        : "Reserve your place now for an unforgettable night!",
      price: eventData.price === "0" ? "Free Entry" : `${eventData.price} TND`,
      category_id: eventData.category_id,
      destination_id: eventData.destination_id,
      lat: parseFloat(eventData.lat),
      lng: parseFloat(eventData.lng),
      reservable: eventData.reservable === "1",
      numberplaces: parseInt(eventData.numberplaces),
      availablePlaces: parseInt(eventData.numberplaces),
      settings: eventData.settings,
      seo: eventData.seo,
      slug: eventData.slug,
      type: eventData.type,
      status_api: eventData.status,
    };
  } catch (err) {
    console.error("Failed to load event details:", err);
    error.value = "Failed to load event details. Please try again later.";
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadEvent);
</script>

<template>
  <Breadcrumbs
    :title="event?.title || 'Event Details'"
    subtitle="Discover amazing events happening across Tunisia"
    :badge="{ icon: Calendar, label: 'Events' }"
    :image="
      event?.image ||
      'https://t4.ftcdn.net/jpg/01/43/47/65/360_F_143476574_BCC0hyaoMiD5Rw5Qj7mcTzYJjBh6e49g.jpg'
    "
    :breadcrumbs="breadcrumbs"
  />

  <div v-if="isLoading" class="max-w-7xl mx-auto py-8 space-y-8">
    <div class="h-96 bg-gray-200 animate-pulse rounded-lg"></div>
    <div class="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
      <div class="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
    </div>
  </div>

  <div v-else-if="error" class="max-w-7xl mx-auto py-16 text-center">
    <div class="bg-red-50 border border-red-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-red-800 mb-4">Oops! Something went wrong</h2>
      <p class="text-red-600 mb-6">{{ error }}</p>
      <button
        @click="loadEvent"
        class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>

  <div v-else-if="event" class="max-w-7xl mx-auto py-8 space-y-8">
    <EventHero :event="event" />
    <EventDescription :event="event" />

    <div class="grid lg:grid-cols-1 gap-8">
      <EventGallery :event="event" />
    </div>

    <EventLocation :event="event" />
  </div>

  <div v-else class="max-w-7xl mx-auto py-16 text-center">
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
      <p class="text-gray-600 mb-6">
        The event you're looking for doesn't exist or has been removed.
      </p>
      <a
        href="/events"
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Browse All Events
      </a>
    </div>
  </div>

  <SimilarEvents v-if="event" />
</template>
