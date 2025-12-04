<script setup>
import { destinations } from "@/assets/data/ShareData";
import { ArrowRight, MapPin, Star } from "lucide-vue-next";
import { ref, onMounted } from "vue";
import Button from "@/components/ui/button/Button.vue";

const isVisible = ref(false);

function handleTabClick() {}
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>
<template>
  <section id="destinations" class="relative min-h-screen bg-white overflow-hidden">
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
          <p class="text-7xl text-gray-300 font-extrabold">{{ "Discover Tunisia" }}</p>
        </div>
        <p class="text-gray-600 text-xl max-w-2xl leading-relaxed text-start">
          Embark on extraordinary journeys through Tunisia's most captivating landscapes
          and hidden gems
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        <div
          :class="[
            'lg:col-span-8 transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
          ]"
        >
          <RouterLink
            to="#"
            class="group block relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <img
              :src="destinations[0]?.image"
              :alt="destinations[0]?.name"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-ocean-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div class="absolute top-6 right-6">
              <div
                class="flex items-center gap-1 px-3 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-lg"
              >
                <Star class="w-4 h-4 text-yellow-500 fill-current" />
                <span class="text-gray-800 font-medium text-sm">4.9</span>
              </div>
            </div>

            <div class="absolute bottom-8 left-8 right-8">
              <div class="flex items-center gap-2 mb-4">
                <div
                  class="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg"
                >
                  <span class="text-gray-800 font-medium"
                    >{{ destinations[0]?.tours }} Tours Available</span
                  >
                </div>
              </div>
              <h3
                class="font-serif text-4xl md:text-5xl text-white mb-3 group-hover:text-ocean-light transition-colors duration-300"
              >
                {{ destinations[0]?.name }}
              </h3>
              <p class="text-white/90 text-lg mb-6 max-w-md">
                {{ destinations[0]?.description }}
              </p>
              <div
                class="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors duration-300"
              >
                <span class="font-medium">Explore Now</span>
                <ArrowRight
                  class="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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
              'transition-all duration-1000',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
            ]"
            :style="{ transitionDelay: `${300 + index * 100}ms` }"
          >
            <RouterLink
              to="#"
              class="group block relative h-[280px] rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              <img
                :src="destination.image"
                :alt="destination.name"
                class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              <div
                class="absolute inset-0 bg-ocean-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div class="absolute top-4 right-4">
                <div
                  class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center"
                >
                  <ArrowRight
                    class="w-5 h-5 text-gray-700 transform group-hover:rotate-45 transition-transform duration-300"
                  />
                </div>
              </div>

              <div class="absolute bottom-6 left-6 right-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-2 h-2 rounded-full bg-ocean-light"></div>
                  <span class="text-white/80 text-sm font-medium"
                    >{{ destination.tours }} Tours</span
                  >
                </div>
                <h4
                  class="font-serif text-xl text-white mb-1 group-hover:text-ocean-light transition-colors duration-300"
                >
                  {{ destination.name }}
                </h4>
                <p class="text-white/70 text-sm line-clamp-2">
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
            class="group block relative h-[320px] rounded-2xl overflow-hidden shadow-xl border border-gray-100"
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
