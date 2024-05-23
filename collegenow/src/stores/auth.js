import { defineStore } from "pinia";
import router from "../router/index";
export const useAuthStore = defineStore("auth", {
  id: "auth",
  state: () => {
    return {
      currentUser: null,
    };
  },
  actions: {
    loadUser(user) {
      this.currentUser = {
        user,
        // imageURL: user.imageURL ? user.imageURL : null,
      };
    },
    clearUser() {
      this.currentUser = null;
    },
    async login(username, userPassword) {
      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: userPassword,
          }),
        });
        const user = await res.json();
        if (res.ok) {
          this.loadUser(user);
          router.push("posts");
          console.log(user);
        } else {
          throw new Error(user.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async register(
      age,
      userPassword,
      confpassword,
      userEmail,
      username,
      state
    ) {
      try {
        const res = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            confpassword: confpassword,
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
  getters: {
    isAuthenticated() {
      return !!this.currentUser;
    },
  },
});
