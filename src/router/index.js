import ArticleDetails from "@/widget/articles/ArticleDetails.vue";
import ArticleList from "@/widget/articles/ArticleList.vue";
import EventDetails from "@/widget/Event/EventDetails.vue";
import CircuitCompose from "@/widget/Tour/CircuitCompose.vue";
import Events from "@/widget/Views/Events.vue";
import Home from "@/widget/Views/Home.vue";
import Hotels from "@/widget/Views/Hotels.vue";
import Restaurants from "@/widget/Views/Restaurants.vue";
import Transport from "@/widget/Views/Transport.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    // Home
    {
      path: "/",
      name: "home",
      component: Home,
    },

    // Circuits
    {
      path: "/circuits/compose",
      name: "Circuits",
      component: CircuitCompose,
    },

    // Blogs
    {
      path: "/blogs",
      name: "BlogList",
      component: ArticleList,
    },
    {
      path: "/blog/:slug",
      name: "BlogDetails",
      component: ArticleDetails,
      props: true,
    },

    // Events
    {
      path: "/events",
      name: "Events",
      component: Events,
    },
    {
      path: "/events/:slug",
      name: "EventDetails",
      component: EventDetails,
      props: true,
    },

    // Itinerary
    {
      path: "/itinerary/:from/:to",
      name: "ItineraryDetails",
      component: () => import("@/widget/Itinerary/ItineraryDetails.vue"),
      props: true,
    },

    // Hotels, restaurants, transport
    { path: "/hotels", name: "Hotels", component: Hotels },
    { path: "/restaurants", name: "Restaurants", component: Restaurants },
    { path: "/transport", name: "Transport", component: Transport },
  ],
});

export default router;
