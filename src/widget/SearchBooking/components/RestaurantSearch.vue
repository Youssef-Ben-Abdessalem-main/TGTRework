<script setup>
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cuisineTypes } from "@/assets/data/ShareData";
import CitySelect from "./CitySelect.vue";
import DatePicker from "./DatePicker.vue";

const props = defineProps({
  destinations: { type: Array, default: () => [] },
});
const location = ref("");
const cuisine = ref("");
const reservationDate = ref();
const time = ref("");
const partySize = ref("");
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-end gap-4">
    <CitySelect
      v-model="location"
      :destinations="props.destinations"
      label="Destination"
      placeholder="Where are you going?"
    />

    <DatePicker v-model="reservationDate" label="Reservation date" />

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block"
        >Time & Party</label
      >
      <div class="flex gap-2">
        <input
          v-model="time"
          type="time"
          class="h-10 bg-gray-50 border border-gray-200 rounded-lg px-3 flex-1 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
      </div>
    </div>

    <div class="w-full">
      <label class="text-sm font-medium text-muted-foreground mb-2 block"
        >Number of people</label
      >
      <div class="flex gap-2">
        <input
          v-model="partySize"
          type="number"
          min="1"
          max="20"
          placeholder="2"
          class="h-10 bg-gray-50 border border-gray-200 rounded-lg px-3 w-full text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
      </div>
    </div>

    <div class="flex items-end">
      <Button
        class="w-full h-10 bg-sand-mid text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 gap-2 text-sm"
      >
        <Search class="h-4 w-4" />
        Search Hotels
      </Button>
    </div>
  </div>
</template>
