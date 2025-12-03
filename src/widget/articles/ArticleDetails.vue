<script setup>
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import ArticleContent from "@/widget/articles/components/ArticleContent.vue";
import { Home, FileText } from "lucide-vue-next";

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Articles", href: "/blogs" },
  { label: "Travel Tips" },
  { label: "Organizing a Seminar in Tunisia" },
];

const articleContent = [
  {
    type: "paragraph",
    text:
      "L'Italie est un territoire où l'art s'exprime partout. Les rues, les places et les palais racontent des siècles de création, tandis que la scène contemporaine continue d'y trouver son inspiration.",
  },
  {
    type: "paragraph",
    text:
      "Voici dix villes où l'art se vit partout : dans les rues animées et leurs fresques, dans les palais chargés d'histoire comme le Palazzo Vecchio ou le Palais des Doges, dans les musées emblématiques tels que les Offices ou la Galerie Borghèse, mais aussi à travers des fêtes populaires comme le Palio de Sienne ou la Biennale de Venise.",
  },
  { type: "heading", text: "1. Florence : la capitale de la Toscane" },
  {
    type: "paragraph",
    text:
      "Florence incarne le cœur de la Renaissance italienne. À la Galerie des Offices, vous découvrirez La Naissance de Vénus de Botticelli, ainsi que des chefs-d'œuvre de Raphaël et Titien.",
  },
  { type: "heading", text: "2. Rome : la ville-musée à chaque coin de rue" },
  {
    type: "paragraph",
    text:
      "Rome rassemble deux mille ans d'art et d'architecture. Les musées du Vatican offrent la Chapelle Sixtine et l'ampleur du travail de Michel-Ange.",
  },
];
</script>

<template>
  <div class="flex flex-col">
    <Breadcrumbs
      title="Organizing a Seminar in Tunisia"
      subtitle="Discover how to organize a memorable seminar in Tunisia with our expert tips"
      :badge="{ icon: FileText, label: 'Article Details' }"
      :image="'https://tunisiagotravel.com/blog/wp-content/uploads/2025/11/Une-vue-panoramique-de-Florence-au-coucher-du-soleil.webp'"
      :breadcrumbs="breadcrumbs"
    />

    <ArticleContent
      title="Organizing a Seminar in Tunisia"
      featured-image="https://tunisiagotravel.com/blog/wp-content/uploads/2025/11/Une-vue-panoramique-de-Florence-au-coucher-du-soleil.webp"
      :content="articleContent"
    />
  </div>
</template>
