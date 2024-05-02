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
    async login(username, password) {
      try {
        const res = await fetch("http://localhost:5173/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.toLowerCase(),
            password: password,
          }),
        });
        const user = await res.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser;
    },
  },
});
