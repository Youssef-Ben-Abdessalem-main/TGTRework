<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Events in Tunisia</h1>
        <p class="text-xl mb-8">Cultural events & entertainment experiences</p>

        <!-- Event Search -->
        <div class="bg-white rounded-lg p-4 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Event Type"
              class="p-3 border rounded-lg text-gray-800"
            />
            <input
              type="text"
              placeholder="Location"
              class="p-3 border rounded-lg text-gray-800"
            />
            <input
              type="date"
              placeholder="Date"
              class="p-3 border rounded-lg text-gray-800"
            />
            <button class="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
              Find Events
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="event in events"
            :key="event.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img :src="event.image" :alt="event.name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-2">
                <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">{{
                  event.category
                }}</span>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ event.name }}</h3>
              <p class="text-gray-600 mb-2">{{ event.date }}</p>
              <p class="text-gray-500 mb-4">{{ event.location }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-purple-600">${{ event.price }}</span>
                <button
                  class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Book Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
  {
    id: 1,
    name: "Carthage Festival",
    category: "Music",
    date: "July 15-25, 2024",
    location: "Carthage Amphitheatre",
    price: 45,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LTr2kCyASqGE8-Hau6pXpLiNgxi7Q_DcDA&s",
  },
  {
    id: 2,
    name: "Sahara Music Festival",
    category: "Festival",
    date: "March 10-12, 2024",
    location: "Douz Desert",
    price: 80,
    image:
      "https://images.squarespace-cdn.com/content/v1/5d8121a0c6f1f54d44383709/1577778935723-9C37S1RGDE55LOHWKCJ8/PHOTO-2019-10-31-10-50-32.jpg",
  },
  {
    id: 3,
    name: "Medina Night Tours",
    category: "Cultural",
    date: "Every Friday",
    location: "Tunis Medina",
    price: 25,
    image:
      "https://thumbs.dreamstime.com/b/blue-doors-window-white-wall-building-sidi-bou-said-47242711.jpg",
  },
]);
</script>
