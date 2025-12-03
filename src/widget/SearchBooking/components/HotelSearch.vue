<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import CitySelect from './CitySelect.vue'
import DatePicker from './DatePicker.vue'

const checkInDate = ref()
const checkOutDate = ref()
const destination = ref('')
const guestsRooms = ref('')
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
    <div class="lg:col-span-1">
      <CitySelect
        v-model="destination"
        label="Destination"
        placeholder="Where are you going?"
      />
    </div>

    <DatePicker
      v-model="checkInDate"
      label="Check-in"
    />

    <DatePicker
      v-model="checkOutDate"
      label="Check-out"
    />

    <div>
      <label class="text-sm font-semibold text-gray-700 mb-2.5 block">Guests & Rooms</label>
      <Select v-model="guestsRooms">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-sm focus:ring-2 focus:ring-primary/20">
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
      <Button class="w-full h-10 bg-secondary hover:from-primary/90 hover:to-primary/80 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 gap-2 text-sm">
        <Search class="h-4 w-4" />
        Search Hotels
      </Button>
    </div>
  </div>
</template>