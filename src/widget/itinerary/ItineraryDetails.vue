<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { MapPin, Navigation, Clock, Car, Route, Compass, Locate } from "lucide-vue-next";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Add CSS for route animation
const style = document.createElement("style");
style.textContent = `
  @keyframes dash {
    to {
      stroke-dashoffset: -30;
    }
  }
  .route-line {
    stroke-dasharray: 20,10;
    animation: dash 2s linear infinite;
  }
`;
document.head.appendChild(style);

const route = useRoute();
const { from, to } = route.params;

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Itinerary", href: "/itinerary" },
  {
    label: `Traveling to ${to.replaceAll("-", " ")}`,
    href: `/itinerary/${from}/${to}`,
  },
];

const isLoaded = ref(false);
const selectedRoute = ref(0);
const map = ref(null);
const userLocation = ref(null);
const destination = ref({ lat: 33.8969, lng: 10.7561 }); // Djerba coordinates
const routeLayer = ref(null);
const isLocating = ref(false);

const itinerary = {
  from: from.replace(/-/g, " "),
  to: to.replace(/-/g, " "),
  distance: "45.2 km",
  duration: "52 minutes",
  routes: [
    {
      id: 1,
      name: "Fastest Route",
      duration: "52 min",
      distance: "45.2 km",
      type: "car",
      traffic: "light",
      steps: [
        {
          instruction: "Head north on Avenue Habib Bourguiba",
          distance: "1.2 km",
          duration: "3 min",
        },
        {
          instruction: "Turn right onto Route GP1",
          distance: "35.8 km",
          duration: "42 min",
        },
        {
          instruction: "Continue straight to destination",
          distance: "8.2 km",
          duration: "7 min",
        },
      ],
    },
    {
      id: 2,
      name: "Scenic Route",
      duration: "1h 15min",
      distance: "52.8 km",
      type: "car",
      traffic: "moderate",
      steps: [
        {
          instruction: "Head east on Coastal Road",
          distance: "15.2 km",
          duration: "18 min",
        },
        {
          instruction: "Follow signs to Midoun",
          distance: "28.4 km",
          duration: "35 min",
        },
        {
          instruction: "Turn left at the roundabout",
          distance: "9.2 km",
          duration: "22 min",
        },
      ],
    },
  ],
};

const currentRoute = computed(() => itinerary.routes[selectedRoute.value]);

