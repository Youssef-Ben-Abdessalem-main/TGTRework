<script setup>
import { DestinationService } from "@/services/destination.js";
import { ArrowRight, MapPin, Star, Sparkles } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";
import Button from "@/components/ui/button/Button.vue";
import Card from "@/components/ui/card/Card.vue";
import { Skeleton } from "@/components/ui/skeleton";

const isVisible = ref(false);
const hoveredCard = ref(null);
const currentDestinations = ref([]);
const isTransitioning = ref(false);
const isLoading = ref(true);
let intervalId = null;

function handleTabClick() {}

const rotateDestinations = () => {
  isTransitioning.value = true;
  setTimeout(() => {
    const temp = [...currentDestinations.value];
    const first = temp.shift();
    temp.push(first);
    currentDestinations.value = temp;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 100);
  }, 400);
};

onMounted(async () => {
  try {
    const destinations = await DestinationService.get_featured_destinations();
    currentDestinations.value = destinations;
    isLoading.value = false;

    setTimeout(() => {
      isVisible.value = true;
    }, 100);

    intervalId = setInterval(rotateDestinations, 3000);
  } catch (error) {
    console.error("Failed to load destinations:", error);
    isLoading.value = false;
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
<template>
  <section
    id="destinations"
    class="relative min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30"
  >
    <div
      class="absolute top-20 right-20 w-32 h-32 bg-ocean-light/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-40 left-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl"
    ></div>

    <div class="relative z-10 container mx-auto px-4 py-20">
      <div
        :class="[
          'text-center mb-20 transition-all duration-1000',
          isVisible ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div class="text-start relative mb-8">
          <h2
            class="text-3xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
          >
            {{ "Breathtaking Destinations" }}
          </h2>
          <p class="text-7xl text-gray-300 font-extrabold">
            {{ "Discover Tunisia" }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        <div v-if="isLoading" class="lg:col-span-8">
          <Skeleton class="h-[300px] rounded-3xl" />
        </div>

        <div
          v-else
          :class="[
            'lg:col-span-8 transition-all duration-1000 delay-200 transform ',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ]"
        >
          <RouterLink
            to="#"
            @mouseenter="hoveredCard = 'main'"
            @mouseleave="hoveredCard = null"
            class="group block relative h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:rotate-1"
          >
            <div class="relative w-full h-full overflow-hidden">
              <img
                :src="currentDestinations[1]?.image"
                :alt="currentDestinations[1]?.name"
                class="absolute inset-0 w-full h-full object-cover"
              />

              <img
                :src="currentDestinations[0]?.image"
                :alt="currentDestinations[0]?.name"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                :style="{
                  clipPath: isTransitioning
                    ? 'circle(0% at 50% 50%)'
                    : 'circle(100% at 50% 50%)',
                  transition: 'clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }"
              />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-all duration-500"
              :class="hoveredCard === 'main' ? 'from-black/60' : 'from-black/80'"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-ocean-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>

            <div
              class="absolute top-4 left-4 w-2 h-2 bg-ocean-light rounded-full opacity-75"
            ></div>
            <div class="absolute top-8 left-8 w-1 h-1 bg-cyan-400 rounded-full"></div>

            <div
              class="absolute bottom-8 left-8 right-8 transform transition-all duration-500"
            >
              <h3
                class="font-serif text-4xl md:text-5xl text-white mb-3 group-hover:text-ocean-light transition-all duration-800 transform group-hover:scale-105"
                :style="{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }"
              >
                {{ currentDestinations[0]?.name }}
              </h3>
              <p
                class="text-white/90 text-lg mb-6 max-w-md transform transition-all duration-800 group-hover:translate-x-2"
                :style="{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
                }"
              >
                {{ currentDestinations[0]?.description }}
              </p>
              <div class="flex flex-row justify-end">
                <div
                  class="w-8 h-8 rounded-full glass backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
                >
                  <ArrowRight
                    class="w-5 h-5 text-white transform group-hover:rotate-45 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </RouterLink>
        </div>

        <div v-if="isLoading" class="lg:col-span-4 space-y-8">
          <Skeleton v-for="i in 2" :key="i" class="h-[140px] rounded-2xl" />
        </div>

        <div v-else class="lg:col-span-4 space-y-8">
          <div
            v-for="(destination, index) in currentDestinations.slice(1, 3)"
            :key="`${destination.name}-${index}`"
            :class="[
              'transition-all duration-1000 transform',
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
            ]"
            :style="{ transitionDelay: `${300 + index * 100}ms` }"
          >
            <RouterLink
              to="#"
              @mouseenter="hoveredCard = `side-${index}`"
              @mouseleave="hoveredCard = null"
              class="group block relative h-[140px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 kontext-card"
              :style="{ perspective: '1000px', transformStyle: 'preserve-3d' }"
            >
              <img
                :src="
                  currentDestinations[index + 2]?.image || currentDestinations[0]?.image
                "
                :alt="
                  currentDestinations[index + 2]?.name || currentDestinations[0]?.name
                "
                class="absolute inset-0 w-full h-full object-cover"
              />

              <img
                :src="destination.image"
                :alt="destination.name"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
                :style="{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning
                    ? 'scale(0.8) rotate(5deg)'
                    : 'scale(1) rotate(0deg)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }"
              />
              <div
                class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-all duration-500"
                :class="
                  hoveredCard === `side-${index}` ? 'from-black/50' : 'from-black/70'
                "
              ></div>
              <div
                class="absolute inset-0 bg-ocean-deep/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
              ></div>

              <div
                class="absolute top-2 right-2 w-1 h-1 bg-ocean-light rounded-full"
              ></div>

              <div
                class="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              >
                <div
                  class="w-8 h-8 rounded-full glass backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
                >
                  <ArrowRight
                    class="w-5 h-5 text-white transform group-hover:rotate-45 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>

              <div
                class="absolute bottom-6 left-6 right-6 transform transition-all duration-500"
              >
                <h4
                  class="font-serif text-xl text-white mb-1 group-hover:text-ocean-light transition-all duration-800 transform group-hover:scale-105"
                  :style="{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }"
                >
                  {{ destination.name }}
                </h4>
                <p
                  class="text-white/70 text-sm line-clamp-2 transform transition-all duration-800 group-hover:translate-x-2"
                  :style="{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
                  }"
                >
                  {{ destination.description }}
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <div
        v-if="isLoading"
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto"
      >
        <Skeleton v-for="i in 3" :key="i" class="h-[180px] rounded-2xl" />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        <div
          v-for="(destination, index) in currentDestinations.slice(3, 6)"
          :key="`${destination.name}-${index}`"
          :class="[
            'transition-all duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ transitionDelay: `${500 + index * 100}ms` }"
        >
          <RouterLink
            to="#"
            class="group block relative h-[180px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 kontext-card"
            :style="{ perspective: '1000px', transformStyle: 'preserve-3d' }"
          >
            <!-- Background image (next destination) -->
            <img
              :src="currentDestinations[(index + 4) % currentDestinations.length]?.image"
              :alt="currentDestinations[(index + 4) % currentDestinations.length]?.name"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- Foreground image (current destination) -->
            <img
              :src="destination.image"
              :alt="destination.name"
              class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              :style="{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning
                  ? 'scale(0.9) rotate(3deg)'
                  : 'scale(1) rotate(0deg)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-ocean-deep/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div class="absolute bottom-6 left-6 right-6">
              <h4
                class="font-serif text-2xl text-white mb-2 group-hover:text-ocean-light transition-all duration-800"
                :style="{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }"
              >
                {{ destination.name }}
              </h4>
              <p
                class="text-white/80 text-sm mb-4 line-clamp-2"
                :style="{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
                }"
              >
                {{ destination.description }}
              </p>
              <div class="flex items-center justify-end">
                <div
                  class="w-8 h-8 rounded-full glass backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
                >
                  <ArrowRight
                    class="w-5 h-5 text-white transform group-hover:rotate-45 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div
        :class="[
          'text-center mt-20 transition-all duration-1000 delay-700',
          isVisible ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div class="w-full justify-center flex items-center pt-5">
          <Button
            @click="handleTabClick()"
            class="bg-transparent hover:bg-sand-deep hover:text-white px-10 py-5 rounded-tl-xl rounded-br-xl shadow-none border-sand-deep border-2 text-sand-deep"
          >
            Discover All Destinations →
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.kontext-card {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.kontext-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateZ(0px);
  transition: transform 0.6s ease;
}

.kontext-layer.show-right {
  animation: show-right 0.6s forwards ease;
}

@keyframes show-right {
  0% {
    transform: translateZ(-200px);
  }
  40% {
    transform: translate(40%, 0) scale(0.8) rotateY(-20deg);
  }
  100% {
    transform: translateZ(0px);
  }
}
</style>
