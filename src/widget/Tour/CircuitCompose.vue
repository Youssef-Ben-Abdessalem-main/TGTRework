<script setup>
import { Home, Info, Map, MapPin, Plus } from "lucide-vue-next";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import Stepper from "@/widget/Tour/Components/Stepper.vue";
import Select from "@/components/ui/select/Select.vue";
import CreateCircuit from "./Components/CreateCircuit.vue";
import imageUrl from "@/assets/images/Tour.png";
import LastAtricles from "@/widget/articles/LastAtricles.vue";

const breadcrumbs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Tours" },
  { label: "Create Tour", href: "/circuits/compose" },
];

const steps = [
  {
    label: "Choose your departure and arrival city",
    description:
      "Indicate where you wish to depart from and where you want to end your itinerary.",
  },
  {
    label: "Set your budget",
    description:
      "Select the amount you wish to allocate for the trip. This allows us to choose accommodations, restaurants, and activities suited to your budget.",
  },
  {
    label: "Select your travel dates",
    description:
      "Please indicate the dates to optimize the organization of bookings and activities.",
  },
  {
    label: "Your itinerary is ready!",
    description:
      "Enjoy a complete plan with accommodations, restaurants, activities, and cultural experiences, all tailored to your budget and preferences.",
  },
];
</script>

<template>
  <Breadcrumbs
    title="Create Your Tour"
    subtitle="Design your perfect Tunisian adventure with our intelligent tour builder"
    :badge="{ icon: Map, label: 'Tour Builder' }"
    :image="imageUrl"
    :breadcrumbs="breadcrumbs"
  />
  <main class="max-w-7xl mx-auto px-6 py-12 mt-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="space-y-8">
        <div class="opacity-0 animate-fade-in">
          <span
            class="inline-flex items-center gap-2 text-ocean-mid font-semibold text-sm tracking-wide uppercase mb-3"
          >
            <MapPin class="w-4 h-4" />
            How It Works
          </span>
          <h2 class="text-4xl text-foreground">
            How to create your
            <span class="text-ocean-mid font-medium">custom itinerary</span>
          </h2>
        </div>

        <Stepper :steps="steps" :currentStep="3" type="numeric" />
      </div>

      <div>
        <CreateCircuit />
      </div>
    </div>

    <LastAtricles :IsMore="true" />
  </main>
</template>
