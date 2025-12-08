import UserLayout from "@/layouts/UserLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import ArticleDetails from "@/widget/articles/ArticleDetails.vue";
import ArticleList from "@/widget/articles/ArticleList.vue";
import EventDetails from "@/widget/Event/EventDetails.vue";
import HotelDetails from "@/widget/Hotels/HotelDetails.vue";
import ItineraryDetails from "@/widget/itinerary/ItineraryDetails.vue";
import CircuitCompose from "@/widget/Tour/CircuitCompose.vue";
import Events from "@/widget/Views/Events.vue";
import Home from "@/widget/Views/Home.vue";
import Hotels from "@/widget/Views/Hotels.vue";
import Restaurants from "@/widget/Views/Restaurants.vue";
import Transport from "@/widget/Views/Transport.vue";
import Login from "@/widget/Auth/Login.vue";
import Signup from "@/widget/Auth/Signup.vue";
import { createRouter, createWebHistory } from "vue-router";
import MussesDetails from "@/widget/musses/MussesDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: UserLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "circuits/compose",
          name: "Circuits",
          component: CircuitCompose,
        },
        {
          path: "blogs",
          name: "BlogList",
          component: ArticleList,
        },
        {
          path: "blog/:slug",
          name: "BlogDetails",
          component: ArticleDetails,
          props: true,
        },
        {
          path: "events",
          name: "Events",
          component: Events,
        },
        {
          path: "events/:slug",
          name: "EventDetails",
          component: EventDetails,
          props: true,
        },
        {
          path: "itinerary/:from/:to",
          name: "ItineraryDetails",
          component: ItineraryDetails,
          props: true,
        },
        {
          path: "hotels",
          name: "Hotels",
          component: Hotels,
        },
        {
          path: "hotels/details/:slug",
          name: "HotelsDetails",
          component: HotelDetails,
        },
        {
          path: "restaurants",
          name: "Restaurants",
          component: Restaurants,
        },
        {
          path: "transport",
          name: "Transport",
          component: Transport,
        },
        {
          path: "musses/:slug",
          name: "MussesDetails",
          component: MussesDetails,
          props: true,
        },
      ],
    },

    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "login",
          name: "Login",
          component: Login,
        },
        {
          path: "signup",
          name: "Signup",
          component: Signup,
        },
      ],
    },
  ],
});

export default router;
