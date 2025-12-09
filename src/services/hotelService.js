import { apiClient } from "./api.js";

export const hotelService = {
  async getAllHotels() {
    try {
      const response = await apiClient.get("/utilisateur/allhotels");
      return response.hotels || [];
    } catch (error) {
      console.error("Error fetching hotels:", error);
      throw error;
    }
  },

  async getHotelById(id) {
    try {
      const response = await apiClient.get(`/utilisateur/hotel/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching hotel:", error);
      throw error;
    }
  },

  async getHotelBySlug(slug) {
    try {
      const hotels = await this.getAllHotels();
      return hotels.find((hotel) => hotel.slug === slug);
    } catch (error) {
      console.error("Error fetching hotel by slug:", error);
      throw error;
    }
  },

  async getHotelsByDestination(destinationId) {
    try {
      const hotels = await this.getAllHotels();
      return hotels.filter((hotel) => hotel.destination_id === destinationId);
    } catch (error) {
      console.error("Error fetching hotels by destination:", error);
      throw error;
    }
  },

  async getFeaturedHotels() {
    try {
      const hotels = await this.getAllHotels();
      return hotels.filter((hotel) => hotel.is_special === true);
    } catch (error) {
      console.error("Error fetching featured hotels:", error);
      throw error;
    }
  },
};
