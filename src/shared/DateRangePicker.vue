<script setup>
import { ref, watch } from "vue";
import { DatePicker as VDatePicker } from "v-calendar";

const props = defineProps({
  modelValue: Object,
  label: String,
});

const emit = defineEmits(["update:modelValue"]);

const range = ref(props.modelValue || {});

watch(range, (val) => {
  emit("update:modelValue", val);
});
</script>

<template>
  <div>
    <label class="text-sm font-semibold text-gray-700 mb-2.5 block">
      {{ label }}
    </label>

    <v-date-picker
      v-model="range"
      is-range
      :columns="2"
      color="blue"
      class="rounded-lg border shadow-sm bg-white p-4"
    />
  </div>
</template>
