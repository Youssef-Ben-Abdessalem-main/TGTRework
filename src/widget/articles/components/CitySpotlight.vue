<script setup>
import { Clock } from "lucide-vue-next";

const props = defineProps({
  cityName: { type: String, default: "Bizerte" },
  subtitle: { type: String, default: "Your guided tours in" },
  categoryColor: { type: String, default: "bg-blue-100 text-blue-600" },
  featuredArticle: {
    type: Object,
    default: () => ({
      title: "Tourism in Bizerte: Must-visit attractions",
      image: "https://tunisiagotravel.com/blog/wp-content/uploads/2022/09/11-615x410.jpg",
      excerpt:
        "Tourism in Bizerte, located in northern Tunisia, reveals an adventure rich in discoveries. This Mediterranean city unveils a unique blend of culture...",
      author: "Tunisia Go Travel",
      date: "3 years ago",
      readTime: 4,
      link: "/blog/tourisme-a-bizerte",
    }),
  },
  heroArticle: {
    type: Object,
    default: () => ({
      title: "Eco-tourism in Bizerte: Sustainable and ecological initiatives",
      image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/12/3-860x484.jpg",
      readTime: 4,
      link: "/blog/eco-tourisme-a-bizerte",
    }),
  },
  smallArticles: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "Tourism in Bizerte: Must-visit attractions",
        image:
          "https://tunisiagotravel.com/blog/wp-content/uploads/2022/09/11-420x280.jpg",
        readTime: 4,
        link: "/blog/tourisme-a-bizerte",
      },
      {
        id: 2,
        title: "Eco-tourism in Bizerte: Sustainable and ecological initiatives",
        image:
          "https://tunisiagotravel.com/blog/wp-content/uploads/2021/12/3-420x280.jpg",
        readTime: 4,
        link: "/blog/eco-tourisme-a-bizerte",
      },
    ],
  },
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="space-y-8">
      <div class="text-start relative mb-8">
        <h2 class="text-3xl font-extrabold text-ocean-deep absolute left-10 -bottom-1">
          {{ cityName }}
        </h2>
        <p class="text-7xl text-gray-300 font-extrabold">{{ subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
          <article
            class="group h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div class="relative overflow-hidden">
              <img
                :src="featuredArticle.image"
                :alt="featuredArticle.title"
                class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-4 left-4">
                <span
                  :class="`inline-block ${categoryColor} text-sm font-semibold px-3 py-1 rounded-full`"
                >
                  {{ cityName }}
                </span>
              </div>
            </div>

            <div class="p-6 space-y-4">
              <h3
                class="text-xl font-bold text-gray-900 hover:text-ocean-deep transition-colors line-clamp-2"
              >
                <a :href="featuredArticle.link">{{ featuredArticle.title }}</a>
              </h3>

              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>By {{ featuredArticle.author }}</span>
                <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>{{ featuredArticle.date }}</span>
                <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>{{ featuredArticle.readTime }} min read</span>
              </div>

              <p class="text-gray-600 leading-relaxed">
                {{ featuredArticle.excerpt }}
              </p>
            </div>
          </article>
        </div>

        <div class="space-y-6">
          <article
            class="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                :src="heroArticle.image"
                :alt="heroArticle.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>

              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span
                  :class="`inline-block ${categoryColor} text-sm font-semibold px-3 py-1 rounded-full mb-3`"
                >
                  {{ cityName }}
                </span>
                <h3 class="text-lg font-bold mb-2 line-clamp-2">
                  <a :href="heroArticle.link" class="hover:underline">{{
                    heroArticle.title
                  }}</a>
                </h3>
                <div class="flex items-center gap-2 text-sm text-white/80">
                  <Clock class="w-4 h-4" />
                  <span>{{ heroArticle.readTime }} min read</span>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-cols-2 gap-4">
            <article
              v-for="article in smallArticles"
              :key="article.id"
              class="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute top-2 left-2">
                  <span
                    :class="`inline-block ${categoryColor} text-xs font-semibold px-2 py-1 rounded-full`"
                  >
                    {{ cityName }}
                  </span>
                </div>
              </div>

              <div class="p-4 space-y-2">
                <h4
                  class="font-semibold text-gray-900 hover:text-ocean-deep transition-colors line-clamp-2 text-sm"
                >
                  <a :href="article.link">{{ article.title }}</a>
                </h4>
                <div class="flex items-center gap-1 text-xs text-gray-500">
                  <Clock class="w-3 h-3" />
                  <span>{{ article.readTime }} min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-12">
        <div
          class="w-24 h-1 bg-gradient-to-r from-ocean-deep to-ocean-light rounded-full"
        ></div>
      </div>
    </div>
  </section>
</template>
