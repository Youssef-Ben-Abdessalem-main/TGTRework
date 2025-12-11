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
  MapPinHouse,
  DollarSign,
  Phone,
} from "lucide-vue-next";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const statusConfig = {
  expired: {
    badge: "bg-red-100 text-red-800 border-red-200",
    text: "Expired",
  },
  ongoing: {
    badge: "bg-green-100 text-green-800 border-green-200",
    text: "Live Now",
  },
  upcoming: {
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
          <div class="lg:col-span-3 space-y-6">
            <div>
              <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {{ event.title }}
              </h1>
            </div>

            <div class="flex items-start text-gray-600">
              <MapPinHouse class="w-5 h-5 text-ocean-deep mr-3 mt-1 flex-shrink-0" />
              <div>
                <span class="text-lg block">{{ event.address }}</span>
                <span
                  v-if="event.phone"
                  class="text-sm text-gray-500 flex items-center mt-1"
                >
                  <Phone class="w-5 h-5 text-ocean-deep mr-3 flex-shrink-0" />
                  {{ event.phone }}
                </span>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                class="bg-white rounded-lg p-4 border border-sand-mid flex flex-col items-center text-center"
              >
                <Calendar class="w-6 h-6 text-ocean-deep mb-2" />
                <span class="font-medium text-gray-900 mb-1">Date</span>
                <p class="text-gray-600 text-sm">{{ event.date }}</p>
                <p v-if="event.isMultiDay" class="text-xs text-gray-500 mt-1">
                  Multi-day event
                </p>
              </div>

              <div
                class="bg-white rounded-lg p-4 border border-sand-mid flex flex-col items-center text-center"
              >
                <Clock class="w-6 h-6 text-ocean-deep mb-2" />
                <span class="font-medium text-gray-900 mb-1">Time</span>
                <p class="text-gray-600 text-sm">{{ event.time }}</p>
              </div>

              <div
                class="bg-white rounded-lg p-4 border border-sand-mid flex flex-col items-center text-center"
              >
                <DollarSign class="w-6 h-6 text-ocean-deep mb-2" />
                <span class="font-medium text-gray-900 mb-1">Price</span>
                <p class="text-gray-600 text-sm font-semibold">{{ event.price }}</p>
              </div>

              <div
                class="bg-white rounded-lg p-4 border border-sand-mid flex flex-col items-center text-center"
              >
                <Users class="w-6 h-6 text-ocean-deep mb-2" />
                <span class="font-medium text-gray-900 mb-1">Capacity</span>
                <p class="text-gray-600 text-sm">{{ event.numberplaces }} people</p>
                <p v-if="event.reservable" class="text-xs text-green-600 mt-1">
                  Reservable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
