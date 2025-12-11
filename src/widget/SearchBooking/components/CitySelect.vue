<script setup>
import { ref, computed } from "vue";
import { MapPin, Search } from "lucide-vue-next";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/vue";

const props = defineProps({
  placeholder: { type: String, default: "Select city" },
  label: { type: String, required: true },
  showAirport: { type: Boolean, default: false },
  modelValue: { type: String, default: "" },
  destinations: { type: Array, default: () => [] },
});

const emit = defineEmits(["update:modelValue"]);

const query = ref("");

const filteredDestinations = computed(() => {
  if (!props.destinations) return [];
  return query.value === ""
    ? props.destinations
    : props.destinations.filter((destination) =>
        destination.name.toLowerCase().includes(query.value.toLowerCase())
      );
});

const selectedDestination = computed(() => {
  if (!props.destinations) return null;
  return props.destinations.find((dest) => dest.id === props.modelValue);
});

const updateValue = (destination) => {
  emit("update:modelValue", destination?.id || "");
};
</script>

<template>
  <div class="relative">
    <label class="text-sm font-semibold text-gray-700 mb-2.5 block">{{ label }}</label>
    <Combobox :model-value="selectedDestination" @update:model-value="updateValue">
      <div class="relative">
        <ComboboxInput
          :display-value="(destination) => destination?.name || ''"
          @change="query = $event.target.value"
          :placeholder="placeholder"
          class="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <ComboboxButton class="absolute right-2 top-1/2 -translate-y-1/2">
          <svg
            class="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </ComboboxButton>
      </div>

      <ComboboxOptions
        class="w-full absolute z-[50] mt-1 max-h-60 overflow-auto rounded-lg bg-white border border-gray-200 shadow-lg"
      >
        <ComboboxOption
          v-for="destination in filteredDestinations"
          :key="destination.id"
          :value="destination"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-pointer select-none py-2 px-3',
              active ? 'bg-primary/10 text-primary' : 'text-gray-900',
            ]"
          >
            <div class="flex items-center gap-2">
              <MapPin class="h-4 w-4 text-gray-400" />
              <span :class="[selected ? 'font-semibold' : 'font-normal']">
                {{ destination.name
                }}{{
                  showAirport && destination.airport ? ` (${destination.airport})` : ""
                }}
              </span>
            </div>
          </li>
        </ComboboxOption>
        <div
          v-if="filteredDestinations.length === 0"
          class="px-3 py-2 text-sm text-gray-500"
        >
          No destinations found.
        </div>
      </ComboboxOptions>
    </Combobox>
  </div>
</template>
