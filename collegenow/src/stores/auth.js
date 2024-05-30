import { defineStore } from "pinia";
import router from "../router/index";
export const useAuthStore = defineStore("auth", {
  id: "auth",
  state: () => {
    return {
      currentUser: null,
      username:null,
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
        } else if (user.error === "User not found") {
          alert("User not found");
        } else if (user.error === "Password is incorrect") {
          alert("Password is incorrect");
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      } catch (error) {
        alert("An unexpected error occurred. Please try again.");
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
          router.push("login");
        } else if (
          user.error ===
          "Email has already been taken. Please choose another one."
        ) {
          alert("Email has already been taken. Please choose another one.");
        } else if (
          user.error ===
          "Username has already been taken. Please choose another one."
        ) {
          alert("Username has already been taken. Please choose another one.");
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      } catch (error) {
        alert("An unexpected error occurred. Please try again.");
      }
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser;
    },
  },
});
