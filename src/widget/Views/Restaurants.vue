<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Restaurants in Tunisia</h1>
        <p class="text-xl mb-8">Authentic Tunisian cuisine & fine dining experiences</p>
        
        <!-- Search Bar -->
        <div class="bg-white rounded-lg p-4 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="text" placeholder="Location" class="p-3 border rounded-lg text-gray-800">
            <select class="p-3 border rounded-lg text-gray-800">
              <option>Cuisine Type</option>
              <option>Tunisian</option>
              <option>Mediterranean</option>
              <option>International</option>
            </select>
            <input type="date" placeholder="Date" class="p-3 border rounded-lg text-gray-800">
            <button class="bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700">Find Restaurants</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Restaurants Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Popular Restaurants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="restaurant in restaurants" :key="restaurant.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img :src="restaurant.image" :alt="restaurant.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ restaurant.name }}</h3>
              <p class="text-gray-600 mb-2">{{ restaurant.cuisine }}</p>
              <p class="text-gray-500 mb-4">{{ restaurant.location }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span class="text-yellow-500">★</span>
                  <span class="ml-1">{{ restaurant.rating }}</span>
                </div>
                <button class="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">Reserve Table</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const restaurants = ref([
  {
    id: 1,
    name: "Dar El Jeld",
    cuisine: "Traditional Tunisian",
    location: "Tunis Medina",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K7I8Z55znGju0Vu1PGBJFhilCatjBJNIcg&s"
  },
  {
    id: 2,
    name: "Le Baroque",
    cuisine: "Mediterranean Fine Dining",
    location: "Sidi Bou Said",
    rating: 4.9,
    image: "https://www.revigorate.com/images/Cafe-Delices-Sidi-Bou-Said.jpg"
  },
  {
    id: 3,
    name: "Sidi Bou Fares",
    cuisine: "Seafood & Tunisian",
    location: "Hammamet",
    rating: 4.7,
    image: "https://thumbs.dreamstime.com/b/blue-doors-window-white-wall-building-sidi-bou-said-47242711.jpg"
  }
])
</script>