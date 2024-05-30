import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
  id: "posts",
  actions: {
    async deletePosts(username, password) {
      try {
        const res = await fetch("http://localhost:3000/deletePost/:id", {
          method: "DEL",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        const user = await res.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
