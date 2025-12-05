<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const popularEvents = [
  {
    id: 1,
    title: "Laazara Band in concert at Vega Djerba",
    location: "Djerba Midoun Tourist Area, Djerba, Tunisia",
    image:
      "https://cdn.tunisiagotravel.com/unsafe/1045x384/smart/activities/events/laazara.webp",
    date: "1 mai 2025",
    status: "Past",
    link: "/events/laazara-band-en-concert-a-vega-djerba",
  },
  {
    id: 2,
    title: "Jazz Festival Carthage 2025",
    location: "Carthage Amphitheatre, Tunis, Tunisia",
    image:
      "https://www.tekiano.com/wp-content/uploads/2025/07/ibrahim-maalouf-carthage.jpg",
    date: "15 juillet 2025",
    status: "Upcoming",
    link: "/events/jazz-festival-carthage-2025",
  },
  {
    id: 3,
    title: "Sousse Summer Festival",
    location: "Sousse Medina, Sousse, Tunisia",
    image:
      "https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/empictures/b500/_1371_62.jpg?itok=BTV02ygT",
    date: "20 août 2025",
    status: "Upcoming",
    link: "/events/sousse-summer-festival",
  },
  {
    id: 4,
    title: "Djerba Cultural Night",
    location: "Houmt Souk, Djerba, Tunisia",
    image:
      "https://tmo-mag.com.tn/wp-content/uploads/2025/11/Djerba-Music-Land-Festival.webp",
    date: "10 septembre 2025",
    status: "Upcoming",
    link: "/events/djerba-cultural-night",
  },
  {
    id: 5,
    title: "Mahdia Beach Music Festival",
    location: "Mahdia Beach Resort, Mahdia, Tunisia",
    image: "https://en.mahdia-beach.com/wp-content/uploads/2022/12/Eljem2.jpg",
    date: "5 juin 2025",
    status: "Upcoming",
    link: "/events/mahdia-beach-music-festival",
  },
  {
    id: 6,
    title: "Hammamet International Festival",
    location: "Hammamet Cultural Center, Hammamet, Tunisia",
    image: "https://en.soundlightup.com/wp-content/uploads/2023/02/Nexo_Hammamet_FB.jpg",
    date: "25 juillet 2025",
    status: "Upcoming",
    link: "/events/hammamet-international-festival",
  },
];

const currentSlide = ref(0);
const itemsPerSlide = ref(3);
const slideWidth = computed(() => 100 / itemsPerSlide.value);
const totalSlides = computed(() => Math.ceil(popularEvents.length / itemsPerSlide.value));

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

const getShortMonth = (month) => {
  const months = {
    janvier: "Jan",
    février: "Feb",
    mars: "Mar",
    avril: "Apr",
    mai: "May",
    juin: "Jun",
    juillet: "Jul",
    août: "Aug",
    septembre: "Sep",
    octobre: "Oct",
    novembre: "Nov",
    décembre: "Dec",
  };
  return months[month] || month.slice(0, 3);
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
    class="relative bg-gradient-to-b from-ocean-deep via-ocean-mid to-white py-20 overflow-hidden"
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

    <div class="relative mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif text-white mb-4">Similar events</h2>
        <p class="text-xl text-white/90 font-light">
          Discover similar events across Tunisia that you may be may be interested in
        </p>
      </div>

      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out items-stretch"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="event in popularEvents"
            :key="event.id"
            class="flex-shrink-0 px-4"
            :style="{ width: `${slideWidth}%` }"
          >
            <a
              :href="event.link"
              :aria-label="`Event ${event.title}`"
              class="group rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 bg-white h-80 flex flex-col"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="event.image"
                  :alt="event.title"
                  class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span
                class="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium"
                :class="
                  event.status === 'Past'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                "
              >
                {{ event.status }}
              </span>

              <div class="p-4 flex flex-col relative">
                <h3
                  class="w-[80%] text-lg font-semibold text-ocean-deep mb-2 line-clamp-2 group-hover:text-ocean-deep transition-colors flex-1"
                >
                  {{ event.title }}
                </h3>
                <div class="space-y-2 mt-auto">
                  <div class="flex items-center text-sm text-gray-600">
                    <svg
                      class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span class="truncate w-[50%]">{{ event.location }}</span>
                  </div>
                  <div class="absolute top-3 right-2">
                    <div
                      class="bg-gradient-to-br from-ocean-deep to-ocean-mid w-20 justify-center flex flex-col items-center rounded-lg p-2 mr-3 shadow-sm"
                    >
                      <div
                        class="text-white text-xs font-bold items-center gap-1 flex justify-start text-center leading-none"
                      >
                        <div class="text-lg font-black">
                          {{ event.date.split(" ")[0] }}
                        </div>
                        <div class="text-xl">
                          {{ getShortMonth(event.date.split(" ")[1]) }}
                        </div>
                      </div>
                      <div>
                        <span class="text-sm text-white/50 font-medium">{{
                          event.date.split(" ")[2]
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
</style>
