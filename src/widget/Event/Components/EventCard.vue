<script setup>
import {
  MapPin,
  ArrowRight,
  User,
  Calendar,
  MapPinHouseIcon,
  Calendar1,
  LocateIcon,
} from "lucide-vue-next";

const props = defineProps({
  title: String,
  location: String,
  date: String,
  image: String,
  status: String,
  slug: String,
  index: Number,
});

const getDateParts = (dateString) => {
  const parts = dateString.split(" ");
  return {
    day: parts[0] || "",
    month: parts[1] || "",
    year: parts[2] || "",
  };
};

const getShortMonth = (month) => {
  const monthMap = {
    jan: "Jan",
    févr: "Feb",
    mar: "Mar",
    avr: "Apr",
    mai: "May",
    jui: "Jun",
    jui: "Jul",
    aoû: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    déc: "Dec",
  };
  return monthMap[month] || month.slice(0, 3);
};

const dateParts = getDateParts(props.date);
</script>

<template>
  <div class="flip-card w-96 h-[300px] relative">
    <div class="flip-card-inner w-full h-full">
      <div class="flip-card-front bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="relative h-full">
          <img
            :src="props.image"
            alt="Students viewing art"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute top-0 left-0 bg-gradient-to-br from-sand-mid via-sand-mid/50 to-transparent flex justify-center items-center flex-col w-16 h-16 rounded-br-xl text-white font-bold text-center"
          >
            <span class="block text-xl">22</span>
            <span class="block text-sm uppercase">Mar</span>
          </div>
          <div class="absolute inset-x-0 bottom-0 glass p-4 text-white">
            <h2 class="text-md font-semibold">{{ props.title }}</h2>
          </div>
        </div>
      </div>

      <div
        class="flip-card-back bg-sand-mid shadow-xl rounded-lg p-8 flex flex-col justify-between relative"
      >
        <div>
          <h2 class="text-white text-md font-bold mb-6">{{ props.title }}</h2>

          <div class="space-y-2 text-white">
            <div class="flex items-center space-x-4 border-b border-white/30 pb-1">
              <span class="text-xs"> <Calendar1 /> </span>
              <span class="text-xs">
                {{ getShortMonth(dateParts.month) }} {{ dateParts.day }} ,
                {{ dateParts?.year }}
              </span>
            </div>
            <div class="flex items-center space-x-4 border-b border-white/30 pb-1">
              <span class="text-xs"> <LocateIcon /> </span>
              <span class="text-xs">
                {{ props.location }}
              </span>
            </div>
          </div>
        </div>
        <RouterLink :to="`/events/${slug}`">
          <button
            class="w-full bg-white absolute bottom-0 left-0 text-sand-mid font-bold py-3 mt-8 transition duration-300"
          >
            View Details
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
