<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ChevronLeft, ChevronRight, Clock } from "lucide-vue-next";

const guides = [
  {
    id: 1,
    title: "Hiking in Hammamet: Discovering Natural Treasures",
    category: "Hammamet",
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2021/08/randonneDjebel-bahloul-860x419.jpg",
    excerpt:
      "Hiking in Hammamet means exploring essential trails for an immersive experience in the heart of Mediterranean nature.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 4,
    link: "/blog/details",
  },
  {
    id: 2,
    title: "Top 10 Best Bars in Djerba – 2025",
    category: "Djerba",
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2021/08/MOS02742-860x573.jpg",
    excerpt:
      "Djerba attracts thousands of visitors each year with its beaches and unique culture. Its vibrant and diverse nightlife offers lively bars.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 5,
    link: "/blog/details",
  },
  {
    id: 3,
    title: "Tourism in Bizerte: Must-Visit Attractions",
    category: "Bizerte",
    image: "https://tunisiagotravel.com/blog/wp-content/uploads/2022/09/11-860x484.jpg",
    excerpt:
      "Tourism in Bizerte, located in northern Tunisia, reveals an adventure rich in discoveries. This Mediterranean city unveils a unique blend of culture.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 4,
    link: "/blog/details",
  },
  {
    id: 4,
    title: "11 Best Activities to Discover on Djerba Island",
    category: "Djerba",
    image:
      "https://tunisiagotravel.com/blog/wp-content/uploads/2021/08/djerba-860x573.jpg",
    excerpt:
      "Djerba, the largest island in southern Tunisia, captivates with its beaches, climate and rich heritage. UNESCO-listed, it blends Berber and Arab influences.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 8,
    link: "/blog/details",
  },

  {
    id: 5,
    title: "Discovering the Hidden Beaches of Mahdia",
    category: "Mahdia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSJjfUjiTRUo050FgYM4eRn4mSRJHhv5CSw&s",
    excerpt:
      "Mahdia offers pristine, turquoise beaches perfect for relaxation and scenic walks. A peaceful escape blending beauty and local charm.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 6,
    link: "/blog/details",
  },
  {
    id: 6,
    title: "Sousse Nightlife Guide: Best Clubs & Lounges",
    category: "Sousse",
    image:
      "https://media.evendo.com/locations-resized/BarImages/360x263/fa3fc46e-03d1-40ee-b74d-cb9a220356c1",
    excerpt:
      "Sousse is one of Tunisia’s most dynamic cities, offering a nightlife filled with energy, music, and unforgettable experiences.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 7,
    link: "/blog/details",
  },
  {
    id: 7,
    title: "Exploring the Medina of Tunis: Top Things to Do",
    category: "Tunis",
    image:
      "https://www.mywanderlust.pl/wp-content/uploads/2023/07/things-to-do-in-tunis-tunisia-96.jpg",
    excerpt:
      "The Medina of Tunis, a UNESCO World Heritage site, offers vibrant souks, historical mosques, and narrow alleys rich in culture.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 5,
    link: "/blog/details",
  },
  {
    id: 8,
    title: "Kairouan: A Journey Through Tunisia’s Spiritual Capital",
    category: "Kairouan",
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/20/9b/0b.jpg",
    excerpt:
      "Kairouan is known for its rich Islamic heritage, ancient monuments, and traditional craftsmanship, offering a deeply cultural visit.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 6,
    link: "/blog/details",
  },
  {
    id: 9,
    title: "Gabès Oasis: Exploring the Gateway Between Sea and Desert",
    category: "Gabès",
    image:
      "https://bunny-wp-pullzone-zygrvi9whu.b-cdn.net/wp-content/uploads/2025/09/gabes-600-1280x720.jpg",
    excerpt:
      "Gabès is one of the world’s rare coastal oases, offering unique landscapes where palm groves meet the Mediterranean Sea.",
    author: "Tunisia Go Travel",
    avatar:
      "https://secure.gravatar.com/avatar/45f396be357ec7ea96cd83f636aadf2399ea64cb3fd2a0fc370b76079e9da706?s=44&d=mm&r=g",
    readTime: 5,
    link: "/blog/details",
  },
];

const currentSlide = ref(0);
const itemsPerSlide = ref(3);
const slideWidth = computed(() => 100 / itemsPerSlide.value);
const totalSlides = computed(() => Math.ceil(guides.length / itemsPerSlide.value));

const updateItemsPerSlide = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    itemsPerSlide.value = 3;
  } else if (width >= 768) {
    itemsPerSlide.value = 2;
  } else {
    itemsPerSlide.value = 1;
  }
  currentSlide.value = 0;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

let autoplayInterval;

onMounted(() => {
  updateItemsPerSlide();
  window.addEventListener("resize", updateItemsPerSlide);
  autoplayInterval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsPerSlide);
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<template>
  <section
    class="relative bg-gradient-to-br from-ocean-deep to-ocean-mid py-20 overflow-hidden"
  >
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

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
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

    <div class="relative mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif text-white mb-4">
          Our travel guides in Tunisia
        </h2>
        <p class="text-xl text-white/90 font-light">Where to go in Tunisia?</p>
      </div>

      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out items-stretch"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="guide in guides"
            :key="guide.id"
            class="flex-shrink-0 px-4"
            :style="{ width: `${slideWidth}%` }"
          >
            <article
              class="h-full group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div class="relative overflow-hidden aspect-[3/2]">
                <img
                  :src="guide.image"
                  :alt="guide.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                <div class="absolute top-4 left-4">
                  <span
                    class="bg-white/90 backdrop-blur-sm text-ocean-deep text-sm font-semibold px-3 py-1.5 rounded-full"
                  >
                    {{ guide.category }}
                  </span>
                </div>
              </div>

              <div class="p-4 space-y-3">
                <h3
                  class="text-xl line-clamp-2 font-bold text-gray-900 group-hover:text-ocean-deep transition-colors duration-300"
                >
                  <a :href="guide.link" class="hover:underline">
                    {{ guide.title }}
                  </a>
                </h3>

                <div
                  class="w-12 h-0.5 bg-gradient-to-r from-ocean-deep to-ocean-mid"
                ></div>

                <div class="flex items-center gap-3 text-sm text-gray-600">
                  <div class="flex items-center gap-2">
                    <img
                      :src="guide.avatar"
                      :alt="guide.author"
                      class="w-8 h-8 rounded-full"
                    />
                    <span>{{ guide.author }}</span>
                  </div>
                  <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div class="flex items-center gap-1">
                    <Clock class="w-4 h-4" />
                    <span>{{ guide.readTime }} min</span>
                  </div>
                </div>

                <p class="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {{ guide.excerpt }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(_, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-200"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
