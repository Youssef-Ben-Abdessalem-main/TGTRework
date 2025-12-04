<script setup>
import { ref } from "vue";
import { CalendarDays, ArrowRight } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import { TabsContent, TabsRoot } from "reka-ui";
import SearchTabs from "@/widget/SearchBooking/components/SearchTabs.vue";
import HotelSearch from "@/widget/SearchBooking/components/HotelSearch.vue";
import FlightSearch from "@/widget/SearchBooking/components/FlightSearch.vue";
import RestaurantSearch from "@/widget/SearchBooking/components/RestaurantSearch.vue";
import EventSearch from "@/widget/SearchBooking/components/EventSearch.vue";
import Transport from "@/widget/Views/Transport.vue";

const activeTab = ref("hotels");
</script>

<template>
  <section class="relative z-30 -mt-16 md:-mt-24 overflow-hidden">
    <div
      class="shadow-xl rounded-tl-3xl border-t-4 border-sand-mid overflow-hidden w-full bg-white backdrop-blur-sm"
    >
      <TabsRoot v-model="activeTab" class="w-full">
        <SearchTabs :active-tab="activeTab" />

        <TabsContent value="hotels" class="mt-0 p-8">
          <HotelSearch />
        </TabsContent>

        <TabsContent value="flights" class="mt-0 p-8">
          <FlightSearch />
        </TabsContent>

        <TabsContent value="restaurants" class="mt-0 p-8">
          <RestaurantSearch />
        </TabsContent>

        <TabsContent value="events" class="mt-0 p-8">
          <EventSearch />
        </TabsContent>
      </TabsRoot>

      <div
        class="bg-gradient-to-r rounded-br-3xl border-b-4 border-sand-mid from-sand-mid/50 via-white to-sand-mid/50 px-8 py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div class="flex items-center gap-4">
          <div class="p-2.5 rounded-xl bg-white shadow-sm">
            <CalendarDays class="h-5 w-5 text-sand-mid" />
          </div>
          <div>
            <p class="font-medium text-sm text-primary">Book now & save up to 40%</p>
            <p class="text-xs text-gray-600 mt-0.5">
              Winter deals on hotels, flights & more
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          class="gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-lg shadow-sm transition-all font-medium"
        >
          View All Deals
          <ArrowRight class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
</template>
