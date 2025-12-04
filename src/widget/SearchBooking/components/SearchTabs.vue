<script setup>
import { TabsList, TabsTrigger } from "reka-ui";
import { tabs } from "@/assets/data/ShareData";
import { useRoute, useRouter } from "vue-router";

defineProps({
  activeTab: { type: String, required: true },
});

const router = useRouter();

async function handleTabClick(tab) {
  if (!router.isReady()) {
    await router.isReady();
  }

  if (tab === "create_tour") {
    router.push({ name: "Circuits" });
  }
}
</script>

<template>
  <TabsList
    class="w-full flex justify-start bg-gradient-to-b from-gray-50 to-white h-auto p-0 overflow-x-auto flex-nowrap"
  >
    <TabsTrigger
      v-for="tab in tabs"
      :key="tab.value"
      :value="tab.value"
      @click="handleTabClick(tab.value)"
      :class="[
        'flex-1 min-w-[120px] flex justify-center items-center gap-2.5 px-6 py-4 rounded-none border-b-2 border-transparent transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50/50',
        tab.value === activeTab
          ? 'border-primary text-primary font-medium shadow-sm bg-gradient-to-b from-sand-mid/50 to-white'
          : '',
        tab.value === 'create_tour'
          ? 'bg-sand-mid text-white hover:bg-sand-mid/80 hover:text-white'
          : '',
      ]"
    >
      <component :is="tab.icon" class="h-4 w-4" />
      <span class="hidden sm:inline text-sm">{{ tab.label }}</span>
    </TabsTrigger>
  </TabsList>
</template>
