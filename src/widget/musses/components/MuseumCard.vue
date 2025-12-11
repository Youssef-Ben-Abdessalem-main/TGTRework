<script setup>
import { MapPin } from "lucide-vue-next";
import { useRouter } from "vue-router";

defineProps({
  name: { type: String, required: true },
  region: { type: String, required: true },
  image: { type: String, default: "" },
  index: { type: Number, required: true },
});
const router = useRouter();
function handleDetailsClick(tab) {
  router.push(`/musses/${encodeURIComponent(tab)}`);
}
</script>

<template>
  <div
    @click="handleDetailsClick(name)"
    class="mx-5 w-full group relative overflow-hidden rounded-2xl bg-sand-mid backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-500 cursor-pointer"
  >
    <div class="relative h-52 overflow-hidden">
      <img
        :src="image || museumPlaceholder"
        :alt="name"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-sand-mid/50 via-sand-mid/20 to-transparent"
      />

      <div class="absolute top-3 left-3">
        <span
          class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ocean-mid/90 text-white text-xs font-semibold"
        >
          <MapPin class="w-3 h-3" />
          {{ region }}
        </span>
      </div>
    </div>

    <div class="p-4">
      <h3
        class="text-white font-semibold text-sm leading-tight line-clamp-2 group-hover:text-white transition-colors duration-300"
      >
        {{ name }}
      </h3>
    </div>
  </div>
</template>
