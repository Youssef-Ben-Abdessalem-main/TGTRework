<script setup>
import { Button } from "@/components/ui/button";

defineProps({
  images: {
    type: Array,
    default: () => [
      "https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_4.jpg",
      "https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_5.jpg",
      "https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_6.jpg",
      "https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_7.jpg",
      "https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_8.jpg",
    ],
  },
  totalImages: { type: Number, default: 121 },
});
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-2xl">
    <div class="grid grid-cols-4 grid-rows-2 gap-2 h-full">
      <div
        class="col-span-4 sm:col-span-2 row-span-2 bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
        :style="{ backgroundImage: `url('${images[0]}')` }"
      ></div>

      <div
        v-for="(image, index) in images.slice(1, 5)"
        :key="index"
        class="bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
        :style="{ backgroundImage: `url('${image}')` }"
      ></div>
    </div>
  </div>
</template>
