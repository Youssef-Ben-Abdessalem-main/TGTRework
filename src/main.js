import { createApp } from "vue";
import { createPinia } from "pinia";
import CountryFlag from "vue-country-flag-next";
import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "v-calendar/style.css";
const app = createApp(App);
import VCalendar from "v-calendar";

app.use(createPinia());
app.use(router);
app.use(VCalendar, {});
app.component("CountryFlag", CountryFlag);
app.component("VueDatePicker", VueDatePicker);
app.mount("#app");
