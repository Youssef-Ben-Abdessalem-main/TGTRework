<script setup>
import { computed } from "vue";
import agil from "@/assets/images/agile.png";
import TT from "@/assets/images/TT.png";

const partners = [
  {
    id: 1,
    name: "Discover Tunisia",
    logo: "https://www.discovertunisia.com/uk/sites/all/themes/ontt/logo.png",
  },
  {
    id: 2,
    name: "Tunisair",
    logo: TT,
  },
  {
    id: 3,
    name: "CTN",
    logo: "https://upload.wikimedia.org/wikipedia/fr/c/c9/CTNlogo.png",
  },
  {
    id: 4,
    name: "Agil",
    logo: agil,
  },
  {
    id: 5,
    name: "Olea",
    logo: "https://tunisiagotravel.com/images/olea.webp",
  },
];

const duplicatedPartners = [
  ...partners.map((p, i) => ({ ...p, key: `set1-${i}` })),
  ...partners.map((p, i) => ({ ...p, key: `set2-${i}` })),
];
</script>
<template>
  <section
    class="w-full bg-ocean-deep border-b border-white/10 to-primary py-6 px-4 overflow-hidden relative"
  >
    <div class="relative">
      <div class="relative">
        <div class="flex gap-0 animate-scroll">
          <div
            v-for="partner in duplicatedPartners"
            :key="partner.key"
            class="flex items-center justify-center min-w-max px-8 group"
          >
            <div
              class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="h-10 w-auto object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
  will-change: transform;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
