<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { MapPin, Star, ChevronDown } from "lucide-vue-next";
import bg from "@/assets/images/musses/aerial-view-of-djerba-island-tunisia-turquoise-med.jpg";
const scrollY = ref(0);
const isLoaded = ref(false);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  isLoaded.value = true;
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <section class="relative h-screen overflow-hidden">
    <div
      class="h-32 bg-gradient-to-b from-white to-transparent absolute top-0 left-0 w-full z-[1000]"
    ></div>
    <div
      class="h-32 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full z-[1000]"
    ></div>
    <div class="absolute inset-0 scale-110">
      <img :src="bg" alt="Djerba Island aerial view" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background"
      />
    </div>

    <div
      class="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
    >
      <div
        class="transition-all duration-1000 delay-300"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div
          class="flex flex-col items-center justify-center gap-2 text-sand-deep/80 mb-4"
        >
          <MapPin class="w-4 h-4" />
          <span class="text-sm tracking-[0.3em] font-bold uppercase">Tunisie</span>
        </div>

        <h1 class="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight">
          Découvrez <br />
          <span class="italic text-sand-mid">Djerba</span>
        </h1>

        <p
          class="text-primary-foreground/80 max-w-xl mx-auto text-lg leading-relaxed mb-8"
        >
          L'île aux mille et une merveilles. Plages paradisiaques, culture millénaire et
          hospitalité légendaire.
        </p>

        <div class="flex flex-col items-center justify-center gap-2">
          <span class="text-primary-foreground/80 ml-2 text-sm">Plus de 500 avis</span>
          <div class="flex flex-row items-center gap-2 justify-center">
            <Star v-for="i in 5" :key="i" class="w-5 h-5 fill-accent text-accent" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
    />
  </section>
</template>
