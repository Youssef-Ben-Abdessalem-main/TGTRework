<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Transport in Tunisia</h1>
        <p class="text-xl mb-8">Car rentals & transportation services</p>
        
        <!-- Transport Search -->
        <div class="bg-white rounded-lg p-4 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select class="p-3 border rounded-lg text-gray-800">
              <option>Service Type</option>
              <option>Car Rental</option>
              <option>Airport Transfer</option>
              <option>Private Driver</option>
            </select>
            <input type="text" placeholder="Pickup Location" class="p-3 border rounded-lg text-gray-800">
            <input type="date" placeholder="Date" class="p-3 border rounded-lg text-gray-800">
            <button class="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">Find Transport</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Transport Options -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Transportation Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="transport in transports" :key="transport.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img :src="transport.image" :alt="transport.name" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-2">
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{{ transport.type }}</span>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ transport.name }}</h3>
              <p class="text-gray-600 mb-4">{{ transport.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-green-600">${{ transport.price }}/day</span>
                <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Book Now</button>
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

const transports = ref([
  {
    id: 1,
    name: "Airport Transfer",
    type: "Transfer",
    description: "Comfortable transfer from/to airport",
    price: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LTr2kCyASqGE8-Hau6pXpLiNgxi7Q_DcDA&s"
  },
  {
    id: 2,
    name: "Private Driver",
    type: "Driver",
    description: "Professional driver for your trip",
    price: 80,
    image: "https://www.discovertunisia.com/uk/sites/default/files/watersports1.jpg"
  },
  {
    id: 3,
    name: "Car Rental",
    type: "Rental",
    description: "Economy car for city exploration",
    price: 35,
    image: "https://img.freepik.com/premium-photo/view-mediterranean-coast-with-beach-with-white-sand-green-palm-tree-djerba-island-tunisia_128089-382.jpg"
  }
])
</script>