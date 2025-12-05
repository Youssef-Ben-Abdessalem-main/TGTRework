<script setup>
import {
  MapPin,
  Navigation,
  Clock,
  Calendar,
  Star,
  Users,
  Music,
  Ticket,
} from "lucide-vue-next";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const statusConfig = {
  expired: {
    icon: "/icons/expired.png",
    alt: "Event Expired",
    class: "opacity-75",
    badge: "bg-red-100 text-red-800 border-red-200",
    text: "Expired",
  },
  active: {
    icon: "/icons/active.png",
    alt: "Active Event",
    class: "",
    badge: "bg-green-100 text-green-800 border-green-200",
    text: "Live Now",
  },
  upcoming: {
    icon: "/icons/upcoming.png",
    alt: "Upcoming Event",
    class: "",
    badge: "bg-blue-100 text-blue-800 border-blue-200",
    text: "Upcoming",
  },
};
</script>

<template>
  <div class="bg-white">
    <div class="py-8">
      <div>
        <div class="mb-6">
          <span
            :class="statusConfig[event.status]?.badge"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border"
          >
            <div class="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></div>
            {{ statusConfig[event.status]?.text }}
          </span>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 items-start">
          <div class="lg:col-span-2 space-y-6">
            <div>
              <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {{ event.title }}
              </h1>
              <div class="flex items-center text-ocean-deep text-xl font-semibold mb-2">
                <Music class="w-6 h-6 mr-2" />
                {{ event.venue }}
              </div>
            </div>

            <div class="flex items-start text-gray-600">
              <MapPin class="w-5 h-5 text-ocean-deep mr-3 mt-1 flex-shrink-0" />
              <span class="text-lg"> {{ event.location }}, {{ event.address }} </span>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div
                class="bg-gray-50 rounded-lg p-4 border border-gray-200 flex flex-row justify-between items-center"
              >
                <div class="flex items-center text-gray-900 gap-2">
                  <Calendar class="w-5 h-5 text-ocean-deep" />
                  <span class="font-medium">Date</span>
                </div>
                <p class="text-gray-600">{{ event.date }}</p>
              </div>

              <div
                class="bg-gray-50 rounded-lg p-4 border border-gray-200 flex flex-row justify-between items-center"
              >
                <div class="flex items-center text-gray-900 gap-2">
                  <Clock class="w-5 h-5 text-ocean-deep" />
                  <span class="font-medium">Time</span>
                </div>
                <p class="text-gray-600">{{ event.time }}</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <button
                class="inline-flex items-center px-6 py-3 bg-ocean-deep text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Navigation class="w-5 h-5 mr-2" />
                Get Directions
              </button>

              <button
                class="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200 font-medium border border-gray-300"
              >
                <Star class="w-5 h-5 mr-2" />
                Save Event
              </button>
            </div>
          </div>

          <div
            class="relative bg-gradient-to-br from-ocean-deep/40 to-white rounded-xl p-6 border border-blue-200 shadow-lg"
          >
            <div class="text-center mb-6">
              <div class="text-3xl font-bold text-ocean-deep mb-1">{{ event.price }}</div>
              <p class="text-ocean-deep text-sm">Entry Fee</p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between text-ocean-deep">
                <div class="flex items-center">
                  <Users class="w-4 h-4 mr-2 text-ocean-deep" />
                  <span class="text-sm">Expected</span>
                </div>
                <span class="font-medium">500+ people</span>
              </div>

              <div class="flex items-center justify-between text-ocean-deep">
                <div class="flex items-center">
                  <Ticket class="w-4 h-4 mr-2 text-ocean-deep" />
                  <span class="text-sm">Category</span>
                </div>
                <span class="font-medium">Live Music</span>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-sand-mid/20">
              <div class="flex items-center justify-center text-sand-mid">
                <Star class="w-4 h-4 mr-1 fill-current" />
                <Star class="w-4 h-4 mr-1 fill-current" />
                <Star class="w-4 h-4 mr-1 fill-current" />
                <Star class="w-4 h-4 mr-1 fill-current" />
                <Star class="w-4 h-4 mr-2 fill-current" />
                <span class="text-gray-700 text-sm font-medium">4.8 (124 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
