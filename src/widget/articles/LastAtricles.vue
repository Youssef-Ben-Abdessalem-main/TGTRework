<script setup>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Search } from "lucide-vue-next";
import { ref } from "vue";
import NewsCard from "./components/NewsCard.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  IsMore: {
    type: Boolean,
    required: true,
  },
});

const handleTabClick = () => {
  router.push("/blogs");
};
const searchQuery = ref("");

const articles = [
  {
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    category: "Design",
    categoryColor: "bg-pink-100 text-pink-600",
    title: "Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year",
    description:
      "Discover unique, off-the-radar destinations around the world that offer...",
    author: "Jhon Doe",
    date: "July 20, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    category: "Sustainability",
    categoryColor: "bg-teal-100 text-teal-600",
    title: "Travel Bucket List: 25 Destinations for Every Adventurer",
    description:
      "Explore a curated list of must-visit places for every kind of traveler, whether you...",
    author: "Jhon Doe",
    date: "July 5, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80",
    category: "Cultural Insights",
    categoryColor: "bg-orange-100 text-orange-600",
    title: "How to Travel Like a Local: Insider Tips for Authentic Experiences",
    description:
      "Learn how to immerse yourself in the culture of each place you visit by following...",
    author: "Jhon Doe",
    date: "Jun 30, 2024",
  },
];
</script>

<template>
  <div :class="[props.IsMore ? 'pt-16' : '']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="flex flex-col justify-center items-center">
          <p
            class="text-sm uppercase tracking-wider mb-4 bg-ocean-light/20 w-max px-5 py-3 rounded-full text-ocean-mid"
          >
            Latest Articles
          </p>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Our Latest <strong class="text-sand-mid underline">News</strong>
          </h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the achievements that set us apart. From groundbreaking projects to
            industry accolades, we take pride in our accomplishments.
          </p>
        </div>

        <div class="max-w-xl mx-auto relative">
          <div class="relative flex items-center gap-4">
            <Search class="absolute left-4 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              v-model="searchQuery"
              class="w-full pl-12 pr-4 py-6 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-deep focus:border-transparent shadow-sm"
            />
            <Button
              class="bg-ocean-deep hover:bg-ocean-mid text-white font-semibold px-8 py-6 rounded-r-lg transition-colors duration-200 shadow-sm"
            >
              Find Now
            </Button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsCard v-for="(article, index) in articles" :key="index" v-bind="article" />
      </div>

      <div class="w-full justify-center flex items-center pt-10" v-if="props.IsMore">
        <Button
          @click="handleTabClick()"
          class="bg-transparent hover:bg-sand-deep hover:text-white px-10 py-5 rounded-tl-xl rounded-br-xl shadow-none border-sand-deep border-2 text-sand-deep"
        >
          More →
        </Button>
      </div>
    </div>
  </div>
</template>
