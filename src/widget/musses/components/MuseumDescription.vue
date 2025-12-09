<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { BookOpen, ExternalLink, MapPin } from "lucide-vue-next";

const isVisible = ref(false);
const isExpanded = ref(false);

const sectionRef = ref(null);

const fullText = `
The former Museum of Popular Arts and Traditions has been housed since 1969 in the Zaouia of Sidi Zitouni in Houmet Souk in the north of the island. This monument was built at the end of the 18th century by Hmida Ben Ayyed, then governor “Gueyed” of the island, to commemorate the meritorious acts of Sheikh Abou Bakr Ezzitouni in the field of magistracy and, above all, for consolidating the influence of Malekism on the island.

The museum's early collections included valuable examples of the island's traditional material heritage, arranged by theme in different areas of the monument: manuscripts in the Zaouia library, costumes in the El Fnaar room, jewelry in the funeral room, unglazed pottery in the two courtyards of the Zaouia, and kitchen utensils and agricultural tools in other areas.
`;

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting;
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-sand-light/10 relative">
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        class="relative block w-full h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="fill-white"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </div>
    <div
      class="h-32 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full z-[1000] pointer-events-none"
    ></div>
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div
          :class="[
            'transition-all duration-1000',
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
          ]"
        >
          <div class="text-start relative mb-8">
            <h2
              class="text-2xl font-extrabold bg-gradient-to-r from-ocean-deep via-ocean-light to-cyan-500 bg-clip-text text-transparent absolute left-10 -bottom-1"
            >
              {{ "Description" }}
            </h2>
            <p class="text-7xl text-gray-300 font-extrabold">
              {{ "About" }}
            </p>
          </div>

          <div class="relative">
            <p
              :class="[
                'text-muted-foreground leading-relaxed text-lg transition-all duration-500',
                !isExpanded ? 'line-clamp-6' : '',
              ]"
            >
              {{ fullText }}
            </p>

            <div
              v-if="!isExpanded"
              class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fff3ee] to-transparent"
            />
          </div>

          <button
            @click="isExpanded = !isExpanded"
            class="mt-6 text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            {{ isExpanded ? "See less" : "See more" }}
            <ExternalLink class="w-4 h-4" />
          </button>
        </div>

        <div
          :class="[
            'transition-all duration-1000 delay-200',
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
          ]"
        >
          <div class="relative rounded-3xl overflow-hidden bg-card shadow-xl">
            <div class="relative h-[400px] bg-muted">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.8,33.8,11.0,34.0&layer=mapnik&marker=33.9,10.9"
                class="w-full h-full border-0"
                title="Map of Djerba"
              ></iframe>

              <div class="absolute inset-0 bg-black/10" />

              <div
                class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="font-serif text-foreground font-medium mb-1">
                      Houmt Souk
                    </h4>
                    <p class="text-sm text-muted-foreground">Djerba Island, Tunisia</p>
                  </div>
                  <button
                    class="px-4 py-2 bg-sand-mid text-white rounded-full text-sm font-medium hover:bg-sand-deep/90 transition-colors"
                  >
                    Open the map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
