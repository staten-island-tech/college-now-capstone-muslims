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
    checkUser() {
      if (useAuthStore().currentUser === null) {
        router.push("login");
      }
    },
    loadUser(user) {
      this.currentUser = {
        user,
        imageURL: user.imageURL ? user.imageURL : null,
      };
    },
    clearUser() {
      this.currentUser = null;
    },
    async login(a, username, password) {
      a.preventDefault();
      try {
        const res = await fetch("http://localhost:3000/login", {
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
          let userEmail = document.getElementById("email").value;
          let userPassword = document.getElementById("password").value;
          if (userEmail === "" || userPassword === "") {
            alert("Please fill out all fields");
            //fix this part
          }
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
