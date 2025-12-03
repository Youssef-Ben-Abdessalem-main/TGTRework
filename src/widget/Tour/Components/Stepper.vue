<template>
  <div class="flex flex-col gap-1">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex items-start gap-4 opacity-0 animate-fade-in"
      :class="`stagger-${index + 1}`"
      :style="{ animationDelay: `${index * 0.15}s` }"
    >
      <div class="flex flex-col items-center">
        <div
          class="relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500"
          :class="{
            'bg-gradient-to-br from-ocean-mid to-ocean-light border-ocean-mid shadow-lg':
              index < currentStep,
            'bg-gradient-to-br from-sand-mid to-sand-mid/30 border-sand-deep/50 shadow-glow':
              index === currentStep,
            'bg-white border-border': index > currentStep,
          }"
        >
          <template v-if="type === 'numeric'">
            <span
              class="font-bold text-lg transition-colors duration-300"
              :class="{
                'text-white': index === currentStep,
                'text-white/70': index != currentStep,
              }"
            >
              {{ index + 1 }}
            </span>
          </template>

          <template v-else>
            <div
              class="rounded-full transition-all duration-300"
              :class="[
                'w-3 h-3',
                index === currentStep || index < currentStep
                  ? 'bg-white scale-100'
                  : 'bg-muted-foreground/30 scale-75',
              ]"
            />
          </template>

          <div
            v-if="index === currentStep"
            class="absolute inset-0 rounded-full bg-sand-mid/30 animate-ping"
          />
        </div>

        <div
          v-if="index < steps.length - 1"
          class="w-0.5 h-16 transition-all duration-500"
          :class="
            index < currentStep
              ? 'bg-gradient-to-b from-ocean-mid to-ocean-light'
              : 'bg-border'
          "
        />
      </div>

      <div class="flex-1 pb-8">
        <p
          class="font-semibold text-lg transition-colors duration-300"
          :class="{
            'text-ocean-mid': index < currentStep,
            'text-sand-mid': index === currentStep,
            'text-muted-foreground': index > currentStep,
          }"
        >
          {{ step.label }}
        </p>

        <p
          class="mt-1.5 text-sm leading-relaxed transition-all duration-300"
          :class="index === currentStep ? 'text-gray-700' : 'text-gray-700'"
        >
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Check } from "lucide-vue-next";

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  currentStep: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "numeric",
  },
});
</script>

<style scoped>
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
