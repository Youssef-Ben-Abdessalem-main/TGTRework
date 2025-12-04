<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import TopHeader from "./shared/TopHeader.vue";
import Navbar from "./shared/Navbar.vue";
import Footer from "./shared/Footer.vue";
import Newsletter from "./shared/Newsletter.vue";
import { ArrowUp, ArrowUpToLine } from "lucide-vue-next";
import PartnerBorder from "@/widget/partnership/PartnerBorder.vue";
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";

const showScrollTop = ref(false);

function ScrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleScroll() {
  showScrollTop.value = window.pageYOffset > 100;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="flex flex-col poppins-regular">
    <TopHeader />
    <Navbar />
    <div class="min-h-screen mb-5">
      <RouterView />
    </div>
    <PartnerBorder />
    <Footer />
    <div
      class="z-50 fixed bottom-10 right-10 w-16 h-16 bg-ocean-mid/50 flex justify-center items-center cursor-pointer rounded-full hover:bg-ocean-mid/70 transition-all"
      @click="ScrollTop()"
      v-if="showScrollTop"
    >
      <div
        class="w-14 h-14 bg-ocean-mid/80 flex justify-center items-center rounded-full"
      >
        <ArrowUp class="w-8 h-8 text-white" />
      </div>
    </div>
    <Toaster position="top-center" class="bg-ocean-deep" />
  </div>
</template>

<style scoped></style>
