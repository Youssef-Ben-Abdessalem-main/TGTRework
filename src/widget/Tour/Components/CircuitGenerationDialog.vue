<script setup>
import { ref } from "vue";
import { Zap, Edit3, Check, Info } from "lucide-vue-next";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: "Circuit Generation" },
  subtitle: { type: String, default: "Choose your preferred method" },
  description: { type: String, default: "Select how you'd like to create your circuit" },
  options: {
    type: Array,
    default: () => [
      {
        id: "manual",
        label: "Manual",
        description: "Design step by step",
        icon: Edit3,
        color: "blue",
      },
      {
        id: "automatic",
        label: "Automatic",
        description: "AI-powered generation",
        icon: Zap,
        color: "orange",
      },
    ],
  },
});

const emit = defineEmits(["update:open", "select"]);

const selectedOption = ref("");

const handleSelect = (optionId) => {
  selectedOption.value = optionId;
};

const proceedWithSelection = () => {
  emit("select", selectedOption.value);
  emit("update:open", false);
};

const getColorClasses = (color, selected) => {
  const colors = {
    blue: {
      border: selected
        ? "border-ocean-deep bg-ocean-mid/5 shadow-lg"
        : "border-gray-200 hover:border-ocean-deep",
      icon: "bg-ocean-light/20 group-hover:bg-ocean-light/50",
      iconColor: "text-ocean-deep/50",
      checkColor: "text-ocean-deep",
    },
    orange: {
      border: selected
        ? "border-sand-light/50 bg-sand-light/10 shadow-lg"
        : "border-gray-200 hover:border-sand-light/50",
      icon: "bg-sand-light/20 group-hover:bg-sand-light/50",
      iconColor: "text-sand-deep/50",
      checkColor: "text-sand-deep",
    },
  };
  return colors[color] || colors.blue;
};
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent class="max-w-md p-0 overflow-hidden !gap-0">
      <div class="p-8 bg-white">
        <p class="text-gray-600 text-center mb-8">{{ description }}</p>

        <div class="grid grid-cols-2 gap-4">
          <button
            v-for="option in options"
            :key="option.id"
            @click="handleSelect(option.id)"
            :class="[
              'group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
              getColorClasses(option.color, selectedOption === option.id).border,
            ]"
          >
            <div class="flex flex-col items-center gap-3">
              <div
                :class="[
                  'p-3 rounded-xl transition-colors',
                  getColorClasses(option.color, false).icon,
                ]"
              >
                <component
                  :is="option.icon"
                  :class="['w-6 h-6', getColorClasses(option.color, false).iconColor]"
                />
              </div>
              <span class="font-semibold text-gray-800">{{ option.label }}</span>
              <span class="text-xs text-gray-500 text-center">{{
                option.description
              }}</span>
            </div>
            <div v-if="selectedOption === option.id" class="absolute top-2 right-2">
              <Check
                :class="['w-5 h-5', getColorClasses(option.color, false).checkColor]"
              />
            </div>
          </button>
        </div>

        <div class="mt-6">
          <Button
            @click="proceedWithSelection"
            :disabled="!selectedOption"
            class="w-full bg-sand-mid hover:bg-sand-light"
          >
            Continue with {{ selectedOption || "Selected" }} Method
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
