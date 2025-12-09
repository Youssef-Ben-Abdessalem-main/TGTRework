import { apiClient } from "./api.js";

export const authservice = {
  async SignUp(payload) {
    try {
      const response = await apiClient.post("/utilisateur/registeruser", payload);
      return response;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  },

  async Login(payload) {
    try {
      const response = await apiClient.post("/utilisateur/login", payload);
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },
};