const initMap = async () => {
  await nextTick();

  map.value = L.map("map").setView([33.8969, 10.7561], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map.value);

  const destinationIcon = L.divIcon({
    html:
      '<div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"><div class="w-2 h-2 bg-white rounded-full"></div></div>',
    className: "custom-marker",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  L.marker([destination.value.lat, destination.value.lng], { icon: destinationIcon })
    .addTo(map.value)
    .bindPopup(`<b>${itinerary.to}</b><br>Destination`);

  // Auto-get location on map load
  getCurrentLocation();
};

const getCurrentLocation = () => {
  isLocating.value = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        userLocation.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const userIcon = L.divIcon({
          html:
            '<div class="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>',
          className: "custom-marker",
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        L.marker([userLocation.value.lat, userLocation.value.lng], { icon: userIcon })
          .addTo(map.value)
          .bindPopup("<b>Your Location</b>");

        const group = new L.featureGroup([
          L.marker([userLocation.value.lat, userLocation.value.lng]),
          L.marker([destination.value.lat, destination.value.lng]),
        ]);
        map.value.fitBounds(group.getBounds().pad(0.1));

        await getRoute();
        isLocating.value = false;
      },
      async (error) => {
        console.error("Error getting location:", error);
        isLocating.value = false;

        userLocation.value = { lat: 33.8869, lng: 9.5375 };

        const userIcon = L.divIcon({
          html:
            '<div class="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>',
          className: "custom-marker",
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        L.marker([userLocation.value.lat, userLocation.value.lng], { icon: userIcon })
          .addTo(map.value)
          .bindPopup("<b>Approximate Location</b>");

        const group = new L.featureGroup([
          L.marker([userLocation.value.lat, userLocation.value.lng]),
          L.marker([destination.value.lat, destination.value.lng]),
        ]);
        map.value.fitBounds(group.getBounds().pad(0.1));

        await getRoute();
      }
    );
  }
};

const getRoute = async () => {
  if (!userLocation.value) return;

  try {
    // Use OpenRouteService for actual road routing
    const response = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248a4a7b8b8e8b84b7b9b8b4b4b4b4b4b4b&start=${userLocation.value.lng},${userLocation.value.lat}&end=${destination.value.lng},${destination.value.lat}&format=geojson`
    );

    if (response.ok) {
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const route = data.features[0];
        const coordinates = route.geometry.coordinates;

        // Update itinerary with real data
        if (route.properties) {
          const summary = route.properties.summary;
          itinerary.distance = `${(summary.distance / 1000).toFixed(1)} km`;
          itinerary.duration = `${Math.round(summary.duration / 60)} min`;
        }

        // Convert coordinates to Leaflet format (swap lng,lat to lat,lng)
        const latlngs = coordinates.map((coord) => [coord[1], coord[0]]);

        if (routeLayer.value) {
          map.value.removeLayer(routeLayer.value);
        }

        // Draw the actual road route
        routeLayer.value = L.polyline(latlngs, {
          color: "#3B82F6",
          weight: 6,
          opacity: 0.8,
          lineCap: "round",
          lineJoin: "round",
          className: "route-line",
        }).addTo(map.value);

        // Add route animation effect
        const routeElement = document.querySelector(".route-line");
        if (routeElement) {
          routeElement.style.strokeDasharray = "20,10";
          routeElement.style.animation = "dash 2s linear infinite";
        }

        // Fit map to show the entire route
        map.value.fitBounds(routeLayer.value.getBounds().pad(0.1));
      } else {
        drawStraightLine();
      }
    } else {
      drawStraightLine();
    }
  } catch (error) {
    console.error("Error getting route:", error);
    drawStraightLine();
  }
};

// Decode Google's polyline format
const decodePolyline = (encoded) => {
  const poly = [];
  let index = 0;
  const len = encoded.length;
  let lat = 0;
  let lng = 0;

  while (index < len) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = encoded.charAt(index++).charCodeAt(0) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charAt(index++).charCodeAt(0) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    poly.push([lat / 1e5, lng / 1e5]);
  }
  return poly;
};

const drawStraightLine = () => {
  if (!userLocation.value) return;

  const latlngs = [
    [userLocation.value.lat, userLocation.value.lng],
    [destination.value.lat, destination.value.lng],
  ];

  if (routeLayer.value) {
    map.value.removeLayer(routeLayer.value);
  }

  routeLayer.value = L.polyline(latlngs, {
    color: "#EF4444",
    weight: 4,
    opacity: 0.8,
    dashArray: "10, 10",
  }).addTo(map.value);

  // Fit map to show both points
  map.value.fitBounds(routeLayer.value.getBounds().pad(0.1));
};

onMounted(async () => {
  await initMap();
  setTimeout(() => {
    isLoaded.value = true;
  }, 300);
});
</script>

<template>
  <div class="min-h-screen">
    <Breadcrumbs
      title="Route Directions"
      subtitle="Get detailed directions for your journey"
      :badge="{ icon: Navigation, label: 'Itinerary' }"
      :image="'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200'"
      :breadcrumbs="breadcrumbs"
    />
    <div class="overflow-hidden relative min-h-screen">
      <div
        class="h-32 bg-gradient-to-b from-white to-transparent absolute top-0 left-0 w-full z-[1000]"
      ></div>
      <div
        class="h-32 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full z-[1000]"
      ></div>

      <div id="map" class="w-full min-h-screen"></div>

      <div
        class="absolute top-24 left-4 right-4 md:left-8 md:right-auto md:w-96 z-[1000] transform transition-all duration-700"
        :class="{
          'opacity-0 -translate-y-4': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
      >
        <div
          class="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-full">
                <Route class="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 class="font-bold text-gray-900">{{ itinerary.from }}</h2>
                <p class="text-sm text-gray-600">to {{ itinerary.to }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold text-blue-600">{{ itinerary.duration }}</p>
              <p class="text-sm text-gray-500">{{ itinerary.distance }}</p>
            </div>
          </div>

          <div class="space-y-2 mb-4">
            <div
              v-for="(routeOption, index) in itinerary.routes"
              :key="routeOption.id"
              class="cursor-pointer rounded-lg border p-3 transition-all duration-200 hover:shadow-md"
              :class="{
                'border-blue-500 bg-blue-50': selectedRoute === index,
                'border-gray-200 hover:border-gray-300': selectedRoute !== index,
              }"
              @click="selectedRoute = index"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium text-gray-900 text-sm">
                    {{ routeOption.name }}
                  </h3>
                  <p class="text-xs text-gray-500">
                    {{ routeOption.duration }} • {{ routeOption.distance }}
                  </p>
                </div>
                <div class="flex items-center space-x-1">
                  <Car class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500 capitalize">{{
                    routeOption.traffic
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex space-x-2">
            <button
              @click="getCurrentLocation"
              :disabled="isLocating"
              class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
            >
              <Locate class="w-4 h-4 mr-2" :class="{ 'animate-spin': isLocating }" />
              {{ isLocating ? "Locating..." : "Get My Location" }}
            </button>
            <button
              class="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors"
            >
              <Navigation class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-24 left-4 right-4 md:left-8 md:right-auto md:w-96 z-[1000] transform transition-all duration-700 delay-200"
        :class="{
          'opacity-0 translate-y-4': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
      >
        <div
          class="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-4 max-h-64 overflow-y-auto"
        >
          <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
            <Navigation class="w-4 h-4 mr-2 text-blue-600" />
            Directions
          </h3>
          <div class="space-y-3">
            <div
              v-for="(step, index) in currentRoute.steps"
              :key="index"
              class="flex items-start space-x-3"
            >
              <div
                class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold"
              >
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">{{ step.instruction }}</p>
                <p class="text-xs text-gray-500">
                  {{ step.distance }} • {{ step.duration }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
