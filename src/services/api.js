import axios from "axios";
import { toast } from "vue-sonner";

const API_BASE_URL = "https://test.tunisiagotravel.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    toast.error(
      error.response?.data.error ||
        "An error occurred while processing your request."
    );
    return Promise.reject(error);
  }
);

export { apiClient, API_BASE_URL };
