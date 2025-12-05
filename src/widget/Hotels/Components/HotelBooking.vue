<script setup>
import Select from "@/components/ui/select/Select.vue";

defineProps({
  hotelName: { type: String, default: "Hôtel Joya Paradise & SPA Djerba" },
  address: { type: String, default: "Zone Touristique BP 357 - 4116 Djerba Midoun" },
  roomFeatures: {
    type: Array,
    default: () => [
      { icon: "fas fa-user-slash", text: "No Singles Policy" },
      { icon: "fas fa-water", text: "Beachfront" },
      { icon: "fas fa-ban", text: "Burkini Not Allowed" },
    ],
  },
});
</script>
<template>
  <div class="w-full">
    <div class="border-b border-gray-200 pb-6">
      <h2 class="text-2xl font-semibold text-gray-900 flex items-center">
        <i class="fas fa-calendar-check mr-3 text-ocean-deep"></i>
        Accommodation & Booking
      </h2>
      <p class="text-gray-600 mt-1">Select your preferred dates and room configuration</p>
    </div>

    <div class="py-6">
      <form class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 flex items-center">
              <i class="fas fa-calendar-alt mr-2 text-ocean-deep"></i>
              Check-in / Check-out
              <span class="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Select dates"
              value="December 6, 2025 - December 8, 2025"
              readonly
            />
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 flex items-center">
              <i class="fas fa-users mr-2 text-ocean-deep"></i>
              Guests & Rooms
              <span class="text-red-500 ml-1">*</span>
            </label>
            <div class="relative">
              <input
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
                value="2 Adults, 0 Children, 1 Room"
                readonly
              />
              <i
                class="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              ></i>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-ocean-deep hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <i class="fas fa-search mr-2"></i>
          Check Availability
        </button>
      </form>
    </div>

    <div class="border-t border-gray-200 py-6">
      <div class="flex items-center mb-4">
        <i class="fas fa-bed mr-2 text-ocean-deep"></i>
        <h3 class="text-lg font-semibold text-gray-900">Available Rooms</h3>
      </div>

      <div class="border border-gray-200 rounded-lg overflow-hidden">
        <div class="p-6">
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-64 flex-shrink-0">
              <img
                src="https://cdn.tunisiagotravel.com/unsafe/385x240/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/vignette.jpg"
                alt="Hotel Room"
                class="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div class="flex-1 space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">{{ hotelName }}</h4>
                  <div class="flex items-center mt-2 text-gray-600">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span class="text-sm">{{ address }}</span>
                  </div>
                </div>
                <div class="flex items-center bg-yellow-50 px-3 py-1 rounded-lg">
                  <i
                    v-for="n in 4"
                    :key="n"
                    class="fas fa-star text-yellow-400 text-sm"
                  ></i>
                  <i class="fas fa-star text-gray-300 text-sm"></i>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="feature in roomFeatures"
                  :key="feature.text"
                  class="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  <i :class="`${feature.icon} mr-1`"></i>
                  {{ feature.text }}
                </span>
              </div>

              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <div class="flex items-center text-red-700">
                  <i class="fas fa-exclamation-circle mr-2"></i>
                  <span class="font-medium">No rooms available for selected dates</span>
                </div>
                <p class="text-red-600 text-sm mt-1">
                  Please try different dates or contact us for alternative options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
