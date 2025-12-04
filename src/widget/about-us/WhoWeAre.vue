<script setup>
import { ref } from "vue";
import { MapPin, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-vue-next";
import { toast } from "vue-sonner";
import Button from "@/components/ui/button/Button.vue";

const email = ref("");
const isSubmitting = ref(false);

const locationData = {
  mapUrl:
    "https://www.google.com/maps/place/Nadas+Group/@36.8365051,10.1354299,20z/data=!4m20!1m13!4m12!1m4!2m2!1d10.1367275!2d36.8316488!4e1!1m6!1m2!1s0x12fd3312d9dfed6f:0x2b3e065a01842e73!2sEl+Manar+1,+Tunis!2m2!1d10.1465179!2d36.8321508!3m5!1s0x12fd3328f62beed1:0x1a5bd44f4825cc10!8m2!3d36.8366431!4d10.1356836!16s%2Fg%2F11ks5t9mvc?entry=ttu",
  mapImage:
    "https://tunisiagotravel.com/blog/wp-content/uploads/2022/09/R-1-1024x505.png",
  alt: "Tunisia Go Travel Location",
  address: "2092, El Manar 1, Tunis",
};

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/tunisiagotravel",
    icon: Instagram,
    bgColor: "bg-purple-600",
    iconColor: "text-white",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tunisiagotravel",
    icon: Facebook,
    bgColor: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@tunisiagotravel/",
    icon: Youtube,
    bgColor: "bg-red-600",
    iconColor: "text-white",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tunisiagotravel/",
    icon: "div",
    bgColor: "bg-black",
    iconColor: "text-white",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/tunisiagotn/",
    icon: Twitter,
    bgColor: "bg-sky-500",
    iconColor: "text-white",
  },
];

const handleSubmit = async () => {
  if (!email.value) return;

  isSubmitting.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    email.value = "";

    toast.success("Successfully subscribed to newsletter!");
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    toast.error("Subscription failed. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<template>
  <section class="relative">
    <div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 justify-end gap-8 h-full lg:h-[600px] py-3 items-center lg:bg-none bg-gradient-to-b from-ocean-deep"
      >
        <div
          class="lg:bg-ocean-deep w-full rounded-none lg:rounded-r-full border-r-none lg:border-r-8 border-white lg:border-y-8 py-6 px-5 z-10 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div class="w-full lg:w-[200px] h-full flex flex-col lg:grid grid-rows-2">
            <div
              class="flex flex-col items-start text-stroke text-4xl sm:text-5xl lg:text-6xl py-4 lg:bg-transparent"
            >
              <span>Who Are We ?</span>
            </div>

            <div class="space-y-6">
              <div class="grid grid-cols-3 lg:grid-cols-1 gap-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="group flex flex-row items-center space-x-3 lg:text-ocean-light text-white text-lg w-max"
                >
                  <div
                    :class="`w-12 h-12 ${social.bgColor} glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`"
                  >
                    <component
                      v-if="social.icon != 'div'"
                      :is="social.icon"
                      :class="`w-6 h-6 ${social.iconColor}`"
                    />
                    <i v-else class="fa-brands fa-tiktok text-white"></i>
                  </div>

                  <span>{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="w-full lg:inline-block rounded-full hidden bg-ocean-light/20">
            <img
              src="@/assets/images/global_img.png"
              class="w-full h-full object-contain lg:object-fill opacity-50"
            />
          </div>
        </div>

        <div
          class="w-full lg:bg-gradient-to-r from-ocean-mid/30 to-white h-full lg:h-[97%] lg:-translate-x-80"
        >
          <div
            class="space-y-6 flex justify-center lg:absolute lg:right-0 lg:translate-x-1/3 lg:-translate-y-1/2 top-1/2"
          >
            <div class="rounded-2xl p-8">
              <div class="space-y-6">
                <div
                  class="text-center space-y-3 justify-center w-full flex flex-col items-center"
                >
                  <h2 class="text-4xl font-bold text-ocean-deep/70 lg:text-ocean-mid">
                    Stay Informed!
                  </h2>
                  <p class="text-gray-600 w-4/5 text-center leading-relaxed">
                    Subscribe now to our newsletter and receive exclusive updates and news
                    first.
                  </p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                  <div class="relative">
                    <input
                      v-model="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-deep focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    />
                    <Mail
                      class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-ocean-deep hover:bg-ocean-mid text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span v-if="!isSubmitting">Subscribe</span>
                    <span v-else class="flex items-center gap-2">
                      <div
                        class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                      ></div>
                      Subscribing...
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tiktok-icon {
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='white' d='M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z'/%3E%3C/svg%3E")
    no-repeat center;
  background-size: contain;
}

.text-stroke {
  -webkit-text-stroke: 1.5px rgb(255, 255, 255, 0.7);
  color: transparent;
}
</style>
