<script setup>
import { MapPin, ArrowRight } from "lucide-vue-next";

const props = defineProps({
  title: String,
  location: String,
  date: String,
  image: String,
  status: String,
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
    Janvier: "Jan",
    Février: "Fév",
    Mars: "Mar",
    Avril: "Avr",
    Mai: "Mai",
    Juin: "Jun",
    Juillet: "Jul",
    Août: "Aoû",
    Septembre: "Sep",
    Octobre: "Oct",
    Novembre: "Nov",
    Décembre: "Déc",
  };
  return monthMap[month] || month.slice(0, 3);
};

const dateParts = getDateParts(props.date);
const isUpcoming = props.status === "upcoming";
</script>

<template>
  <a
    href="#"
    class="group relative flex flex-col h-[330px] rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-gold/40 shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 cursor-pointer"
  >
    <div class="relative h-52 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"
      />

      <div class="absolute top-4 left-4">
        <span
          :class="[
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300',
            isUpcoming
              ? 'bg-emerald-500/90 text-white shadow-lg shadow-emerald-500/30'
              : 'bg-rose-500/90 text-white shadow-lg shadow-rose-500/30',
          ]"
        >
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full',
              isUpcoming ? 'bg-white animate-pulse' : 'bg-white/70',
            ]"
          />
          {{ isUpcoming ? "Coming Soon" : "Expired" }}
        </span>
      </div>

      <div class="absolute top-4 right-4">
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-br from-sand-mid via-sand-light to-gold rounded-xl blur-sm opacity-50"
          />
          <div
            class="relative bg-gradient-to-br from-ocean-mid to-navy p-3 rounded-xl text-center min-w-[70px] border border-sand-mid/30 shadow-xl"
          >
            <div class="text-2xl font-black text-white leading-none">
              {{ dateParts.day }}
            </div>
            <div class="text-sm font-bold text-white/70 uppercase tracking-wide">
              {{ getShortMonth(dateParts.month) }}
            </div>
            <div class="text-[10px] text-gray-400 mt-0.5">
              {{ dateParts.year }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-1 p-5">
      <h3
        class="text-gray-900 font-bold text-lg leading-tight line-clamp-2 group-hover:text-ocean-mid transition-colors duration-300 mb-3"
      >
        {{ title }}
      </h3>

      <div class="flex items-start gap-2 text-gray-600 mt-auto">
        <MapPin class="w-4 h-4 text-ocean-mid shrink-0 mt-0.5" />
        <span class="text-sm line-clamp-2">{{ location }}</span>
      </div>

      <div
        class="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
      >
        <RouterLink :to="`/events/${title}`">
          <div
            class="w-10 h-10 rounded-full bg-ocean-mid/10 border border-ocean-mid/30 flex items-center justify-center"
          >
            <ArrowRight class="w-5 h-5 text-ocean-mid" />
          </div>
        </RouterLink>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ocean-mid/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />
  </a>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
