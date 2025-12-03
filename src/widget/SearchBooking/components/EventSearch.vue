<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { eventCategories } from '@/assets/data/ShareData'
import CitySelect from './CitySelect.vue'
import DatePicker from './DatePicker.vue'

const location = ref('')
const category = ref('')
const eventDate = ref()
const tickets = ref('')
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Location</label>
      <Select v-model="location">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-20">
          <SelectValue placeholder="All Tunisia" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tunisia</SelectItem>
          <!-- Cities would be imported and mapped here -->
        </SelectContent>
      </Select>
    </div>

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Category</label>
      <Select v-model="category">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-20">
          <SelectValue placeholder="All events" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="cat in eventCategories"
            :key="cat.value"
            :value="cat.value"
          >
            {{ cat.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <DatePicker
      v-model="eventDate"
      label="Date"
    />

    <div>
      <label class="text-sm font-medium text-muted-foreground mb-2 block">Tickets</label>
      <Select v-model="tickets">
        <SelectTrigger class="h-10 bg-gray-50 border border-gray-20">
          <SelectValue placeholder="2 tickets" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 ticket</SelectItem>
          <SelectItem value="2">2 tickets</SelectItem>
          <SelectItem value="4">4 tickets</SelectItem>
          <SelectItem value="6">6 tickets</SelectItem>
          <SelectItem value="10">10+ tickets</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="flex items-end">
      <Button class="w-full h-10 bg-secondary text-lg gap-2">
        <Search class="h-5 w-5" />
        Find Events
      </Button>
    </div>
  </div>
</template>