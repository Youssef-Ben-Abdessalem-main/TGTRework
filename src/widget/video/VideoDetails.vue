<script setup>
import { Home, Play, Video, Film } from "lucide-vue-next";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import thumb1 from "@/assets/images/thumbs/video-thumb-1.png";
import thumb2 from "@/assets/images/thumbs/video-thumb-2.png";
import thumb3 from "@/assets/images/thumbs/video-thumb-3.png";
import imageUrl from "@/assets/images/video-hero.png";
import { useRoute } from "vue-router";
import VideoPlayer from "@/widget/video/components/VideoPlayer.vue";
import LastArticle from "@/widget/articles/LastAtricles.vue";

const props = defineProps({
  slug: String,
});

const route = useRoute();
const slug = props.slug || route.params.slug;

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Videos" },
  { label: "Video Details" },
  { label: slug },
];

const similarVideos = [
  {
    id: "1",
    title: "Hôtel Joya Paradise & SPA Djerba",
    thumbnail: thumb1,
    duration: "1:57",
  },
  {
    id: "2",
    title: "Djerba - Discover the Island of Dreams",
    thumbnail: thumb2,
    duration: "3:24",
  },
  {
    id: "3",
    title: "Hôtel Golf Beach & Thalasso",
    thumbnail: thumb3,
    duration: "2:45",
  },
];
</script>

<template>
  <div>
    <Breadcrumbs
      title="Video Gallery"
      subtitle="Explore Tunisia through immersive videos and virtual experiences"
      :badge="{ icon: Video, label: 'Video Content' }"
      :image="imageUrl"
      :breadcrumbs="breadcrumbs"
    />

    <VideoPlayer
      videoTitle="Hôtel Joya Paradise & SPA Djerba"
      :videoThumbnail="thumb1"
      videoDuration="1:57"
      :similarVideos="similarVideos"
    />

    <LastArticle :IsMore="false" />
  </div>
</template>
