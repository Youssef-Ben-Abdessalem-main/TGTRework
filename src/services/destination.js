import { apiClient } from "./api.js";

export const DestinationService = {
  async load_all_destinations() {
    try {
      const response = await apiClient.get("/utilisateur/alldestinations");
      return response.destinations;
    } catch (error) {
      console.error("Error Fetching Data:", error);
      throw error;
    }
  },

  async get_destinations_list() {
    try {
      const response = await apiClient.get("/utilisateur/alldestinations");
      return response.destinations.map((destination) => ({
        id: destination.id,
        name: destination.name,
      }));
    } catch (error) {
      console.error("Error Fetching Data:", error);
      throw error;
    }
  },

  async get_featured_destinations() {
    try {
      const response = await apiClient.get("/utilisateur/alldestinations");
      return response.destinations.map((destination) => ({
        id: destination.id,
        name: destination.name,
        image: destination.cover || destination.vignette,
        description:
          destination.home_description || destination.short_description,
        tours: Math.floor(Math.random() * 50) + 10,
      }));
    } catch (error) {
      console.error("Error Fetching Data:", error);
      throw error;
    }
  },
};
