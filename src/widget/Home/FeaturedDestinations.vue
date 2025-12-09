<script setup>
import { destinations } from "@/assets/data/ShareData";
import { ArrowRight, MapPin, Star, Sparkles } from "lucide-vue-next";
import { ref, onMounted } from "vue";
import Button from "@/components/ui/button/Button.vue";
import Card from "@/components/ui/card/Card.vue";

const isVisible = ref(false);
const hoveredCard = ref(null);

function handleTabClick() {}
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>
<template>
  <section
    id="destinations"
    class="relative min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 overflow-hidden"
  >
    <!-- Floating Elements -->
    <div
      class="absolute top-20 right-20 w-32 h-32 bg-ocean-light/10 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-40 left-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-bounce"
      style="animation-duration: 3s"
    ></div>

    <div class="relative z-10 container mx-auto px-4 py-20">
      <div
        :class="[
          'text-center mb-20 transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
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
        <p
          class="text-gray-600 text-xl max-w-2xl leading-relaxed text-start transform transition-all duration-700 hover:text-gray-800"
        >
          Embark on extraordinary journeys through Tunisia's most captivating landscapes
          and hidden gems
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        <div
          :class="[
            'lg:col-span-8 transition-all duration-1000 delay-200 transform',
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-20 scale-95',
          ]"
        >
          <RouterLink
            to="#"
            @mouseenter="hoveredCard = 'main'"
            @mouseleave="hoveredCard = null"
            class="group block relative h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:rotate-1"
          >
            <img
              :src="destinations[0]?.image"
              :alt="destinations[0]?.name"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500"
              :class="hoveredCard === 'main' ? 'from-black/60' : 'from-black/80'"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-ocean-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>

            <div
              class="absolute top-4 left-4 w-2 h-2 bg-ocean-light rounded-full animate-ping opacity-75"
            ></div>
            <div
              class="absolute top-8 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style="animation-delay: 0.5s"
            ></div>

            <div
              class="absolute top-6 right-6 transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
            >
              <div
                class="flex items-center gap-1 px-3 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Star class="w-4 h-4 text-yellow-500 fill-current animate-pulse" />
                <span class="text-gray-800 font-medium text-sm">4.9</span>
              </div>
            </div>

            <div
              class="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-8px]"
            >
              <div class="flex items-center gap-2 mb-4">
                <div
                  class="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg transform transition-all duration-300 hover:scale-105 animate-pulse"
                  style="animation-duration: 2s"
                >
                  <span class="text-gray-800 font-medium"
                    >{{ destinations[0]?.tours }} Tours Available</span
                  >
                </div>
              </div>
              <h3
                class="font-serif text-4xl md:text-5xl text-white mb-3 group-hover:text-ocean-light transition-all duration-300 transform group-hover:scale-105"
              >
                {{ destinations[0]?.name }}
              </h3>
              <p
                class="text-white/90 text-lg mb-6 max-w-md transform transition-all duration-500 group-hover:translate-x-2"
              >
                {{ destinations[0]?.description }}
              </p>
              <div
                class="flex items-center gap-3 text-white/80 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-4"
              >
                <span class="font-medium">Explore Now</span>
                <ArrowRight
                  class="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 animate-bounce"
                  style="animation-duration: 1s"
                />
              </div>
            </div>
          </RouterLink>
        </div>

        <div class="lg:col-span-4 space-y-8">
          <div
            v-for="(destination, index) in destinations.slice(1, 3)"
            :key="destination.name"
            :class="[
              'transition-all duration-1000 transform',
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-20 scale-95',
            ]"
            :style="{ transitionDelay: `${300 + index * 100}ms` }"
          >
            <RouterLink
              to="#"
              @mouseenter="hoveredCard = `side-${index}`"
              @mouseleave="hoveredCard = null"
              class="group block relative h-[140px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-rotate-1"
            >
              <img
                :src="destination.image"
                :alt="destination.name"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500"
                :class="
                  hoveredCard === `side-${index}` ? 'from-black/50' : 'from-black/70'
                "
              ></div>
              <div
                class="absolute inset-0 bg-ocean-deep/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
              ></div>

              <!-- Mini floating elements -->
              <div
                class="absolute top-2 right-2 w-1 h-1 bg-ocean-light rounded-full animate-ping"
                :style="{ animationDelay: `${index * 0.3}s` }"
              ></div>

              <div
                class="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              >
                <div
                  class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
                >
                  <ArrowRight
                    class="w-5 h-5 text-gray-700 transform group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 animate-pulse"
                  />
                </div>
              </div>

              <div
                class="absolute bottom-6 left-6 right-6 transform transition-all duration-500 group-hover:translate-y-[-4px]"
              >
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-2 h-2 rounded-full bg-ocean-light animate-pulse"></div>
                  <span
                    class="text-white/80 text-sm font-medium transform transition-all duration-300 group-hover:translate-x-1"
                    >{{ destination.tours }} Tours</span
                  >
                </div>
                <h4
                  class="font-serif text-xl text-white mb-1 group-hover:text-ocean-light transition-all duration-300 transform group-hover:scale-105"
                >
                  {{ destination.name }}
                </h4>
                <p
                  class="text-white/70 text-sm line-clamp-2 transform transition-all duration-500 group-hover:translate-x-2"
                >
                  {{ destination.description }}
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        <div
          v-for="(destination, index) in destinations.slice(3, 6)"
          :key="destination.name"
          :class="[
            'transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
          ]"
          :style="{ transitionDelay: `${500 + index * 100}ms` }"
        >
          <RouterLink
            to="#"
            class="group block relative h-[180px] rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-ocean-deep/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div class="absolute top-4 left-4">
              <div
                class="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg"
              >
                <span class="text-gray-800 text-xs font-medium"
                  >{{ destination.tours }} Tours</span
                >
              </div>
            </div>

            <div class="absolute bottom-6 left-6 right-6">
              <h4
                class="font-serif text-2xl text-white mb-2 group-hover:text-ocean-light transition-colors duration-300"
              >
                {{ destination.name }}
              </h4>
              <p class="text-white/80 text-sm mb-4 line-clamp-2">
                {{ destination.description }}
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <Star class="w-4 h-4 text-yellow-400 fill-current" />
                  <span class="text-white text-sm font-medium">4.8</span>
                </div>
                <ArrowRight
                  class="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div
        :class="[
          'text-center mt-20 transition-all duration-1000 delay-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
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
</style>
