import { defineStore } from "pinia";
export const authStore = defineStore({
  id: "auth",
  state: () => {
    return {
      currentUser: null,
    };
  },
  actions: {
    loadUser(user) {
      this.currentUser = user;
    },
    clearUser() {
      this.currentUser = null;
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser;
    },
  },
});
