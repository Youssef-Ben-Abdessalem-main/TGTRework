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
import { eventCategories } from "@/assets/data/ShareData";
import CitySelect from "./CitySelect.vue";
import DatePicker from "./DatePicker.vue";

const props = defineProps({
  destinations: { type: Array, default: () => [] },
});
const location = ref("");
const category = ref("");
const eventDate = ref();
const tickets = ref("");
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
    <div class="lg:col-span-1">
      <CitySelect
        v-model="location"
        :destinations="props.destinations"
        label="Destination"
        placeholder="Where are you going?"
      />
    </div>

    <DatePicker v-model="eventDate" label="Reservation date" />

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
