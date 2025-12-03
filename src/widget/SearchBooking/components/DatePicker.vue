<script setup>
import { CalendarIcon } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import Popover from '@/components/ui/popover/Popover.vue'
import PopoverContent from '@/components/ui/popover/PopoverContent.vue'
import PopoverTrigger from '@/components/ui/popover/PopoverTrigger.vue'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'

const props = defineProps({
  modelValue: { type: Object, default: null },
  placeholder: { type: String, default: 'Pick a date' },
  label: { type: String, required: true }
})

const emit = defineEmits(['update:modelValue'])

const defaultPlaceholder = today(getLocalTimeZone())
const df = new DateFormatter('en-US', { dateStyle: 'long' })
</script>

<template>
  <div>
    <label class="text-sm font-semibold text-gray-700 mb-2.5 block">{{ label }}</label>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="cn(
            'w-full h-10 bg-gray-50 border border-gray-200 justify-start text-left',
            !modelValue && 'text-black'
          )"
        >
          <CalendarIcon />
          {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : placeholder }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <Calendar
          :model-value="modelValue"
          :default-placeholder="defaultPlaceholder"
          layout="month-and-year"
          initial-focus
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>