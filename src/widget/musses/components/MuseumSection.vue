<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { Navigation, Users, Camera, ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const images = [
  "https://i.etsystatic.com/28740627/r/il/205cf9/5549269636/il_300x300.5549269636_b5i9.jpg",
  "https://images.stockcake.com/public/9/1/3/913ec02b-1124-4f35-a90c-4dce122fde4b_large/museum-artifacts-display-stockcake.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTwG9YwhvM7byBCGte89Dvi-zu3zvOUX0Sw&s",
  "https://media.istockphoto.com/id/1224667454/photo/antique-terracotta-amphoras-dated-from-fifth-century-common-era.jpg?s=612x612&w=0&k=20&c=mpW8vORYaG4LHfRXiB1U1SNlmlWopIHm2TmDUKYULPQ=",
  "https://www.shutterstock.com/image-photo/handmade-floral-patterned-antique-ceramic-600nw-2621081449.jpg",
];

const isVisible = ref(false);
const activeImage = ref(0);
const imageCount = ref(5);

const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => (isVisible.value = entry.isIntersecting),
    { threshold: 0.2 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

const nextImage = () => {
  activeImage.value = (activeImage.value + 1) % images.length;
};

const prevImage = () => {
  activeImage.value = (activeImage.value - 1 + images.length) % images.length;
};
</script>

<template>
  <section id="culture" ref="sectionRef" class="py-24 bg-background">
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 transition-all duration-1000"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="text-start relative mb-8">
          <h2
            class="text-2xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
          >
            {{ "Museum of Traditional Heritage of Djerba" }}
          </h2>
          <p class="text-7xl text-gray-300 font-extrabold">{{ " Cultural heritage" }}</p>
        </div>

        <div class="mt-6 lg:mt-0 flex flex-col items-start lg:items-end gap-4">
          <div class="flex items-center gap-6 text-muted-foreground">
            <div class="flex items-center gap-2">
              <Users class="w-4 h-4 text-primary" />
              <span class="text-sm">
                Resident: <strong class="text-accent">5 DT</strong>
              </span>
            </div>

            <div class="flex items-center gap-2">
              <Users class="w-4 h-4 text-primary" />
              <span class="text-sm">
                Non-resident: <strong class="text-accent">8 DT</strong>
              </span>
            </div>
          </div>

          <RouterLink
            :to="`/itinerary/${encodeURIComponent('your-location')}/${encodeURIComponent(
              event.location.toLowerCase().replace(/\s+/g, '-')
            )}`"
            class="flex items-center gap-2 px-6 py-3 bg-sand-mid text-white rounded-md font-medium hover:bg-primary/90 transition-all group"
          >
            <Navigation class="w-5 h-5 mr-2" />
            Itinerary
          </RouterLink>
        </div>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-1000 delay-200"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="lg:col-span-2 lg:row-span-2 relative group">
          <div class="relative h-[400px] rounded-3xl overflow-hidden">
            <img
              :src="images[activeImage]"
              :alt="images[activeImage]"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div
              class="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <button
                @click="prevImage"
                class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronLeft class="w-6 h-6" />
              </button>

              <button
                @click="nextImage"
                class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronRight class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div
          v-for="(img, index) in images.slice(1)"
          :key="index"
          class="relative group cursor-pointer transition-all duration-500"
          @click="activeImage = index + 1"
        >
          <div class="h-48 rounded-2xl overflow-hidden">
            <img
              :src="img"
              :alt="'Museum image ' + (index + 2)"
              class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              :class="activeImage === index + 1 ? 'ring-2 ring-accent ring-offset-2' : ''"
            />

            <div
              v-if="index === images.length - 2"
              class="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl"
            >
              <div class="text-center text-white">
                <Camera class="w-8 h-8 mx-auto mb-2" />
                <span class="text-lg font-medium">+{{ imageCount }} photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-center mt-8 transition-all duration-700 delay-400"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="flex items-center gap-2">
          <button
            v-for="(dot, index) in images"
            :key="index"
            @click="activeImage = index"
            class="w-2 h-2 rounded-full transition-all"
            :class="activeImage === index ? 'w-8 bg-sand-mid' : 'bg-black/30'"
          />
        </div>
      </div>
    </div>
  </section>
</template>
