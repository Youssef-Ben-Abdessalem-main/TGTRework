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
import Hotels from "@/widget/Views/Hotels.vue";

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
  <section class="relative min-h-[460px] overflow-hidden">
    <div class="absolute inset-0">
      <video
        class="w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        webkit-playsinline
      >
        <source src="@/assets/video/TunusiaVideo.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80"
      ></div>
    </div>

    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-6 lg:px-8 h-full">
        <div class="flex justify-center items-center text-center min-h-[450px]">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-1"
            >
              <MapPin class="w-3 h-3 text-white" />
              <span class="text-white text-xs font-medium"
                >Tunisia's #1 Travel Platform</span
              >
            </div>

            <h1 class="font-serif text-white mb-3 leading-tight">
              <span class="text-3xl md:text-4xl lg:text-6xl">Book Your Perfect</span>
              <span
                class="block text-secondary font-light text-3xl md:text-4xl lg:text-4xl"
                >Tunisian Experience</span
              >
            </h1>
          </div>
        </div>
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
