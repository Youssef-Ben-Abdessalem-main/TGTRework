import { apiClient } from "./api.js";

export const EventsService = {
  async get_all_events() {
    try {
      const response = await apiClient.get("/utilisateur/allevent");
      return response.events.data;
    } catch (error) {
      console.error("Error Fetching Events:", error);
      throw error;
    }
  },

  async get_events_list() {
    try {
      const response = await apiClient.get("/utilisateur/allevent");
      return response.events.data.map((event) => ({
        id: event.id,
        title: event.title,
      }));
    } catch (error) {
      console.error("Error Fetching Events:", error);
      throw error;
    }
  },

  async get_featured_events() {
    try {
      const response = await apiClient.get("/utilisateur/allevent");
      return response.events.data.map((event) => ({
        id: event.id,
        title: event.title,
        image: event.cover,
        slug: event.slug,
        description: event.description,
        date: `${new Date(event.start_date).getDate()} ${new Date(event.start_date).toLocaleDateString("fr-FR", { month: "long" })} ${new Date(event.start_date).getFullYear()}`,
        status: new Date(event.start_date) > new Date() ? "upcoming" : "past",
      }));
    } catch (error) {
      console.error("Error Fetching Events:", error);
      throw error;
    }
  },

  async get_event_details(slug) {
    try {
      const response = await apiClient.get(`/utilisateur/event/${slug}`);
      return response;
    } catch (error) {
      console.error("Error Fetching Event Details:", error);
      throw error;
    }
  },
};
