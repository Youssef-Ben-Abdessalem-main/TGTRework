<script setup>
import {
  Share2,
  Facebook,
  Twitter,
  Mail,
  Printer,
  User,
  Calendar,
  Clock,
} from "lucide-vue-next";

const props = defineProps({
  title: String,
  featuredImage: String,
  content: Array,
  author: { type: String, default: "Tunisia Go Travel" },
  publishDate: { type: String, default: new Date().toLocaleDateString() },
  readingTime: { type: Number, default: 5 },
  tags: { type: Array, default: () => ["Travel", "Tunisia", "Guide"] },
});

const tableOfContents = props.content
  .filter((section) => section.type === "heading")
  .map((section) => section.text);

const relatedArticles = [
  {
    id: 1,
    title: "Best Hotels in Tunisia",
    excerpt: "Discover luxury accommodations...",
  },
  { id: 2, title: "Tunisia Travel Guide", excerpt: "Complete guide to visiting..." },
  { id: 3, title: "Cultural Experiences", excerpt: "Immerse yourself in local..." },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "facebook" },
  { name: "Twitter", icon: Twitter, url: "twitter" },
  { name: "Email", icon: Mail, url: "email" },
  { name: "Print", icon: Printer, url: "print" },
];

const shareArticle = (platform) => {
  const url = window.location.href;
  const title = props.title;

  switch (platform) {
    case "facebook":
      window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`);
      break;
    case "twitter":
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`
      );
      break;
    case "email":
      window.location.href = `mailto:?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(url)}`;
      break;
    case "print":
      window.print();
      break;
  }
};
</script>

<template>
  <article class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-[2fr_1fr] gap-8">
    <div class="w-full">
      <div class="mb-8">
        <img
          :src="featuredImage"
          :alt="title"
          class="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div class="mb-6 flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <User class="w-4 h-4" />
            <span>{{ author }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Calendar class="w-4 h-4" />
            <span>{{ publishDate }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Clock class="w-4 h-4" />
            <span>{{ readingTime }} min read</span>
          </div>
        </div>
      </div>

      <div class="prose prose-lg max-w-none">
        <div class="space-y-6">
          <div v-for="(section, index) in content" :key="index">
            <h2
              v-if="section.type === 'heading'"
              class="text-2xl font-bold text-gray-900 mt-8 mb-4"
            >
              {{ section.text }}
            </h2>

            <p
              v-else-if="section.type === 'paragraph'"
              class="text-gray-700 leading-relaxed mb-4"
            >
              {{ section.text }}
            </p>

            <blockquote
              v-else-if="section.type === 'quote'"
              class="border-l-4 border-blue-500 pl-6 italic text-gray-600 my-6"
            >
              {{ section.text }}
            </blockquote>

            <img
              v-else-if="section.type === 'image'"
              :src="section.src"
              :alt="section.alt"
              class="w-full rounded-lg shadow-md my-6"
            />
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in tags"
            :key="tag"
            class="px-3 py-1 bg-ocean-light/20 text-ocean-deep text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Share2 class="w-5 h-5" />
            Share this article
          </h3>

          <div class="flex gap-3">
            <button
              v-for="social in socialLinks"
              :key="social.name"
              @click="shareArticle(social.url)"
              class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <aside class="space-y-6">
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="font-semibold text-gray-900 mb-4">Table of Contents</h3>
        <ul class="space-y-2">
          <li v-for="(heading, index) in tableOfContents" :key="index">
            <a href="#" class="text-ocean-deep hover:text-ocean-mid text-sm">
              {{ heading }}
            </a>
          </li>
        </ul>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="font-semibold text-gray-900 mb-4">Related Articles</h3>
        <div class="space-y-4">
          <div
            v-for="article in relatedArticles"
            :key="article.id"
            class="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <h4 class="font-medium text-gray-900 text-sm mb-1">
              {{ article.title }}
            </h4>
            <p class="text-gray-600 text-xs">
              {{ article.excerpt }}
            </p>
          </div>
        </div>
      </div>

      <div class="bg-ocean-light/10 p-6 rounded-lg">
        <h3 class="font-semibold text-ocean-deep mb-2">Need Help Planning?</h3>
        <p class="text-ocean-mid text-sm mb-4">
          Contact our travel experts for personalized assistance.
        </p>
        <button
          class="w-full bg-ocean-deep text-white py-2 px-4 rounded-lg hover:bg-ocean-mid transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </aside>
  </article>
</template>
