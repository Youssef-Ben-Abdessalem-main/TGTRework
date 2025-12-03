<script setup>
import { ref } from 'vue'
import { Search, Plane, ArrowLeftRight, CalendarArrowDown } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import Popover from '@/components/ui/popover/Popover.vue'
import PopoverContent from '@/components/ui/popover/PopoverContent.vue'
import PopoverTrigger from '@/components/ui/popover/PopoverTrigger.vue'
import { format } from 'date-fns'
import CitySelect from './CitySelect.vue'

const tripType = ref('roundtrip')
const fromCity = ref('')
const toCity = ref('')
const departureDate = ref()
const returnDate = ref()

const setDepartureDate = (date) => {
  departureDate.value = date
}

const setReturnDate = (date) => {
  returnDate.value = date
}
</script>

<template>
  <div>
    <div class="flex gap-6 mb-6">
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input
          type="radio"
          name="tripType"
          value="roundtrip"
          v-model="tripType"
          class="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary/20 cursor-pointer"
        />
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Round Trip</span>
      </label>
      <label class="flex items-center gap-2.5 cursor-pointer group">
        <input
          type="radio"
          name="tripType"
          value="oneway"
          v-model="tripType"
          class="w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary/20 cursor-pointer"
        />
        <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">One Way</span>
      </label>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
      <div class="flex flex-row items-end justify-start gap-4">
        <div class="w-96">
          <label class="text-sm font-semibold text-gray-700 mb-2.5 block">From</label>
          <Select v-model="fromCity">
            <SelectTrigger class="h-10 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Departure city" class="text-sm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paris">
                <div class="flex items-center gap-2">
                  <Plane class="h-4 w-4 text-gray-400" />
                  Paris (CDG)
                </div>
              </SelectItem>
              <SelectItem value="london">
                <div class="flex items-center gap-2">
                  <Plane class="h-4 w-4 text-gray-400" />
                  London (LHR)
                </div>
              </SelectItem>
              <SelectItem value="frankfurt">
                <div class="flex items-center gap-2">
                  <Plane class="h-4 w-4 text-gray-400" />
                  Frankfurt (FRA)
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="ghost"
          size="icon"
          class="h-10 w-20 rounded-md bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
        >
          <ArrowLeftRight class="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CitySelect
        v-model="toCity"
        label="To"
        placeholder="Arrival city"
        :show-airport="true"
      />

      <div>
        <label class="text-sm font-semibold text-gray-700 mb-2.5 block">Departure</label>
        <Popover>
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              class="h-10 w-full justify-start bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-100 transition-colors text-sm text-gray-600"
            >
              <CalendarArrowDown class="mr-2 h-4 w-4" />
              {{ departureDate ? format(departureDate, 'MMM dd, yyyy') : 'Select date' }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <!-- Calendar component would go here -->
          </PopoverContent>
        </Popover>
      </div>

      <div v-if="tripType === 'roundtrip'">
        <label class="text-sm font-semibold text-gray-700 mb-2.5 block">Return</label>
        <Popover>
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              class="h-10 w-full justify-start bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-100 transition-colors text-sm text-gray-600"
            >
              <CalendarArrowDown class="mr-2 h-4 w-4" />
              {{ returnDate ? format(returnDate, 'MMM dd, yyyy') : 'Select date' }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <!-- Calendar component would go here -->
          </PopoverContent>
        </Popover>
      </div>

      <div class="flex items-end" :class="{ 'lg:col-span-2': tripType === 'oneway' }">
        <Button class="w-full h-10 bg-secondary hover:from-primary/90 hover:to-primary/80 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 gap-2 text-sm">
          <Search class="h-4 w-4" />
          Search Flights
        </Button>
      </div>
    </div>
  </div>
</template>