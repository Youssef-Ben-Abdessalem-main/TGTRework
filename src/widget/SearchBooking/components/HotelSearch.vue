<script setup>
import { onMounted, ref } from "vue";
import { Search } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import CitySelect from "./CitySelect.vue";
import DateRangePicker from "@/shared/DateRangePicker.vue";

const props = defineProps({
  destinations: { type: Array, default: () => [] },
});
const dateRange = ref({
  start: null,
  end: null,
});
const showDatePicker = ref(false);
const guestsRooms = ref("");
const destination = ref("");

const formatDate = (date) => {
  return date
    ? date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "";
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
    <div class="lg:col-span-1">
      <CitySelect
        v-model="destination"
        :destinations="props.destinations"
        label="Destination"
        placeholder="Where are you going?"
      />
    </div>

    <div>
      <label class="text-sm font-semibold text-gray-700 mb-2.5 block">Check-in</label>

      <Popover v-model:open="showDatePicker">
        <PopoverTrigger asChild>
          <div>
            <input
              :value="dateRange.start ? formatDate(dateRange.start) : null"
              placeholder="Please select check-in"
              readonly
              class="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-sm focus:ring-2 focus:ring-primary/20 cursor-pointer"
            />
          </div>
        </PopoverTrigger>

        <PopoverContent class="w-auto p-0">
          <DateRangePicker v-model="dateRange" />
        </PopoverContent>
      </Popover>
    </div>

    <div>
      <label class="text-sm font-semibold text-gray-700 mb-2.5 block">Check-out</label>
      <input
        :value="dateRange.end ? formatDate(dateRange.end) : ''"
        :placeholder="dateRange.end ? '' : 'Please select check-out'"
        readonly
        class="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-sm focus:ring-2 focus:ring-primary/20 cursor-pointer"
      />
    </div>

    <div>
      <label class="text-sm font-semibold text-gray-700 mb-2.5 block"
        >Guests & Rooms</label
      >
      <Select v-model="guestsRooms">
        <SelectTrigger
          class="h-10 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-sm focus:ring-2 focus:ring-primary/20"
        >
          <SelectValue class="text-sm" placeholder="2 Adults, 1 Room" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-1">1 Adult, 1 Room</SelectItem>
          <SelectItem value="2-1">2 Adults, 1 Room</SelectItem>
          <SelectItem value="2-2">2 Adults, 2 Rooms</SelectItem>
          <SelectItem value="4-2">4 Adults, 2 Rooms</SelectItem>
          <SelectItem value="family">Family (2 Adults, 2 Children)</SelectItem>
        </SelectContent>
      </Select>
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
