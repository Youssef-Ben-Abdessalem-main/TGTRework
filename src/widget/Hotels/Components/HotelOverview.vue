<script setup>
import Transport from "@/widget/Views/Transport.vue";
</script>
<template>
  <div class="py-6 space-y-8">
    <div class="prose max-w-none">
      <div class="bg-gradient-to-r from-ocean-light/20 to-ocean-light/0 rounded-lg p-6">
        <p class="text-gray-700 leading-relaxed">
          The <strong>Hôtel Joya Paradise & Spa Djerba</strong>, a
          <strong>5-star</strong> establishment nestled in the tourist zone of
          <strong>Midoun</strong>, embodies an oasis of luxury on the island of Djerba.
        </p>
        <p class="text-gray-700 leading-relaxed mt-4">
          With its <strong>147 rooms</strong> (including connecting rooms for families)
          and a complete SPA (hammam, massages, hydro-massage baths), it combines modern
          comfort and varied activities.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div class="bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 class="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <i class="fas fa-map-marker-alt mr-2"></i>
            Location & Access
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <i class="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Located in Midoun, Djerba, 4 km from Houmt Souk</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>1.3 km from Sidi Mahrez beach</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>22 km from Djerba-Zarzis airport</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Free shuttle train to beach</span>
            </li>
          </ul>
        </div>

        <div class="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 class="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <i class="fas fa-car mr-2"></i>
            Transportation
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <i class="fas fa-plane text-blue-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Shuttle or taxi from Djerba-Zarzis (20 min)</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-parking text-blue-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Free private parking on site</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-train text-blue-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Free tourist mini-train to beach</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h3 class="text-xl font-semibold text-purple-800 mb-4 flex items-center">
            <i class="fas fa-bed mr-2"></i>
            Accommodation
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <i class="fas fa-door-open text-purple-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>147 rooms including family connecting rooms</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-users text-purple-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Capacity up to 4 people with extra beds</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-snowflake text-purple-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>A/C, TV, phone, fridge, WiFi in all rooms</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-eye text-purple-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Garden, pool or sea views available</span>
            </li>
          </ul>
        </div>

        <div class="bg-orange-50 rounded-lg p-6 border border-orange-200">
          <h3 class="text-xl font-semibold text-orange-800 mb-4 flex items-center">
            <i class="fas fa-utensils mr-2"></i>
            Dining & Entertainment
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <i
                class="fas fa-concierge-bell text-orange-500 mr-2 mt-1 flex-shrink-0"
              ></i>
              <span>À la carte restaurant with refined cuisine</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-pizza-slice text-orange-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Snack-pizzeria with grills and children's menu</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-cocktail text-orange-500 mr-2 mt-1 flex-shrink-0"></i>
              <span>Titanic night bar & Niagara Disco</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200"
    >
      <h3 class="text-2xl font-semibold text-teal-800 mb-6 flex items-center">
        <i class="fas fa-spa mr-3"></i>
        Wellness & Activities
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-lg font-semibold text-teal-700 mb-3 flex items-center">
            <i class="fas fa-leaf mr-2"></i>
            SPA Services
          </h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <i class="fas fa-hot-tub text-teal-500 mr-2"></i>
              <span>Hammam & hydro-massage baths</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-hands text-teal-500 mr-2"></i>
              <span>Massages in air-conditioned cabins</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-heart text-teal-500 mr-2"></i>
              <span>Couples massage room available</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-tea-hot text-teal-500 mr-2"></i>
              <span>Relaxation room with herbal teas</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-teal-700 mb-3 flex items-center">
            <i class="fas fa-water mr-2"></i>
            Water Sports & Activities
          </h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <i class="fas fa-ship text-teal-500 mr-2"></i>
              <span>Free: Pedal boats, kayaks</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-motorcycle text-teal-500 mr-2"></i>
              <span>Paid: Jet ski, parasailing</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-child text-teal-500 mr-2"></i>
              <span>Children's animations</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-umbrella-beach text-teal-500 mr-2"></i>
              <span>Access to equipped beach</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <i class="fas fa-concierge-bell mr-2"></i>
        Additional Services
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex items-center p-3 bg-white rounded-lg border">
          <i class="fas fa-wifi text-blue-500 mr-3"></i>
          <span class="text-gray-700">Free WiFi in common areas</span>
        </div>
        <div class="flex items-center p-3 bg-white rounded-lg border">
          <i class="fas fa-language text-green-500 mr-3"></i>
          <span class="text-gray-700">Multilingual staff</span>
        </div>
        <div class="flex items-center p-3 bg-white rounded-lg border">
          <i class="fas fa-shield-alt text-purple-500 mr-3"></i>
          <span class="text-gray-700">Secure parking</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
strong {
  color: rgb(var(--ocean-deep) / 1);
}
</style>
