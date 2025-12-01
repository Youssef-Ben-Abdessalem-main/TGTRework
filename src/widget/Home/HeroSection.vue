<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  MapPin,
  Calendar,
  Users,
  Search,
  Hotel,
  UtensilsCrossed,
  Plane,
  CalendarDays,
  Car,
} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import SidiBouSaid from "@/assets/images/sidi-bou-said-blue-white-village-tunisia-mediterra.jpg";
import SaharaDesert from "@/assets/images/sahara-desert-tunisia-sand-dunes-camel-sunset.jpg";
import Carthage from "@/assets/images/carthage-ancient-ruins-tunisia-mediterranean-sea.jpg";
import TunisiaBeach from "@/assets/images/tunisia-beach-mediterranean-turquoise-water-palm-t.jpg";

const slides = [
  {
    image: SidiBouSaid,
    title: "Discover Tunisia",
    subtitle: "Hotels, restaurants, flights & more in one platform",
    location: "Sidi Bou Said",
    stats: "500+ Partners",
  },
  {
    image: SaharaDesert,
    title: "Complete Travel Solutions",
    subtitle: "From desert adventures to coastal getaways",
    location: "Southern Tunisia",
    stats: "1000+ Options",
  },
  {
    image: Carthage,
    title: "All-in-One Platform",
    subtitle: "Book everything you need for your Tunisia trip",
    location: "Tunis & Carthage",
    stats: "24/7 Support",
  },
  {
    image: TunisiaBeach,
    title: "Your Tunisia Experience",
    subtitle: "Seamless booking for the perfect vacation",
    location: "Coastal Tunisia",
    stats: "Best Prices",
  },
];

const services = [
  { icon: Hotel, name: "Hotels", count: "200+" },
  { icon: UtensilsCrossed, name: "Restaurants", count: "150+" },
  { icon: Plane, name: "Vols", count: "50+" },
  { icon: CalendarDays, name: "Événements", count: "100+" },
  { icon: Car, name: "Transports", count: "75+" },
];

const currentSlide = ref(0);
const isAutoPlaying = ref(true);

let timer = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value;
  if (isAutoPlaying.value) {
    startTimer();
  } else {
    clearInterval(timer);
  }
};

const startTimer = () => {
  timer = setInterval(nextSlide, 5000);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <section class="relative min-h-[700px] h-screen overflow-hidden">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-all duration-1000 ease-in-out"
      :class="{
        'opacity-100 scale-100': index === currentSlide,
        'opacity-0 scale-105': index !== currentSlide,
      }"
    >
      <div class="absolute inset-0">
        <img
          :src="slide.image"
          class="w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
          :class="{ 'scale-110': index === currentSlide }"
          :alt="slide.title"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"
      ></div>
    </div>

    <div class="absolute top-1/2 -translate-y-1/2 left-6 z-20">
      <button
        @click="prevSlide"
        class="group bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft class="w-6 h-6 text-white group-hover:text-white" />
      </button>
    </div>
    <div class="absolute top-1/2 -translate-y-1/2 right-6 z-20">
      <button
        @click="nextSlide"
        class="group bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight class="w-6 h-6 text-white group-hover:text-white" />
      </button>
    </div>

    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl">
          <div
            class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in"
          >
            <MapPin class="w-4 h-4 text-white" />
            <span class="text-white text-sm font-medium">{{
              slides[currentSlide].location
            }}</span>
            <span class="text-white/70 text-xs">•</span>
            <span class="text-white/90 text-sm">{{ slides[currentSlide].stats }}</span>
          </div>

          <p
            class="text-white/90 text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-light animate-slide-up"
          >
            Tunisia's Complete Travel Platform
          </p>

          <h1
            class="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight animate-slide-up animation-delay-200"
          >
            {{ slides[currentSlide].title.split(" ").slice(0, -1).join(" ") }}
            <span class="block text-secondary font-light">{{
              slides[currentSlide].title.split(" ").slice(-1)[0]
            }}</span>
          </h1>

          <p
            class="text-white/90 text-lg md:text-xl mb-8 max-w-2xl font-light leading-relaxed animate-slide-up animation-delay-400"
          >
            {{ slides[currentSlide].subtitle }}
          </p>

          <div
            class="flex flex-wrap gap-6 text-white/90 animate-slide-up animation-delay-800"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-secondary rounded-full"></div>
              <span class="text-sm font-medium">{{ slides[currentSlide].stats }}</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-secondary rounded-full"></div>
              <span class="text-sm font-medium">Best Price Guarantee</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-secondary rounded-full"></div>
              <span class="text-sm font-medium">Instant Confirmation</span>
            </div>
          </div>
          <div class="w-full"><div class="w-4 h-[1px] bg-white"></div></div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      <div class="flex items-center gap-4">
        <div class="flex gap-2">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-300 rounded-full',
              index === currentSlide
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 hover:bg-white/70 w-3 h-3',
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <button
          @click="toggleAutoPlay"
          class="ml-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-all duration-300"
        >
          <Play v-if="!isAutoPlaying" class="w-4 h-4 text-white" />
          <div v-else class="w-4 h-4 flex items-center justify-center">
            <div class="w-1 h-3 bg-white rounded-full mx-0.5"></div>
            <div class="w-1 h-3 bg-white rounded-full mx-0.5"></div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  animation-fill-mode: both;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  animation-fill-mode: both;
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
