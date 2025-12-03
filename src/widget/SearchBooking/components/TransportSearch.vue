<script setup>
import { ref } from 'vue'
import { Search, CalendarArrowDown } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import Popover from '@/components/ui/popover/Popover.vue'
import PopoverContent from '@/components/ui/popover/PopoverContent.vue'
import PopoverTrigger from '@/components/ui/popover/PopoverTrigger.vue'
import { format } from 'date-fns'
import { vehicleTypes } from '@/assets/data/ShareData'
import CitySelect from './CitySelect.vue'

const pickupLocation = ref('')
const vehicleType = ref('')
const pickupDate = ref()
const duration = ref('')

const setPickupDate = (date) => {
  pickupDate.value = date
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
    <CitySelect
      v-model="pickupLocation"
      label="Pick-up Location"
      placeholder="Select location"
    />

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Vehicle Type</label>
      <Select v-model="vehicleType">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-20">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="v in vehicleTypes" :key="v.value" :value="v.value">
            {{ v.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Pick-up Date</label>
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            class="h-10 w-full justify-start bg-gray-50 border border-gray-20"
          >
            <CalendarArrowDown class="mr-2 h-4 w-4" />
            {{ pickupDate ? format(pickupDate, 'MMM dd, yyyy') : 'Select date' }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <!-- Calendar component would go here -->
        </PopoverContent>
      </Popover>
    </div>

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Duration</label>
      <Select v-model="duration">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-20">
          <SelectValue placeholder="Select duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="transfer">One-way transfer</SelectItem>
          <SelectItem value="1">1 day</SelectItem>
          <SelectItem value="3">3 days</SelectItem>
          <SelectItem value="7">1 week</SelectItem>
          <SelectItem value="14">2 weeks</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="flex items-end">
      <Button class="w-full h-10 bg-secondary text-lg gap-2">
        <Search class="h-5 w-5" />
        Search Cars
      </Button>
    </div>
  </div>
</template>