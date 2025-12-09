<script setup>
import { ref } from "vue";
import {
  Play,
  Pause,
  Download,
  Share2,
  Shuffle,
  Volume2,
  Maximize,
} from "lucide-vue-next";

const props = defineProps({
  videoTitle: {
    type: String,
    required: true,
  },
  videoThumbnail: {
    type: String,
    required: true,
  },
  videoDuration: {
    type: String,
    required: true,
  },
  similarVideos: {
    type: Array,
    required: true,
  },
});

const isPlaying = ref(false);
const progress = ref(0);
const activeVideo = ref(null);

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};
</script>

<template>
  <section class="bg-background py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex-1 animate-fade-up" style="animation-delay: 0.1s">
          <div
            class="relative aspect-video bg-black rounded-xl overflow-hidden shadow-card group"
          >
            <img
              :src="videoThumbnail"
              :alt="videoTitle"
              class="w-full h-full object-cover"
            />

            <div
              class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                @click="togglePlay"
                class="w-20 h-20 rounded-full bg-white/90 hover:bg-sand-deep flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Pause v-if="isPlaying" class="w-8 h-8 text-sand-light" />
                <Play v-else class="w-8 h-8 text-sand-light" />
              </button>
            </div>

            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4"
            >
              <div
                class="relative h-1 bg-white/30 rounded-full mb-4 cursor-pointer group/progress"
              >
                <div
                  class="absolute h-full bg-white rounded-full transition-all duration-150"
                  :style="{ width: progress + '%' }"
                />
                <div
                  class="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"
                  :style="{ left: progress + '%' }"
                />

                <div
                  v-for="pos in [15, 35, 55, 75]"
                  :key="pos"
                  class="absolute top-1/2 -translate-y-1/2 w-1 h-3 bg-white/50 rounded-full"
                  :style="{ left: pos + '%' }"
                />
              </div>

              <div class="flex items-center justify-between text-white">
                <div class="flex items-center gap-4">
                  <button
                    @click="togglePlay"
                    class="hover:text-secondary transition-colors"
                  >
                    <Pause v-if="isPlaying" class="w-5 h-5" />
                    <Play v-else class="w-5 h-5" />
                  </button>

                  <span class="text-sm font-body">0:00 / {{ videoDuration }}</span>
                </div>

                <div class="flex items-center gap-4">
                  <button class="hover:text-secondary transition-colors">
                    <Volume2 class="w-5 h-5" />
                  </button>

                  <button class="hover:text-secondary transition-colors">
                    <Maximize class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 border-t border-border pt-6">
            <h2
              class="font-display text-2xl md:text-3xl font-semibold text-sand-mid mb-4"
            >
              {{ videoTitle }}
            </h2>

            <div class="flex items-center justify-between flex-wrap gap-4">
              <button
                class="flex items-center gap-2 text-sand-mid hover:text-primary-dark transition-colors font-medium"
              >
                <Download class="w-5 h-5" />
                <span>Download</span>
              </button>

              <button
                class="flex items-center gap-2 text-sand-mid hover:text-sand-mid transition-colors font-medium"
              >
                <Share2 class="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:w-80 xl:w-96 animate-fade-up" style="animation-delay: 0.3s">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-display text-xl font-semibold text-sand-mid">
              Similar videos
            </h3>

            <button class="text-sand-mid hover:text-sand-deep transition-colors">
              <Shuffle class="w-5 h-5" />
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="(video, index) in similarVideos"
              :key="video.id"
              class="flex gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200"
              :class="
                activeVideo === video.id
                  ? 'bg-sand-light/50 border-l-4 border-sand-mid'
                  : 'hover:bg-gray-100'
              "
              :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
              @click="activeVideo = video.id"
            >
              <div class="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  :src="video.thumbnail"
                  :alt="video.title"
                  class="w-full h-full object-cover"
                />

                <div
                  class="absolute inset-0 bg-sand-mid/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                >
                  <Play class="w-6 h-6 text-sand-mid" />
                </div>

                <span
                  class="absolute bottom-1 right-1 px-1.5 py-0.5 bg-sand-mid/80 text-white text-xs rounded"
                >
                  {{ video.duration }}
                </span>
              </div>

              <div class="flex-1 min-w-0">
                <h4
                  class="font-body text-sm font-medium text-sand-mid line-clamp-2 leading-tight"
                >
                  {{ video.title }}
                </h4>

                <span
                  v-if="activeVideo === video.id"
                  class="text-xs text-white/70 font-medium mt-1 inline-block"
                >
                  Now playing
                </span>
              </div>
            </div>
          </div>

          <button
            class="w-full mt-6 py-3 border border-border rounded-lg text-sand-mid hover:text-sand-deep hover:border-sand-mid hover:bg-sand-mid/50 transition-all duration-200 font-medium"
          >
            See more videos
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
