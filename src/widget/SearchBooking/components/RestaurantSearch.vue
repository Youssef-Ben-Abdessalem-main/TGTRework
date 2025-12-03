<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { cuisineTypes } from '@/assets/data/ShareData'
import CitySelect from './CitySelect.vue'
import DatePicker from './DatePicker.vue'

const location = ref('')
const cuisine = ref('')
const reservationDate = ref()
const time = ref('')
const partySize = ref('')
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
    <CitySelect
      v-model="location"
      label="Location"
      placeholder="Select area"
    />

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Cuisine Type</label>
      <Select v-model="cuisine">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-20">
          <SelectValue placeholder="Any cuisine" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="cuisineType in cuisineTypes"
            :key="cuisineType.value"
            :value="cuisineType.value"
          >
            {{ cuisineType.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <DatePicker
      v-model="reservationDate"
      label="Date"
    />

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Time & Party</label>
      <div class="flex gap-2">
        <Select v-model="time">
          <SelectTrigger class="h-10 bg-gray-50 border border-gray-20 flex-1">
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12:00">12:00 PM</SelectItem>
            <SelectItem value="13:00">1:00 PM</SelectItem>
            <SelectItem value="19:00">7:00 PM</SelectItem>
            <SelectItem value="20:00">8:00 PM</SelectItem>
            <SelectItem value="21:00">9:00 PM</SelectItem>
          </SelectContent>
        </Select>
        <Select v-model="partySize">
          <SelectTrigger class="h-10 bg-gray-50 border border-gray-20 w-20">
            <SelectValue placeholder="2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="8">8+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div class="flex items-end">
      <Button class="w-full h-10 bg-secondary text-lg gap-2">
        <Search class="h-5 w-5" />
        Find Tables
      </Button>
    </div>
  </div>
</template>