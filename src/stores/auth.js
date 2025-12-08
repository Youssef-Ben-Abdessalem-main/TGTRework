import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isAuthenticated = ref(true);

  const login = (userData) => {
    user.value = userData;
    isAuthenticated.value = true;
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("user");
  };

  const checkAuth = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      user.value = JSON.parse(savedUser);
      isAuthenticated.value = true;
    }
  };

  return { user, isAuthenticated, login, logout, checkAuth };
});
