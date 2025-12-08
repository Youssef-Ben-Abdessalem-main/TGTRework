<script setup>
import { ref, onMounted } from "vue";
import { MapPin, Clock, ArrowUpRight, Compass } from "lucide-vue-next";

const activities = [
  {
    id: 1,
    name: "Bourgo Mall",
    location: "Midoun Route Houmet-Souk",
    image:
      "https://www.destinationtunisie.info/wp-content/uploads/2017/12/djerba_bourgo_mall.jpg",
    duration: "2-3 heures",
    category: "Shopping",
  },
  {
    id: 2,
    name: "Fort Ghazi Mustapha",
    location: "Houmt Souk, Djerba Island",
    image:
      "https://thumbs.dreamstime.com/b/fort-ghazi-mustapha-houmt-souk-island-jerba-tunisia-borj-el-kebir-big-fortress-city-sunny-evening-119274791.jpg",
    duration: "1-2 heures",
    category: "Histoire",
  },
  {
    id: 3,
    name: "Bazaar Houmt Souk",
    location: "Houmt Souk, Djerba Island",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroMAd1cJ4E1Xino2GAFA3rgbryW8hA3jzdA&s",
    duration: "2-4 heures",
    category: "Culture",
  },
  {
    id: 4,
    name: "Dar Jilani La Maison des Arts",
    location: "Île de Djerba",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6Ly3HRd9oFAUIhwq1cdRhi25jXLS8xYDGQ&s",
    duration: "1-2 heures",
    category: "Art",
  },
];

const isVisible = ref(false);
const hoveredIndex = ref(null);
const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => (isVisible.value = entry.isIntersecting),
    { threshold: 0.1 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section id="activities" ref="sectionRef" class="py-24 bg-sand-light/10 relative">
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
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="text-center mb-16 transition-all duration-1000"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="flex items-center justify-center gap-2 text-primary mb-4">
          <Compass class="w-5 h-5" />
          <span class="text-sm tracking-[0.3em] uppercase font-medium">Explore</span>
        </div>

        <h2 class="text-4xl md:text-6xl font-serif text-foreground mb-6">
          Activities in <span class="italic text-primary">proximity</span>
        </h2>

        <p class="text-muted-foreground max-w-2xl mx-auto">
          Immerse yourself in the authenticity of Djerba through its markets, historical
          monuments, and cultural treasures.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(activity, index) in activities"
          :key="activity.id"
          class="group relative transition-all duration-700"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
          :class="[
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
            index % 2 === 1 ? 'lg:translate-y-12' : '',
          ]"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div
            class="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 cursor-pointer"
            :class="hoveredIndex === index ? 'shadow-2xl ' : 'shadow-lg'"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                :src="activity.image"
                :alt="activity.name"
                class="w-full h-full object-cover transition-all duration-700"
                :class="hoveredIndex === index ? 'scale-110' : 'scale-100'"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500"
                :class="hoveredIndex === index ? 'opacity-100' : 'opacity-0'"
              />

              <div class="absolute top-4 left-4">
                <span
                  class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-sand-mid"
                >
                  {{ activity.category }}
                </span>
              </div>

              <div
                class="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-sand-light flex items-center justify-center transition-all duration-500"
                :class="
                  hoveredIndex === index
                    ? 'translate-y-0 opacity-100 rotate-0'
                    : 'translate-y-4 opacity-0 -rotate-45'
                "
              >
                <ArrowUpRight class="w-5 h-5 text-sand-deep" />
              </div>
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-serif text-sand-mid mb-3 group-hover:text-sand-deep transition-colors"
              >
                {{ activity.name }}
              </h3>

              <div class="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin class="w-4 h-4 text-sand-mid" />
                <span class="truncate">{{ activity.location }}</span>
              </div>

              <div class="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock class="w-4 h-4 text-sand-mid" />
                <span>{{ activity.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-center mt-16 transition-all duration-700 delay-500"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <button
          class="group flex items-center gap-3 px-8 py-4 border-2 border-sand-mid rounded-full hover:bg-sand-mid hover:text-white transition-all"
        >
          <span class="text-sm tracking-widest uppercase font-medium"
            >See all activities</span
          >
          <ArrowUpRight class="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </div>
  </section>
</template>
