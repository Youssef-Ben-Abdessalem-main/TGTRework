<script setup>
import { Clock } from "lucide-vue-next";

const props = defineProps({
  destinations: {
    type: Array,
    default: () => [
      {
        id: 1,
        name: "Djerba",
        subtitle: "Tourist guide to",
        category: "Djerba",
        categoryColor: "bg-teal-100 text-teal-600",
        hoverColor: "hover:text-teal-600",
        dividerColor: "from-ocean-deep to-ocean-light",
        featured: {
          title: "What to do in Djerba? Complete guide to essential activities and experiences",
          image: "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/activites-Djerba-615x410.webp",
          description: "Djerba is an island of cultural diversity: a warm blend of Berber, Judeo-Arab and Mediterranean culture, where white houses, souks and...",
          author: "Tunisia Go Travel",
          readTime: 10,
          link: "/blog/activites-djerba-island"
        },
        articles: [
          {
            id: 1,
            title: "What to do in Djerba? Complete guide to essential activities and experiences",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/activites-Djerba-330x220.webp",
            readTime: 10,
            link: "/blog/activites-djerba-island"
          },
          {
            id: 2,
            title: "11 best activities to discover on Djerba Island",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/08/djerba-330x220.jpg",
            readTime: 8,
            link: "/blog/meilleures-activites-djerba"
          },
          {
            id: 3,
            title: "Djerba by bike: your complete guide to responsible cycling tourism",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/Djerba-velo-330x220.webp",
            readTime: 8,
            link: "/blog/djerba-a-velo"
          }
        ]
      },
      {
        id: 2,
        name: "Hammamet",
        subtitle: "Our travel guides to",
        category: "Hammamet",
        categoryColor: "bg-orange-100 text-orange-600",
        hoverColor: "hover:text-orange-600",
        dividerColor: "from-sand-deep to-sand-light",
        featured: {
          title: "The best spas for a wellness stay in Hammamet",
          image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/11/20-860x484.jpg",
          description: "Discover the Oasis of relaxation: the best spas for a wellness stay in Hammamet.",
          author: "Tunisia Go Travel",
          readTime: 4,
          link: "/blog/sejour-bien-etre-a-hammamet"
        },
        articles: [
          {
            id: 1,
            title: "The best spas for a wellness stay in Hammamet",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/11/20-420x280.jpg",
            readTime: 4,
            link: "/blog/sejour-bien-etre-a-hammamet"
          },
          {
            id: 2,
            title: "Hammamet: events and festivals, dates and key information",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/08/festival-420x280.webp",
            readTime: 4,
            link: "/blog/decouvrir-les-evenements-et-festivals-a-hammamet"
          },
          {
            id: 3,
            title: "Hiking in Hammamet: Discovering natural treasures",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/08/randonneDjebel-bahloul-420x280.jpg",
            readTime: 4,
            link: "/blog/randonnees-a-hammamet"
          },
          {
            id: 4,
            title: "Top 7 attractions to visit in Hammamet during a stay",
            image: "https://tunisiagotravel.com/blog/wp-content/uploads/2021/12/hammamet-attraction-420x280.jpg",
            readTime: 9,
            link: "/blog/top-attractions-a-explorer-absolument-a-hammamet"
          }
        ]
      }
    ]
  }
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16 space-y-16">
    <div v-for="(destination, index) in destinations" :key="destination.id" class="space-y-8">
      <div class="text-start relative mb-2">
        <h2 class="text-3xl font-extrabold text-ocean-deep absolute left-10 -bottom-1">
          {{ destination.name }}
        </h2>
        <p class="text-7xl text-gray-300 font-extrabold">{{ destination.subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div :class="index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1'">
          <div class="space-y-4">
            <span :class="`inline-block ${destination.categoryColor} text-sm font-semibold px-3 py-1 rounded-full`">
              {{ destination.category }}
            </span>
            <h3 :class="`text-2xl font-bold text-gray-900 ${destination.hoverColor} transition-colors`">
              <a :href="destination.featured.link">
                {{ destination.featured.title }}
              </a>
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ destination.featured.description }}
            </p>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <span>By {{ destination.featured.author }}</span>
              <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>{{ destination.featured.readTime }} min read</span>
            </div>
          </div>
        </div>
        <div :class="index % 2 === 0 ? 'order-1 lg:order-2' : 'order-2'">
          <img
            :src="destination.featured.image"
            :alt="destination.featured.title"
            class="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>

      <div :class="destination.articles.length === 4 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'grid grid-cols-1 md:grid-cols-3 gap-6'">
        <article v-for="article in destination.articles" :key="article.id" class="group">
          <div class="space-y-3">
            <img
              :src="article.image"
              :alt="article.title"
              :class="destination.articles.length === 4 ? 'w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300' : 'w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300'"
            />
            <div class="space-y-2">
              <h4 :class="`font-semibold text-gray-900 ${destination.hoverColor} transition-colors line-clamp-2`">
                <a :href="article.link">{{ article.title }}</a>
              </h4>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <Clock class="w-4 h-4" />
                <span>{{ article.readTime }} min read</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div v-if="index < destinations.length - 1" class="flex justify-center">
        <div :class="`w-24 h-1 bg-gradient-to-r ${destination.dividerColor} rounded-full`"></div>
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
