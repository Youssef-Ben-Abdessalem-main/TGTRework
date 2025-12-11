import { apiClient } from "./api.js";

export const HotelsService = {
  async load_all_hotels() {
    try {
      const response = await apiClient.get("/utilisateur/allhotels");
      return response.hotels;
    } catch (error) {
      console.error("Error Fetching Data:", error);
      throw error;
    }
  },

  async get_hotels_list() {
    try {
      const response = await apiClient.get("/utilisateur/allhotels");
      return response.hotels.map((hotels) => ({
        id: hotels.id,
        name: hotels.name,
      }));
    } catch (error) {
      console.error("Error Fetching Data:", error);
      throw error;
    }
  },

  async get_best_hotels() {
    try {
      const response = await apiClient.get("/utilisateur/hotelsspecial");
      return response.hotels.data.map((hotel) => ({
        id: hotel.id,
        name: hotel.name,
        starting_price: hotel.starting_price,
        location: hotel.ville,
        rating: hotel.note_google,
        pictures: hotel.images || [hotel.cover, hotel.vignette].filter(Boolean),
      }));
    } catch (error) {
      console.error("Error Fetching Data:", error);
      throw error;
    }
  },
};
