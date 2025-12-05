<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { MapPin, Navigation, Clock, Car, Route, Compass, Locate } from "lucide-vue-next";
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  getMultipleRoutes,
  calculateDistance,
  generateRoadRoute,
} from "@/services/routingService";

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

const isLoaded = ref(false);
const selectedRoute = ref(0);
const map = ref(null);
const userLocation = ref(null);
const destination = ref({ lat: 33.875, lng: 10.758 });
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
    // {
    //   id: 2,
    //   name: "Scenic Route",
    //   duration: "1h 15min",
    //   distance: "52.8 km",
    //   type: "car",
    //   traffic: "moderate",
    //   steps: [
    //     {
    //       instruction: "Head east on Coastal Road",
    //       distance: "15.2 km",
    //       duration: "18 min",
    //     },
    //     {
    //       instruction: "Follow signs to Midoun",
    //       distance: "28.4 km",
    //       duration: "35 min",
    //     },
    //     {
    //       instruction: "Turn left at the roundabout",
    //       distance: "9.2 km",
    //       duration: "22 min",
    //     },
    //   ],
    // },
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

const routeData = ref([]);

const getRoute = async () => {
  if (!userLocation.value) return;

  try {
    const routes = await getMultipleRoutes(userLocation.value, destination.value);

    if (routes.length > 0) {
      routeData.value = routes;

      itinerary.routes = routes.map((route) => ({
        id: route.id,
        name: route.name,
        duration: `${Math.round(route.summary.duration / 60)} min`,
        distance: `${(route.summary.distance / 1000).toFixed(1)} km`,
        type: "car",
        traffic: route.traffic,
        steps:
          route.steps?.slice(0, 5).map((step, index) => ({
            instruction: step.instruction || `Step ${index + 1}`,
            distance: `${(step.distance / 1000).toFixed(1)} km`,
            duration: `${Math.round(step.duration / 60)} min`,
          })) || [],
      }));

      const fastestRoute = routes[0];
      itinerary.distance = `${(fastestRoute.summary.distance / 1000).toFixed(1)} km`;
      itinerary.duration = `${Math.round(fastestRoute.summary.duration / 60)} min`;

      drawRouteForSelection(selectedRoute.value);
    } else {
      drawEnhancedRoute();
    }
  } catch (error) {
    console.error("Routing error:", error);
    drawEnhancedRoute();
  }
};

const selectRoute = (index) => {
  selectedRoute.value = index;
  if (userLocation.value) {
    drawRouteForSelection(index);
  }
};

const drawRouteForSelection = (routeIndex) => {
  if (routeData.value.length > 0 && routeData.value[routeIndex]) {
    const route = routeData.value[routeIndex];
    const latlngs = route.coordinates.map((coord) => [coord[1], coord[0]]);

    if (routeLayer.value) {
      map.value.removeLayer(routeLayer.value);
    }

    routeLayer.value = L.polyline(latlngs, {
      color: routeIndex === 0 ? "#3B82F6" : "#10B981",
      weight: 6,
      opacity: 0.8,
      lineCap: "round",
      lineJoin: "round",
      className: "route-line",
    }).addTo(map.value);

    map.value.fitBounds(routeLayer.value.getBounds().pad(0.1));
  } else {
    let waypoints;

    if (routeIndex === 1) {
      waypoints = [];
      const steps = 25;

      for (let i = 0; i <= steps; i++) {
        const ratio = i / steps;
        let lat =
          userLocation.value.lat +
          (destination.value.lat - userLocation.value.lat) * ratio;
        let lng =
          userLocation.value.lng +
          (destination.value.lng - userLocation.value.lng) * ratio;

        if (i > 2 && i < steps - 2) {
          const scenicDeviation = Math.sin(ratio * Math.PI * 2) * 0.04;
          const mountainView = Math.cos(ratio * Math.PI * 1.5) * 0.03;

          lat += scenicDeviation + mountainView;
          lng += scenicDeviation * 0.8 + Math.sin(ratio * Math.PI * 3) * 0.025;
        }

        waypoints.push([lat, lng]);
      }
    } else {
      waypoints = generateRoadRoute(
        userLocation.value.lat,
        userLocation.value.lng,
        destination.value.lat,
        destination.value.lng
      );
    }

    if (routeLayer.value) {
      map.value.removeLayer(routeLayer.value);
    }

    routeLayer.value = L.polyline(waypoints, {
      color: routeIndex === 0 ? "#3B82F6" : "#10B981",
      weight: 6,
      opacity: 0.8,
      lineCap: "round",
      lineJoin: "round",
      className: "route-line",
    }).addTo(map.value);

    map.value.fitBounds(routeLayer.value.getBounds().pad(0.1));
  }
};

const drawEnhancedRoute = () => {
  if (!userLocation.value) return;

  const distance = calculateDistance(
    userLocation.value.lat,
    userLocation.value.lng,
    destination.value.lat,
    destination.value.lng
  );

  itinerary.distance = `${distance.toFixed(1)} km`;
  itinerary.duration = `${Math.round(distance * 1.2)} min`;

  drawRouteForSelection(selectedRoute.value);
};

onMounted(async () => {
  await initMap();
  setTimeout(() => {
    isLoaded.value = true;
  }, 300);
});
</script>

<template>
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
            @click="selectRoute(index)"
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
          <!-- <button
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors"
          >
            <Navigation class="w-4 h-4" />
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
