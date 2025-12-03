import ArticleDetails from "@/widget/articles/ArticleDetails.vue";
import ArticleList from "@/widget/articles/ArticleList.vue";
import CircuitCompose from "@/widget/Tour/CircuitCompose.vue";
import Events from "@/widget/Views/Events.vue";
import Home from "@/widget/Views/Home.vue";
import Hotels from "@/widget/Views/Hotels.vue";
import Restaurants from "@/widget/Views/Restaurants.vue";
import Transport from "@/widget/Views/Transport.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/circuits/compose",
      name: "Circuits",
      component: CircuitCompose,
    },
    {
      path: "/blogs",
      name: "BlogList",
      component: ArticleList,
    },
    {
      path: "/blog/details",
      name: "BlogDetails",
      component: ArticleDetails,
    },
    { path: "/hotels", component: Hotels },
    { path: "/restaurants", component: Restaurants },
    { path: "/events", component: Events },
    { path: "/transport", component: Transport },
  ],
});

export default router;
