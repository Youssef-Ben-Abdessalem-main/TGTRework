<script setup>
import { ref, onMounted } from "vue";
import { Image, Play, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const galleryImages = ref([
  {
    url: props.event.image,
    alt: props.event.title,
    type: "image",
  },
]);

// Add more images if available in the future
// This can be extended when the API provides additional gallery images

const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);
const isLoaded = ref(false);

const openLightbox = (index) => {
  currentImageIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  if (galleryImages.value.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length;
  }
};

const prevImage = () => {
  if (galleryImages.value.length > 1) {
    currentImageIndex.value =
      currentImageIndex.value === 0
        ? galleryImages.value.length - 1
        : currentImageIndex.value - 1;
  }
};

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center">
        <Image class="w-6 h-6 text-green-600 mr-3" />
        <h2 class="text-2xl font-bold text-gray-900">Event Gallery</h2>
      </div>
      <span class="text-sm text-gray-500">{{ galleryImages.length }} {{ galleryImages.length === 1 ? 'photo' : 'photos' }}</span>
    </div>

    <div class="mb-4">
      <div
        class="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-gray-100"
        @click="openLightbox(0)"
      >
        <img
          :src="galleryImages[0].url"
          :alt="galleryImages[0].alt"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          :class="{
            'opacity-0 translate-y-4': !isLoaded,
            'opacity-100 translate-y-0': isLoaded,
          }"
          @error="$event.target.src = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="absolute bottom-4 left-4 text-white">
            <span
              class="bg-green-600 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block"
              >Main Photo</span
            >
            <p class="font-medium">{{ galleryImages[0].alt }}</p>
          </div>
          <div class="absolute top-4 right-4">
            <ZoomIn class="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>

    <Transition name="lightbox">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl max-h-full" @click.stop>
          <img
            :src="galleryImages[currentImageIndex].url"
            :alt="galleryImages[currentImageIndex].alt"
            class="max-w-full max-h-full object-contain rounded-lg"
            @error="$event.target.src = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'"
          />

          <button
            v-if="galleryImages.length > 1"
            @click="prevImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-sand-light/90 text-sand-deep p-2 rounded-full transition-colors hover:bg-sand-light"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>

          <button
            v-if="galleryImages.length > 1"
            @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-sand-light/90 text-sand-deep p-2 rounded-full transition-colors hover:bg-sand-light"
          >
            <ChevronRight class="w-6 h-6" />
          </button>

          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 bg-sand-light/90 text-sand-deep p-2 rounded-full transition-colors"
          >
            <X class="w-6 h-6" />
          </button>

          <div
            class="absolute bottom-4 left-4 bg-black/50 glass text-white px-4 py-2 rounded-lg"
          >
            <p class="font-medium">{{ galleryImages[currentImageIndex].alt }}</p>
            <p v-if="galleryImages.length > 1" class="text-sm opacity-75">
              {{ currentImageIndex + 1 }} of {{ galleryImages.length }}
            </p>
          </div>

          <!-- <TransitionGroup
            name="gallery"
            tag="div"
            class="absolute bottom-4 right-4 flex space-x-2 max-w-lg overflow-x-auto"
          >
            <div
              v-for="(item, index) in galleryImages"
              :key="index"
              class="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg w-16 h-16"
              :class="{
                'border-2 border-sand-light  overflow-hidden':
                  index === currentImageIndex,
              }"
              @click="currentImageIndex = index"
            >
              <img
                :src="item.url"
                :alt="item.alt"
                class="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              />
              <div
                v-if="item.type === 'video'"
                class="absolute inset-0 bg-black/30 flex items-center justify-center"
              >
                <Play class="w-4 h-4 text-white" />
              </div>
            </div>
          </TransitionGroup> -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.gallery-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.gallery-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.gallery-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

.gallery-move {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
