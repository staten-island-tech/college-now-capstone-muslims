import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router/index";
export const useAuthStore = defineStore({
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
    checkUser() {
      if (useAuthStore().currentUser === null) {
        router.push("login");
      }
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
        if (res.ok) {
          this.loadUser(user);
        } else {
          throw new Error(user.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async register(age, userPassword, userEmail, username, state) {
      try {
        const res = await fetch("http://localhost:5173/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            age: age,
            username: username,
            state: state,
          }),
        });
        const user = await res.json();
        if (res.ok) {
          this.loadUser(user);
        } else {
          throw new Error(user.error);
        }
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
