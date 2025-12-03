<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-half-secondary to-white text-third py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Hotels in Tunisia</h1>
        <p class="text-xl mb-8">Discover luxury accommodations across Tunisia</p>

        <!-- Search Bar -->
        <div class="bg-white rounded-lg p-4 max-w-4xl mx-auto shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Destination"
              class="p-3 border rounded-lg text-gray-800"
            />
            <input type="date" class="p-3 border rounded-lg text-gray-800" />
            <input type="date" class="p-3 border rounded-lg text-gray-800" />
            <button class="bg-third text-white p-3 rounded-lg">Search Hotels</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotels Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Featured Hotels</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="hotel in hotels"
            :key="hotel.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img :src="hotel.image" :alt="hotel.name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ hotel.name }}</h3>
              <p class="text-gray-600 mb-4">{{ hotel.location }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-blue-600"
                  >${{ hotel.price }}/night</span
                >
                <button
                  class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Now
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

const hotels = ref([
  {
    id: 1,
    name: "Djerba Beach Resort",
    location: "Djerba Island",
    price: 120,
    image:
      "https://img.freepik.com/premium-photo/view-mediterranean-coast-with-beach-with-white-sand-green-palm-tree-djerba-island-tunisia_128089-382.jpg",
  },
  {
    id: 2,
    name: "Tunis Grand Hotel",
    location: "Tunis City Center",
    price: 85,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LTr2kCyASqGE8-Hau6pXpLiNgxi7Q_DcDA&s",
  },
  {
    id: 3,
    name: "Sahara Luxury Camp",
    location: "Sahara Desert",
    price: 200,
    image:
      "https://images.squarespace-cdn.com/content/v1/5d8121a0c6f1f54d44383709/1577778935723-9C37S1RGDE55LOHWKCJ8/PHOTO-2019-10-31-10-50-32.jpg",
  },
]);
</script>
