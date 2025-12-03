<script setup>
import { MapPin } from 'lucide-vue-next'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { tunisianCities } from '@/assets/data/ShareData'

defineProps({
  placeholder: { type: String, default: 'Select city' },
  label: { type: String, required: true },
  showAirport: { type: Boolean, default: false },
  modelValue: { type: String, default: '' }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label class="text-sm font-semibold text-gray-700 mb-2.5 block">{{ label }}</label>
    <Select :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
      <SelectTrigger class="h-10 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors focus:ring-2 focus:ring-primary/20">
        <SelectValue :placeholder="placeholder" class="text-sm" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="city in tunisianCities"
          :key="city.value"
          :value="city.value"
        >
          <div class="flex items-center gap-2">
            <MapPin class="h-4 w-4 text-gray-400" />
            {{ city.label }}{{ showAirport && city.airport ? ` (${city.airport})` : '' }}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>