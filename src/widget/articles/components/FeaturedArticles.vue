<script setup>
import NewsCard from "@/widget/articles/components/NewsCard.vue";

const articles = [
  {
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/Hotels-seminaires-et-congres-en-Tunisie-420x280.webp",
    category: "Meilleurs hôtels",
    categoryColor: "bg-blue-100 text-blue-600",
    title: "Organiser un séminaire en Tunisie : les hôtels adaptés pour séminaires",
    description:
      "Découvrez les meilleurs hôtels de Tunisie pour organiser vos séminaires et événements d'entreprise...",
    author: "Tunisia Go Travel",
    date: "Novembre 15, 2024",
  },
  {
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2025/10/activites-Djerba-420x280.webp",
    category: "Djerba",
    categoryColor: "bg-teal-100 text-teal-600",
    title: "Que faire à Djerba ? Guide complet des activités essentielles",
    description:
      "Explorez les meilleures activités et expériences à vivre sur l'île de Djerba, perle du sud tunisien...",
    author: "Tunisia Go Travel",
    date: "Octobre 28, 2024",
  },
  {
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2024/12/Tunisia-trip-budget-420x280.webp",
    category: "Budget Voyage",
    categoryColor: "bg-orange-100 text-orange-600",
    title: "Tunisie avec un petit budget : conseils et astuces",
    description:
      "Découvrez comment visiter la Tunisie sans se ruiner avec nos conseils pratiques et bons plans...",
    author: "Tunisia Go Travel",
    date: "Décembre 10, 2024",
  },
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NewsCard v-for="(article, index) in articles" :key="index" v-bind="article" />
    </div>

    <div class="mt-16 text-center">
      <div class="inline-flex items-center justify-center w-full">
        <div
          class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        ></div>
        <div class="mx-4">
          <div class="w-8 h-8 bg-ocean-mid rounded-full flex items-center justify-center">
            <div class="w-3 h-3 bg-ocean-dark rounded-full"></div>
          </div>
        </div>
        <div
          class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        ></div>
      </div>
    </div>
  </section>
</template>
