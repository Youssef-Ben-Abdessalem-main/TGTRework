<script setup>
import { Clock, ArrowRight, Eye, User, Star, Sparkles } from "lucide-vue-next";

const articles = [
  {
    id: 1,
    title: "Organiser un séminaire en Tunisie : les hôtels adapté pour séminaires",
    categories: ["Meilleurs hôtels"],
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/Hotels-seminaires-et-congres-en-Tunisie-420x280.webp",
    readTime: 5,
    link: "/articles/organiser-seminaire-tunisie",
  },
  {
    id: 2,
    title:
      "Que faire à Djerba ? guide complet des activités et des expériences essentielles",
    categories: ["Djerba"],
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/activites-Djerba-420x280.webp",
    readTime: 10,
    link: "/articles/activites-djerba",
  },
  {
    id: 3,
    title: "Tunisie avec un petit budget",
    categories: ["L'argent", "Organiser Son Voyage"],
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2024/12/Tunisia-trip-budget-420x280.webp",
    readTime: 5,
    link: "/articles/tunisie-petit-budget",
  },
];
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}
</style>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="article in articles"
        :key="article.id"
        class="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>

        <div class="relative overflow-hidden">
          <div class="aspect-[16/10] overflow-hidden">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              v-for="category in article.categories"
              :key="category"
              class="glass px-3 py-1.5 text-xs font-semibold text-white rounded-full backdrop-blur-md border border-white/20"
            >
              {{ category }}
            </span>
          </div>

          <div
            class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <div
              class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <ArrowRight class="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div class="relative p-6 space-y-4">
          <div class="flex items-center gap-3 text-xs text-gray-500">
            <div class="flex items-center gap-1">
              <Clock class="w-3.5 h-3.5" />
              <span>{{ article.readTime }} min</span>
            </div>
            <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div class="flex items-center gap-1">
              <Eye class="w-3.5 h-3.5" />
              <span>{{ article.views || "1.2k" }} vues</span>
            </div>
          </div>

          <h3
            class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight"
          >
            <a :href="article.link" class="stretched-link">
              {{ article.title }}
            </a>
          </h3>

          <p class="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {{
              article.excerpt ||
              "Découvrez nos conseils d'experts pour une expérience inoubliable en Tunisie."
            }}
          </p>

          <div class="flex items-center justify-between pt-2">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
              >
                <User class="w-4 h-4 text-white" />
              </div>
              <div class="text-xs">
                <div class="font-medium text-gray-900">
                  {{ article.author || "Tunisia Go Travel" }}
                </div>
                <div class="text-gray-500">{{ article.date || "Il y a 2 jours" }}</div>
              </div>
            </div>

            <div class="flex items-center gap-1 text-yellow-500">
              <Star class="w-4 h-4 fill-current" />
              <span class="text-xs font-medium text-gray-700">{{
                article.rating || "4.8"
              }}</span>
            </div>
          </div>
        </div>

        <div
          class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/5 group-hover:ring-blue-500/20 transition-all duration-300"
        ></div>
      </article>
    </div>

    <div class="mt-20 text-center">
      <div class="relative inline-flex items-center justify-center">
        <div class="absolute inset-0 flex items-center">
          <div
            class="w-full border-t border-gradient-to-r from-blue-200 via-purple-200 to-blue-200"
          ></div>
        </div>
        <div class="relative bg-white px-6">
          <div
            class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <Sparkles class="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
