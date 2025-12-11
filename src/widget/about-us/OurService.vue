<script setup>
import Card from "@/components/ui/card/Card.vue";
import Select from "@/components/ui/select/Select.vue";
import { Skeleton } from "@/components/ui/skeleton";
import { Plane, Plus, Star } from "lucide-vue-next";
import { ref, onMounted } from "vue";

const isLoading = ref(true);

const services = [
  {
    title: "Hotels",
    description:
      "Discover luxury accommodations and boutique hotels across Tunisia. From beachfront resorts to historic riads in medinas.",
    link: "/hotels",
    svg: `<rect x="16" y="20" width="32" height="24" stroke="#2C5BA1" stroke-width="2" fill="none" rx="2" />
          <rect x="20" y="24" width="6" height="6" stroke="#2C5BA1" stroke-width="1" fill="none" />
          <rect x="30" y="24" width="6" height="6" stroke="#2C5BA1" stroke-width="1" fill="none" />
          <rect x="40" y="24" width="6" height="6" stroke="#2C5BA1" stroke-width="1" fill="none" />
          <rect x="20" y="34" width="6" height="6" stroke="#2C5BA1" stroke-width="1" fill="none" />
          <rect x="30" y="34" width="6" height="6" stroke="#2C5BA1" stroke-width="1" fill="none" />
          <rect x="40" y="34" width="6" height="6" stroke="#2C5BA1" stroke-width="1" fill="none" />`,
  },
  {
    title: "Restaurants",
    description:
      "Savor authentic Tunisian cuisine and international flavors at carefully selected restaurants and local eateries.",
    link: "/restaurants",
    svg: `<circle cx="32" cy="32" r="16" stroke="#2C5BA1" stroke-width="2" fill="none" />
          <path d="M24 28 L40 28" stroke="#2C5BA1" stroke-width="2" />
          <path d="M26 32 L38 32" stroke="#2C5BA1" stroke-width="2" />
          <path d="M28 36 L36 36" stroke="#2C5BA1" stroke-width="2" />
          <circle cx="32" cy="20" r="2" fill="#2C5BA1" />`,
  },
  {
    title: "Events",
    description:
      "Experience cultural festivals, concerts, and exclusive events that showcase Tunisia's rich heritage and modern culture.",
    link: "/events",
    svg: `<rect x="20" y="16" width="24" height="32" stroke="#2C5BA1" stroke-width="2" fill="none" rx="2" />
          <path d="M26 12 L26 20" stroke="#2C5BA1" stroke-width="2" />
          <path d="M32 12 L32 20" stroke="#2C5BA1" stroke-width="2" />
          <path d="M38 12 L38 20" stroke="#2C5BA1" stroke-width="2" />
          <path d="M24 26 L40 26" stroke="#2C5BA1" stroke-width="1" />
          <circle cx="28" cy="32" r="2" fill="#2C5BA1" />
          <circle cx="36" cy="38" r="2" fill="#2C5BA1" />`,
  },
  {
    title: "Weekend",
    description:
      "Perfect weekend getaways and short trips to explore Tunisia's hidden gems and popular destinations.",
    link: "/weekend",
    svg: `<path d="M16 32 L32 16 L48 32 L40 32 L40 44 L24 44 L24 32 Z" stroke="#2C5BA1" stroke-width="2" fill="none" />
          <rect x="28" y="36" width="8" height="8" stroke="#2C5BA1" stroke-width="2" fill="none" />
          <circle cx="32" cy="28" r="2" fill="#2C5BA1" />`,
  },
];

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <div class="relative px-4 overflow-hidden py-10">
    <div class="text-start relative max-w-7xl mx-auto mb-20">
      <h2
        class="text-3xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
      >
        {{ "Discover Tunisia Differently with Us" }}
      </h2>
      <p class="text-7xl text-gray-300 font-extrabold">{{ "Our Services" }}</p>
    </div>

    <div
      class="max-w-7xl mx-auto px-2 relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-24"
    >
      <template v-if="isLoading">
        <div
          v-for="i in 4"
          :key="i"
          :class="[
            'w-full lg:w-72 h-72 flex flex-col p-6',
            i % 2 === 1 ? '-translate-y-10' : 'translate-y-10',
          ]"
        >
          <Skeleton class="w-16 h-16 mx-auto mb-4 rounded-lg" />
          <Skeleton class="h-6 w-24 mx-auto mb-3" />
          <Skeleton class="h-4 w-full mb-2" />
          <Skeleton class="h-4 w-3/4 mx-auto mb-2" />
          <Skeleton class="h-4 w-5/6 mx-auto" />
        </div>
      </template>

      <RouterLink
        v-else
        v-for="(service, index) in services"
        :key="service.title"
        :to="service.link"
        :class="[
          'w-full lg:w-72 h-72 group flex bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-xl hover:bg-ocean-deep transition-all duration-500 transform hover:scale-105 hover:rotate-1',
          index % 2 === 0 ? '-translate-y-10' : '',
          index % 2 != 0 ? 'translate-y-10' : '',
        ]"
        :style="{
          animationDelay: `${index * 200}ms`,
          zIndex: services.length - index,
        }"
      >
        <div class="flex flex-col items-center text-center h-full justify-between">
          <div class="mb-4">
            <svg
              class="w-16 h-16 mx-auto mb-4"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="service.svg"
            ></svg>
            <h3
              class="text-xl font-semibold text-ocean-deep group-hover:text-white transition-colors mb-3"
            >
              {{ service.title }}
            </h3>
          </div>
          <p
            class="text-sm text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed"
          >
            {{ service.description }}
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
