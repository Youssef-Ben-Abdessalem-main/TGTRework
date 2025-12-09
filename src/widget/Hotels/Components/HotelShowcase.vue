<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Star, MapPin, ArrowRight, Sparkles } from "lucide-vue-next";
import Select from "@/components/ui/select/Select.vue";

const hotels = [
  {
    id: 1,
    name: "Hôtel Joya Paradise & SPA",
    location: "Djerba",
    rating: 4,
    image: "https://image.resabooking.com/images/image_panoramique/joya_paradise_3.jpg",
    tags: ["Spa", "Plage privée", "All inclusive"],
    price: "À partir de 180 DT/nuit",
  },
  {
    id: 2,
    name: "Hôtel Golf Beach & Thalasso",
    location: "Djerba",
    rating: 4,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9b/5f/4d/hotel-golf-beach.jpg?w=900&h=500&s=1",
    tags: ["Golf", "Thalasso", "Vue mer"],
    price: "À partir de 220 DT/nuit",
  },
  {
    id: 3,
    name: "Djerba Golf Resort & Spa",
    location: "Djerba",
    rating: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEExiuYAF71pkxZYEfmDRPWYFQiygz1IkQ6g&s",
    tags: ["5 étoiles", "Golf", "Gastronomie"],
    price: "À partir de 350 DT/nuit",
  },
  {
    id: 4,
    name: "Djerba Resort Premium",
    location: "Djerba",
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Kp7mzUNKTtqGtMSvrHJUwMK3Wq9tYSkSRA&s",
    tags: ["Premium", "Spa", "Plage"],
    price: "À partir de 450 DT/nuit",
  },
];

const activeIndex = ref(0);
const isVisible = ref(false);
const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => (isVisible.value = entry.isIntersecting),
    { threshold: 0.2 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section id="hotels" ref="sectionRef" class="py-24 px-6 relative bg-sand-light/10">
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        class="relative block w-full h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="fill-white"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </div>
    <div
      class="h-32 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full z-[1000] pointer-events-none"
    ></div>
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="text-start relative mb-8">
          <h2
            class="text-3xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
          >
            {{ "Perhaps You may like" }}
          </h2>
          <p class="text-7xl text-gray-300 font-extrabold">{{ "Exceptional stays" }}</p>
        </div>

        <p class="text-muted-foreground max-w-md mt-6 md:mt-0 leading-relaxed">
          Discover our exclusive selection of hotels and resorts, chosen for their
          excellence and authenticity.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div
          class="lg:col-span-7 transition-all duration-700 delay-200"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <div
            class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            @mouseenter="activeIndex = 0"
          >
            <img
              :src="hotels[activeIndex].image"
              :alt="hotels[activeIndex].name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50"
            />

            <div class="absolute bottom-0 left-0 right-0 p-8">
              <div class="flex items-center gap-2 mb-3">
                <Star
                  v-for="i in Math.floor(hotels[activeIndex].rating)"
                  :key="i"
                  class="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              </div>

              <h3 class="text-3xl font-serif text-white mb-2">
                {{ hotels[activeIndex].name }}
              </h3>

              <div class="flex items-center gap-2 text-white/80 mb-4">
                <MapPin class="w-4 h-4" />
                <span>{{ hotels[activeIndex].location }}</span>
              </div>

              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in hotels[activeIndex].tags"
                  :key="tag"
                  class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center justify-between">
                <span class="text-sand-mid font-medium">{{
                  hotels[activeIndex].price
                }}</span>

                <button
                  class="flex items-center gap-2 px-6 py-3 bg-sand-mid text-white rounded-full font-medium hover:bg-accent/90 transition-all hover:gap-4 group/btn"
                >
                  Reserve now
                  <ArrowRight
                    class="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col gap-4">
          <div
            v-for="(hotel, index) in hotels.slice(1)"
            :key="hotel.id"
            class="group relative h-[150px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
            :class="[
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
              activeIndex === index + 1 ? 'ring-2 ring-sand-mid' : '',
            ]"
            :style="{ transitionDelay: `${300 + index * 100}ms` }"
            @mouseenter="activeIndex = index + 1"
          >
            <img
              :src="hotel.image"
              :alt="hotel.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60"
            />

            <div class="absolute inset-0 p-6 flex flex-col justify-center">
              <div class="flex items-center gap-1 mb-2">
                <Star
                  v-for="i in Math.floor(hotel.rating)"
                  :key="i"
                  class="w-3 h-3 fill-yellow-400 text-yellow-400"
                />
              </div>

              <h3 class="text-xl font-serif text-white mb-1">
                {{ hotel.name }}
              </h3>

              <div class="flex items-center gap-1 text-white/70 text-sm">
                <MapPin class="w-3 h-3" />
                <span>{{ hotel.location }}</span>
              </div>
            </div>

            <div
              class="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-center mt-12 transition-all duration-700 delay-500"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <button
          class="group flex items-center gap-3 text-black hover:text-sand-mid transition-colors"
        >
          <span class="text-sm tracking-widest uppercase">See all hotels</span>
          <span
            class="w-12 h-px bg-sand-mid group-hover:w-20 group-hover:bg-sand-light transition-all"
          />
        </button>
      </div>
    </div>
  </section>
</template>
