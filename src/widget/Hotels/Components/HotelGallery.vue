<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
    <div class="md:col-span-3 h-[15rem] sm:h-[20rem] lg:h-[25rem] w-full">
      <div class="grid grid-cols-4 grid-rows-2 h-full gap-2">
        <div class="col-span-4 sm:col-span-2 row-span-2 rounded-lg overflow-hidden">
          <div 
            class="w-full h-full bg-no-repeat bg-cover bg-center rounded-lg transition duration-300 hover:scale-105 hover:cursor-pointer"
            :style="`background-image: url('${images[0]}')`"
          ></div>
        </div>
        <div 
          v-for="(image, index) in images.slice(1, 4)" 
          :key="index"
          class="col-span-1 row-span-1 relative rounded-lg bg-no-repeat bg-cover bg-center transition duration-300 hover:scale-105 hover:cursor-pointer"
          :style="`background-image: url('${image}')`"
        ></div>
        <div 
          class="col-span-1 row-span-1 relative rounded-lg bg-no-repeat bg-cover bg-center transition duration-300 hover:scale-105 hover:cursor-pointer"
          :style="`background-image: linear-gradient(rgba(44, 91, 161, 0.2), rgba(44, 91, 161, 0.7)), url('${images[4]}')`"
        >
          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 text-white font-bold text-sm">
            +{{ totalImages - 5 }} autres photos
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => [
      'https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_4.jpg',
      'https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_5.jpg',
      'https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_6.jpg',
      'https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_7.jpg',
      'https://cdn.tunisiagotravel.com/unsafe/600x400/smart/hotels/Hôtel_Joya_Paradise_&_SPA_Djerba/image_8.jpg'
    ]
  },
  totalImages: { type: Number, default: 121 }
});
</script>